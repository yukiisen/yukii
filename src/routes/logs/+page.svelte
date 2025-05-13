<script lang="ts">
    import { sleep } from "$lib/utils";
    import { onMount } from "svelte";

    let fHeader = "Logs";
    let header = $state(fHeader[0]); 

    onMount(async () => {
        for (const letter1 of fHeader.split("").slice(1)) {
            header += letter1;
            await sleep(50);
        }
    })

    interface Blog {
        title: string
        page: string
        description: string
    }

    let blogs: Blog[] = [
        { title: "Why bourak is supreme?", page: 'bourak', description: "A blog about bourak supremeacy" },
    ]
</script>


<article class="before-deco">
    <h1>{ header }|</h1>
    <p>This is supposed to be a place where I do my random yapping if I feel like it.</p>
</article>


<section class="grid grid-cols-1 md:grid-cols-2 before-deco">
    {#each blogs as { title, page, description }}
        <a href={`/logs/${page}`} class="p-2 border-2 border-text my-2 md:m-2">
            <h3 class="text-gl">{ title }</h3>
            <span>{ description }</span>
        </a>
    {/each}
</section>
