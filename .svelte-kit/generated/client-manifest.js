export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')];

export const server_loads = [];

export const dictionary = {
	"/": [~2],
	"/browse": [~3],
	"/games/[id]": [4],
	"/genres/[id]": [5],
	"/login": [6],
	"/platforms/[id]": [7],
	"/profile": [8],
	"/reviews": [9],
	"/search/[id]": [10],
	"/signup": [11],
	"/upcoming": [12],
	"/user/backlog/[id]": [13],
	"/user/games/[id]": [14],
	"/user/home/[id]": [15],
	"/user/reviews/[id]": [16]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};