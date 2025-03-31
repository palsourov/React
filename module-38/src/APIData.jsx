export default function ApiData({data}){
    
    const {name ,email, id} = data;
    return(
        <div className="card">
            <h3>Name:{name} </h3>
            <h4>Email:{email} </h4>
            <h4>Id:{id} </h4>
        </div>
    )
}