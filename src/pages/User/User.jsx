import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./User.css";

export default function User() {
  const params = useParams();
  const [photos, setPhotos] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  


  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=1&id=${+params.id}`
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.error(err));

      fetch(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.error(err));

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${+params.id}`)
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.error(err));

  }, [params.id]);
 

  


  return (
    <div className="row" id="user_page">
      <div className="col-md-4 mt-1 d-flex align-items-center flex-column bg-light shadow">
        <div className="img_box raunded my-3">
          {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt=" " />
          ))}
        </div>
        <p className="mt-2">
          <strong>Name: </strong>
          {users.name}
        </p>
        <p className="mt-2">
          <strong>Username: </strong>
          {users.username}
        </p>
        <p className="mt-2">
          <strong>Email: </strong>
          {users.email}
        </p>
      </div>
      <div className="col-md-8 d-flex justify-content-center align-items-center">
        <ul className="list-unstyled w-100">
          {
            posts.length > 0 &&
            posts.map((post) => <li className="posts bg-light m-1 py-2 px-5" key={post.id}>{post.title}</li>)
          }
        </ul>
      </div>
    </div>
  );
}
