import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.



const TableUserPaginate = (props) => {
    const { arrUsers, handleClickBtnEdit,
        handleClickBtnView, handleClickBtnDelete,
        fetchListUsersWithPaginate, pageCount
    } = props;



    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        fetchListUsersWithPaginate(+event.selected + 1)
        props.setCurrentPage(+event.selected + 1)
        console.log(
            `User requested page number , which is offset `
        );
    };


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
                                    <button className="btn btn-info" onClick={() => handleClickBtnView(item)}>View</button>
                                    <button className="btn btn-warning mx-3" onClick={() => handleClickBtnEdit(item)}>Eidt</button>
                                    <button className="btn btn-danger" onClick={() => handleClickBtnDelete(item)}>Delete</button>
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
            <div className='d-flex justify-content-center'>
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="< Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage - 1}
                />
            </div>
        </>
    )
}

export default TableUserPaginate;