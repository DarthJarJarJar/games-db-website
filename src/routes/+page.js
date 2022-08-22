import proxyURL from '../proxy'
let currentDate = new Date()
let recentTimeStamp = currentDate.getTime() - 31557600000;

/*export async function load({ fetch }) {
	const res = await fetch('/popularGames');

	if (res.ok) return { props: { searchResults: await res.json() } };
	return {
		status: res.status,
		error: new Error()
	};
}*/
export async function load({ fetch }) {
	const res = await fetch(`${proxyURL}https://api.igdb.com/v4/games/`, {
	method: 'POST',
	headers: {
		'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
		Authorization: 'Bearer sd089a9azgftad7tbbaroxitu6x71k',
		'X-Requested-With': 'XMLHttpRequest'
	},
	body: `fields name, cover.image_id, follows; sort follows desc; where rating != null & follows != null & first_release_date>${Math.floor(
			recentTimeStamp / 1000
		)} & first_release_date<${Math.floor(currentDate.getTime() / 1000)}; limit 500;`
});

	const data = await res.json();

	return [data]
}
