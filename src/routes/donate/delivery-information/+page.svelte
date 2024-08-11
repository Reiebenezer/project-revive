<script lang="ts">
    import { goto } from '$app/navigation';
    import CustomRadio from '$lib/svelte/inputs/custom-radio.svelte';
    import MultiDropdown from '$lib/svelte/inputs/multi-dropdown.svelte';
    import { get, progress, submit } from '$lib/ts/form';
    import { allValid, mount } from '$lib/ts/utils';
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

    const selectedClothing = get('selected-clothing', [] as string[]);
    const shippingOption = get('shipping-option', 'Drop Off');
    const dropOffLocation = get('drop-off-location', '');
    const pickUpOption = get('pick-up-option', '');
    const senderName = get('sender-name', '');
    const senderNumber = get('sender-number', '');
    const pickUpDate = get('pick-up-date', format(new Date(), 'yyyy-MM-dd'));
    const pickUpLocation = get('pick-up-location', '');

    $: pass =
        $selectedClothing.length > 0 &&
        (($shippingOption === 'Drop Off' && $dropOffLocation !== '') ||
            allValid(
                (v) => v !== '',
                $pickUpOption,
                $senderName,
                $senderNumber,
                $pickUpDate,
                $pickUpLocation,
            ));
</script>

<h2>Delivery Information</h2>

<div class="inputs grid">
    <MultiDropdown
        options="{clothing}"
        placeholder="Select Clothing"
        label="What type of clothes will you be donating? (Please choose as many that are applicable)"
        bind:values="{$selectedClothing}" />
    <CustomRadio
        options="{['Drop Off', 'Pick Up', 'Shipment']}"
        bind:value="{$shippingOption}" />

    {#if $shippingOption === 'Drop Off'}
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
        {#if $shippingOption === 'Pick Up'}
            <p class="cl-err">
                NOTE: This option is only available for donations within Iloilo
                City. If you reside outside Iloilo City, please choose other
                options.
            </p>
        {/if}

        <div class="group grid col-2-1">
            <input
                type="text"
                placeholder="Pick-Up Option"
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
                placeholder="Pick-up Date"
                bind:value="{$pickUpDate}" />
            <input
                type="text"
                placeholder="Pick-up Location"
                bind:value="{$pickUpLocation}" />
        </div>
    {/if}
</div>

<div class="cta">
    <button
        type="button"
        on:click="{() => goto('/donate/benefactors-information')}"
        class="secondary">Previous</button>
    <button type="button" on:click="{submit}" disabled="{!pass}"
        >Submit Donation</button>
</div>

<style lang="scss">
    .inputs {
        gap: 1.5rem;
        width: 80ch;
    }

    .group {
        gap: 0.75rem;

        [placeholder='Pick-Up Option'] {
            grid-column-end: span 2;
        }
    }
</style>
