import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import FirebaseConfig, { getAuthUser } from '../firebase';
import { Navigate } from 'react-router-dom';

const Lander = () => {

    const user = getAuthUser();

    if(user != null) {
        return <Navigate to={'/app'} />
    }

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(FirebaseConfig.auth, provider);
    }

    return (

        <>
        
            <h1>Welcome to Warehouse</h1>
            <button onClick={handleGoogleLogin}>Login With Google</button>

        </>

    )

}

export default Lander;