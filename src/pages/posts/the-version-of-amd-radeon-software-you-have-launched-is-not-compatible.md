---
layout: ../../layouts/markdown-post-layout.astro
title: 'The version of amd radeon software you have launched is not compatible'
pubDate: 2024-05-04
description: 'The miracle solution?'
author: 'Sacha Nocetto'
image:
    url: 'https://picsum.photos/500/300'
    alt: 'Sacha Nocetto Non existing image here.'
tags: ["dev", "learning in public", "resource", "en"]
---

Disable the device on the "Device Manager" of Windows. That's it.


This happened to me sometimes I plug something in the multicontact, the screen somehows turns black and looses signal, you can still hear the computer and use it, just not see anything. Then when you restart the computer, I can see that the GPU doesn't appear on the resource monitor. And when I try to oppen the AMD Adrenaline software it says ```the version of amd radeon software you have launched is not compatible. bla bla bla```

I don't exactly why this happens. Why the driver? Why incompatibility, if literally the version installed does not go away, what's the issue?

On some forums I saw that when the computer sees a voltage problem going to the GPU, in the afterwards windows can DECIDE ON IT'S OWN to re-intall like a default version of the driver, and that may be causing the issue.

So you can disable this functionality by the windows register editor they say. Turns out not. It happened again.

Being driver's issue. I deciced to go to the driver "device manager" to see if the GPU stills appears in there. It does.

I tried to disable, and enable it again. **And it works just perfectly**

I don't understard the why of this behaviour, I never saw or heard something like this.

I tried voltage regulator for the computer. And still the same issue.

Hope 