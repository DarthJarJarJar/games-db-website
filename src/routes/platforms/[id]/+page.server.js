export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.igdb.com/v4/games/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
				Authorization: 'Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8',
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `fields name, genres.name, platforms.name, release_dates.human, summary,screenshots.image_id, cover.image_id, artworks, involved_companies.company.name; sort follows desc; where platforms = ${params.id} & follows != null;`
		}
	);

	const data = await res.json();

	return { searchResults: data };
}
