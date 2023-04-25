import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import { useState, useEffect } from "react";
import TableUser from "./TableUser";
import { getAllUser, getUserWithPaginate } from "../../../services/apiServices";
import ModalEditUser from "./ModalEditUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
    const LIMIT_USER = 5;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1)

    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalEditUser, setShowModalEditUser] = useState(false)
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
    const [dataEdit, setDataEdit] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [dataView, setDataView] = useState({})
    const [arrUsers, setArrUsers] = useState([]);

    useEffect(() => {
        //fetchListUsers();
        fetchListUsersWithPaginate(1);
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUser();
        if (res.data && res.errCode === 0) {
            setArrUsers(res.data)
        }
    }

    const fetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        console.log('check res: ', res)
        if (res.data && res.errCode === 0) {
            setArrUsers(res.data.users)
            setPageCount(res.data.totalPages)
        }
    }

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true)
        setDataDelete(user)
    }

    const handleClickBtnEdit = (user) => {
        setDataEdit(user);
        setShowModalEditUser(true);
    }

    const handleClickBtnView = (user) => {
        setDataView(user)
        setShowModalViewUser(true)
    }

    const resetEditData = () => {
        setDataEdit({})
        setDataDelete({})
    }

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
                    {/* <TableUser
                        arrUsers={arrUsers}
                        handleClickBtnEdit={handleClickBtnEdit}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate
                        arrUsers={arrUsers}
                        handleClickBtnEdit={handleClickBtnEdit}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                        pageCount={pageCount}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalEditUser
                    show={showModalEditUser}
                    setShow={setShowModalEditUser}
                    dataEdit={dataEdit}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    resetEditData={resetEditData}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

                <ModalViewUser
                    showModalViewUser={showModalViewUser}
                    setShowModalViewUser={setShowModalViewUser}
                    dataView={dataView}
                />

                <ModalDeleteUser
                    showModalDeleteUser={showModalDeleteUser}
                    setShowModalDeleteUser={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    resetEditData={resetEditData}
                    fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />


            </div>
        </div>
    )
}

export default ManageUser;