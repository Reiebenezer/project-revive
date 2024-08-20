<script lang="ts">
    import { goto } from '$app/navigation';
    import CustomRadio from '$lib/svelte/inputs/custom-radio.svelte';
    import MultiDropdown from '$lib/svelte/inputs/multi-dropdown.svelte';
    import { get, progress, submit as _submit } from '$lib/ts/form';
    import { allValid } from '$lib/ts/utils';
    import { format } from 'date-fns';

    $progress = 3;

    const clothing = [
        'T-Shirts',
        'Women Blouses',
        'Button Down Polo',
        'Polo Shirts',
        'Skirts',
        'Women Shorts',
        'Trousers',
        'Denim/Maong Pants',
        'Baby Clothes (Months old)',
        'Clothes for Toddlers (Age 1-2 y.o.)',
        'Clothes for Pre-Schoolers (Age 3-4 y.o.)',
        'Clothes for School-Aged Childern (5-12 y.o.)',
        'Clothes for Teenagers (Age 13-19 y.o.)',
        'Old Uniforms',
        'Old Costumes',
    ];

    const selectedClothing = get('Clothing', [] as string[]);
    const shippingOption = get('Delivery Method', 'Drop-Off');
    const dropOffLocation = get('Drop Off Location', '');
    const pickUpOption = get('Pick Up/Shipment Option', '');
    const senderName = get('Sender Name', '');
    const senderNumber = get('Sender Contact Number', '');
    const pickUpDate = get('Pick Up Date', format(new Date(), 'yyyy-MM-dd'));
    const pickUpLocation = get('Pick Up Location', '');

    $: pass =
        $selectedClothing.length > 0 &&
        (($shippingOption === 'Drop-Off' && $dropOffLocation !== '') ||
            allValid(
                (v) => v !== '',
                $pickUpOption,
                $senderName,
                $senderNumber,
                $pickUpDate,
                $pickUpLocation,
            ));

    let submitting = false;

    function submit() {
        submitting = true;
        _submit();
    }
</script>

<h2>Delivery Information</h2>

<div class="inputs grid">
    <MultiDropdown
        options="{clothing}"
        placeholder="Select Clothing"
        label="What type of clothes will you be donating? (Please choose as many that are applicable)"
        bind:values="{$selectedClothing}" />
    <CustomRadio
        options="{['Drop-Off', 'Pick-Up', 'Shipment']}"
        bind:value="{$shippingOption}" />

    {#if $shippingOption === 'Drop-Off'}
        <input
            type="text"
            placeholder="Drop Off Location"
            bind:value="{$dropOffLocation}"
            list="drop-off-locations" />
        <datalist id="drop-off-locations">
            <option value="UPHSI Campus">UPHSI Campus</option>
            <option value="Mandurriao Plaza">Mandurriao Plaza</option>
            <option value="Jaro Plaza">Jaro Plaza</option>
            <option value="Molo Plaza">Molo Plaza</option>
        </datalist>
    {:else}
        {#if $shippingOption === 'Pick-Up'}
            <p class="cl-err">
                NOTE: This option is only available for donations within Iloilo
                City. If you reside outside Iloilo City, please choose other
                options.
            </p>
        {/if}

        <div class="group grid col-2-1">
            <input
                type="text"
                placeholder="{$shippingOption} Option"
                bind:value="{$pickUpOption}" />

            <input
                type="text"
                placeholder="Sender Name"
                bind:value="{$senderName}" />
            <input
                type="text"
                placeholder="Sender Contact Number"
                bind:value="{$senderNumber}" />

            <input
                type="date"
                placeholder="Date"
                bind:value="{$pickUpDate}" />
            <input
                type="text"
                placeholder="Location"
                bind:value="{$pickUpLocation}" />
        </div>
    {/if}
</div>

<div class="cta">
    <button
        type="button"
        on:click="{() => goto('/donate/benefactors-information')}"
        class="secondary" disabled={submitting}>Previous</button>
    <button type="button" on:click="{submit}" disabled="{!pass || submitting}"
        >{submitting ? "Sending data..." : "Submit Donation"}</button>
</div>

<style lang="scss">
    .inputs {
        gap: 1.5rem;

        max-width: 72ch;
    }

    .group {
        gap: 0.75rem;

        [placeholder='Pick-Up Option'],
        [placeholder='Shipment Option'] {
            grid-column-end: span 2;
        }
    }

    input {
        width: 100%;
    }

    h2 {
        max-width: 100%;
    }
</style>
