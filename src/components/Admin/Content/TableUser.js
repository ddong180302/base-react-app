


const TableUser = (props) => {
    const { arrUsers } = props;
    return (
        <>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {arrUsers && arrUsers.length > 0 && arrUsers.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-warning">Eidt</button>
                                    <button className="btn btn-info mx-3">View</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })

                    }
                    {
                        arrUsers && arrUsers.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>
                                Not found data
                            </td>
                        </tr>
                    }
                </tbody>

            </table>
        </>
    )
}

export default TableUser;