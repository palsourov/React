

export default function Food({name ,number,hungry}){
   
       if(hungry){
        return(
            <div className="foodContent">
            
            <h1>{name}</h1>
             <p>{number}</p>
        </div>
        )
        
       } 
       
          
    
}