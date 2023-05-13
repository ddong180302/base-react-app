import _ from "lodash";
import { useState } from "react";
import Lightbox from "react-awesome-lightbox";

const Question = (props) => {

    const [isPreviewImage, setIsPreviewImage] = useState(false);
    const { dataQuiz, index, handleCheckbox } = props;
    if (_.isEmpty(dataQuiz)) {
        return (<></>)
    }

    const handleHandleCheckbox = (event, aId, qId) => {
        console.log("check data: ", aId, qId)
        handleCheckbox(aId, qId);
    }
    return (
        <>
            {dataQuiz.image ?
                <div className="q-image">
                    <img
                        onClick={() => setIsPreviewImage(true)}
                        src={`data:image/jpeg;base64,${dataQuiz.image}`}
                        alt=""
                    />
                    {isPreviewImage === true &&
                        <Lightbox
                            image={`data:image/jpeg;base64,${dataQuiz.image}`}
                            title={"Question Image"}
                            onClose={() => setIsPreviewImage(false)}
                        >
                        </Lightbox>
                    }
                </div>
                :
                <div className="q-image"></div>
            }
            <div className="question">Question {index + 1}: {dataQuiz.questionDescription}?</div>
            <div className="answer">
                {dataQuiz.answers && dataQuiz.answers.length &&
                    dataQuiz.answers.map((a, index) => {
                        return (
                            <div key={`answer-${index}`} className="a-child">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={a.isSelected}
                                        onChange={(event) => handleHandleCheckbox(event, a.id, dataQuiz.questionId)}
                                    />
                                    <label
                                        className="form-check-label"
                                    >
                                        {a.description}
                                    </label>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Question;