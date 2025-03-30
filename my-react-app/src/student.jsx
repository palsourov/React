export default function Student({student}){ 
    
    return(
        <div className="student">
             <h1>name:{student.name}</h1>
             <p>id: {student.id}</p>
             <p>age: {student.age}</p>
        </div>
    )
}