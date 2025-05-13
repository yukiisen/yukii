<script lang="ts">
    import { sleep } from "$lib/utils";
    import { onMount } from "svelte";
    import config from "$lib/config";

    let fHeader = "Archive";
    let header = $state(fHeader[0]); 

    interface ProjectInfo {
        name: string,
        repo: string,
        description: string
    }

    const projects_d_lblawi: ProjectInfo[] = [
        { name: "Herta", repo: "herta", description: "An AI bot that can chat with your friends instead of you." },
        { name: "Svr", repo: "svr", description: "A minimal static http server cli built from scratch in rust" },
        { name: "Stress", repo: "stress", description: "an http library built from scratch in rust." },
    ]

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

<style>
    section p {
        font-size: 16px;
    }
</style>
