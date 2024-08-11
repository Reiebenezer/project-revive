import { onMount } from "svelte";

type ValidatorFunction<T> = (value: T) => boolean
type ValidatorFunctionAsync<T> = (value: T) => Promise<boolean>

export function allValid<T>(validator: ValidatorFunction<T>, ...entries: T[]) {
    return entries.every(validator);
}

export async function allValidAsync<T>(validator: ValidatorFunctionAsync<T>, ...entries: T[]) {
    return (await Promise.all(entries.map(v => validator(v)))).every(v => v);
}

export function mount() {
    return new Promise<void>(resolve => onMount(resolve));
}