import { a as app } from "../../../../../chunks/fb.js";
import { getFirestore, query, collection, where, orderBy, getDocs } from "firebase/firestore";
import "firebase/app";
const db = getFirestore(app);
async function load({ params }) {
  const q = query(
    collection(db, "games"),
    where("reviewerName", "==", params.id),
    orderBy("reviewAt", "desc")
  );
  let username;
  console.log("testing");
  const userQ = query(collection(db, "users"), where("name", "==", params.id));
  const userQuerySnapshot = await getDocs(userQ);
  userQuerySnapshot.forEach((doc) => {
    username = doc.data().displayName;
    console.log(username);
  });
  let data;
  const querySnapshot = await getDocs(q);
  let array = [];
  querySnapshot.forEach((doc) => {
    data = doc.data();
    array.push(data);
  });
  return { reviewData: array, userName: username };
}
export {
  load
};
