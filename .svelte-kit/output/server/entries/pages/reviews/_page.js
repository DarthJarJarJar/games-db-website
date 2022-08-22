import { getAuth } from "firebase/auth";
import { a as app } from "../../../chunks/fb.js";
import { getFirestore } from "firebase/firestore";
import "firebase/app";
getFirestore(app);
const auth = getAuth(app);
async function load({ params }) {
  console.log(auth.currentUser);
  return { reviewData: 1 };
}
export {
  load
};
