<script lang="ts">
    import { sleep } from "$lib/utils";
    import { onMount } from "svelte";

    let fHeader = "Kuru Kuru!";
    let header = $state(fHeader[0]); 

    onMount(async () => {
        for (const letter1 of fHeader.split("").slice(1)) {
            header += letter1;
            await sleep(50);
        }
    })
</script>

<h1 class="before-deco">{ header }|</h1>
<article class="before-deco">
    <p>
        Hi! I'm <b>Yuki</b>— a developer who enjoys building random stuff and likes things that are minimal, well-structured, and a little unconventional, Nice to have you here!
    </p>
    <p>
        I love full stack web development and I'm always ready to explore new technologies!
    </p>
</article>

<article class="sub before-deco">
    <h2 class="list-element">Skills:</h2>

    <section class="skills flex flex-wrap ml-4 md:ml-10 my-2">
        <ul class="flex-1">
            <h3>Languages:</h3>
            <li class="list-element text-base">Rust</li>
            <li class="list-element text-base">Javascript/Typescript (bun)</li>
            <li class="list-element text-base">Dart</li>
            <li class="list-element text-base">HTML/CSS (Pug/Sass)</li>
            <li class="list-element text-base">SQL</li>
        </ul>

        <ul class="flex-1">
            <h3>Frameworks and libraries:</h3>
            <li class="list-element text-base">Angular</li>
            <li class="list-element text-base">Svelte</li>
            <li class="list-element text-base">Basic React</li>
            <li class="list-element text-base">Express.JS</li>
            <li class="list-element text-base">Actix</li>
            <li class="list-element text-base">Sveltekit</li>
            <li class="list-element text-base">Flutter</li>
            <li class="list-element text-base">Electron</li>
            <li class="list-element text-base">Tailwind CSS</li>
            <li class="list-element text-base">Phaser.Js</li>
        </ul>

        <ul class="flex-1">
            <h3>Tools:</h3>
            <li class="list-element text-base">Linux</li>
            <li class="list-element text-base">MariaDB</li>
            <li class="list-element text-base">Postgres</li>
            <li class="list-element text-base">Redis</li>
            <li class="list-element text-base">Vim</li>
        </ul>
    </section>
    
</article>

<article class="sub before-deco">
    <h2 class="list-element">About this website:</h2>
    <p>
        I made this website in order to have a better way to express myself and write random stuff as well as having a nice place to present my projects if I make any.
    </p>
    <p>
        the design was insipred by nier automata's ui theme as well as this <a href="https://www.platinumgames.com/official-blog/article/9624" target="_blank">DevBlog</a> by the main ui/ux designer of the game.
    </p>
</article>

<article class="sub before-deco">
    <h2 class="list-element">Special Thanks to:</h2>
    <ul class="ml-4 md:ml-10 my-2">
        <li class="list-element"><a href="https://www.instagram.com/kuro.tsuki.39/" target="_blank">Kuro:</a> for having a high biomass</li>
    </ul>
</article>

<article class="sub before-deco">
    <h2 class="list-element">Contact:</h2>
    <p class="md:ml-10 block">I'm not available all the time but you can reach out for me on the <a href="/bunker">Bunker</a></p>
</article>

<style>
.skills ul {
    min-width: fit-content;
    margin-bottom: 15px;
}
</style>
