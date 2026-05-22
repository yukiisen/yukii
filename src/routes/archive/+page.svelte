<script lang="ts">
    import Typewriter from "$lib/components/Typewriter.svelte";
    import { config } from "$lib/config";
    import projects from "$lib/content/projects.json";
</script>

<article class="before-deco">
    <h1 class="mb-2"><Typewriter text="Archive" /></h1>
    <p>You can find all my working projects here</p>
</article>
<section class="grid grid-cols-1 md:grid-cols-2 before-deco md:mr-4">
    {#each projects as { name, repo, description }}
        <div class="border-2 border-text flex flex-col justify-between my-1 md:m-1 p-2">
            <a href={`/archive/${repo}`}>
                <h3 class="font-semibold">{ name }</h3>
                <p>{ description }</p>
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


<style>
    section p {
        font-size: 16px;
    }
</style>
