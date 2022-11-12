import { error } from '@sveltejs/kit';

let currentDate = new Date()
let recentTimeStamp = currentDate.getTime() - 31557600000;

async function getGames() {
    const res = await fetch(`https://api.igdb.com/v4/games/`, {
		method: 'POST',
		headers: {
			'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
			Authorization: 'Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8',
			'X-Requested-With': 'XMLHttpRequest'
		},
		body: `fields name, cover.image_id, follows; sort follows desc; where rating != null & follows != null & first_release_date>${Math.floor(
				recentTimeStamp / 1000
			)} & first_release_date<${Math.floor(currentDate.getTime() / 1000)}; limit 500;`
	});
	
		const data = await res.json();
	
		return [data]
	}
 
/** */
export async function load() {
  const post = await getGames();
 
  if (post) {
    return post;
  }
 
  throw error(404, 'Not found');
}

