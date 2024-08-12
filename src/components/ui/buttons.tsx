type props = React.PropsWithChildren<object>

export function VerMas({children}: props){
    return(
        <button className="w-fit bg-bluesec mt-5 rounded-full py-1 px-4 text-white hover:border-bluemain hover:bg-white hover:text-bluesec transition duration-300">
          {children}
        </button>
    )
}

// export function Consultar({children}:){
//     return(
//         <button className="w-fit bg-bluesec mt-5 rounded-full py-1 px-4 text-white hover:border-bluemain hover:bg-white hover:text-bluesec transition duration-300">
//           {children}
//         </button>
//     )
// }