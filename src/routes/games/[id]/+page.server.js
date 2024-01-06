export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.igdb.com/v4/games/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': process.env.CLIENT_ID,
				Authorization: process.env.AUTH,
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `fields name, genres.name, aggregated_rating, platforms.name, platforms.id, release_dates.human, summary,screenshots.image_id, cover.image_id, artworks, involved_companies.company.name; where id = ${params.id};`
		}
	);

	const data = await res.json();

	return { searchedGame: data[0] };
}
