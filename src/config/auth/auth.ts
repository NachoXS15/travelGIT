import { auth } from "../FirebaseConfig";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

type userInfo = {
    email: string,
    password: string
}

export function signIn({ email, password }: userInfo){
    return signInWithEmailAndPassword(auth, email, password);
}

export function resetPassword({email}: userInfo){
    return sendPasswordResetEmail(auth, email)
}

export function signOut(){
    return auth.signOut();
}