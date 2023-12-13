import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import FirebaseConfig, { getAuthUser } from './firebase';

import NavBar from "./components/NavBar";

const App = () => {

    const user = getAuthUser();

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(FirebaseConfig.auth, provider);
    }

    return (
        <section id="root-app" className="dark">

            {

                user == null ? 
                <button onClick={handleGoogleLogin}>Sign in With Google</button> :
                <h1>Signed In</h1>


            }
            

        </section>
    )

}

export default App;