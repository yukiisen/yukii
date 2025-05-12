<script lang="ts">
	import '../app.css';
    import ScreenEffect from './ScreenEffect.svelte';

	let { children } = $props();
</script>

<!-- the weird screen effect -->
<ScreenEffect />

<section class="bg-background w-full h-full absolute">
    {@render children()}
</section>
