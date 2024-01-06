export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.igdb.com/v4/search/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': process.env.CLIENT_ID,
				Authorization: process.env.AUTH,
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `search "${params.id}"; fields name, game.cover.image_id, game.name; where game.cover.image_id != null & game.version_parent = null & game.screenshots != null;`
		}
	);

	const data = await res.json();
	console.log(data);
	return { searchResults: data };
}
