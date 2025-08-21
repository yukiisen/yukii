<script lang="ts">
    import { sleep } from "$lib/utils";
    import { onMount } from "svelte";

    let fHeader = "Status";
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
    <p>this page is inspired by the now page from <a href="https://nownownow.com/about">That guy</a>, its purpose is to hold my random impossible projects and show what's going on with me right now.</p>
</article>

<article class="sub before-deco">
    <h2 class="list-element">So what's going on with me recently?</h2>
    <!-- <p>Literally nothing, I have a lot of free time so I suppose it's better to use it for something useful</p> -->
    <p>I'm suffering from opengl and the devils inside my head who're telling me to create something in assembly, maybe I'll make a tui file manager in nostd c instead.</p>
    <p>I'm also totally addicted to osu!, I even see it in my dreams :)</p>
</article>

<article class="sub before-deco">
    <h2 class="list-element">So what do I plan to do?</h2>
    <ul class="ml-4 my-2">
        <li class="list-element text-base">Finish the anime website that've been waiting for about five months now (given up almost).</li>
        <li class="list-element text-base">Make an AI waifu.. um..</li>
        <li class="list-element text-base">Finish learning opengl so that I can try vulkan.</li>
        <li class="list-element text-base">rebuild my horrible http server</li>
        <li class="list-element text-base">try to make a fun game (and a nice game engine).</li>
        <li class="list-element text-base">build a nice-ish scripting language.</li>
        <li class="list-element text-base">build a federated chess website (although I'm kinda lazy for that).</li>
    </ul>
</article>
