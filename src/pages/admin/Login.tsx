import { getAuth, onAuthStateChanged } from "firebase/auth";
import HeaderAdmin from "../../components/HeaderAdmin";
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { signInAuth } from "../../config/auth/authServices";

export default function Login() {
    const navigate = useNavigate();
    const [keepSession, setKeepSession] = useState(false)
    const auth = getAuth();
    const [error, setError] = useState(false)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                navigate("/admin/check/dashboard");
            }
        })
        return () => unsubscribe();
    }, [])

   

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const mail = formData.get("user")?.toString() || "";
        const pass = formData.get("pass")?.toString() || "";
        
        try {
            await signInAuth(mail, pass, keepSession);
            setError(false);
        } catch (error) {
            setError(true);
        }
    }

    return (
        <>
            <HeaderAdmin />
            <div className="w-full h-96 flex flex-col m-auto justify-center items-center" style={{ fontFamily: 'Mundial' }}>
                <form className="w-full md:w-2/6 px-5 h-fit py-10 m-auto gap-3 flex flex-col items-center justify-center"
                onSubmit={handleSubmit}
                >
                    <div className="w-full flex flex-col items-start">
                        <label htmlFor="">Email</label>
                        <input className="w-full h-10 px-2 rounded border border-bluemain" type="email" name="user" />
                    </div>
                    <div className="w-full flex flex-col items-start">
                        <label htmlFor="">Contraseña</label>
                        <input className="w-full h-10 px-2 rounded border border-bluemain" type="password" name="pass" id="" />
                    </div>
                    <button className="w-full h-10 text-center hover:bg-bluemain bg-bluesec text-white border flex items-center justify-center rounded" type="submit">
                        <span>Iniciar sesión</span>
                    </button>
                    {error && (<span className='text-red'>Credenciales incorrectas</span>)}
                    <div className="flex gap-2">
                        <input type="checkbox" name="session" checked={keepSession} onChange={() => setKeepSession(!keepSession)} id="session" />
                        <label className="text-md" htmlFor="session">Mantener sesión activada</label>
                    </div>
                </form>
            </div>
        </>
    )
}
