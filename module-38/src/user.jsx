import { use } from "react"

export default function User({url}){
    const user = use(url);
  
    
    return(
        <div className="card">
             <h1>User:{user.length} </h1>
        </div>
    )
}