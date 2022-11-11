export { matchers } from './client-matchers.js';

export const nodes = [
	() => import('./nodes/0'),
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
	() => import('./nodes/16')
];

export const dictionary = {
	"": [[1], [0], 2, 1],
	"browse": [[1], [0], 3],
	"login": [[1], [0], 6],
	"profile": [[1], [0], 8],
	"reviews": [[1], [0], 9],
	"signup": [[1], [0], 11],
	"upcoming": [[1], [0], 12],
	"user/backlog/[id]": [[1], [0], 13],
	"user/games/[id]": [[1], [0], 14],
	"user/home/[id]": [[1], [0], 15],
	"user/reviews/[id]": [[1], [0], 16],
	"games/[id]": [[1], [0], 4],
	"genres/[id]": [[1], [0], 5],
	"platforms/[id]": [[1], [0], 7],
	"search/[id]": [[1], [0], 10]
};