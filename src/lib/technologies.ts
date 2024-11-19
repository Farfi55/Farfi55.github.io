import type { Technology } from "./types";

export const technologies: Technology[] = [
	{
		name: 'Unity',
		urlSlug: 'unity',
		iconSlug: 'unity',
		website: 'https://unity.com/'
	},
	{
		name: 'Svelte',
		urlSlug: 'svelte',
		iconSlug: 'svelte',
		website: 'https://svelte.dev/'
	},
	{
		name: 'ASP',
		urlSlug: 'asp',
		iconSlug: 'fa-solid fa-code',
		title: 'Answer Set Programming',
		website: 'https://en.wikipedia.org/wiki/Answer_set_programming'
	},
	{
		name: 'Python',
		urlSlug: 'python',
		iconSlug: 'python',
		website: 'https://www.python.org/'
	},
	{
		name: 'C#',
		urlSlug: 'csharp',
		// removed icon since microsoft legal team wanted it removed from simpleicons
		iconSlug: '',
		website: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
	},
	{
		name: 'TypeScript',
		urlSlug: 'typescript',
		iconSlug: 'typescript',
		website: 'https://www.typescriptlang.org/'
	},
	{
		name: 'JavaScript',
		urlSlug: 'javascript',
		iconSlug: 'javascript',
		website: 'https://www.javascript.com/',
		hide: true
	},
	{
		name: 'CSS',
		urlSlug: 'css',
		iconSlug: 'css3',
		website: 'https://www.w3.org/Style/CSS/',
		hide: true
	},
	{
		name: 'HTML',
		urlSlug: 'html',
		iconSlug: 'html5',
		website: 'https://html.spec.whatwg.org/',
		hide: true
	},
	{
		name: 'Angular',
		urlSlug: 'angular',
		iconSlug: 'angular',
		color: 'c3002f',
		website: 'https://angular.io/'
	},

	{
		name: 'Spring',
		urlSlug: 'spring',
		iconSlug: 'spring',
		website: 'https://spring.io/'
	},
	{
		name: 'Bootstrap',
		urlSlug: 'bootstrap',
		iconSlug: 'bootstrap',
		website: 'https://getbootstrap.com/'
	},
	{
		name: 'Tailwind',
		urlSlug: 'tailwind',
		iconSlug: 'tailwindcss',
		website: 'https://tailwindcss.com/'
	},
	{
		name: 'Java',
		urlSlug: 'java',
		iconSlug: 'fa-brands fa-java',
		website: 'https://www.java.com/'
	},
	{
		name: 'Rust',
		urlSlug: 'rust',
		iconSlug: 'rust',
		website: 'https://www.rust-lang.org/'
	},
	{
		name: 'Godot',
		urlSlug: 'godot',
		iconSlug: 'godotengine',
		website: 'https://godotengine.org/'
	},
	{
		name: 'C++',
		urlSlug: 'cplusplus',
		iconSlug: 'cplusplus',
		website: 'https://isocpp.org/'
	},
	{
		name: 'Perl',
		urlSlug: 'perl',
		iconSlug: 'perl',
		website: 'https://www.perl.org/'
	},
	{
		name: 'Game',
		urlSlug: 'game',
		iconSlug: 'fa-solid fa-gamepad',
		hide: true
	},
	{
		name: 'Web',
		urlSlug: 'web',
		iconSlug: 'fa-solid fa-globe',
		hide: true
	}
];

const technologiesMap: Map<string, Technology> = new Map();
technologies.forEach((t) => technologiesMap.set(t.name.toLowerCase(), t));

export function getTechnology(name: string): Technology {
	const technology = technologiesMap.get(name.toLowerCase());
	if (technology) return technology;

	console.warn(`Technology ${name} not found, returning default`);
	return { name: name.toString(), urlSlug: name.toString().toLowerCase() };
}
