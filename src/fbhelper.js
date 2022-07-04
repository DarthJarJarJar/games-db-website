import { getAuth, onAuthStateChanged} from 'firebase/auth'
import App from './routes/fb';


const auth = getAuth(App)
let currentUser = auth.currentUser;

export default currentUser;