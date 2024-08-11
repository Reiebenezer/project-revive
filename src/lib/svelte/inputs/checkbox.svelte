<script lang="ts">
    export let name = "";
    export let label = "";
    export let checked = false;
</script>

<label>
    <input type="checkbox" {name} bind:checked="{checked}" />
    {label}
</label>