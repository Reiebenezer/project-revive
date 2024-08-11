<script lang="ts">
    export let options: string[];
    export let value = "";
    export let label = "";

    if (value && !options.includes(value)) throw new Error('Value not found in options!');

    let __this__: HTMLElement;
    
    $: {
        if (__this__) {
            const form = __this__.closest('form');
            value;
    
            if (form) {
                form.dispatchEvent(new Event('change'))
            }
        }
    }
</script>

<label class="radio" bind:this={__this__}>
    <input type="hidden" bind:value={value}>
    {label}
    <div class="buttons">
        {#each options as option}
            <button class:secondary={option !== value} on:click="{() => value = option}">{option}</button>
        {/each}
    </div>
</label>

<style>
    .buttons {
        display: flex;
        gap: .5rem;
    }
</style>