<script lang="ts">
	import '../app.css';
    import ScreenEffect from './ScreenEffect.svelte';
    import NavBar from './NavBar.svelte';
    import config from '$lib/config';

	let { children } = $props();
</script>

<!-- the weird screen effect -->
<ScreenEffect />

<section class="bg-background p-3 pt-1 w-full min-h-[100vh] overflow-y-hidden">
    <NavBar />
    <main class="md:mx-[10%] md:mt-5 relative p-3 md:p-5 z-2">
        <span class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-text"></span>
        <span class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-text"></span>
        <span class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-text"></span>
        <span class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-text"></span>
        {@render children()}
    </main>
    <footer class="relative p-2 md:p-5 md:mx-[10%] mt-1 md:mt-5 flex flex-col items-center mb-10 md:mb-0">
        <span class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-text"></span>
        <span class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-text"></span>
        <span class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-text"></span>
        <span class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-text"></span>

        <span class="text-sm md:text-base">Made by <b>{config.name}</b></span>
        <span class="text-sm md:text-base">Glory to Mankind</span>
        <span class="text-sm md:text-base">Copyright &copy; {config.name} 2025</span>
    </footer>
</section>
