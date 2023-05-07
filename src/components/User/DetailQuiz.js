import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import _ from 'lodash';
import './DetailQuiz.scss'


const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    const location = useLocation();
    console.log('check id: ', quizId)
    useEffect(() => {
        fetchQuestions();
    }, [quizId])

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        console.log('check question: ', res.data.errCode);

        if (res && res.data && res.data.errCode === 0) {
            let raw = res.data.data;
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    //let temp = 
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answerData)
                        console.log('item: ', item.answerData)
                    })

                    return {
                        questionId: key, answers, questionDescription, image
                    }
                })
                .value();
            console.log('data tda: ', data)
        }
    }
    console.log("check params: ", params)
    return (
        <div className="detail-quiz-container container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">How are you doing?</div>
                    <div className="answer">
                        <div className="a-child">A. jskdjkfdjdfk</div>
                        <div className="a-child">B. fsdfssdfsdf</div>
                        <div className="a-child">C. jskdjkfdjdfk</div>
                        <div className="a-child">D. jskdjkfdjdfk</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default DetailQuiz;