import { useEffect, useState } from "react"
import { GetUsers } from "../api/users";


export const FetchUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        GetUsers().then(u => {
            setUsers(u);
        })
    })

    return users;
}