<script lang="ts">
    import { goto } from '$app/navigation';
    import { progress } from '$lib/ts/form';
    import { onMount } from 'svelte';

    $progress = 4;

    onMount(() => window.onbeforeunload = null);
</script>

<h2>Donation Complete</h2>

<p>Thank you for joining the fight against fast fashion!</p>
<p>
    Your clothing donation to Project Revive, an initiative of the UPHSI Red
    Cross Youth Council, helps reduce textile waste and provides essential
    clothing to those in need.
</p>
<p>
    Your contribution makes a significant impact on our community and the
    environment. To learn more about this initiative, you can visit the <a
        href="/about">about</a> page.
</p>

<div class="cta">
    <button type="button" on:click="{() => goto('/donate/data-privacy')}"
        >Donate Another Package</button>
    <button type="button" class="secondary" on:click="{() => goto('/')}"
        >Back to Homepage</button>
</div>
