import React from "react"
import { useState } from "react"

let Dropdown=()=>{
    let [dat,setdata]=useState(true)
    let [dat2,setdat2] = useState(true)
    
    
    
    const Raj=()=>{
        setdata(!dat);
        

    }
    const Raj2=()=>{
        setdat2(!dat2);
        

    }
   
    return(
        <>
        
    
<div className=" h-screen w-screen flex jus  items-center">

<div className=" shadow  shadow-blue-700">
    <div className=" border-2 shadow-red-900">
        <div className=" flex p-8 ">
            
            <div className=" border border-red-800 bg-red-100">
            <p onClick={Raj} className=" cursor-pointer">Submit</p>
        </div>
        <div>
            <img  onClick={ Raj2} className=" h-11 w-16 select-none"  src="https://th.bing.com/th/id/OIP.7QTxt6ecnGLkY02T8CaehQHaHa?w=201&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </div>
        
       
    </div>

    </div>
    {
        dat2 &&(
              <div  className="">
    <p className=" bg-blue-600 rounded-md hover:bg-green-500 hover:rotate-3">1. About</p>
    <p className=" bg-red-600 rounded-md hover:bg-yellow-500 hover:rotate-3 ">2. Information</p>
    <p className=" bg-green-600 rounded-md hover:bg-blue-500 hover:rotate-3">3. Data</p>
    <p className=" bg-yellow-600 rounded-md hover:bg-red-500 hover:rotate-3">4. Contact</p>
    </div>

        )
    }
   
    
    
 
</div>
{
    dat && (

        <div  className=" border-red-950  border-2 overflow-hidden">
    <p className=" bg-blue-500 rounded-md hover:bg-red-300">1.Alpha</p>
    <p className=" bg-green-500 rounded-md hover:bg-orange-500">2.beta</p>
    <p className=" bg-slate-800 rounded-md hover:bg-white">3.Gamma</p>
</div>
    )
}

 {/* {
        dat&& (
            <div>
        <section  className=" bg-slate-400 rounded-md">
            <option className=" bg-green-300 hover:bg-red-300" value="1">1. Hey</option>
            <option className=" bg-red-300 hover:bg-blue-300" value="1">2. Hey</option>
            <option className=" bg-blue-300 hover:bg-slate-400 " value="1">3. Hey</option>
            <option className=" hover:bg-black hover:text-white" value="1">4. Hey</option>

        </section>
    </div>
        )
    } */}
</div>

</>


    )
}
export default Dropdown