import React, { useState } from 'react';
import {useRouter} from 'next/router'


const EditProfile=()=> {
    
    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [roll, setRoll] = useState()
    const [about,setAbout] = useState()
    const [department,setDepartment] = useState()
    const router=useRouter()
  
      const userCreateProfile=async(e)=>{
        console.log("usr called")
        e.preventDefault()
        const res=await fetch('http://localhost:3000/api/users',{
            method:"POST",
             body:JSON.stringify({
                name,roll,department,email,about
             })
        })
      
        const res2=await res.json()
        if(res2.error){console.log("error")}
        else{console.log("Success")}
        router.push('/')
      }
    return (
        <main>
            <form>
                <div className="name">
                    <label forEach="fullName" >Full Name</label>
                    <input type="text" id="fullName" name="fullName"  value={name} required onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="roll">   
                    <label forEach="roll" >Roll number</label>
                    <input type="number"  id="roll" name="roll" required value={roll} onChange={(e)=>{setRoll(e.target.value)}} />
                </div> 
                <div className="department">    
                    <label forEach="department" >department</label>
                    <input type="text" id="department" name="department"  value={department} onChange={(e)=>{setDepartment(e.target.value)}} />
                </div>
                <div className="email">    
                    <label forEach="email" >Email</label>
                    <input type="email" id="email" name="email" required  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                

                <div className="about">   
                    <label forEach="about" >About</label>
                    <textarea type="text" id="about" name="about" value={about} required onChange={(e)=>{setAbout(e.target.value)}}/>
                </div>
                  
                
                <div className="buttons">
                    <button>Cancel</button>
                    <button type="Submit" onClick={userCreateProfile} >Create Profile</button>
                </div>
            </form>
        </main>
    )
}
export default EditProfile;