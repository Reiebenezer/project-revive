<script lang="ts">
    import '$lib/scss/dropdown.scss';
    import { slide } from 'svelte/transition';

    export let values: string[] = [];
    export let label = '';
    export let placeholder = '';

    export let options: string[];

    if (!values.every((v) => options.includes(v)))
        throw new Error('Value is not in options!');

    let open = false;
    let search = "";

    function add(opt: string) {
        values = [...values, opt];
        open = false;
    }

    function remove(opt: string) {
        values = values.filter((v) => v !== opt);
    }

    let __this__: HTMLElement;
    
    $: {
        if (__this__) {
            const form = __this__.closest('form');
            values[0];
    
            if (form) {
                form.dispatchEvent(new Event('change'))
            }
        }
    }
    $: filtered = search === "" ? options : options.filter(opt => opt.toLowerCase().includes(search.trim().toLowerCase()));
</script>

<label class="dropdown multi" class:open bind:this={__this__}>
    <p>{label}</p>
    <button class="select" on:click="{() => (open = !open)}">
        {#if values.length === 0}
            <span class="default">{placeholder}</span>
        {:else}
            <span class="values">
                {#each values as v}
                    <span
                        >{v}
                        <button on:click|stopPropagation="{() => remove(v)}" title="Remove {v}"
                            ><i class="ph ph-x"></i></button
                        ></span>
                {/each}
            </span>
        {/if}

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
                    on:click="{() => add(option)}"
                    disabled="{values.includes(option)}">{option}</button>
            {/each}
        </ul>
    {/if}
</label>
