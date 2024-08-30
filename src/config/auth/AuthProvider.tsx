import React, { useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";

interface AuthContextProps {
    currentUser: User | null
    userLoggedIn: boolean;
    loading: boolean;
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user: User | null) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value: AuthContextProps = {
        currentUser,
        userLoggedIn,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading}
        </AuthContext.Provider>
    );
}

export { AuthContext };
