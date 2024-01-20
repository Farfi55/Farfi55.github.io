// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export interface Step {
	name: string;
	icon: string;
	href?: string;
	description?: string;
}
export interface Tecnology {
	name: string;
	urlSlug: string;
	iconSlug?: string;
	website?: string;
	title?: string;
	color?: string;
}

export {};
