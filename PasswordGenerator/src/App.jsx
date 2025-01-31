import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword]  = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i <= length; i++) {
      if(numberAllowed) str += "0123456789";
      if(charAllowed) str += "!@#$%~`^&*_-=+'?";

      let index = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(index);
      
    }

    setPassword(pass);

  }, [length,numberAllowed,charAllowed,setPassword])

  const copytoClipboard = useCallback(() => {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
  },[password])

    useEffect(() => {
      passwordGenerator();
    },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='bg-gray-800 mt-10 w-full max-w-[39vw] px-5 py-3 m-auto rounded-lg text-orange-500'>
        <h1 className='text-center text-3xl font-semibold text-white py-4'>Password Generator</h1>
        <div className='flex items-center '>
          <input className='text-2xl bg-white rounded-sm px-3 py-2 w-full outline-none font-semibold' 
          type="text"
          placeholder='Password' 
          readOnly  
          ref={passwordRef}
          value={password}/>
          <button 
          className='text-2xl cursor-pointer text-white bg-blue-500 px-3 py-2 rounded-md'
          onClick={copytoClipboard}>copy</button>
        </div>
        <div className='flex gap-x-3'>
        <div className='flex flex-start justify-center items-center py-4 gap-x-2'>
          <input type="range" 
          min={8}
          max={50}
          value={length}
          className='cursor-pointer accent-orange-500 w-[7vw] h-2'
          onChange={(e) => setLength(e.target.value)}
          />
          <label className='text-xl font-semibold'>Length {length}</label>
        </div>
        <div className='flex flex-start justify-center items-center py-4 gap-x-2'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
          />
          <label className='text-xl font-semibold'>Numbers</label>
        </div>
        <div className='flex justify-center items-center py-4 gap-x-2'>
          <input type="checkbox" 
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label className='text-xl font-semibold'>Characters</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
