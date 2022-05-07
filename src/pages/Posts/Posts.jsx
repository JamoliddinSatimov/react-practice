import React, { useEffect, useState } from "react";
import { Select } from "../../components";
import Loader from '../../Loader/Loader'

import './Posts.css'

export default function Posts() {
    const [posts, setPosts] = useState({
      isLoading:true,
      isError:false,
      data:[]
    });
    const [filterPosts, setFilterPosts]=useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts({...posts,isLoading:false,data:data}))
        .catch((err) => console.error(err));
        // eslint-disable-next-line
    }, []);
  
  
    const getUserSelect = (user)=>{
            if (user!=='all') {
            let filteredPosts = posts.data.filter(item=>item.userId===(+user))
            setFilterPosts(filteredPosts)
            }if (user==="all") {
                setFilterPosts(posts.data)
            }        
    }

    useEffect(()=>{
        setFilterPosts(posts.data)
    },[posts])

 
  

  return (
    <div className="row" id="posts_page">
      <div className="col-7 offset-1">
        <h2 className="text-center">Posts</h2>
      <ul>
          {
            posts.isLoading?<Loader/>:
                   filterPosts.map(post=>(
                       <li  key={post.id}>
                         <h5 className="fw-bold">{post.title}</h5>
                         <p>{post.body}</p>
                       </li>
                   ))
          }
        </ul>
        
      </div>
        
      <div className="col-3 mt-1">
        <Select getUserSelect={getUserSelect}/>
      </div>
    </div>
  );
}
