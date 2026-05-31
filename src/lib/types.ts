
export interface Step {
	name: string;
	icon: string;
	href?: string;
	description?: string;
}

export interface Technology {
	name: string;
	urlSlug: string;
	iconSlug?: string;
	website?: string;
	title?: string;
	color?: string;
	shadowColor?: string;
	hide?: boolean;
	type: string;
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


export type Project = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	published: boolean;
	coverImage?: string;
	icon?: string;
	images?: string[];
	repo?: string;
	itchio?: string;
	crates?: string;
};

export type Course = {
	name: string;
	description?: string;
	grade: string;
	cfu: number;
	date: string;
};
