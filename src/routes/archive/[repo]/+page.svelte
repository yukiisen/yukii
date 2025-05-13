<script lang="ts">
    import "../../../markdown.css";
    import type { PageProps } from "./$types";
    import config from "$lib/config";

    interface PageData {
        html: string,
        repo: string
    }

    let { data }: PageProps & { data: PageData } = $props();
</script>

<div class="flex *:text-lg mb-2 *:my-2 font-bold md:*:mx-4 justify-between">
    <a href="/archive">Go Back</a>
    <a href={`https://github.com/${config.githubUsername}/${data.repo}`} target="_blank">View on github</a>
</div>

<div class="md:px-13 md">
    {@html data.html}
</div>

<div class="flex *:text-lg mt-2 *:my-2 font-bold *:mx-4 justify-center">
    <a href="/archive">Previous Page</a>
    <a href={`https://github.com/${config.githubUsername}/${data.repo}`} target="_blank">View on github</a>
</div>
