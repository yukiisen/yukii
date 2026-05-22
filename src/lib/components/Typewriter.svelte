<script lang="ts">
    import { sleep } from "$lib/utils";
    import { onMount } from "svelte";

    let { text }: { text: string } = $props();
    let display = $state(text[0]);
    let done = $state(false);

    onMount(async () => {
        for (const char of text.slice(1)) {
            display += char;
            await sleep(50);
        }
        done = true;
    });
</script>

{display}{#if !done}|{/if}
