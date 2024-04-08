---
layout: ../../layouts/markdown-post-layout.astro
title: 'SUBE hacking..?'
pubDate: 2024-04-07
description: 'NIL'
author: 'Sacha Nocetto'
image:
    url: 'https://picsum.photos/500/300'
    alt: 'Sacha Nocetto Non existing image here.'
tags: ["hacking", "es", "curiosity"]
---
## DISCLAIMER: 
Buenas!

Edit: Aclaro que todo esto tiene objetivos eticos, para mejorar los servicios. De ninguna manera el objetivo es viajar gratis o robarle a alguien.

Posteo desde una cuenta throwaway because reasons.

Hace unos dias, sube publico una aplicacion para cargar saldo con cualquier telefono android con NFC, y personalmente hace rato que quiero hackear la tarjeta, asique comence con bajarme la aplicacion y hacerle ingenieria inversa.

Un poco de contexto:

La tarjeta es una tarjeta mifare plus, la cual almacena el saldo encriptado por un algoritmo desconocido. Para almacenar el saldo, utiliza como una pseudo "seed" el timestamp de la ultima transaccion. Pero, el saldo es un saldo temporal, ya que sube mantiene, en sus servidores, una copia de las transacciones de carga y debito de la misma. Esto quiere decir, que si cargo y viajo gratis hy, mañana prbablemente mi tarjeta quede bloqueada.

SUBE publica hace unos meses un aparatito para cargar por saldo por USB, lo cual me parece una solucion excelente al problema de mantener en secreto las claves, lo cual voy explicar al ultimo del post.

Estuve unas semanas jugando con el aparatito pero no pude sacar mucha informacion.

Cuando SUBE publica la nueva aplicacion, mi primer objetivo fue conseguir las claves. Cual es el beneficio de esto si el saldo esta encriptado? se pueden hacer snapshots de la info que esta en la tarjeta, y se puede restaurar el saldo en cualquier momento. Obviamente esto conlleva a que se te bloquee la tarjeta al otro dia, pero hay workarounds para eso.

Como obtuve las claves?

Esta parte es tecnica, asique vayan al dofon para las conclusiones.

Toda aplicacion android es un zip de un java, brutamente dicho. Esto quiere decir, que tecnicamente se puede decompilar, editar y debugear en tiempo real. Osea, puedo ver el codigo de ejecucion, editarlo y hacer debugging.

Como hago todo esto? APKTool te permite, a partir de un apk obtener el codigo smali (que es un pseudo assembly que interpreta la maquina virtual de java en android), y a partir del smali obtener el java con JD.

A mi sorpresa, el codigo estaba ofuscado. Que significa esto? que antes de hacer la aplicacion, el codigo se cambia por un algoritmo, de tal forma que para el que lo lea no tenga sentido alguno y sea una serie de llamadas a funciones y clases con nombres raros y confusos. Esto dificulta terriblemente el proceso de entender como funcional el flujo de la aplicacion. Pero no lo hace imposible.

Leyendo mucho la aplicacion, ejecutandola, consultando el saldo y cargando, pude ver que la aplicacion es solo un bypass entre un servidor de SUBE y una libreria nativa que viene junto a la aplicacion en cuestion. La informacion que se pasan entre la libreria nativa y el servidor esta encriptada de una forma que no pude decifrar hasta el momento, y la clave del cifrado esta, seguramente, en la libreria compilada. Lo unico que pude ver, es la informacion que intercambian.

Que es esta libreria nativa? libsube.so es una libreria compilada en NDK de android, hecha por la gente de sube, que provee llamadas nativas desde java para poder interactuar con la misma. A esta libreria se le puede hacer ingenieria inversa, lo cual lleva mucho tiempo y conocimiento de assembly. Osea una cagada. lo bueno? la libreria viene compilada para muchas arquitecturas, incluida la x86. Osea, bajan IDA Free y la pueden analizar.

Entendiendo que leyendo el codigo no se podia hacer nada, me puse a leer sobre las tarjetas mifare y android.

Reeesulta de que android no provee ninguna llamada a las librerias de mifare desde NDK. Es decir, desde libsube.so no se puede interactuar con las librerias de NFC. Es decir, que para cargar, leer e interactuar con la tarjeta, se debe interactuar pura y exclusivamente desde el cdigo java. Oh boi.

Era momento de poner los dedos en remojo.

Bajo Android studio, APKTool y todos los chiches.

Decompilo la aplicacion, la pongo como debuggable y la analizo con android studio. Instalo un plugin para Idea que se llama smalidea el cual me permite debugear codigo smali y listo, a ver como se ejecuta el bichin.

Para interactuar con tarjetas mifare, android debe authentificarse con los sectores de memoria con las claves. Esto lo hace a partir de las funciones

    [[authenticateSectorWithKeyA(int, byte[])](https://developer.android.com/reference/android/nfc/tech/MifareClassic.html#authenticateSectorWithKeyA(int,%20byte[]))]
    [authenticateSectorWithKeyB(int, byte[])](https://developer.android.com/reference/android/nfc/tech/MifareClassic.html#authenticateSectorWithKeyB(int,%20byte[]))

    authenticateSectorWithKeyB(int, byte[])

en donde los parametros byte[ ] son arrays de bytes de longitud 6 (las claves papeh)

Un ctrl+shift+f furioso me dijo donde estan todas las llamadas a estas funciones, y lo unico que me quedo fue conectar mi android, conectar el debugger, ejecutar la aplicacion y esperar a que estas funciones se llamen. Cuando veo las llamadas, veo los valores de las variables en smali y ahi estaban, las claves en bytes.

Lo siguiente fue ver si efectivamente las claves funcionaban.

Convirtiendo las claves a hexadecimal (el tipo de binario era signed 8-bit), y guardandolas en un diccionario para la herramienta de Mifare Classic Tool, pude ver que, efectivamente me permitian leer y escribir en casi todos los sectores de memoria de la tarjeta.

Desde aqui, lo unico que queda es hacerle ingenieria inversa a la libreria para ver como esta almacenando la informacion en la tarjeta, pero lo mas probable es que nos encontremos con que es una especie de dummy y la parte grosa de los datos esten siendo modificados en el servidor, como seria recomendable.

Les voy a dar las claves? no, les di todas las pistas para sacarlas.

Conclusiones:

Se puede viajar gratis todo un dia.

La informacion se almacena de forma cifrada, y la clave esta o en el backend o en la libreria de sube.

Al otro dia, tu tarjeta se bloquea, pero como el bloqueo funciona por UID (identificador de tarjeta) puede que con una tarjeta china puedas viajar gratis cambiando el UID. Pero puede que no funcione si esta info se utiliza para encriptar el saldo (dejaria inconsistente la info).

Porque se bloquea la info al otro dia? las transacciones diarias se sincronizan con las bases de datos al final del dia, para garantizar que el servicio sea rapido y constante. De sincronizar cada transaccion, el sistema colapsaria y tardaria minutos en dejarte subir. Al final del dia, al ver que tu tarjeta tiene mas saldo de lo que cargo, se banea tu UID y chau mancha.

Lo que queda por hacer es, lograr ver com interactua la libreria con el servidor para poder ver la comunicacion entre ellos sin cifrar y determinar, si se puede hacer una aplicacion que cargue el saldo que quiera o no, y poder viajar gratis de por vida con una tarjeta china con UID intercambiable y un proxmark ($300 dolares en amazon).

Porque el aparatito USB es buena alternativa? Al encargarse el de authentificarse con la tarjeta y de cargar el saldo, yo no puedo ver las claves que utiliza para autentificarse y asi no puedo modificar la informacion de la tarjeta. Para esto, deberia triggerear una actualizacion de firmware, capturarla, determinar para que chipset esta compilado y hacerle ingenieria inversa, un bardo mayor.

Sea cual sea la solucion, las claves de las tarjetas deberian ser datos secretos, y al publicar esta app dejaron este valor a que cualquiera pueda obtenerlo.

TL;DR: De la app de SUBE saque las claves de la tarjeta, se pueden hacer copias del saldo y restaurarlo, y viajar gratis por un dia porque se te bloquea al otro.

Falta ver algunas cositas para hacer una app que cargue saldo, pero no es trivial. Si se logra hacer, se podria viajar gratis con tarjetas chinas
