import { writable, type Writable, get as storeGet } from "svelte/store";

const formdata: Record<string, Writable<any>> = {};

export const progress = writable(0);
export function get<T>(key: string, fallback: T): Writable<T> {
    if (!(key in formdata)) formdata[key] = writable(fallback);
    return formdata[key];
}

export function submit() {
    // placeholder
    localStorage.clear();
}

export function updateSession() {
    console.log(formdata);
    
    const compiledData = Object.fromEntries(Object.entries(formdata).map(([ key, store ]) => [ key, storeGet(store) ]));
    localStorage.setItem('saved-data', JSON.stringify(compiledData));
}

export function fetchSession() {
    progress.set(parseInt(localStorage.getItem('progress') ?? '1'));

    let data = localStorage.getItem('saved-data');

    if (data) {
        const obj = JSON.parse(data) as Record<string, string>;

        for (const key in obj) {
            formdata[key] = get(key, obj[key]);
        }
    }
}