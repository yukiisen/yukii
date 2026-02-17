<script lang="ts">
    import { sleep } from "$lib/utils";
    import { onMount } from "svelte";
    import { config } from "$lib/config";

    let fHeader = "Bunker";
    let header = $state(fHeader[0]);

    let email = $state("");
    let topic = $state("");
    let message = $state("");
    let error = $state("");

    onMount(async () => {
        for (const letter1 of fHeader.split("").slice(1)) {
            header += letter1;
            await sleep(50);
        }
    });

    const sendMessage = async () => {
        const body = { email, topic, message };
        const res = await fetch("https://yukiisen.up.railway.app/api/contact", {
            method: "POST",
            body: JSON.stringify(body),
        });

        if (res.status == 200) {
            error = "Message Sent Successfully!";
        } else {
            const body = await res.json();
            error = body.error;
        }
    }
</script>

<h1 class="before-deco mb-2">{ header }|</h1>
<article class="sub flex-col md:flex-row before-deco my-2 hidden">
    <div class="md:flex-5">
        <p>I'm not quite good at human interactions but you can contact me here anyway</p>
        <p>Note that messages are very limited so keep in mind that you can't send more than one per day</p>
    </div>
    <form class="md:flex-4 md:pr-6 text-lg" on:submit|preventDefault={sendMessage}>
        <label for="mail" class="block my-1">email:</label>
        <input bind:value={email} required type="email" placeholder="someone@gmail.com" class="p-1 w-full border-2 border-text invalid:border-danger invalid:border-2 invalid:text-danger focus:outline-0" id="mail">
        <label for="topic" class="block my-1">Topic:</label>
        <input bind:value={topic} required type="text" placeholder="Anything?" class="p-1 border-2 w-full border-text invalid:border-danger invalid:border-2 invalid:text-danger focus:outline-0" id="topic">
        <label for="msg" class="block my-1">Message:</label>
        <textarea bind:value={message} rows="4" required placeholder="Let's talk about" class="resize-none p-1 border-2 w-full border-text invalid:border-danger invalid:border-2 invalid:text-danger focus:outline-0" id="msg" maxlength="1000"></textarea>

        <input type="submit" value="Send Message" class="w-full bg-text text-background p-2 my-2">
        <label class="w-full block text-center">{ error }</label>
    </form>
</article>

<article class="md:px-30">
    <h1 class="text-center w-full">
        The server is down!
    </h1>
    <p class="text-center w-full pb-5">Sorry but the server is down for now, you can't sent direct messages so please use other socials instead.</p>
</article>

<article class="sub before-deco my-2">
    <h2 class="list-element">You can also check my other accounts:</h2>
    <ul class="socials flex justify-center mt-4 *:mx-3 *:md:mx-10 *:text-xs *:md:text-base">
        <li>
            <a href="https://discord.com/users/1187828042098290894" target="_blank">
                <svg viewBox="0 -8 71 71" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h71v55h-71z"/></clipPath><g clip-path="url(#a)"><path d="m60.1045 4.8978c-4.5253-2.0764-9.378-3.6062-14.4518-4.48238-.0924-.01691-.1847.025349-.2323.109869-.6241 1.110011-1.3154 2.558111-1.7995 3.696311-5.4572-.817-10.8864-.817-16.2317 0-.4842-1.1635-1.2006-2.5863-1.8275-3.696311-.0476-.0817-.1399-.123959-.2323-.109869-5.071.87338-9.9237 2.40318-14.4518 4.48238-.0392.0169-.0728.0451-.0951.0817-9.20455 13.7514-11.726061 27.1648-10.489092 40.4119.005597.0648.041978.1268.092353.1662 6.072899 4.4598 11.955539 7.1673 17.728939 8.9619.0924.0282.1903-.0056.2491-.0817 1.3657-1.865 2.5831-3.8315 3.6269-5.8995.0616-.1211.0028-.2648-.1231-.3127-1.931-.7325-3.7697-1.6256-5.5384-2.6398-.1399-.0817-.1511-.2818-.0224-.3776.3722-.2789.7445-.5691 1.0999-.8621.0643-.0535.1539-.0648.2295-.031 11.6196 5.3051 24.1992 5.3051 35.6817 0 .0756-.0366.1652-.0253.2323.0282.3555.293.7277.586 1.1027.8649.1287.0958.1203.2959-.0196.3776-1.7687 1.0339-3.6074 1.9073-5.5412 2.637-.1259.0479-.1819.1944-.1203.3155 1.0662 2.0651 2.2836 4.0316 3.6241 5.8967.056.0789.1567.1127.2491.0845 5.8014-1.7946 11.684-4.5021 17.7569-8.9619.0532-.0394.0868-.0986.0924-.1634 1.4804-15.3151-2.4796-28.6185-10.4975-40.4119-.0196-.0394-.0531-.0676-.0923-.0845zm-36.3786 32.4275c-3.4983 0-6.3808-3.2117-6.3808-7.156s2.8266-7.156 6.3808-7.156c3.5821 0 6.4367 3.2399 6.3807 7.156 0 3.9443-2.8266 7.156-6.3807 7.156zm23.5919 0c-3.4982 0-6.3807-3.2117-6.3807-7.156s2.8265-7.156 6.3807-7.156c3.5822 0 6.4367 3.2399 6.3808 7.156 0 3.9443-2.7986 7.156-6.3808 7.156z"/></g></svg>
            Discord</a>
        </li>

        <li><a target="_blank" href={`https://github.com/${config.githubUsername}`}>
            <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.39 0-256 114.61-256 256 0 113.1 73.345 209.05 175.07 242.91 12.81 2.35 17.48-5.56 17.48-12.35 0-6.06-.22-22.17-.35-43.53-71.21 15.46-86.23-34.32-86.23-34.32-11.645-29.58-28.429-37.45-28.429-37.45-23.244-15.88 1.76-15.56 1.76-15.56 25.699 1.8 39.209 26.38 39.209 26.38 22.84 39.12 59.92 27.82 74.51 21.27 2.32-16.54 8.93-27.82 16.25-34.22-56.84-6.45-116.611-28.43-116.611-126.52 0-27.94 9.981-50.8 26.351-68.7-2.64-6.47-11.42-32.5 2.5-67.74 0 0 21.5-6.889 70.41 26.24 20.41-5.69 42.32-8.52 64.09-8.61 21.73.1 43.64 2.92 64.09 8.61 48.87-33.129 70.32-26.24 70.32-26.24 13.97 35.24 5.19 61.27 2.55 67.74 16.41 17.9 26.32 40.76 26.32 68.7 0 98.35-59.86 119.99-116.89 126.32 9.19 7.91 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.22 0 6.85 4.6 14.82 17.6 12.32 101.65-33.92 174.93-129.8 174.93-242.88 0-141.39-114.63-256-256.02-256" /></svg>
        Github</a></li>

        <li>
            <a target="_blank" href="https://www.reddit.com/user/Expert_Hippo1165/">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
<path d="M 29 3 C 26.894531 3 24.433594 4.652344 24.0625 12.03125 C 24.375 12.023438 24.683594 12 25 12 C 25.351563 12 25.714844 12.019531 26.0625 12.03125 C 26.300781 7.597656 27.355469 5 29 5 C 29.703125 5 30.101563 5.382813 30.84375 6.1875 C 31.710938 7.128906 32.84375 8.351563 35.0625 8.8125 C 35.027344 8.550781 35 8.269531 35 8 C 35 7.578125 35.042969 7.179688 35.125 6.78125 C 33.75 6.40625 33.023438 5.613281 32.3125 4.84375 C 31.519531 3.984375 30.609375 3 29 3 Z M 41 4 C 38.792969 4 37 5.796875 37 8 C 37 10.203125 38.792969 12 41 12 C 43.207031 12 45 10.203125 45 8 C 45 5.796875 43.207031 4 41 4 Z M 25 14 C 12.867188 14 3 20.179688 3 29 C 3 37.820313 12.867188 45 25 45 C 37.132813 45 47 37.820313 47 29 C 47 20.179688 37.132813 14 25 14 Z M 7.5 14.9375 C 6.039063 14.9375 4.652344 15.535156 3.59375 16.59375 C 1.871094 18.316406 1.515625 20.792969 2.5 22.84375 C 4.011719 19.917969 6.613281 17.421875 9.96875 15.5625 C 9.207031 15.175781 8.363281 14.9375 7.5 14.9375 Z M 42.5 14.9375 C 41.636719 14.9375 40.792969 15.175781 40.03125 15.5625 C 43.386719 17.421875 45.988281 19.917969 47.5 22.84375 C 48.484375 20.792969 48.128906 18.316406 46.40625 16.59375 C 45.347656 15.535156 43.960938 14.9375 42.5 14.9375 Z M 17 23 C 18.65625 23 20 24.34375 20 26 C 20 27.65625 18.65625 29 17 29 C 15.34375 29 14 27.65625 14 26 C 14 24.34375 15.34375 23 17 23 Z M 33 23 C 34.65625 23 36 24.34375 36 26 C 36 27.65625 34.65625 29 33 29 C 31.34375 29 30 27.65625 30 26 C 30 24.34375 31.34375 23 33 23 Z M 16.0625 34 C 16.3125 34.042969 16.558594 34.183594 16.71875 34.40625 C 16.824219 34.554688 19.167969 37.6875 25 37.6875 C 30.910156 37.6875 33.257813 34.46875 33.28125 34.4375 C 33.597656 33.988281 34.234375 33.867188 34.6875 34.1875 C 35.136719 34.503906 35.222656 35.109375 34.90625 35.5625 C 34.789063 35.730469 31.9375 39.6875 25 39.6875 C 18.058594 39.6875 15.210938 35.730469 15.09375 35.5625 C 14.777344 35.109375 14.859375 34.503906 15.3125 34.1875 C 15.539063 34.027344 15.8125 33.957031 16.0625 34 Z"></path>
</svg>
                reddit 
            </a>
        </li>
    </ul>
</article>

<style>
svg {
    fill: var(--color-text);
    width: 35px;
    margin-right: 8px;
}

@media (width <= 48rem) {
    svg {
        width: 25px;
        margin-right: 5px;
    }
}

.socials li a {
    display: flex;
    align-items: center;
}
</style>
