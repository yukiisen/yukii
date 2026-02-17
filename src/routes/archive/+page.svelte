<script lang="ts">
    import { sleep } from "$lib/utils";
    import { onMount } from "svelte";
    import { config, projects_d_lblawi, clips_d_lblawi } from "$lib/config";

    let fHeader = "Archive";
    let header = $state(fHeader[0]); 

    onMount(async () => {
        for (const letter1 of fHeader.split("").slice(1)) {
            header += letter1;
            await sleep(50);
        }
    })
</script>

<article class="before-deco">
    <h1 class="mb-2">{ header }|</h1>
    <p>You can find all my working projects here</p>
</article>
<section class="grid grid-cols-1 md:grid-cols-2 before-deco md:mr-4">
    {#each projects_d_lblawi as { name, repo, description }}
        <div class="border-2 border-text flex flex-col justify-between my-1 md:m-1 p-2">
            <a href={`/archive/${repo}`}>
                <h3>{ name }</h3>
                <p class="">{ description }</p>
            </a>
            <a href={`https://github.com/${config.githubUsername}/${repo}`} class="self-end" target="_blank">View on Github</a>
        </div>
    {/each}
    <div class="border-2 border-text flex flex-col justify-between my-1 md:m-1 p-2" style="opacity: .7;">
        <div>
            <h3>Cooking...</h3>
            <p>Another Project will be here one day</p>
        </div>
        <span class="w-full text-right">Unavailable</span>
    </div>
</section>

<article class="before-deco my-4">
    <h1 class="mb-2">Osu!clips:</h1>
    <p>Some Random Osu replays of mine.</p>
</article>

<section class="grid grid-cols-1 md:grid-cols-2 py-2 before-deco md:mr-4">
    {#each clips_d_lblawi as { player, mapName, replay }}
        <div class="border-2 border-text flex flex-col justify-between my-1 md:m-1 p-2">
            <a href={`/archive/clips/${replay}`}>
                <p>{ player } playing { mapName }</p>
            </a>
        </div>
    {/each}
</section>

<style>
    section p {
        font-size: 16px;
    }
</style>
