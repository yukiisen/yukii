<script lang="ts">
    import { sleep } from "$lib/utils";
    import { onMount } from "svelte";
    import config from "$lib/config";

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
<article class="sub flex flex-col md:flex-row before-deco my-2">
    <div class="md:flex-5">
        <p>I'm not quite good at human interactions but you can contact me here anyway</p>
        <p>Note that messages are very limited so keep in mind that you can't send more than one per day</p>
    </div>
    <form class="md:flex-4 md:pr-6 text-gl" on:submit|preventDefault={sendMessage}>
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

<article class="sub before-deco my-2">
    <h2 class="list-element">You can also check my other accounts:</h2>
    <ul class="socials flex justify-center mt-4 *:mx-3 *:md:mx-10 *:text-xs *:md:text-base">
        <li>
            <a href="/">
                <svg viewBox="0 -8 71 71" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h71v55h-71z"/></clipPath><g clip-path="url(#a)"><path d="m60.1045 4.8978c-4.5253-2.0764-9.378-3.6062-14.4518-4.48238-.0924-.01691-.1847.025349-.2323.109869-.6241 1.110011-1.3154 2.558111-1.7995 3.696311-5.4572-.817-10.8864-.817-16.2317 0-.4842-1.1635-1.2006-2.5863-1.8275-3.696311-.0476-.0817-.1399-.123959-.2323-.109869-5.071.87338-9.9237 2.40318-14.4518 4.48238-.0392.0169-.0728.0451-.0951.0817-9.20455 13.7514-11.726061 27.1648-10.489092 40.4119.005597.0648.041978.1268.092353.1662 6.072899 4.4598 11.955539 7.1673 17.728939 8.9619.0924.0282.1903-.0056.2491-.0817 1.3657-1.865 2.5831-3.8315 3.6269-5.8995.0616-.1211.0028-.2648-.1231-.3127-1.931-.7325-3.7697-1.6256-5.5384-2.6398-.1399-.0817-.1511-.2818-.0224-.3776.3722-.2789.7445-.5691 1.0999-.8621.0643-.0535.1539-.0648.2295-.031 11.6196 5.3051 24.1992 5.3051 35.6817 0 .0756-.0366.1652-.0253.2323.0282.3555.293.7277.586 1.1027.8649.1287.0958.1203.2959-.0196.3776-1.7687 1.0339-3.6074 1.9073-5.5412 2.637-.1259.0479-.1819.1944-.1203.3155 1.0662 2.0651 2.2836 4.0316 3.6241 5.8967.056.0789.1567.1127.2491.0845 5.8014-1.7946 11.684-4.5021 17.7569-8.9619.0532-.0394.0868-.0986.0924-.1634 1.4804-15.3151-2.4796-28.6185-10.4975-40.4119-.0196-.0394-.0531-.0676-.0923-.0845zm-36.3786 32.4275c-3.4983 0-6.3808-3.2117-6.3808-7.156s2.8266-7.156 6.3808-7.156c3.5821 0 6.4367 3.2399 6.3807 7.156 0 3.9443-2.8266 7.156-6.3807 7.156zm23.5919 0c-3.4982 0-6.3807-3.2117-6.3807-7.156s2.8265-7.156 6.3807-7.156c3.5822 0 6.4367 3.2399 6.3808 7.156 0 3.9443-2.7986 7.156-6.3808 7.156z"/></g></svg>
            Discord</a>
        </li>

        <li><a target="_blank" href={`https://github.com/${config.githubUsername}`}>
            <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.39 0-256 114.61-256 256 0 113.1 73.345 209.05 175.07 242.91 12.81 2.35 17.48-5.56 17.48-12.35 0-6.06-.22-22.17-.35-43.53-71.21 15.46-86.23-34.32-86.23-34.32-11.645-29.58-28.429-37.45-28.429-37.45-23.244-15.88 1.76-15.56 1.76-15.56 25.699 1.8 39.209 26.38 39.209 26.38 22.84 39.12 59.92 27.82 74.51 21.27 2.32-16.54 8.93-27.82 16.25-34.22-56.84-6.45-116.611-28.43-116.611-126.52 0-27.94 9.981-50.8 26.351-68.7-2.64-6.47-11.42-32.5 2.5-67.74 0 0 21.5-6.889 70.41 26.24 20.41-5.69 42.32-8.52 64.09-8.61 21.73.1 43.64 2.92 64.09 8.61 48.87-33.129 70.32-26.24 70.32-26.24 13.97 35.24 5.19 61.27 2.55 67.74 16.41 17.9 26.32 40.76 26.32 68.7 0 98.35-59.86 119.99-116.89 126.32 9.19 7.91 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.22 0 6.85 4.6 14.82 17.6 12.32 101.65-33.92 174.93-129.8 174.93-242.88 0-141.39-114.63-256-256.02-256" /></svg>
        Github</a></li>

        <li>
            <a target="_blank" href={`https://x.com/${config.twitterUsername}`}>
                <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                Twitter
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
