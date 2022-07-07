export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-b5dabab2.js","js":["start-b5dabab2.js","chunks/index-23e304b5.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/12.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "store",
				pattern: /^\/store\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/store.js')
			},
			{
				type: 'endpoint',
				id: "fb",
				pattern: /^\/fb\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/fb.js')
			},
			{
				type: 'page',
				id: "dubey",
				pattern: /^\/dubey\/?$/,
				names: [],
				types: [],
				path: "/dubey",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "igdb",
				pattern: /^\/igdb\/?$/,
				names: [],
				types: [],
				path: "/igdb",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				path: "/login",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "mygames",
				pattern: /^\/mygames\/?$/,
				names: [],
				types: [],
				path: "/mygames",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "profile",
				pattern: /^\/profile\/?$/,
				names: [],
				types: [],
				path: "/profile",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "reviews",
				pattern: /^\/reviews\/?$/,
				names: [],
				types: [],
				path: "/reviews",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "signup",
				pattern: /^\/signup\/?$/,
				names: [],
				types: [],
				path: "/signup",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "testing",
				pattern: /^\/testing\/?$/,
				names: [],
				types: [],
				path: "/testing",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "testingclone",
				pattern: /^\/testingclone\/?$/,
				names: [],
				types: [],
				path: "/testingclone",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "upcoming",
				pattern: /^\/upcoming\/?$/,
				names: [],
				types: [],
				path: "/upcoming",
				shadow: null,
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				id: "user/backlog/[id]",
				pattern: /^\/user\/backlog\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				id: "user/games/[id]",
				pattern: /^\/user\/games\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "user/home/[id]",
				pattern: /^\/user\/home\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				id: "user/reviews/[id]",
				pattern: /^\/user\/reviews\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,16],
				b: [1]
			},
			{
				type: 'page',
				id: "games/[id]",
				pattern: /^\/games\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,17],
				b: [1]
			},
			{
				type: 'page',
				id: "genres/[id]",
				pattern: /^\/genres\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,18],
				b: [1]
			},
			{
				type: 'page',
				id: "platforms/[id]",
				pattern: /^\/platforms\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,19],
				b: [1]
			},
			{
				type: 'page',
				id: "search/[id]",
				pattern: /^\/search\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,20],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
