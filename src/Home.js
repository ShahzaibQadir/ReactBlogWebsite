import React from 'react'
import BlogList from './BlogList';
import './index.css';
import useFetch from './useFetch';
const Home = () => {
  const {data:blogs , isPending , error} = useFetch('https://my-json-server.typicode.com/ShahzaibQadir/ReactBlogJSONServer/blogs')


  return (
    <div className="home">
    {error && <div>{error}</div>}
    {isPending && <div>Loading....</div>}
   {blogs  &&  <BlogList blogs={blogs} title="All Blogs !"  /> } 
    </div>
      )
}

export default Home


// import React,{useState,useEffect} from 'react'
// import BlogList from './BlogList';
// import './index.css';
// const Home = () => {

//   const [blogs,setBlogs]=useState(null);
//   const [isPending,setIsPending]=useState(true);
//   const [error,setError] = useState(null)

//  useEffect(() => {
//    setTimeout(() => {
//     fetch('http://localhost:8000/blogs')
//       .then(res=>{
//         if(!res.ok){
//           throw Error('Could not fetch data for that resource');
//         }
//         return res.json();
//         })
//       .then((data)=>{
//         console.log(data);
//         setBlogs(data);
//         setIsPending(false);
//         setError(false);
//       })
//       .catch((err)=>{
//         setError(err.message);
//         setIsPending(false);
//       })
//    },1000);
//    },[]);

//   return (
//     <div className="home">
//     {error && <div>{error}</div>}
//     {isPending && <div>Loading....</div>}
//    {blogs  &&  <BlogList blogs={blogs} title="All Blogs !"  /> } 
//     </div>
//       )
// }

// export default Home




// import React,{useState,useEffect} from 'react'
// import BlogList from './BlogList';
// import './index.css';
// const Home = () => {

//   const [blogs,setBlogs]=useState(null);
//   const [isPending,setIsPending]=useState(true);


//  useEffect(() => {
//    setTimeout(() => {
//     fetch('http://localhost:8000/blogs')
//     .then(res=>{
//       return res.json();
//        })
//     .then((data)=>{
//       console.log(data);
//       setBlogs(data);
//       setIsPending(false);
//     })
//    },1000);
//    },[]);

//   return (
//     <div className="home">
//     {isPending && <div>Loading....</div>}
//    {blogs  &&  <BlogList blogs={blogs} title="All Blogs !"  /> } 
//     </div>
//       )
// }

// export default Home


// import React,{useState,useEffect} from 'react'
// import BlogList from './BlogList';
// import './index.css';
// const Home = () => {

//   const [blogs,setBlogs]=useState(null);

 
  
//  useEffect(() => {
//    fetch('http://localhost:8000/blogs')
//    .then(res=>{
//      return res.json();
//       })
//    .then((data)=>{
//      console.log(data);
//      setBlogs(data);
//    })
//    },[]);

//   return (
//     <div className="home">
//    {blogs  &&  <BlogList blogs={blogs} title="All Blogs !"  /> } 
//     </div>
//       )
// }

// export default Home



// import React,{useState,useEffect} from 'react'
// import BlogList from './BlogList';
// import './index.css';
// const Home = () => {

//   const [blogs,setBlogs]=useState([
//     {title:'My 10 Video' , body:'lorem ipsum...' ,author:'Shahzaib Abdul Qadir',id:1},
//     {title:'Completing This Course',body:'lorem ipsum...',author:'Shahzaib Abdul Qadir',id:2},
//     {title:'Gona Do it No matter what it takes',body:'lorem ipsum...',author:'Shahzaib',id:3},
//     {title:'I am Motivated',body:'lorem ipsum...',author:'Shahzaib',id:4}
//  ]);


// const [name,setName]=useState('SHAHZAIB');

 
//  const handleDelete = (id)=>{
//    const newBlogs= blogs.filter((blog)=> blog.id !== id);
//    setBlogs(newBlogs);
//  }
  
//  useEffect(() => {
//    console.log('use effect ran');
//    console.log(name);
//    },[name]);

//   return (
//     <div className="home">
//      <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete} />   
//      <button onClick={() => setName('SHAHZAIB QADIR')}>Change Name</button>
//      <p>{name}</p>
//     </div>
//       )
// }

// export default Home


// import React,{useState} from 'react'
// import BlogList from './BlogList';
// import './index.css';
// const Home = () => {

//   const [blogs,setBlogs]=useState([
//     {title:'My 10 Video' , body:'lorem ipsum...' ,author:'Shahzaib Abdul Qadir',id:1},
//     {title:'Completing This Course',body:'lorem ipsum...',author:'Shahzaib Abdul Qadir',id:2},
//     {title:'Gona Do it No matter what it takes',body:'lorem ipsum...',author:'Shahzaib',id:3},
//     {title:'I am Motivated',body:'lorem ipsum...',author:'Shahzaib',id:4}
//  ]);

 
//  const handleDelete = (id)=>{
//    const newBlogs= blogs.filter((blog)=> blog.id !== id);
//    setBlogs(newBlogs);
//  }
  

//   return (
//     <div className="home">
//      <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete} />   
//      <BlogList blogs={blogs.filter((blog)=>
//       blog.author==='Shahzaib'
//       )} title="Shahzaib's Blogs !" handleDelete={handleDelete}/>   
//     </div>
//       )
// }

// export default Home



// import React,{useState} from 'react'

// const Home = () => {

//   // let name="Shahzaib";
//   const [name,setName] = useState('Shahzaib');
//   const [age,setAge] =useState(22);
  
  
//   const handleClick =()=>{
//   setName('Shahzaib Abdul Qadir');
//   setAge(23);
//   }

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>{ name } is { age } years old</p>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// export default Home

// import { useState } from "react";

// const Home = () => {
//   // let name = 'mario';
//   const [name, setName] = useState('mario');
//   const [age, setAge] = useState(25);

//   const handleClick = () => {
//     // name = 'luigi';
//     setName('luigi');
//     setAge(30);
//   }

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>{ name } is { age } years old</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }
 
// export default Home;

