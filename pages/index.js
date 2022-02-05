

const Page = () => {
    return <>
    <section className="bio">
        <hgroup>
            <h1>Sacha Nocetto</h1>
            <h2>Front end dev</h2>
        </hgroup>
        
        <p>Soy un desarrollador web y diseñador UI con 2 años de experiencia, siempre buscando algo nuevo que aprender. Me gusta participar tanto en el prototipado de un diseño como el en desarrollo del producto. Cuando no trabajo me gusta escuchar musica y jugar videojuegos.</p>
        <button>Mis trabajos</button>
    </section>


    <section>
        <h2>Experiencia</h2>
        <ul>
            <li>
                <h3>Front end developer - Freelance</h3>
                <small>Julio 2021 - Presente</small>
                <p>Diseño y desarrollo de sitios web y aplicaciones. Diseño de identidad (logos) </p>
                <h4>Tecnologias</h4>
                <ul>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                </ul>

                <ul>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                </ul>
                
            </li>
            <li>
                <h3>Front end developer - Quartex.net</h3>
                <small>Abril 2020 - Julio 2021</small>
                <p>Auditoria y mejora de nuevas implementaciones a la interfaz de usuario asegurando la calidad y la accesibilidad del sitio. </p>
                <h4>Tecnologias</h4>
                <ul>
                    <li>PhP</li>
                    <li>SQL</li>
                    <li>Figma</li>
                    <li>JavaScript</li>
                </ul>
                <ul>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                </ul>  
            </li>
        </ul>
    </section>

    <section>
        <h2>Mi trabajo</h2>
        <ul>
            <li>
                <h3>Front end developer - Quartex.net</h3>
                <small>Abril 2020 - Julio 2021</small>
                <p>Auditoria y mejora de nuevas implementaciones a la interfaz de usuario asegurando la calidad y la accesibilidad de la plataforma. </p>
                <span>Imagen</span>
                <h4>Tecnologias</h4>
                <ul>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                </ul>
            </li>
            <li>
                <h3>Front end developer - Quartex.net</h3>
                <small>Abril 2020 - Julio 2021</small>
                <h4>Tecnologias</h4>
                <ul>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                    <li>tecnologia</li>
                </ul>
                <ul>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                    <li>
                        <span>Ejemplo</span>
                    </li>
                </ul>  
            </li>
        </ul>
    </section>

    {/* Cuando ponerlo? */}
    <section className="snippets">
        <h2>Mis ultimos snippets</h2>
        <ul>
            <li><a href="github.com/lorddeser/imigy">Sesion del locro</a></li>
            <li><a href="github.com/lorddeser/imigy">Imigy</a></li>
            <li><a href="google.com">Tutorial</a></li>
        </ul>
    </section>
    </>
}

export default Page