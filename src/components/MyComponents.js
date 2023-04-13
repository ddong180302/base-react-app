import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import React, { useState } from "react";

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
            {
                id: 1,
                name: 'dong',
                age: '26'
            },
            {
                id: 2,
                name: 'thao',
                age: '21'
            },
            {
                id: 3,
                name: 'giang',
                age: '15'
            }
        ]
    )
    const handleAddNewUser = (Objectj) => {
        let coppyListUsers = [...listUsers]
        setListUsers([Objectj, ...coppyListUsers])

    }

    const handleDeleteUser = (userId) => {
        let coppyListUsers = [...listUsers]
        coppyListUsers = coppyListUsers.filter(item => item.id !== userId)
        setListUsers(coppyListUsers)
    }

    return (
        <div>
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    );
}
export default MyComponent;