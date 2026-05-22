<script lang="ts">
    let loaded = $state(false);

    $effect(() => {
        setTimeout(() => {
            loaded = true;
        }, 200)
    })
</script>
<div class="scanlines"></div>
<div class="scanlines scan2"></div>

<div class="music-effect h-full w-full overflow-hidden fixed z-1">
    <div class={`circle w-90/100 md:w-45/100 flex justify-center items-center -translate-[50%] border-b-3 border-r-3 duration-1500 ${loaded? 'rotate-0' : 'rotate-180'}`}>
        <div class="mini circle border-b-3 border-r-3 rotate-10"></div>
    </div>
    <div class={`circle w-90/100 md:w-45/100 delay-500 flex justify-center items-center bottom-0 right-0 border-l-3 border-t-3 translate-[50%] duration-1500 ${loaded? 'rotate-0' : 'rotate-180'}`}>
        <div class="mini circle border-l-3 border-t-3 rotate-10"></div>
    </div>

    <div class={`line right-10 duration-1000 ${loaded? 'show' : ''}`}></div>
    <div class={`line left-10 duration-1000 ${loaded? 'show' : ''}`}></div>
    <div class={`line duration-1000 ${loaded? 'show' : ''}`}></div>


    <div class={`line right right-10 duration-1000 ${loaded? 'show' : ''}`}></div>
    <div class={`line right left-10 duration-1000 ${loaded? 'show' : ''}`}></div>
    <div class={`line right duration-1000 ${loaded? 'show' : ''}`}></div>
</div>

<style>
    .scanlines {
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(transparent, transparent 1px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 2px);
        pointer-events: none;
    }

    .scan2 {
        box-shadow: 0 0 50px #000a inset;
        background: repeating-linear-gradient(to left, transparent, transparent 1px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 2px);
    }

    .circle {
        position: absolute;
        border-radius: 50%;
        aspect-ratio: 1/1;
        border-style: solid;
        border-color: var(--color-text);
    }

    .circle.mini {
        position: static;
        width: 90%;
        opacity: 1;
    }

    .music-effect div {
        opacity: .2;
        z-index: 2;
    }

    .music-effect {
        pointer-events: none;
    }

    .music-effect .line {
        position: absolute;
        height: 3px;
        background-color: var(--color-text);
        transform-origin: top left;
        rotate: 45deg;
        transform: translateX(-100%);
        width: 100%;
    }

    .music-effect .line.right {
        transform-origin: top right;
        bottom: 0;
        transform: translateX(100%);
    }

    .music-effect .line.show {
        transform: translateX(0);
    }

    @media (width <= 48rem) {
        .music-effect {
            display: none;
        }
    }
</style>
