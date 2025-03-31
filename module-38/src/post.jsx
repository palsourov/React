export default function DatasPost({Data}){
    console.log(Data);
    const {title ,userId} = Data
    
  return (
      <div className="card">
          <h3>{title} </h3>
           <p>userId:{userId}</p>
           
      </div>
  )
}