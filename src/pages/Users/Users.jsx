import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import './Users.css'

export default function Users() {
  const [users, setUsers] = useState({
    isLoading: true,
    isError: false,
    data: [],
  });


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        setUsers({
          isError: false,
          isLoading: false,
          data,
        })
      ).catch((err) => {
        setUsers({
          ...users,
          isError: true,
        });
      });
       // eslint-disable-next-line
  }, []);
  

  return (
      <div id="users_id" className="row">
        {users.isLoading && !users.isError ? (
          <h1>Loading...</h1>
        ) : users.isError ? (
          <h1>Error...</h1>
        ) : (
          users.data.map((user) => (
            <div key={user.id} className="col-md-3 my-2">
                <div  className="card d-flex flex-columns align-items-center ">
                    <div className="image_box mt-2"><img src="https://via.placeholder.com/600/92c952" className="card-img-top"  alt="..."/></div>
                    <div className="card-body">
                        <h5 className="card-title"><Link to={`/users/${user.id}`}> {user.name}</Link>{" "}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
          ))
        )}
        
      </div>
  );
}
