import ModalCreateUser from "./ModalCreateUser";


const ManageUser = (props) => {
    return (
        <div className="mamage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    table users
                    <ModalCreateUser />
                </div>
            </div>
            ManageUser
        </div>
    )
}

export default ManageUser;