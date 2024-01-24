import type { Post } from '../../app.js';

export async function load({ fetch }) {
	const response = await fetch("/api/blog");
	const posts: Post[] = await response.json();
	return { posts };
}
