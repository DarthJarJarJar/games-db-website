import { p as proxyURL } from "../../chunks/proxy.js";
let currentDate = new Date();
let recentTimeStamp = currentDate.getTime() - 315576e5;
async function load({ fetch }) {
  const res = await fetch(`${proxyURL}https://api.igdb.com/v4/games/`, {
    method: "POST",
    headers: {
      "Client-ID": "o5xvtlqq670n8hhzz05rvwpbr7hjt4",
      Authorization: "Bearer eusymeo73nswru9jiajpm2oij93hdb",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: `fields name, cover.image_id, follows; sort follows desc; where rating != null & follows != null & first_release_date>${Math.floor(
      recentTimeStamp / 1e3
    )} & first_release_date<${Math.floor(currentDate.getTime() / 1e3)}; limit 500;`
  });
  const data = await res.json();
  return [data];
}
export {
  load
};
