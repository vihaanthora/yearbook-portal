import React from 'react'
import Link from 'next/link'
import {useState} from 'react'

const search=({product})=>{
    const [roll, setRoll] = useState();
    function handleChange(event) {
        setRoll(event.target.value);
      }
      
  return (
    <div>Search Your Friends
        <input type="Name" className="form-control" value={roll}  placeholder="Roll number" onChange={handleChange}
         />
              <Link href={'/product/[id]'} as={`/product/${roll}`}> Search
</Link>
    </div>
  )
}
export async function getStaticProps(){
    const res=await fetch('http://localhost:3000/api/hello')
    const data=await res.json()
    return{
      props:{products:data}
    }
  }

export default search