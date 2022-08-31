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
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24')
];

export const dictionary = {
	"": [[1], [0], 2, 1],
	"b": [[1], [0], 3],
	"ba": [[1], [0], 4],
	"browse": [[1], [0], 5],
	"dubey": [[1], [0], 6],
	"igdb": [[1], [0], 9],
	"login": [[1], [0], 10],
	"mygames": [[1], [0], 11],
	"profile": [[1], [0], 13],
	"reviews": [[1], [0], 14],
	"signup": [[1], [0], 16],
	"tes": [[1], [0], 17, 1],
	"testing": [[1], [0], 18],
	"testingclone": [[1], [0], 19],
	"upcoming": [[1], [0], 20],
	"user/backlog/[id]": [[1], [0], 21],
	"user/games/[id]": [[1], [0], 22],
	"user/home/[id]": [[1], [0], 23],
	"user/reviews/[id]": [[1], [0], 24],
	"games/[id]": [[1], [0], 7],
	"genres/[id]": [[1], [0], 8],
	"platforms/[id]": [[1], [0], 12],
	"search/[id]": [[1], [0], 15]
};