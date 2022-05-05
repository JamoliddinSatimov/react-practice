import React, { useEffect, useState } from "react";
import { Select } from "../../components";

import './Posts.css'

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [filterPosts, setFilterPosts]=useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.error(err));

    }, []);
  
  
    const getUserSelect = (user)=>{
            if (user!=='all') {
            let filteredPosts = posts.filter(item=>item.userId===(+user))
            setFilterPosts(filteredPosts)
            }if (user==="all") {
                setFilterPosts(posts)
            }        
    }

    useEffect(()=>{
        setFilterPosts(posts)
    },[posts])

 
  

  return (
    <div className="row" id="posts_page">
      <div className="col-6 offset-1">
      <ul className="list-unstyled">
            {
                filterPosts.map(post=>(
                    <div key={post.id}><li className="border bg-light shadow mt-1 rounded p-2 d-inline-block">{post.title}</li></div>
                ))
            }
        </ul>
      </div>
        
      <div className="col-4">
        <Select getUserSelect={getUserSelect}/>
      </div>
    </div>
  );
}
