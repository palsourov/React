import { useState } from "react"


export default function  Button({}){
  
     const[count , setCount] = useState(0)
    const hendlebtn = () =>{      
        setCount(count+1);
    }
    const remove = () =>{
        setCount(count-1)
    }
    return(
        <>
   
        <div>
              <h1>Count:{count} </h1>
              <button className='btn' onClick={hendlebtn}>ADD </button>

              <button className="btn btn2" onClick={remove}>Remove</button>

              
        </div>
        
        </>
    )
}