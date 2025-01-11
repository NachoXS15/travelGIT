import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../config/FirebaseConfig";
import Loader from "../../components/ui/loaders/Loader";
import { Navigate, Outlet } from "react-router";

export default function CheckUser() {

    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthenticated(!!user)
            setLoading(false)
        })

        return () => unsubscribe()

    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center flex-col">
                <Loader /> 
                <h2>Comprobando usuario</h2>
            </div>
            
        )
    }

    return authenticated ? <Outlet /> : <Navigate to="/admin/login" replace />
}
