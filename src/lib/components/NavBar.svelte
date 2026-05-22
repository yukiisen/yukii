<script lang="ts">
    import { page } from "$app/state";
    import { onMount } from "svelte";
    import { config } from "$lib/config";
    import Eye from "$lib/components/icons/Eye.svelte";

    const tabs = [
        ["/", "Console"],
        ["/archive", "Archive"],
        ["/status", "Status"],
        ["/logs", "Logs"],
        ["/bunker", "Bunker"],
    ]

    let current = $derived(page.url.pathname);
    let views = $state('0');
    let title = $derived(config.name + " - " + tabs.findLast(t => current.startsWith(t[0]))?.[1]);

    onMount(async () => {
        try {
            const res = await fetch(config.viewsApiUrl, { credentials: "include" });
            if (res.ok) {
                const data = await res.json();
                views = data.views;
            }
        } catch {
            // server unreachable — keep default "0"
        }
    });
</script>

<svelte:head>
    <title>{ title }</title>
</svelte:head>

<nav class="flex items-center z-3 justify-between text-base p-1">
    <div>
        <a href={`https://github.com/${config.githubUsername}`} class="p-0 m-0">
            <img src="/logo.png" class="rounded-[50%] w-11" alt="pfp">
        </a>
    </div>

    <div class="flex fixed z-3 md:relative w-full md:w-fit bottom-0 left-0 items-start">
        {#each tabs as [path, title]}
            <a href={path} class="font-medium flex-1 md:flex-none relative bg-background-900 w-30 duration-200 text-xs md:text-base" class:active={(current.split("/")[1] || '') == path.slice(1)}>
                <span class="relative z-2 block text-center md:text-left py-1 md:p-0">{title}</span>
                <span class="absolute w-0 h-full bg-text bottom-0.5 left-0 z-1 block"></span>
                <span class="absolute w-0 h-full bottom-0.5 left-0 z-1 block"></span>
            </a>
        {/each}
    </div>

    <div class="flex text-[18px] pl-2 pr-2 bg-text text-background">
        <Eye class="mr-1 fill-background" />
        {views}
    </div>

</nav>

<div class="spacer h-0.5 w-full bg-text mb-2"></div>


<style>
nav div.flex a {
    margin: 0 5px;
    padding: 2px 10px;
}


a * {
    font-family: "Cinzel Decorative", serif;
}

nav a.active {
    color: var(--color-background);
    border-top: 2px solid var(--color-text);
    border-bottom: 2px solid var(--color-text);
    transform: translateY(5px);
}

nav div.flex a:not(.active):hover span:nth-child(3) {
    transition-duration: 500ms;
    border-top: 2px solid var(--color-text);
    border-bottom: 2px solid var(--color-text);
    width: 100%;
}

nav a span:nth-child(3) {
    border: 2px solid transparent;
}

nav a span:nth-child(2), nav a span:nth-child(3) {
    height: calc(100% - 4px);
}

nav a.active span:nth-child(2) {
    transition-duration: 500ms;
    width: 100%;
}

@media (width <= 48rem) {
    nav div.flex {
        border-top: 2px solid var(--color-text);
    }

    nav div.flex a:not(.active) {
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
    }

    nav a.active {
        transform: translateY(0);
    }

    nav a {
        margin: 0 !important;
    }
}
</style>
