<script lang="ts">
    import '$lib/scss/dropdown.scss';
    import { slide } from 'svelte/transition';

    export let value = '';
    export let label = '';
    export let placeholder = '';

    export let options: string[];

    if (value !== '' && !options.includes(value))
        throw new Error('Value is not in options!');

    let open = false;
    let search = "";

    function select(opt: string) {
        open = false;
        value = opt;
    }

    $: filtered = search === "" ? options : options.filter(opt => opt.toLowerCase().includes(search.trim().toLowerCase()));
</script>

<label class="dropdown" class:open>
    <input type="hidden" bind:value={value}>
    <p>{label}</p>
    <button class="select" on:click="{() => (open = !open)}">
        <span class:default="{!value}">{value || placeholder}</span>
        <i class="ph ph-caret-down"></i>
    </button>
    {#if open}
        <ul class="options" transition:slide>
            <div class="search">
                <input type="text" placeholder="Search for entry" bind:value={search} />
                <i class="ph ph-magnifying-glass"></i>
            </div>
            {#each filtered as option}
                <button
                    on:click="{() => select(option)}"
                    disabled="{option === value}">{option}</button>
            {/each}
        </ul>
    {/if}
</label>
