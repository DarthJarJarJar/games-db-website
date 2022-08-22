export const manifest = {
	appDir: "_app",
	assets: new Set(["controller.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-7d5ef331.js","imports":["_app/immutable/start-7d5ef331.js","_app/immutable/chunks/index-4fb290ec.js","_app/immutable/chunks/singletons-5dc88023.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			},
			{
				type: 'endpoint',
				id: "filters",
				pattern: /^\/filters\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/filters/_server.js')
			},
			{
				type: 'endpoint',
				id: "offsetGames",
				pattern: /^\/offsetGames\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/offsetGames/_server.js')
			},
			{
				type: 'endpoint',
				id: "popularGames",
				pattern: /^\/popularGames\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/popularGames/_server.js')
			},
			{
				type: 'endpoint',
				id: "store",
				pattern: /^\/store\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/store/_server.js')
			},
			{
				type: 'page',
				id: "b",
				pattern: /^\/b\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 3
			},
			{
				type: 'page',
				id: "ba",
				pattern: /^\/ba\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 4
			},
			{
				type: 'page',
				id: "browse",
				pattern: /^\/browse\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 5
			},
			{
				type: 'page',
				id: "dubey",
				pattern: /^\/dubey\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 6
			},
			{
				type: 'page',
				id: "igdb",
				pattern: /^\/igdb\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 9
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 10
			},
			{
				type: 'page',
				id: "mygames",
				pattern: /^\/mygames\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 11
			},
			{
				type: 'page',
				id: "profile",
				pattern: /^\/profile\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 13
			},
			{
				type: 'page',
				id: "reviews",
				pattern: /^\/reviews\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 14
			},
			{
				type: 'page',
				id: "signup",
				pattern: /^\/signup\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 16
			},
			{
				type: 'page',
				id: "testing",
				pattern: /^\/testing\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 17
			},
			{
				type: 'page',
				id: "testingclone",
				pattern: /^\/testingclone\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 18
			},
			{
				type: 'page',
				id: "upcoming",
				pattern: /^\/upcoming\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 19
			},
			{
				type: 'page',
				id: "user/backlog/[id]",
				pattern: /^\/user\/backlog\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				errors: [1],
				layouts: [0],
				leaf: 20
			},
			{
				type: 'page',
				id: "user/games/[id]",
				pattern: /^\/user\/games\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				errors: [1],
				layouts: [0],
				leaf: 21
			},
			{
				type: 'page',
				id: "user/home/[id]",
				pattern: /^\/user\/home\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				errors: [1],
				layouts: [0],
				leaf: 22
			},
			{
				type: 'page',
				id: "user/reviews/[id]",
				pattern: /^\/user\/reviews\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				errors: [1],
				layouts: [0],
				leaf: 23
			},
			{
				type: 'page',
				id: "games/[id]",
				pattern: /^\/games\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				errors: [1],
				layouts: [0],
				leaf: 7
			},
			{
				type: 'page',
				id: "genres/[id]",
				pattern: /^\/genres\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				errors: [1],
				layouts: [0],
				leaf: 8
			},
			{
				type: 'page',
				id: "platforms/[id]",
				pattern: /^\/platforms\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				errors: [1],
				layouts: [0],
				leaf: 12
			},
			{
				type: 'page',
				id: "search/[id]",
				pattern: /^\/search\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				errors: [1],
				layouts: [0],
				leaf: 15
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
