import { p as proxyURL } from "../../../chunks/proxy.js";
const currentDate = new Date();
let recentTimeStamp = currentDate.getTime() - 315576e5;
async function getGames() {
  const res = await fetch(`${proxyURL}https://api.igdb.com/v4/games/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      Authorization: "Bearer hu9mx2ypl56r9t9rcimgekfa3x1vx8",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name, cover.image_id, follows; sort follows desc; where rating != null & follows != null & first_release_date>${Math.floor(
      recentTimeStamp / 1e3
    )} & first_release_date<${Math.floor(currentDate.getTime() / 1e3)}; limit 500; offset 28;`
  });
  const data = await res.json();
  return data;
}
async function get() {
  return {
    body: await getGames()
  };
}
export {
  get
};
