import { Bulb } from "./Icons"

type PromotedTagProps = {
    promoted: boolean
}

export default function PromotedTag({promoted}: PromotedTagProps) {
  return (
    <button className={`w-fit px-2 py-1 pr-4 mt-2 flex items-center text-nowrap gap-1 ${promoted ? "bg-green" : "bg-red"} text-white rounded-full`}>
        <Bulb />
        {promoted ? "Promocionado" : "No promocionado"}
    </button>
  )
}