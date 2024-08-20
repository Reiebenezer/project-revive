import { goto } from "$app/navigation";
import { writable, type Writable, get as storeGet } from "svelte/store";

let formdata: Record<string, Writable<any>> = {};

export const progress = writable(0);
export function get<T>(key: string, fallback: T): Writable<T> {
    if (!(key in formdata)) formdata[key] = writable(fallback);
    return formdata[key];
}

export function submit() {
    const data = stripWritable(formdata);

    // placeholder
    fetch('https://script.google.com/macros/s/AKfycbwouQOvcsZqNKeFwgd5MwzskLCcfLHZGzOVu_1kSaYrf8M5bPnDV--qxHCJ0x7hgA-IeQ/exec', { 
        method: 'POST', 
        body: data
    })
        .then(res => {

            if (!res.ok) {
                console.error('Error submitting form: ', res.statusText);
            }

            else {
                res.json().then(v => {
                    localStorage.clear();
                    formdata = {};

                    goto('/donate/complete');
                })
            }
        })
}

function stripWritable(formdata: Record<string, Writable<any>>) {
    const result = new FormData();

    for (const key in formdata) {
        result.set(key, storeGet(formdata[key]));
    }

    return result;
}

export function updateSession() {
    const compiledData = Object.fromEntries(Object.entries(formdata).map(([key, store]) => [key, storeGet(store)]));
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