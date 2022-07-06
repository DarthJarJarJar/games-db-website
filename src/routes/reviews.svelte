<script context="module">
    import { getAuth, onAuthStateChanged } from "firebase/auth"
    import App from "../routes/fb"
   import { updateDoc,doc, getFirestore,collection, addDoc, query, where, getDoc, getDocs, orderBy, Firestore} from "firebase/firestore"; 
const db = getFirestore(App);
const auth = getAuth(App)
    export async function load({params}) {
       console.log(auth.currentUser)
    
    
        return {
            props : {reviewData : 1}
        }
    }

</script>
