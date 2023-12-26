import type { Tecnology } from "../app";




export const tecnologies: Tecnology[] = [
	{
		name: 'Unity',
		iconSlug: 'unity',
		website: 'https://unity.com/'
	},
	{
		name: 'Svelte',
		iconSlug: 'svelte',
		website: 'https://svelte.dev/'
	},
	{
		name: 'Angular',
		iconSlug: 'angular/c3002f',
		website: 'https://angular.io/'
	},
	{
		name: 'ASP',
		title: 'Answer Set Programming',
		website: 'https://en.wikipedia.org/wiki/Answer_set_programming'
	},
	{
		name: 'Spring',
		iconSlug: 'spring',
		website: 'https://spring.io/'
	},
	{
		name: 'Bootstrap',
		iconSlug: 'bootstrap',
		website: 'https://getbootstrap.com/'
	},
	{
		name: 'Tailwind',
		iconSlug: 'tailwindcss',
		website: 'https://tailwindcss.com/'
	},
	{
		name: 'Python',
		iconSlug: 'python',
		website: 'https://www.python.org/'
	},
	{
		name: 'C#',
		iconSlug: 'csharp',
		website: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
	},
	{
		name: 'TypeScript',
		iconSlug: 'typescript',
		website: 'https://www.typescriptlang.org/'
	},
	{
		name: 'Java',
		website: 'https://www.java.com/'
	},
	{
		name: 'Rust',
		iconSlug: 'rust',
		website: 'https://www.rust-lang.org/'
	},
	{
		name: 'Godot',
		iconSlug: 'godotengine',
		website: 'https://godotengine.org/'
	},
	{
		name: 'C++',
		iconSlug: 'cplusplus',
		website: 'https://isocpp.org/'
	},
	{
		name: 'Perl',
		iconSlug: 'perl',
		website: 'https://www.perl.org/'
	}
];

const tecnologiesMap: Map<string, Tecnology> = new Map();
tecnologies.forEach(t => tecnologiesMap.set(t.name, t));


export function getTecnology(name: string): Tecnology {
	return tecnologiesMap.get(name.toString()) || { name: name.toString() };
}
