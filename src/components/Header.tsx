import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <>
        <header className="w-full h-[80px] bg-cyan-400 flex justify-around items-center">
            <h2>logo</h2>
            <nav>
                <NavLink to="/">Nashe</NavLink>
                <NavLink to="/">Nashe</NavLink>
                <NavLink to="/">Nashe</NavLink>
                <NavLink to="/">Nashe</NavLink>
            </nav>
        </header>
    </>
  )
}
