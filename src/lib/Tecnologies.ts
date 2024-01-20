import type { Tecnology } from '../app';

export const tecnologies: Tecnology[] = [
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
		name: 'Angular',
		urlSlug: 'angular',
		iconSlug: 'angular',
		color: 'c3002f',
		website: 'https://angular.io/'
	},
	{
		name: 'ASP',
		urlSlug: 'asp',
		title: 'Answer Set Programming',
		website: 'https://en.wikipedia.org/wiki/Answer_set_programming'
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
		name: 'Python',
		urlSlug: 'python',
		iconSlug: 'python',
		website: 'https://www.python.org/'
	},
	{
		name: 'C#',
		urlSlug: 'csharp',
		iconSlug: 'csharp',
		website: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
	},
	{
		name: 'TypeScript',
		urlSlug: 'typescript',
		iconSlug: 'typescript',
		website: 'https://www.typescriptlang.org/'
	},
	{
		name: 'Java',
		urlSlug: 'java',
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
	}
];

const tecnologiesMap: Map<string, Tecnology> = new Map();
tecnologies.forEach((t) => tecnologiesMap.set(t.name, t));

export function getTecnology(name: string): Tecnology {
	const tecnology = tecnologiesMap.get(name);
	if (tecnology) return tecnology;

	console.warn(`Tecnology ${name} not found, returning default`);
	return { name: name.toString(), urlSlug: name.toString().toLowerCase() };
}
