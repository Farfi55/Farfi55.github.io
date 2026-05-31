import { Course } from "./types";


export const batchelorCourses: Course[] = [
	{
		name: "Analisi Matematica 1",
		grade: "30",
		cfu: 12,
		date: "14/01/2021"
	},
	{
		name: "Fondamenti di Programmazione 1",
		grade: "29",
		cfu: 6,
		date: "20/01/2021"
	},
	{
		name: "Economia e Organizzazione Aziendale",
		grade: "26",
		cfu: 6,
		date: "27/01/2021"
	},
	{
		name: "Architettura degli Elaboratori",
		grade: "30L",
		cfu: 6,
		date: "19/06/2021"
	},
	{
		name: "Inglese 1",
		grade: "30L",
		cfu: 9,
		date: "21/06/2021"
	},
	{
		name: "Elementi di Informatica Teorica",
		grade: "30",
		cfu: 6,
		date: "02/07/2021"
	},
	{
		name: "Matematica Discreta 1",
		grade: "28",
		cfu: 9,
		date: "05/07/2021"
	},
	{
		name: "Fisica 1",
		grade: "30",
		cfu: 6,
		date: "23/09/2021"
	},
	{
		name: "Ricerca Operativa",
		grade: "28",
		cfu: 12,
		date: "29/01/2022"
	},
	{
		name: "Fondamenti di Programmazione 2",
		grade: "30",
		cfu: 12,
		date: "01/02/2022"
	},
	{
		name: "Basi di Dati",
		grade: "30",
		cfu: 12,
		date: "24/06/2022"
	},
	{
		name: "User Interfaces Design",
		grade: "27",
		cfu: 6,
		date: "27/06/2022"
	},
	{
		name: "Sistemi Operativi",
		grade: "26",
		cfu: 6,
		date: "01/07/2022"
	},
	{
		name: "Algoritmi Paralleli e Sistemi Distribuiti",
		grade: "28",
		cfu: 6,
		date: "13/07/2022"
	},
	{
		name: "Ingegneria del Software",
		grade: "30",
		cfu: 9,
		date: "27/01/2023"
	},
	{
		name: "Fondamenti di Reti e Sicurezza Informatica",
		grade: "29",
		cfu: 6,
		date: "30/01/2023"
	},
	{
		name: "Web Applications",
		grade: "30",
		cfu: 6,
		date: "07/02/2023"
	},
	{
		name: "Data Driven Modeling",
		grade: "30",
		cfu: 6,
		date: "12/06/2023"
	},
	{
		name: "Intelligenza Artificiale",
		grade: "29",
		cfu: 12,
		date: "13/06/2023"
	},
	{
		name: "Enterprise Applications",
		grade: "30L",
		cfu: 12,
		date: "17/07/2023"
	},
	// {
	// 	name: "Tirocinio",
	// 	grade: "Approvato",
	// 	cfu: 6,
	// 	date: "15/09/2023"
	// },
	// {
	// 	name: "Prova Finale",
	// 	grade: "Idoneo",
	// 	cfu: 9,
	// 	date: "29/09/2023"
	// }
];


export const masterCourses: Course[] = [
	{
		name: "Cryptography",
		grade: "30",
		cfu: 6,
		date: "16/01/2024"
	},
	{
		name: "Secure Software Design",
		grade: "30",
		cfu: 6,
		date: "19/01/2024"
	},
	{
		name: "Research and Development Methodologies",
		grade: "29",
		cfu: 9,
		date: "29/01/2024"
	},
	{
		name: "Digital Imaging / Visual Computing",
		grade: "30L",
		cfu: 5,
		date: "20/06/2024"
	},
	{
		name: "German for Beginners with Prior Knowledge",
		grade: "30L",
		cfu: 2,
		date: "24/06/2024"
	},
	{
		name: "Interaction and Game Programming",
		grade: "30",
		cfu: 5,
		date: "25/06/2024"
	},
	{
		name: "Machine Learning",
		grade: "30",
		cfu: 6,
		date: "26/06/2024"
	},
	{
		name: "Intelligent Systems",
		grade: "30",
		cfu: 9,
		date: "05/07/2024"
	},
	{
		name: "Business Game",
		grade: "30",
		cfu: 6,
		date: "12/07/2024"
	},
	{
		name: "Cyber Offense and Defense",
		grade: "28",
		cfu: 6,
		date: "22/01/2025"
	},
	{
		name: "Deep Learning and Agents",
		grade: "30",
		cfu: 12,
		date: "14/02/2025"
	},
	{
		name: "Methods and Tools for Security in ICT",
		grade: "30",
		cfu: 6,
		date: "17/02/2025"
	},
	{
		name: "Theoretical Computer Science",
		grade: "29",
		cfu: 12,
		date: "19/06/2025"
	},
];

export const allCourses = [...batchelorCourses, ...masterCourses];
