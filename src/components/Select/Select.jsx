import React, {useEffect,useState, useContext} from "react";

import { lang } from "../lang/lang";
import { LangContext } from "../../context/lang-context";

export default function Select({getUserSelect}) {

    const [users,setUsers] = useState([])
    const [user,setUser] = useState('all')

    const {lang:til} = useContext(LangContext)
    

    function getUsetFromSelect(user){
        getUserSelect(user)
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) =>
            setUsers(data)
          ).catch((err) => console.error(err));
      }, []);

    useEffect(()=>{
        getUsetFromSelect(user)
        // eslint-disable-next-line
    },[user])  



    function handleSelect(event) {
        setUser(event.target.value)
    }

  return (
    <select className="form-select" onChange={handleSelect} >
      <option value='all'>{lang[til].postsPage.all}</option>
      {
          users.map(user=>(
              <option key={user.id} value={user.id}>{user.name}</option>
          ))
      }
    </select>
  );
}
