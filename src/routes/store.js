import { writable } from 'svelte/store';
import { browser } from '$app/env';
export const querystring = writable(browser && (localStorage.getItem('querystring') || ''));
querystring.subscribe((val) => browser && localStorage.setItem('querystring', val));

export const popgames = writable(browser && (localStorage.getItem('popgames') || ''));
popgames.subscribe((val) => browser && localStorage.setItem('popgames', val));
