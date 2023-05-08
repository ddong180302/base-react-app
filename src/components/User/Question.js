import _ from "lodash";


const Question = (props) => {
    const { dataQuiz, index } = props;
    if (_.isEmpty(dataQuiz)) {
        return (<></>)
    }
    return (
        <>
            {dataQuiz &&
                <div className="q-image">
                    <img src={`data:image/jpeg;base64,${dataQuiz.image}`} />
                </div>
            }
            <div className="question">Question {index + 1}: {dataQuiz.questionDescription}?</div>
            <div className="answer">
                {dataQuiz.answers && dataQuiz.answers.length &&
                    dataQuiz.answers.map((a, index) => {
                        return (
                            <div key={`answer-${index}`} className="a-child">
                                <div class="form-check">
                                    <input class="form-check-input"
                                        type="checkbox"
                                        value=""
                                    />
                                    <label
                                        class="form-check-label"
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