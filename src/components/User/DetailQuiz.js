import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
import _ from 'lodash';


const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
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
        <div className="detail-quiz-container">
            DetailQuiz
        </div>
    )
}

export default DetailQuiz;