import { a as app } from "../../../../../chunks/fb.js";
import "../../../../../chunks/index.js";
/* empty css                                                              */import { getFirestore, query, collection, where, getDocs } from "firebase/firestore";
import "firebase/app";
const db = getFirestore(app);
async function load({ params }) {
  const q = query(collection(db, "users"), where("name", "==", params.id));
  let data;
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return { arrayofgames: data };
}
export {
  load
};
