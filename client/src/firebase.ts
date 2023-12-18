import { initializeApp } from 'firebase/app';
import { getAuth, browserSessionPersistence, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

namespace FirebaseConfig {

    const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
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