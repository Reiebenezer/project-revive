import { get } from 'svelte/store';
import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { progress } from '$lib/ts/form';

export const load: LayoutLoad = async ({ url }) => {
    if (url.pathname !== "/donate/data-privacy" && get(progress) === 0)
        redirect(302, '/donate/data-privacy');
};