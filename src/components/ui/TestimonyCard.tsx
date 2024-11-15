type testProps = {
    passenger: string
    msg: string
}

export default function TestimonyCard({msg, passenger}: testProps) {
  return (
    <div className="w-1/2 md:w-1/3 h-fit bg-white shadow-md rounded-md p-10" style={{fontFamily: 'Mundial'}}>
        <h2 className="text-bluesec font-bold text-2xl mb-2">{passenger}</h2>
        <p className="leading-relaxed">{msg}</p>
    </div>
  )
}
