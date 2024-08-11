<script lang="ts">
    import { goto } from '$app/navigation';
    import Checkbox from '$lib/svelte/inputs/checkbox.svelte';
    import { progress, get } from '$lib/ts/form';

    $progress = 1;

    let checked = get('privacy-checked', false);
</script>

<h2>RA 10173: The Data Privacy Act of 2012</h2>

<p>
    By checking the box below, you therefore consent to the collection,
    processing, and storage of your personal information, such as your name and
    address, which will be collected through this form. <br><br> This information will be
    used solely for the purposes of this project and will not be disclosed to
    the public or any third party outside of UPHSI Red Cross Youth Council, in
    compliance with RA 10173, the Data Privacy Act of 2012. <br><br> You can read RA
    10173 <a href="https://privacy.gov.ph/data-privacy-act/">here</a>.
</p>
<Checkbox bind:checked="{$checked}" label="I agree to contribute to this project" />
<button
    disabled="{!$checked}"
    on:click="{() => goto('/donate/benefactors-information')}">Next</button>

<style>
    a { color: var(--accent-2) }
</style>