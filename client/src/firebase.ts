import { initializeApp } from 'firebase/app';
import { getAuth, browserSessionPersistence, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

namespace FirebaseConfig {

    const firebaseConfig = {
        apiKey: "AIzaSyDHIdtD12vTbForHsjy3cw8-iaOhfD5BwQ",
        authDomain: "warehouse-dev-39d2e.firebaseapp.com",
        projectId: "warehouse-dev-39d2e",
        storageBucket: "warehouse-dev-39d2e.appspot.com",
        messagingSenderId: "676623153241",
        appId: "1:676623153241:web:47d109b72d663be5f69948",
        measurementId: "G-GGSSTKJNP0"
    };

    export const app = initializeApp(firebaseConfig);

    export const auth = getAuth(app);
    auth.setPersistence(browserSessionPersistence);

}

export const getAuthUser = () => {

    const [authUser, setAuthUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FirebaseConfig.auth, (user) => {
            setAuthUser(user);
        });

        return () => {
            unsubscribe();
        }
    })

    return authUser;

}   

export default FirebaseConfig;