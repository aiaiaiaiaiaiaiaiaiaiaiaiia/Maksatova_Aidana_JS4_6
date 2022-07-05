import classes from "./users.module.css";

function Users(props){

    return(
        <div className={classes.main}>

            <table border="1">
                <tr>
                    <th className={classes.id}>Id</th>
                    <th className={classes.name}>Name</th>
                    <th className={classes.user}>User name</th>
                    <th className={classes.mail}>E-mail</th>
                </tr>
                {props.infoUsers.map((users, key) =>{
                    return(
                        <tr>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Users;