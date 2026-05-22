<script lang="ts">
    import Typewriter from "$lib/components/Typewriter.svelte";
    import blogs from "$lib/content/blogs.json";
</script>


<article class="before-deco">
    <h1><Typewriter text="Logs" /></h1>
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
