import { c as create_ssr_component } from "../../chunks/index-38cedc01.js";
import { getFirestore } from "firebase/firestore";
import app from "../endpoints/fb.js";
import { getAuth } from "firebase/auth";
import "firebase/app";
getFirestore(app);
const auth = getAuth(app);
async function load({ params }) {
  console.log(auth.currentUser);
  return { props: { reviewData: 1 } };
}
const Reviews = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
export { Reviews as default, load };
