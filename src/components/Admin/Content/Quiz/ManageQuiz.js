import { useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";

const ManageQuiz = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('EASY');
    const [image, setImage] = useState(null);
    const options = [
        { value: 'EASY', label: 'EASY' },
        { value: 'MEDIUM', label: 'MEDIUM' },
        { value: 'HARD', label: 'HARD' },
    ];

    const handleChaneFile = (event) => {

    }
    return (
        <div className="quiz-container">
            <div className="title">
                Manage Quizzes
            </div>
            <hr />
            <div className="add-new">

                <fieldset className="border rounded-3 p-3">
                    <legend className="float-none w-auto px3">Add new Quiz</legend>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <label>Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <label>Description</label>
                    </div>

                    <div className="my-3">
                        <Select
                            value={type}
                            // onChange={this.handleChange}
                            options={options}
                            placeholder={"Quiz stype..."}
                        />
                    </div>
                    <div className="more-action form-group">
                        <label className="mb-1">Upload Image</label>
                        <input
                            type="file"
                            className="form-control" />
                        onChange={(event) => handleChaneFile(event)}
                    </div>
                </fieldset>
            </div>
            <div className="list-detail">
                table
            </div>
        </div>
    )
}

export default ManageQuiz;