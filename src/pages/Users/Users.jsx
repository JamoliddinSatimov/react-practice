import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";

import Loader from "../../Loader/Loader";
import Modal from "../../components/modal/modal";
import { lang } from "../../components/lang/lang";
import { LangContext } from "../../context/lang-context";

import './Users.css';

export default function Users() {

  const {lang:til, setLang} = useContext(LangContext)

  const [users, setUsers] = useState({
    isLoading: true,
    isError: false,
    data: [],
  });

  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)


  useEffect(() => {
    fetch( "https://jsonplaceholder.typicode.com/users")
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
  
  const handleOpenModal = () => {
    setModal(true)
  }

  return (
      <>
      <div id="users_id" className="row px-3">
        <div className="px-2 mt-2"><button onClick={handleOpenModal} className="btn btn-outline-success w-100">{lang[til].users.addBtn}</button></div>
        {users.isLoading && !users.isError ? (
          <Loader/>
        ) : users.isError ? (
          <h1>Error...</h1>
        ) : (
          users.data.map((user) => (
            <div key={user.id} className="col-md-3">
                <div  className="card d-flex flex-columns align-items-center card-dark mt-2">
                    <div className="image_box mt-2"><img src="https://picsum.photos/200/300" className="card-img-top"  alt="..."/></div>
                    <div className="card-body">
                        <h5 className="card-title">Name: <Link className="text-decoration-none link text-black fw-bold" to={`/users/${user.id}`}> {user.name}</Link>{" "}</h5>
                        <p className="card-text">Username: @{user.username}</p>
                        <p className="card-text">Email: {user.email}</p>
                        <button onClick={()=>setEditModal(true)} className="btn btn-secondary w-100">{lang[til].users.editBtn}</button>
                    </div>
                </div>
            </div>
          ))
        )}
      </div>
        <Modal title="Qo'shish" modal={modal} setModal={setModal}>
          <form className="p-4">
            <div className="mb-2">
            <label htmlFor="name">Name:</label><br/>
            <input className="form-control" type={"text"} id="name" placeholder="Name..."/>
            </div>
            <div className="mb-2">
            <label htmlFor="userName">UserName:</label><br/>
            <input className="form-control" type={"text"} id="userName" placeholder="UserName..."/>
            </div>
            <div className="mb-3">
            <label htmlFor="email">Email:</label><br/>
            <input className="form-control" type={"email"} id="email" placeholder="Email..."/>
            </div>
            <div>
              <button className="btn btn-success w-100">Submit</button>
            </div>
          </form>
        </Modal>
        <Modal title={"Edit"} modal={editModal} setModal={setEditModal}>
          Edit
        </Modal>
      </>
  );
}
