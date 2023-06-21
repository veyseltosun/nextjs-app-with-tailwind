"use client"
import React, {useState, useEffect} from "react"

export default function Home() {
  const [items, setItems] = useState([
    {name:"Coffee", price:"4.95"},
    {name:"Movie", price:"24.95"},
    {name:"Candy", price:"7.95"},
    
  ])

  const [total, setTotal] = useState(0)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        
        <h1 className='text-4xl p-4 text-center'>Expense Tracker</h1>
        <div className='bg-slate-800 p-4 rounded-lg'>

        <form className='grid grid-cols-6 itme-center text-black'>
          <input className='col-span-3 p-3border' type="text" placeholder="Enter Item"/>
          <input className='col-span-2 p-3 border mx-3' type="number" placeholder="Enter $"/>
          <button className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl" type="submit"> + </button>
        </form>
        <ul>
          {items.map((item, index)=>{
            const{name, price} = item;
            return(
              <li key={index} className="my-4 text-white w-full flex justify-between">
                <div className="p-4 w-full flex justify-between">
                  <span className="capitilaze">{name}</span>
                  <span>${price}</span>
                </div>
                <button>X</button>
              </li>
            )

          })}
        </ul>

        </div>
      </div>
    </main>
  )
}
