async function getFilters() {
	const res = await fetch(
		`https://api.igdb.com/v4/genres/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': process.env.CLIENT_ID,
				Authorization: process.env.AUTH,
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `fields name; limit 31;`
		}
	);

	const data = await res.json();

	const res2 = await fetch(
		`https://api.igdb.com/v4/platforms/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': process.env.CLIENT_ID,
				Authorization: process.env.AUTH,
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `fields name, abbreviation ; limit 500;sort created_at desc;`
		}
	);

	const data2 = await res2.json();

	const res4 = await fetch(
		`https://api.igdb.com/v4/game_modes/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': process.env.CLIENT_ID,
				Authorization: process.env.AUTH,
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `fields name ; limit 500;sort created_at desc;`
		}
	);

	const data4 = await res4.json();

	const res5 = await fetch(
		`https://api.igdb.com/v4/themes/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': process.env.CLIENT_ID,
				Authorization: process.env.AUTH,
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `fields name ; limit 500;`
		}
	);

	const data5 = await res5.json();

	const res6 = await fetch(
		`https://api.igdb.com/v4/player_perspectives/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': process.env.CLIENT_ID,
				Authorization: process.env.AUTH,
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `fields name ; limit 500;`
		}
	);

	const data6 = await res6.json();

	return {
		props: { g: data, p: data2, modes: data4, themes: data5, perspectives: data6 }
	};
}

export async function get() {
	return {
		body: await getFilters()
	};
}
