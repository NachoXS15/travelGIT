import { NavLink, useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import { getAuth, browserLocalPersistence, browserSessionPersistence, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


export default function Login() {
    const navigate = useNavigate();
    const [keepSession, setKeepSession] = useState(false)
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                navigate("/admin/dashboard")
            }
        })

        return () => unsubscribe();
    }, [])

    const signInAuth = async(mail: FormDataEntryValue, pass: FormDataEntryValue) => {
        try {
            if (keepSession) {
                await setPersistence(auth, browserLocalPersistence)
            } else {
                await setPersistence(auth, browserSessionPersistence)
            }
            await signInWithEmailAndPassword(auth, mail.toString(), pass.toString());
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget);
        const mail = formData.get("user")?.toString() || "";
        const pass = formData.get("pass")?.toString() || "";
        
        try {
            await signInAuth(mail, pass);
        } catch (error) {
            console.log("error: ", error);
        }
    }

    return (
        <>
            <HeaderAdmin />
            <div className="w-full h-96 flex flex-col m-auto justify-center items-center" style={{ fontFamily: 'Mundial' }}>
                <form className="w-full md:w-2/6 px-5 h-fit py-10 m-auto gap-3 flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col items-start">
                        <label htmlFor="">Nombre de usuario</label>
                        <input className="w-full h-10 px-2 rounded border border-bluemain" type="email" name="user" />
                    </div>
                    <div className="w-full flex flex-col items-start">
                        <label htmlFor="">Contraseña</label>
                        <input className="w-full h-10 px-2 rounded border border-bluemain" type="password" name="pass" id="" />
                    </div>
                    <NavLink className="w-full h-10 text-center bg-bluesec text-white border flex items-center justify-center rounded" to="/admin/menu">
                        <span>Iniciar sesión</span>
                    </NavLink>
                    <div className="flex gap-2">
                        <input type="checkbox" name="session" checked={keepSession} id="session" />
                        <label className="text-md" htmlFor="session">Mantener sesión activada</label>
                    </div>
                </form>
                <NavLink className="text-center text-bluesec text-xl underline" to="/admin/menu">¿Olvidó su contraseña?</NavLink>
            </div>
        </>
    )
}
