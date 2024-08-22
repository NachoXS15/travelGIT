import { NavLink } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";

export default function Login() {
    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const formData = new FormData(e.currentTarget)
        const user = formData.get("user")
        const pass = formData.get("pass")

        console.log(pass, " ", user);

    }

    return (
        <>
            <HeaderAdmin />
            <div className="w-full h-96 flex flex-col m-auto justify-center items-center" style={{fontFamily: 'Mundial'}}>
                <form className="w-full md:w-2/6 px-5 h-fit py-10 m-auto gap-3 flex flex-col items-center justify-center" onSubmit={HandleSubmit}>
                    <div className="w-full flex flex-col items-start">
                        <label htmlFor="">Nombre de usuario</label>
                        <input className="w-full h-10 px-2 rounded border border-bluemain" type="type" name="user" />
                    </div>
                    <div className="w-full flex flex-col items-start">
                        <label htmlFor="">Contraseña</label>
                        <input className="w-full h-10 px-2 rounded border border-bluemain" type="password" name="pass" id="" />
                    </div>
                    <NavLink className="w-full h-10 text-center bg-bluesec text-white border flex items-center justify-center rounded" to="/admin/menu">
                        <span>Iniciar sesión</span>
                    </NavLink>
                </form>
                <NavLink className="text-center text-bluesec text-xl underline" to="/admin/menu">¿Olvidó su contraseña?</NavLink>
            </div>
        </>
    )
}
