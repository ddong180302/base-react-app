
import React, { useState } from 'react';
import Select from 'react-select';
import "./Questions.scss";
import { BsFillPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";
import { RiImageAddFill } from "react-icons/ri";

const Questions = (props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];
    const [selectedQuiz, setSelectedQuiz] = useState({});
    // const [questions, setQuestions] = useState({
    //     {
    //         id: '',
    //         description: '',
    //         answers: [
    //             {
    //                 id: '', description: '', isCorrect: false
    //             },
    //         ]
    //     }
    // });
    return (
        <div className="questions-container">
            <div className="title">
                manage questions
            </div>
            <hr />
            <div className="add-new-question">
                <div className='col-6 form-group'>
                    <label className='mb-2'>Select Quiz: </label>
                    <Select
                        defaultValue={selectedQuiz}
                        onChange={setSelectedQuiz}
                        options={options}
                    //className='form-control'
                    />
                </div>
                <div className='mt-3 mb-2'>
                    Add questions:
                </div>
                <div>
                    <div className='questions-content'>
                        <div className="form-floating description" >
                            <input type="text" className="form-control" placeholder="name@example.com" />
                            <label> Question's description</label>
                        </div>
                        <div className='group-upload'>
                            <label >
                                <RiImageAddFill className='label-upload' />
                            </label>
                            <input type='files' hidden />
                            <span>0 file is uploaded</span>
                        </div>
                        <div className='btn-add'>
                            <span>
                                <BsFillPatchPlusFill className='icon-add' />
                            </span>
                            <span>
                                <BsPatchMinusFill className='icon-remove' />
                            </span>
                        </div>
                        {/* <div className='answer'>
                        <input type={'text'} />
                    </div> */}
                    </div>

                    <div className='answers-content'>
                        <input
                            className="form-check-input iscorrect"
                            type="checkbox"
                        />
                        <div className="form-floating answer-name" >
                            <input type="text" className="form-control" placeholder="name@example.com" />
                            <label>Answer 1</label>
                        </div>
                        <div className='btn-group'>
                            <span>
                                <BsFillPatchPlusFill className='icon-add' />
                            </span>
                            <span>
                                <BsPatchMinusFill className='icon-remove' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions