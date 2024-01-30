
export interface Step {
	name: string;
	icon: string;
	href?: string;
	description?: string;
}export interface Tecnology {
	name: string;
	urlSlug: string;
	iconSlug?: string;
	website?: string;
	title?: string;
	color?: string;
	hide?: boolean;
}
export type Post = {
	title: string;
	subtitle?: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
};

