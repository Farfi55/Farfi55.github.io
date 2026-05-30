import type { Technology } from "./types";

export const tecnologyType = {
	languages: 'languages',
	frontends: 'frontends',
	backends: 'backends',
	libraries: 'libraries',
	others: 'others'
};

export const technologies: Technology[] = [

	// LANGUAGES ----------------------
	{
		name: 'TypeScript',
		urlSlug: 'typescript',
		iconSlug: 'typescript',
		website: 'https://www.typescriptlang.org/',
		type: tecnologyType.languages
	},
	{
		name: 'JavaScript',
		urlSlug: 'javascript',
		iconSlug: 'javascript',
		website: 'https://www.javascript.com/',
		hide: true,
		type: tecnologyType.languages
	},
	{
		name: 'CSS',
		urlSlug: 'css',
		iconSlug: 'css3',
		website: 'https://www.w3.org/Style/CSS/',
		hide: true,
		type: tecnologyType.languages
	},
	{
		name: 'HTML',
		urlSlug: 'html',
		iconSlug: 'html5',
		website: 'https://html.spec.whatwg.org/',
		hide: true,
		type: tecnologyType.languages
	},
	{
		name: 'Python',
		urlSlug: 'python',
		iconSlug: 'python',
		website: 'https://www.python.org/',
		type: tecnologyType.languages
	},
	{
		name: 'C#',
		urlSlug: 'csharp',
		// removed icon since microsoft legal team wanted it removed from simpleicons
		iconSlug: '/assets/icons/csharp.png',
		website: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
		type: tecnologyType.languages
	},
	{
		name: 'ASP',
		urlSlug: 'asp',
		iconSlug: '/assets/icons/clingo.png',
		title: 'Answer Set Programming',
		website: 'https://en.wikipedia.org/wiki/Answer_set_programming',
		type: tecnologyType.languages
	},
	{
		name: 'Java',
		urlSlug: 'java',
		iconSlug: 'fa-brands fa-java',
		website: 'https://www.java.com/',
		type: tecnologyType.languages
	},
	{
		name: 'Rust',
		urlSlug: 'rust',
		iconSlug: 'rust',
		website: 'https://www.rust-lang.org/',
		type: tecnologyType.languages
	},
	{
		name: 'C++',
		urlSlug: 'cplusplus',
		iconSlug: 'cplusplus',
		website: 'https://isocpp.org/',
		type: tecnologyType.languages
	},
	{
		name: 'Bash',
		urlSlug: 'bash',
		iconSlug: 'gnubash',
		website: 'https://www.gnu.org/software/bash/',
		type: tecnologyType.languages
	},
	{
		name: 'Perl',
		urlSlug: 'perl',
		iconSlug: 'perl',
		website: 'https://www.perl.org/',
		type: tecnologyType.languages
	},
	{
		name: 'Solidity',
		urlSlug: 'solidity',
		iconSlug: 'solidity',
		website: 'https://docs.soliditylang.org/',
		type: tecnologyType.languages,
		hide: true
	},

	// FRONTENDS  ----------------------
	{
		name: 'React',
		urlSlug: 'react',
		iconSlug: 'react',
		website: 'https://reactjs.org/',
		type: tecnologyType.frontends
	},
	{
		name: 'Svelte',
		urlSlug: 'svelte',
		iconSlug: 'svelte',
		website: 'https://svelte.dev/',
		type: tecnologyType.frontends
	},
	{
		name: 'Angular',
		urlSlug: 'angular',
		iconSlug: 'angular',
		color: 'c3002f',
		website: 'https://angular.io/',
		type: tecnologyType.frontends
	},

	// BACKENDS ----------------------
	{
		name: 'Express',
		urlSlug: 'express',
		iconSlug: 'express',
		website: 'https://expressjs.com/',
		type: tecnologyType.backends
	},
	{
		name: 'Spring',
		urlSlug: 'spring',
		iconSlug: 'spring',
		website: 'https://spring.io/',
		type: tecnologyType.backends
	},
	{
		name: 'Django',
		urlSlug: 'django',
		iconSlug: 'django',
		website: 'https://www.djangoproject.com/',
		type: tecnologyType.backends
	},

	// LIBRARIES ----------------------
	{
		name: 'Node.js',
		urlSlug: 'nodejs',
		iconSlug: 'nodedotjs',
		website: 'https://nodejs.org/',
		type: tecnologyType.libraries
	},
	{
		name: 'Tailwind',
		urlSlug: 'tailwind',
		iconSlug: 'tailwindcss',
		website: 'https://tailwindcss.com/',
		type: tecnologyType.libraries
	},
	{
		name: 'Bootstrap',
		urlSlug: 'bootstrap',
		iconSlug: 'bootstrap',
		website: 'https://getbootstrap.com/',
		type: tecnologyType.libraries
	},
	{
		name: 'Sequelize',
		urlSlug: 'sequelize',
		iconSlug: 'sequelize',
		website: 'https://sequelize.org/',
		type: tecnologyType.libraries
	},
	{
		name: 'Mongoose',
		urlSlug: 'mongoose',
		iconSlug: 'mongoose',
		website: 'https://mongoosejs.com/',
		type: tecnologyType.libraries
	},

	// OTHERS ----------------------
	{
		name: 'DaaS-IoT',
		urlSlug: 'daas-iot',
		iconSlug: '/assets/icons/daas-iot.png',
		website: 'https://daasiot.sebyone.it/',
		type: tecnologyType.others,
		hide: true

	},
	{
		name: 'Linux',
		urlSlug: 'linux',
		iconSlug: 'linux',
		website: 'https://en.wikipedia.org/wiki/Linux',
		type: tecnologyType.others
	},
	{
		name: 'Windows',
		urlSlug: 'windows',
		iconSlug: '/assets/icons/windows.webp',
		website: 'https://windows.com/',
		type: tecnologyType.others
	},
	{
		name: 'Unity',
		urlSlug: 'unity',
		iconSlug: 'unity',
		website: 'https://unity.com/',
		type: tecnologyType.others
	},
	{
		name: 'MongoDB',
		urlSlug: 'mongodb',
		iconSlug: 'mongodb',
		website: 'https://www.mongodb.com/',
		type: tecnologyType.others
	},
	{
		name: 'PostgreSQL',
		urlSlug: 'postgresql',
		iconSlug: 'postgresql',
		website: 'https://www.postgresql.org/',
		type: tecnologyType.others
	},
	{
		name: 'Godot',
		urlSlug: 'godot',
		iconSlug: 'godotengine',
		website: 'https://godotengine.org/',
		type: tecnologyType.others
	},
	{
		name: 'Game',
		urlSlug: 'game',
		iconSlug: 'fa-solid fa-gamepad',
		hide: true,
		type: tecnologyType.others
	},
	{
		name: 'Web',
		urlSlug: 'web',
		iconSlug: 'fa-solid fa-globe',
		hide: true,
		type: tecnologyType.others
	},
	{
		name: 'Ethereum',
		urlSlug: 'ethereum',
		iconSlug: 'fa-brands fa-ethereum',
		website: 'https://ethereum.org/',
		hide: true,
		type: tecnologyType.others
	},
	{
		name: 'CLI',
		urlSlug: 'cli',
		iconSlug: 'fa-solid fa-terminal',
		type: tecnologyType.others,
		hide: true
	},
];

const technologiesMap: Map<string, Technology> = new Map();
technologies.forEach((t) => technologiesMap.set(t.name.toLowerCase(), t));

const technologiesByType: Map<string, Technology[]> = new Map();
technologies.forEach((t) => {
	if (!technologiesByType.has(t.type)) technologiesByType.set(t.type, []);
	technologiesByType.get(t.type)?.push(t);
});

export function getTechnologiesByType(type: string): Technology[] {
	return technologiesByType.get(type) || [];
}

export function getTechnology(name: string): Technology {
	const technology = technologiesMap.get(name.toLowerCase());
	if (technology) return technology;

	console.warn(`Technology ${name} not found, returning default`);
	return { name: name.toString(), urlSlug: name.toString().toLowerCase(), type: tecnologyType.others };
}
