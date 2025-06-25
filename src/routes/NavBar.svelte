<script lang="ts">
    import { page } from "$app/state";
    import { onMount } from "svelte";
    import config from "$lib/config";

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
        const res = await fetch("https://yukiisen.up.railway.app/api/views", { credentials: "include" });
        const data = await res.json();

        views = data.views;
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
        <svg class="mr-1 fill-background" width="18px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 224.549 224.549" xml:space="preserve">
            <g>
                <path d="M223.476,108.41c-1.779-2.96-44.35-72.503-111.202-72.503S2.851,105.45,1.072,108.41c-1.43,2.378-1.43,5.351,0,7.729   c1.779,2.96,44.35,72.503,111.202,72.503s109.423-69.543,111.202-72.503C224.906,113.761,224.906,110.788,223.476,108.41z    M112.274,173.642c-49.925,0-86.176-47.359-95.808-61.374c9.614-14.032,45.761-61.36,95.808-61.36   c49.925,0,86.176,47.359,95.808,61.374C198.468,126.313,162.321,173.642,112.274,173.642z"/>
                <path d="M112.274,61.731c-27.869,0-50.542,22.674-50.542,50.543c0,27.868,22.673,50.54,50.542,50.54   c27.868,0,50.541-22.672,50.541-50.54C162.815,84.405,140.143,61.731,112.274,61.731z M112.274,147.814   c-19.598,0-35.542-15.943-35.542-35.54c0-19.599,15.944-35.543,35.542-35.543s35.541,15.944,35.541,35.543   C147.815,131.871,131.872,147.814,112.274,147.814z"/>
                <path d="M112.274,92.91c-10.702,0-19.372,8.669-19.372,19.364c0,10.694,8.67,19.363,19.372,19.363   c10.703,0,19.373-8.669,19.373-19.363C131.647,101.579,122.977,92.91,112.274,92.91z"/>
            </g>
        </svg>
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
    font-family: "cinzel decorative";
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
