export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/dubey.svelte"),
	() => import("../../src/routes/games/[id].svelte"),
	() => import("../../src/routes/genres/[id].svelte"),
	() => import("../../src/routes/igdb.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/login.svelte"),
	() => import("../../src/routes/mygames.svelte"),
	() => import("../../src/routes/platforms/[id].svelte"),
	() => import("../../src/routes/profile.svelte"),
	() => import("../../src/routes/reviews.svelte"),
	() => import("../../src/routes/search/[id].svelte"),
	() => import("../../src/routes/signup.svelte"),
	() => import("../../src/routes/testing.svelte"),
	() => import("../../src/routes/testingclone.svelte"),
	() => import("../../src/routes/upcoming.svelte"),
	() => import("../../src/routes/user/backlog/[id].svelte"),
	() => import("../../src/routes/user/games/[id].svelte"),
	() => import("../../src/routes/user/home/[id].svelte"),
	() => import("../../src/routes/user/reviews/[id].svelte")
];

export const dictionary = {
	"": [[0, 6], [1]],
	"dubey": [[0, 2], [1]],
	"igdb": [[0, 5], [1]],
	"login": [[0, 7], [1]],
	"mygames": [[0, 8], [1]],
	"profile": [[0, 10], [1]],
	"reviews": [[0, 11], [1]],
	"signup": [[0, 13], [1]],
	"testing": [[0, 14], [1]],
	"testingclone": [[0, 15], [1]],
	"upcoming": [[0, 16], [1]],
	"user/backlog/[id]": [[0, 17], [1]],
	"user/games/[id]": [[0, 18], [1]],
	"user/home/[id]": [[0, 19], [1]],
	"user/reviews/[id]": [[0, 20], [1]],
	"games/[id]": [[0, 3], [1]],
	"genres/[id]": [[0, 4], [1]],
	"platforms/[id]": [[0, 9], [1]],
	"search/[id]": [[0, 12], [1]]
};