const currentDate = new Date();
let recentTimeStamp = currentDate.getTime() - 15778800000;
console.log(recentTimeStamp);
export async function load({ fetch, params }) {
	const res2 = await fetch(
		`https://api.igdb.com/v4/games/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
				Authorization: 'Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8',
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `fields name, cover.image_id, follows; sort follows desc; where follows != null & first_release_date>${Math.floor(
					currentDate.getTime() / 1000
				)};`
		}
	);

	const data2 = await res2.json();

	return { upcoming: data2 };
}