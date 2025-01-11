import { setPersistence, browserLocalPersistence, browserSessionPersistence, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";

export const signInAuth = async(mail: FormDataEntryValue, pass: FormDataEntryValue, keep: boolean) => {
        const keepSession = keep
        try {
            if (keepSession) {
                await setPersistence(auth, browserLocalPersistence)
            } else {
                await setPersistence(auth, browserSessionPersistence)
            }
            signInWithEmailAndPassword(auth, mail.toString(), pass.toString());
        } catch (error) {
            throw new Error;
        }
    }

export const logOutAuth = async() => {
    try {
        await signOut(auth);
        console.log("Session cerrada");
        window.location.href = "/admin/login"
    } catch (error) {
        throw new Error("Error al cerrar sesión")
    }
}