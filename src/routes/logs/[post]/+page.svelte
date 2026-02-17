<script lang="ts">
    import type { PageProps } from "./$types";
    import { config } from "$lib/config";

    interface PageData {
        html: string,
        post: string
    }
    let { data }: PageProps & { data: PageData } = $props();
</script>

<svelte:head>
    <title>{ `${config.name} - ${data.post}` }</title>
</svelte:head>

<div class="flex *:text-lg mb-2 *:my-2 font-bold md:*:mx-4 justify-between">
    <a href="/logs">Go Back</a>
</div>

<div class="md md:px-13">
    {@html data.html}
</div>

<div class="flex *:text-lg mt-2 *:my-2 font-bold *:mx-4 justify-center">
    <a href="/logs">Previous Page</a>
</div>
