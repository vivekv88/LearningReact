import { useState } from 'react'


function App() {

  const [color,setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 rounded-3xl px-3 py-2 inset-x-5'>
            <div className='px-3 py-2 flex flex-wrap rounded-3xl gap-4' style={{backgroundColor: "white"}}>
              <button onClick={() => setColor("red")} className='px-3 py-1 rounded-3xl text-white font-semibold' style={{backgroundColor: "red"}}>Red</button>
              <button onClick={() => setColor("Green")} className='px-3 py-1 rounded-3xl text-white font-semibold' style={{backgroundColor: "Green"}}>Green</button>
              <button onClick={() => setColor("Blue")} className='px-3 py-1 rounded-3xl text-white font-semibold' style={{backgroundColor: "Blue"}}>Blue</button>
              <button onClick={() => setColor("Orange")} className='px-3 py-1 rounded-3xl text-white font-semibold' style={{backgroundColor: "Orange"}}>Orange</button>
              <button onClick={() => setColor("Gray")} className='px-3 py-1 rounded-3xl text-white font-semibold' style={{backgroundColor: "Gray"}}>Gray</button>
              <button onClick={() => setColor("Aqua")} className='px-3 py-1 rounded-3xl text-white font-semibold' style={{backgroundColor: "Aqua"}}>Aqua</button>
              <button onClick={() => setColor("Pink")} className='px-3 py-1 rounded-3xl text-white font-semibold' style={{backgroundColor: "Pink"}}>Pink</button>
              <button onClick={() => setColor("Yellow")} className='px-3 py-1 rounded-3xl text-black font-semibold' style={{backgroundColor: "Yellow"}}>Yellow</button>
              <button onClick={() => setColor("Brown")} className='px-3 py-1 rounded-3xl text-white font-semibold' style={{backgroundColor: "Brown"}}>Brown</button>
              <button onClick={() => setColor("Purple")} className='px-3 py-1 rounded-3xl text-white font-semibold' style={{backgroundColor: "Purple"}}>Purple</button>
              <button onClick={() => setColor("Lavender")} className='px-3 py-1 rounded-3xl text-white font-semibold' style={{backgroundColor: "Lavender"}}>Lavender</button>
            </div>
        </div>

      </div>
    </>
  )
}

export default App
