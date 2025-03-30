
import './App.css'
import Todo from './Todo'
import Food from './food'
import Singer from './singer';
import Student from './student';

function App() {
  const Singers=[ 'saurov','rajib','rahi','proyash'];

   const Students = [
    {name:'sourov', id:'070',age:'23'},
    {name:'rajib', id:'075',age:'24'},
    {name:'rahi', id:'049',age:'24'},
    {name:'proyash', id:'043',age:'22'},
    {name:'arnab', id:'068',age:'21'},
   ]
   
  const age=20;
  return (
    <> 
      <h1>React component</h1> 
      {
          Students.map(student => <Student student={student} ></Student> )
      }
     

      {/* {
         Singers.map(singer => <Singer name ={singer}  age={age}></Singer>  )
      }  */}
        
      {/* <Food name="Apple" number="50" hungry={true}></Food>
      <Food name="Orange" number="80" hungry={false}></Food>
      <Food name="Banana" number="50" hungry={true}></Food> */}

       {/* <div>
       <Todo  task="React" student="20"></Todo>
        <Todo  task="JAVA" student="220"></Todo>
        <Todo  task="HTML" student="120"></Todo>
        <Todo  task="CSS" student="10"></Todo>
        <Todo  task="js" student=""></Todo>
       </div> */}
    
       {/* <Person num="student_1" name="s" id="7" age="11" ></Person>        
       <Person num="student_2" name="a" id="5" age="23" ></Person>        
       <Person num="student_3" name="r" id="4" age="4" ></Person>        
       <Person num="student_4" name="v" id="3" age="48" ></Person>         */}
    </>
  )
}
// function Person({num,name,id,age}){
//    return(
  
//          <div class="student">
//           <h3>{num}</h3>
//            <p>name :{name}</p>
//            <p>Id :{id}</p>
//            <p>age: {age}</p>
//          </div>    
  
//    )
// }

export default App
