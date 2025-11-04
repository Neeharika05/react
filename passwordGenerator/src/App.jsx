import { useCallback, useState, useEffect, useRef } from 'react'

import './App.css'
import { use } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber]  = useState(false)
  const [character,setCharacter]  = useState(false)
  const [password,setPassword]  = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(number) str += "1234567890"
    if(character) str += "!@#$%^&*(){}[]?\|<>."
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[number, character,length,setPassword])

  const copyPasswordToClickboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])
  return (
    <>
     <div className=" w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-16 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref = {passwordRef}
        />
         <button onClick={copyPasswordToClickboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        </div>
         <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
        <input 
        type='range'
        min={8}
        max={50}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
       className='cursor-pointer' />
       <label >{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                  setCharacter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
