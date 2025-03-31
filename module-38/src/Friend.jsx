import { use } from "react";
import ApiData from "./APIData";

export default function Friends({Data}){
      const userData = use(Data);  
    return(  
    <div className="card">
        <h1>Friend:{userData.length}</h1>
        {
           userData.map(data => <ApiData data={data} ></ApiData>)
        }
    </div>
    )
}