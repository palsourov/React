
import { Suspense } from 'react';
import './App.css'
import Button from './count'
import Cricket from './play'
import User from './user'
import Friends from './Friend';

const DataLoded = fetch('https://jsonplaceholder.typicode.com/posts')
.then(Response => Response.json());

const FriendData= fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
.then(res => res.json());


function App() {
  
  return (
    <>
      <Suspense fallback ={ <h2>Please wait loaded data...</h2>}>
          <Friends Data = {FriendData} ></Friends>
      </Suspense>
      
      <Suspense fallback = { <h2>Data loading....</h2> }>
         <User url = {DataLoded} ></User>
      </Suspense>
      <Button></Button>
      <Cricket></Cricket>   
    </>
  )
}

export default App
