import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState, useEffect } from "react";
import TableUser from "./TableUser";
import { getAllUser } from "../../../services/apiServices";

const ManageUser = (props) => {


    const [arrUsers, setArrUsers] = useState([]);

    useEffect(() => {
        fetchListUsers();
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUser();
        if (res.data && res.errCode === 0) {
            setArrUsers(res.data)
        }

    }



    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    return (
        <div className="mamage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        <FcPlus /> Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser
                        arrUsers={arrUsers}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}

export default ManageUser;