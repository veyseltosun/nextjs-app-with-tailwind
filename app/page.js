"use client"
import React, {useState, useEffect} from "react"
import { db } from "./firebase"
import { collection, addDoc, getDocs, onSnapshot, querySnapShot, query } from "firebase/firestore";

export default function Home() {
  const [items, setItems] = useState([
    // {name:"Coffee", price:"4.95"},
    // {name:"Movie", price:"24.95"},
    // {name:"Candy", price:"7.95"},
    
  ])

  const [newItem, setNewItem] = useState({name:"", price:"",})
  const [total, setTotal] = useState(0);
  // add item to database
  const addItem = async (e) => {
    e.preventDefault();
    if(newItem.name !== "" && newItem.price !== "") {
      // setItems([...items, newItem])
      await addDoc(collection(db, "items"), {
        name:newItem.name.trim(),
        price:newItem.price,

      });
      setNewItem({name:"", price:"",})
    }
  }
  // read item from database
useEffect(() => {
 const q = query(collection(db, "items"));
 const unsubscribe = onSnapshot(q, (querySnapShot) => {
  let itemsArr = []
  querySnapShot.forEach((doc) => {
    itemsArr.push({...doc.data(), id:doc.id})
  });
  setItems(itemsArr)
  // read total from itemsArr
  const calculateTotal = () => {
  const totalPrice = itemsArr.reduce((sum, item) => sum + parseFloat(item.price), 0)
  setTotal(totalPrice)
};
calculateTotal();
return() => unsubscribe();
 } )
},[])

  // delete item from database
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        
        <h1 className='text-4xl p-4 text-center'>Expense Tracker</h1>
        <div className='bg-slate-800 p-4 rounded-lg'>

        <form className='grid grid-cols-6 itme-center text-black'>
          <input className='col-span-3 p-3border'
          value={newItem.name}
          onChange={(e)=> setNewItem({...newItem, name:e.target.value})}
          type="text" placeholder="Enter Item"/>
          <input className='col-span-2 p-3 border mx-3'
           value={newItem.price}
           onChange={(e)=> setNewItem({...newItem, price:e.target.value})}
          type="number" placeholder="Enter $"/>
          <button className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl"
           onClick={addItem}
           type="submit"> + </button>
        </form>
        <ul>
          {items?.map((item, index)=>{
          
            return(
              <li key={index} className="my-4 text-white w-full flex justify-between bg-slate-950">
                <div className="p-4 w-full flex justify-between">
                  <span className="capitilaze">{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button 
                 className="ml-8 p-4 border-1-2 border-slate"
                 
                

                >X</button>
              </li>
            )

          })}
        </ul>
        {items.length < 1 ? ("") : (
          <div className="text-white flex justify-between p-4">
            <span>Total</span>
            <span>${total}</span>
          </div>
        )}

        </div>
      </div>
    </main>
  )
}
