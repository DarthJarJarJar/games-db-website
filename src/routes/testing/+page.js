const currentDate = new Date();
let recentTimeStamp = currentDate.getTime() - 15778800000;
console.log(recentTimeStamp);
export async function load({ fetch  }) {
	const res2 = await fetch(
		`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`,
		{
			method: 'POST',
			headers: {
				'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
				Authorization: 'Bearer eusymeo73nswru9jiajpm2oij93hdb',
				'X-Requested-With': 'XMLHttpRequest'
			},
			body: `fields name, involved_companies.company.name, genres.name, first_release_date, screenshots.image_id, cover.image_id, platforms.abbreviation, summary; sort follows desc; where rating != null & follows != null & id = (7334,114283,26192,19560);`
		} 
	);

	const data2 = await res2.json();

	return data2;
}

	