<script lang="ts">
    import { progress, submit, fetchSession, updateSession } from '$lib/ts/form';
    import '$lib/scss/form.scss';
    import { onMount } from 'svelte';
    import { mount } from '$lib/ts/utils';

    onMount(() => { 
        fetchSession();
    });

</script>

<h3>{$progress}</h3>
{#await mount()}
    Loading...
{:then _}
    <form on:change={updateSession} on:submit|preventDefault="{submit}">
        <slot />
    </form>
{/await}

<style>
    form {
        display: grid;
        justify-items: start;

        padding: 64px 240px;
        gap: 2rem;
    }
</style>
