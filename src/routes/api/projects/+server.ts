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
			title: "CookedUp",
			slug: "cookedup",
			description: "A Unity cooking game with a focus on declarative AI using Answer Set Programming.",
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
			description: "Risk board game with declarative AI using Answer Set Programming.",
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
			description: "A web app for creating and managing school timetables.",
			date: "2023-12-18",
			published: true,
			tags: ["ASP", "Svelte", "TypeScript", "Web"],
			coverImage: "/assets/projects/school-timetable/cover.png",
			icon: "/assets/projects/school-timetable/icon.png",
		},
		{
			title: "BurnTables",
			slug: "burn-tables",
			description: "A web app for reviewing songs and albums, with Spotify integration.",
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
			description: "A web app for buying and selling second-hand clothes heavily inspired by Vinted.",
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
		}
	];






	projects = projects.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime()
	});

	return projects;

}

