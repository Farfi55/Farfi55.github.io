import type { Project } from "$lib/types";
import { json } from "@sveltejs/kit";

export async function GET() {
	const projects = await getProjects();
	return json(projects);
}

async function getProjects() {

	const github = "https://github.com/Farfi55";
	let projects: Project[] = [
		{
			title: "AstroMiner - NFT Gaming Thesis",
			slug: "astro-miner",
			description: "A web-based game where players manage a fleet of mining ships 🚀 to extract resources from planets 🪐. The Ships are represented as NFTs on the Ethereum blockchain 🪙, allowing players to trade and upgrade their fleet. <br> This project was developed as part of my Master's thesis in Computer Science, with a focus on blockchain gaming and NFT integration.",
			date: "2025-11-01",
			published: true,
			coverImage: "/assets/projects/astro-miner/exp_3.png",
			images: [
				"/assets/projects/astro-miner/exp_3.png",
				"/assets/projects/astro-miner/hangar_4.png",
				"/assets/projects/astro-miner/login_1.png",
				"/assets/projects/astro-miner/market_2.png"
			],
			tags: ["Svelte", "TypeScript", "Game", "Ethereum", "Solidity"],
			repo: github + '/astro-miner',

		},
		{
			title: "Circloops",
			slug: "circloops",
			description: "A small game reminiscent of the ring throwing games in circuses 🎪. It was created using Godot 4 for the GTK 2025 Game Jam 🕹️ in under 4 days, the theme was 'Loop'.",
			date: "2025-07-15",
			repo: github + '/circloops',
			itchio: "https://farfi55.itch.io/circloops",
			tags: ["Godot", "Game"],
			coverImage: "/assets/projects/circloops/lvl-11_3.png",
			published: true,
		},
		{
			title: "People HR",
			slug: "people-hr",
			description: "A web app for both employees and HR managers 🧑‍💼 to manage employee data, leave requests 🏖️, and much more. Built with React for the frontend and Express and mongoDB for the backend.<br>The project was developed for a client during my work at SebyOne.",
			date: "2025-05-01",
			published: true,
			tags: ["React", "Node.js", "Express", "MongoDB", "Web"],
			coverImage: "/assets/projects/people-hr/login.jpeg",
		},
		{
			title: "Daas-iot distributed configurable control system",
			slug: "daas-iot-backend-server",
			description: "A Backend server for managing IoT devices through a REST API, built with Express and Sequelize. <br>One of my main tasks for the <i>DaaS-IoT</i> project.<br>",
			date: "2024-09-18",
			published: true,
			tags: ["Daas-IoT", "Node.js", "Express", "Sequelize"],
			repo: "https://github.com/sebyone/daasiot-examples-dccs",
			coverImage: "/assets/projects/sebyone/daas-iot-example-dccs/cover.png",
		},
		{
			title: "Git2MegaIgnore",
			slug: "git2megaignore",
			description: "A CLI tool that generates .megaignore files for the MegaSync ☁️ client based on the contents of a .gitignore file. <br> This is useful for developers who use MegaSync to sync their projects and want to ignore the same files that are ignored by Git.<br> The project was developed using Rust a side project to solve a problem I had with syncing my projects on MegaSync.",
			repo: github + "/git2megaignore",
			published: true,
			tags: ["Rust", "CLI"],
			coverImage: "/assets/projects/git2megaignore/cover.png",
			crates: "https://crates.io/crates/git2megaignore",
			date: "2024-12-29",
		},
		{
			title: "Personal website",
			slug: "personal-website",
			description: "This very website 🌐, built with SvelteKit, Tailwind CSS and more.",
			date: "2024-01-10",
			published: true,
			tags: ["Svelte", "TypeScript", "Tailwind", "Web"],
			repo: github + '/farfi55.github.io',
			coverImage: "/assets/projects/personal-website/cover.png",
		},
		{
			title: "CookedUp",
			slug: "cookedup",
			description: "A Unity cooking game 🍳 with a focus on declarative AI using Answer Set Programming.<br> The project is my <i>Bachelor's Thesis</i>.",
			date: "2023-09-13",
			tags: ["ASP", "Unity", "C#", "Game"],
			published: true,
			coverImage: "/assets/projects/cookedup/cover.png",
			icon: "/assets/projects/cookedup/icon.png",
			repo: github + '/CookedUp'
		},
		{
			title: "RiskASP",
			slug: "risk-asp",
			description: "Risk board game 🪖 with declarative AI using Answer Set Programming.<br> The goal of the project was to implement multiple AI strategies and have them compete against each other and the players.",
			date: "2023-06-07",
			repo: github + '/RiskASP',
			published: true,
			tags: ["ASP", "Unity", "C#", "Game"],
			coverImage: '/assets/projects/risk-asp/turn-15-cards.png',
			images: [
				"/assets/projects/risk-asp/main-menu.png",
				"/assets/projects/risk-asp/turn-15-cards.png",
				"/assets/projects/risk-asp/turn-22-domination.png",
				"/assets/projects/risk-asp/turn-25-victory-screen.png",
			],
		},
		{
			title: "School Timetable",
			slug: "school-timetable",
			repo: "https://github.com/School-Timetable/school-timetable",
			description: "A web app for creating and managing school timetables 🎒. <br> Through the use of <strong>Answer Set Programming</strong>, the app can generate optimal timetables based on the constraints provided by the user, like teacher availability 🧑‍🏫, hours required for each subject 🕘, and more. <br> The project was developed for the Agile Software Development course at university.",
			date: "2023-12-18",
			published: true,
			tags: ["ASP", "Svelte", "TypeScript", "Web"],
			coverImage: "/assets/projects/school-timetable/cover.png",
			icon: "/assets/projects/school-timetable/icon.png",
		},
		{
			title: "BurnTables",
			slug: "burn-tables",
			description: "A web app for reviewing songs and albums 💯, with Spotify player integration 🎶.",
			date: "2023-02-06",
			published: true,
			tags: ["Angular", "TypeScript", "Web", "Bootstrap"],
			repo: "https://github.com/BurnTables/BurnTablesApp",
			coverImage: "/assets/projects/burn-tables/cover.png",
			images: [
				"/assets/projects/burn-tables/cover.png",
				"/assets/projects/burn-tables/artist.png",
				"/assets/projects/burn-tables/track.png",
				"/assets/projects/burn-tables/feed.png",
				"/assets/projects/burn-tables/home.png",
				"/assets/projects/burn-tables/profile.png",
				"/assets/projects/burn-tables/reports.png",
			]
		},
		{
			title: "Svinted",
			slug: "svinted",
			description: "A web app for buying and selling second-hand clothes 👗 heavily inspired by Vinted. <br> Alongside the web app a simple Android app📱 was developed using Kotlin and the same backend. <br> The project was developed for the <i>Enterprise Applications</i> course at university.",
			date: "2022-09-08",
			published: true,
			tags: ["Spring", "Java", "Angular", "TypeScript", "Web", "Bootstrap"],
			repo: "https://github.com/Enterprise-Intellijence/web-site",
			coverImage: "/assets/projects/svinted/home.png",
			images: [
				"/assets/projects/svinted/home.png",
				"/assets/projects/svinted/item-page.png",
				"/assets/projects/svinted/chat.png",
				"/assets/projects/svinted/profile.png",
				"/assets/projects/svinted/order-page.png",
				"/assets/projects/svinted/orders-dashboard.png",
			],
		},
		{
			title: "Cave generator",
			slug: "cave-generator",
			description: "A procedural cave generator using cellular automata 👾.<br> The project was developed for the <i>Parallel Algorithms</i> course at university. And the goal was to generate the cave in parallel using MPI and C++. The Allegro library was used for rendering the cave 🎨.",
			date: "2022-06-20",
			published: true,
			tags: ["C++", "MPI", "Allegro"],
			repo: github + '/Allegro-MPI-Cave-Generator',
			coverImage: "/assets/projects/cave-generator/cover.png",
		},
		{
			title: "Focus",
			slug: "focus",
			description: "A gamified time management app ⏰. <br> The user grows different trees by focusing for a certain amount of time on a task 🌳. <br> The project was developed for the <i>User Interface Design</i> course at university.",
			date: "2022-06-20",
			published: true,
			tags: ["Java", "JavaFX"],
			coverImage: "/assets/projects/focus/home.png",
			repo: github + '/Focus-Project',
		}
	];






	projects = projects.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime()
	});

	return projects;

}

