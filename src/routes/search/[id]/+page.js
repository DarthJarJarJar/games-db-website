export async function load({ fetch, params }) {
	const res = await fetch(
		`https://web-production-6d47.up.railway.app/https://api.igdb.com/v4/search/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
				Authorization: 'Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8',
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `search "${params.id}"; fields name, game.cover.image_id, game.name; where game.cover.image_id != null & game.version_parent = null & game.screenshots != null;`
		}
	);

	const data = await res.json();
	console.log(data);
	return { searchResults: data };
}
