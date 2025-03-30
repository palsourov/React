import { useState } from "react"

export default function Cricket(){
    const [run , setRun] = useState(0)
   
    const singleRun = () =>{
        setRun(run+1)
    }
    const FourRun = () =>{
        setRun(run+4)

    }
    const SixRun = () =>{
        setRun(run+6)

    }
  
    
    return(
        <div>  
          {
           run>=50 && <h1>Your score is:50</h1>
          }
          {
           run>=100 && <h1>Your score is:100</h1>
          }
             <h1>Run: {run}</h1>
              <button className="btn run" onClick={singleRun}>single</button>
              <button className="btn run" onClick={FourRun}>four</button>
              <button className="btn run" onClick={SixRun}>six  </button>
       
            
        </div>
    )
}