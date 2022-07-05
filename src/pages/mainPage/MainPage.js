import React,{useState} from "react";
import Users from "../../components/users/Users";

function MainPage(){
    const [users, setUsers] = useState([])

    function getUsers(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }

    return(
        <div>

            <button onClick={getUsers}>Get users</button>
            <Users infoUsers={users}/>


        </div>
    )
}

export default MainPage;