import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { lang } from "../../components/lang/lang";
import { LangContext } from "../../context/lang-context";

import "./User.css";

export default function User() {
  const params = useParams();
  const [photos, setPhotos] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  
  const {lang:til} = useContext(LangContext)


  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=1&id=${+params.id}`)
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
 
console.log(lang);
  


  return (
    <div className="row" id="user_page">
      <div id="dark-left" className="col-md-4  d-flex align-items-center flex-column bg-light shadow">
        <div className="img_box raunded my-3 ">
          {photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt=" " />
          ))}
        </div>
        <p className="mt-2">
          <strong>{lang[til].userPage.name}: </strong>
          {users.name}
        </p>
        <p className="mt-2">
          <strong>{lang[til].userPage.userName}: </strong>
          {users.username}
        </p>
        <p className="mt-2">
          <strong>{lang[til].userPage.email}: </strong>
          {users.email}
        </p>
      </div>
      <div className="col-md-8 d-flex justify-content-center align-items-center pt-2">
        <ul className="w-100">
          {
            posts.length > 0 &&
            posts.map((post) => <li key={post.id}>
              <h5 className="fw-bold">{post.title}</h5>
              <p>{post.body}</p>
            </li>)
          }
        </ul>
      </div>
    </div>
  );
}
