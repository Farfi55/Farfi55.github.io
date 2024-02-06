import { writable } from "svelte/store";
import { browser } from "$app/environment";


type Locale = 'en' | 'it';






const userLocale = (browser && localStorage.getItem('locale') as Locale) || 'en';

export const locale = writable<Locale>(userLocale);
