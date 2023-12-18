import { initializeApp } from 'firebase/app';
import { getAuth, browserSessionPersistence, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, collection, doc } from 'firebase/firestore';
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

export namespace DataBase {

    const db = getFirestore(FirebaseConfig.app);

    export const getOrCreateUserDocument = (googleUser: User) => {


        console.log(googleUser);

    }

}

export type UserDocumentData = {};

export type PairedUser = { googleUser: User, userDocumentData: UserDocumentData }

export const getAuthUser = () => {

    const [authUser, setAuthUser] = useState<PairedUser | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FirebaseConfig.auth, (user) => {
            if(user == null) {
                setAuthUser(null);
            } else {
                DataBase.getOrCreateUserDocument(user);
                
                // Get document user
                setAuthUser({ googleUser: user, userDocumentData: {} });
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    return authUser;

}   

export default FirebaseConfig;