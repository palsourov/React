import { use } from "react";
import DatasPost from "./post";
export default function Posts({Post}){
      const postdata= use(Post);
    
   return(
    <div className="card">
        <h1>post:{postdata.length} </h1>
         {
           postdata.map(Data=><DatasPost Data= {Data}></DatasPost>)
         }
    </div>
   )
}