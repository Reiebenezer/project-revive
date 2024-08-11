<script lang="ts">
    import {
        progress,
        submit,
        fetchSession,
        updateSession,
    } from '$lib/ts/form';
    import '$lib/scss/form.scss';
    import { onMount } from 'svelte';
    import { mount } from '$lib/ts/utils';
    import Progress from '$lib/svelte/progress.svelte';

    onMount(() => {
        fetchSession();
    });

    const labels = [
        'RA 10173: Data Privacy Act of 2012',
        "Benefactor's Information",
        'Delivery Information',
        'End',
    ];
</script>

<Progress progress="{$progress}" {labels} />
{#await mount()}
    <p>Loading form. Please wait...</p>
{:then _}
    <form on:change="{updateSession}" on:submit|preventDefault="{submit}">
        <slot />
    </form>
{/await}

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;

        align-items: flex-start;

        padding: 64px 240px;
        gap: 2rem;

        @media screen and (width < 768px) {
            padding: 16px 32px;
        }
    }

    p {
        place-self: center;
    }
</style>
