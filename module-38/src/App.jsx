
import { Suspense } from 'react';
import './App.css'
import Button from './count'
import Cricket from './play'
import User from './user'
import Friends from './Friend';
import Posts from './Posts';

const DataLoded = fetch('https://jsonplaceholder.typicode.com/posts')
.then(Response => Response.json());

const FriendData= fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const PostsData = fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json());


function App() {
  
  return (
    <>
      <Suspense fallback={<p>Wait Loaded data ...</p>}>
           <Posts Post ={PostsData}></Posts>
      </Suspense>
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
