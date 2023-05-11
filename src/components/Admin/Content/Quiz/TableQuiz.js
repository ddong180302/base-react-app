import { useEffect } from "react";
import { useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";
const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState({});

    useEffect(() => {
        fetchQuiz();
    }, [])

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        console.log(res)
        if (res && res.errCode === 0) {
            setListQuiz(res.data);
        }
    }
    console.log("check listQuiz: ", listQuiz);
    return (
        <>
            <div>List Quizzes: </div>
            <table className="table table-dark table-striped table-hover mt-2 my-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuiz && listQuiz.length > 0 && listQuiz.map((item, index) => {
                        return (
                            <tr key={`table-quiz-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.difficulty}</td>
                                <td className="d-flex">
                                    <button className="btn btn-warning mx-2">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    {
                        listQuiz && listQuiz.length === 0 &&
                        <tr>
                            <td colSpan={'5'}>
                                Not fount data
                            </td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )
}

export default TableQuiz;