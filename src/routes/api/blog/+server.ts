import { json } from "@sveltejs/kit";
import type { Post } from "../../../app";


export async function GET() {
	const posts = await getPosts();
	return json(posts);
}

async function getPosts() {
	let posts: Post[] = [];

	const paths = import.meta.glob("/src/posts/**/*.md", { eager: true });

	for (const path in paths) {
		const file = await paths[path];
		const slug = path.split("/").pop()?.split(".")[0];
		if (!file || !slug || typeof file !== "object" || !('metadata' in file)) {
			continue;
		}
		const metadata = file.metadata as Omit<Post, 'slug'>
		const post = { slug, ...metadata };

		if (post.published) {
			posts.push(post);
		}
	}
	posts = posts.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime()
	});

	return posts;
}
