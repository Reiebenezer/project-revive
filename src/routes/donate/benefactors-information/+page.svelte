<script lang="ts">
    import { goto } from '$app/navigation';
    import Checkbox from '$lib/svelte/inputs/checkbox.svelte';
    import { progress, get } from '$lib/ts/form';
    import { allValid } from '$lib/ts/utils';

    $progress = 2;

    const firstname = get('firstname', '');
    const lastname = get('lastname', '');
    const address = get('address', '');
    const email = get('email', '');
    const phone = get('phone', '');
    const company = get('company', '');
    const useCompanyName = get('use-company', $company !== '');

    $: pass =
        allValid(
            (v) => v !== '',
            $firstname,
            $lastname,
            $address,
            $email,
            $phone,
        ) &&
        (!$useCompanyName || $company !== '');
</script>

<h2>Benefactor's Information</h2>

<div class="inputs grid">
    <input
        type="text"
        autocomplete="given-name"
        placeholder="First Name"
        bind:value="{$firstname}"
        disabled="{$useCompanyName}" />
    <input
        type="text"
        autocomplete="family-name"
        placeholder="Last Name"
        bind:value="{$lastname}"
        disabled="{$useCompanyName}" />
    <input
        type="text"
        autocomplete="address-level1"
        placeholder="Address"
        bind:value="{$address}" />
    <input type="email" placeholder="Email" bind:value="{$email}" />
    <input
        type="tel"
        autocomplete="tel-local"
        placeholder="Active Phone Number"
        bind:value="{$phone}" />
</div>

<Checkbox
    bind:checked="{$useCompanyName}"
    label="Use my company's name in donation" />

<input
    type="text"
    autocomplete="organization"
    placeholder="Company Name"
    disabled="{!$useCompanyName}"
    bind:value="{$company}" />

<div class="cta">
    <button
        type="button"
        on:click="{() => goto('/donate/data-privacy')}"
        class="secondary">Previous</button>
    <button
        type="button"
        disabled="{!pass}"
        on:click="{() => goto('/donate/delivery-information')}">Next</button>
</div>

<style lang="scss">
    .inputs {
        grid-template-columns: 5fr 1fr 4fr;
        gap: 0.75rem;

        width: 72ch;

        [placeholder='Last Name'] {
            grid-column-end: span 2;
        }

        [placeholder='Address'] {
            grid-column-end: span 3;
        }

        [placeholder='Email'] {
            grid-column-end: span 2;
        }
    }
</style>
