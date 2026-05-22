<script lang="ts">
    import Typewriter from "$lib/components/Typewriter.svelte";
    import Discord from "$lib/components/icons/Discord.svelte";
    import GitHub from "$lib/components/icons/GitHub.svelte";
    import Reddit from "$lib/components/icons/Reddit.svelte";
    import { config } from "$lib/config";

    let email = $state("");
    let topic = $state("");
    let message = $state("");
    let error = $state("");

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

<h1 class="before-deco mb-2"><Typewriter text="Bunker" /></h1>
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
                <Discord class="social-icon" />
            Discord</a>
        </li>

        <li><a target="_blank" href={`https://github.com/${config.githubUsername}`}>
                <GitHub class="social-icon" />
        Github</a></li>

        <li>
            <a target="_blank" href="https://www.reddit.com/user/Expert_Hippo1165/">
                <Reddit class="social-icon" />
                reddit
            </a>
        </li>
    </ul>
</article>

<style>
:global(.social-icon) {
    fill: var(--color-text);
    width: 35px;
    margin-right: 8px;
}

@media (width <= 48rem) {
    :global(.social-icon) {
        width: 25px;
        margin-right: 5px;
    }
}

.socials li a {
    display: flex;
    align-items: center;
}
</style>
