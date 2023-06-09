
import { useState, useEffect } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { getAllQuizForAdmin, getAllUser, postAssignQuiz } from "../../../../services/apiServices";
const AssignQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);
    const [selectedQuiz, setSelectedQuiz] = useState({});

    const [listUser, setListUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        fetchQuiz();
        fetchUser();
    }, [])

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        console.log(res)
        if (res && res.errCode === 0) {
            let newQuiz = res.data.map(item => {
                return {
                    value: item.id,
                    label: `${item.id} - ${item.name}`
                }
            })
            setListQuiz(newQuiz);
        }
    }

    const fetchUser = async () => {
        let res = await getAllUser();
        console.log("res: ", res)
        if (res && res.errCode === 0) {
            let newUser = res.data.map(item => {
                return {
                    value: item.id,
                    label: `${item.id} - ${item.username} - ${item.email}`
                }
            })
            setListUser(newUser);
        }
    }

    const handleAssign = async () => {
        let res = await postAssignQuiz(selectedQuiz.value, selectedUser.value);
        if (res && res.errCode === 0) {
            toast.success(res.errMessage);
        } else {
            toast.error(res.errMessage);
        }
    }
    return (
        <div className="assign-quiz-container row">
            <div className='col-6 form-group'>
                <label className='mb-2'>Select Quiz: </label>
                <Select
                    defaultValue={selectedQuiz}
                    onChange={setSelectedQuiz}
                    options={listQuiz}
                />
            </div>
            <div className='col-6 form-group'>
                <label className='mb-2'>Select User: </label>
                <Select
                    defaultValue={selectedUser}
                    onChange={setSelectedUser}
                    options={listUser}
                />
            </div>
            <div>
                <button
                    onClick={() => handleAssign()}
                    className="btn btn-warning mt-3">
                    Assign
                </button>
            </div>
        </div>
    )
}

export default AssignQuiz;