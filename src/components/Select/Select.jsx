import React, {useEffect,useState} from "react";

export default function Select({getUserSelect}) {

    const [users,setUsers] = useState([])
    const [user,setUser] = useState('all')
    

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
    },[user])  



    function handleSelect(event) {
        setUser(event.target.value)
    }

  return (
    <select className="form-select" onChange={handleSelect} >
      <option value='all'>All</option>
      {
          users.map(user=>(
              <option key={user.id} value={user.id}>{user.name}</option>
          ))
      }
    </select>
  );
}
