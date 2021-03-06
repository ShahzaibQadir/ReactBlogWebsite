import React from 'react'
import { Link } from 'react-router-dom'


const BlogList = ({blogs,title,handleDelete}) => {

    // const blogs = props.blogs;
    // const title = props.title; 

    
    return (
        <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map((blog)=> (
            <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
            </Link>
            </div>
          ))}            
        </div>
    )
}

export default BlogList


// import React from 'react'


// const BlogList = ({blogs,title,handleDelete}) => {

//     // const blogs = props.blogs;
//     // const title = props.title; 

    
//     return (
//         <div className="blog-list">
//         <h2>{title}</h2>
//         {blogs.map((blog)=> (
//             <div className="blog-preview" key={blog.id}>
//             <h2>{blog.title}</h2>
//             <p>{blog.body}</p>
//             <p>Written By {blog.author}</p>
//             <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
//             </div>
//           ))}            
//         </div>
//     )
// }

// export default BlogList

// import React from 'react'


// const BlogList = ({blogs,title}) => {

//     // const blogs = props.blogs;
//     // const title = props.title; 

    
//     return (
//         <div className="blog-list">
//         <h2>{title}</h2>
//         {blogs.map((blog)=> (
//             <div className="blog-preview" key={blog.id}>
//             <h2>{blog.title}</h2>
//             <p>{blog.body}</p>
//             <p>Written By {blog.author}</p>
//             </div>
//           ))}            
//         </div>
//     )
// }

// export default BlogList

// import React from 'react'


// const BlogList = (props) => {

//     const blogs = props.blogs;
//     const title = props.title; 

    
//     return (
//         <div className="blog-list">
//         <h2>{title}</h2>
//         {blogs.map((blog)=> (
//             <div className="blog-preview" key={blog.id}>
//             <h2>{blog.title}</h2>
//             <p>{blog.body}</p>
//             <p>Written By {blog.author}</p>
//             </div>
//           ))}            
//         </div>
//     )
// }

// export default BlogList


//Version 1
/*import React,{useState} from 'react'

const BlogList = () => {

    const [blogs,setBlogs]=useState([
        {title:'My 10 Video' , body:'lorem ipsum...' ,author:'Shahzaib Abdul Qadir',id:1},
        {title:'Completing This Course',body:'lorem ipsum...',author:'Shahzaib Abdul Qadir',id:2},
        {title:'Gona Do it No matter what it takes',body:'lorem ipsum...',author:'Shahzaib Abdul Qadir',id:3},
        {title:'I am Motivated',body:'lorem ipsum...',author:'Shahzaib Abdul Qadir',id:4}
     ]);
    

    return (
        <div className="blog-list">
        {blogs.map((blog)=> (
            <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>Written By {blog.author}</p>
            </div>
          ))}            
        </div>
    )
}

export default BlogList
*/



