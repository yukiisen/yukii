<script lang="ts">
    import type { PageProps } from "./$types";
    import { clips_d_lblawi } from "$lib/config";

    let { data }: PageProps = $props();

    const clip = $derived(clips_d_lblawi.find(e => e.replay == data.replay));

</script>

{#if clip}
    <h2 class="before-deco">{ clip.player } playing { clip.mapName }</h2>
    <div class="w-full md:flex-row flex flex-col before-deco">
        <section class="md:w-4/5 w-full flex flex-col">
            <video src={clip.filepath} class="mt-2" controls></video>
            <div class="bg-background-900 my-2 p-1">
                <pre>
{clip.description}

Beatmap: <a href={`https://osu.ppy.sh/beatmapsets/${clip.beatmap}`} class="font-bold">{ clip.mapName }</a>
Replay: <a href={`https://osu.ppy.sh/scores/${clip.replay}`} class="font-bold">Here</a></pre>
            </div>
        </section>
        <section class="flex flex-col md:grid-cols-2 py-2 md:mr-4 ml-1">
            {#each clips_d_lblawi as { player, mapName, replay }}
                <div class="border-2 border-text flex flex-col justify-between my-1 md:m-1 p-2">
                    <a href={`/archive/clips/${replay}`}>
                        <h4>{ player } playing { mapName }</h4>
                    </a>
                </div>
            {/each}
        </section>
    </div>
{:else}
    Not Found!
{/if}
