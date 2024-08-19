import { Compass } from "./Icons"

type CategoryTagProps = {
    categoria: string
}

export default function CategoryTag({categoria}: CategoryTagProps) {
  return (
    <button className="w-fit px-2 pr-4 mt-2 flex items-center text-nowrap gap-1 bg-darkgray text-white rounded-full">
        <Compass />
        {categoria}
    </button>
  )
}
