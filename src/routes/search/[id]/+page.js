export async function load({ fetch, params }) {
	const res = await fetch(
		`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/search/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
				Authorization: 'Bearer eusymeo73nswru9jiajpm2oij93hdb',
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `search "${params.id}"; fields name, game.cover.image_id, game.name; where game.cover.image_id != null & game.version_parent = null & game.screenshots != null;`
		}
	);

	const data = await res.json();
	console.log(data);
	return { searchResults: data };
}
