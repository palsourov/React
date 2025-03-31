import { use } from "react"

export default function Friends({Data}){
      const userData = use(Data);
    return(  
    <div className="card">
        <h1>Friend:{userData.length}</h1>
    </div>
    )
}