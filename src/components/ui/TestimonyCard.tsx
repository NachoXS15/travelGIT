type testProps = {
    passenger: string
    msg: string
}

export default function TestimonyCard({msg, passenger}: testProps) {
  return (
    <div className="w-1/2 lg:w-1/3 h-fit p-5" style={{fontFamily: 'Mundial'}}>
        <div className="bg-white p-7 rounded-md shadow-md">
          <h2 className="text-bluesec font-bold text-2xl mb-2">{passenger}</h2>
          <p className="leading-relaxed">{msg}</p>
        </div>
    </div>
  )
}
