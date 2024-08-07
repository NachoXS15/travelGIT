import { Compass } from "./Icons"

type CategoryTagProps = {
    categoria: string
}

export default function CategoryTag({categoria}: CategoryTagProps) {
  return (
    <div className="w-fit px-2 pr-4 mt-2 flex items-center gap-1 bg-darkgray text-lightgray rounded-full">
        <Compass />
        {categoria}
    </div>
  )
}
