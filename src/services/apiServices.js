import axios from '../utils/axiosCustomize';



const postCreateNewUser = async (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('image', image);

    return await axios.post('/api/v1/participant', data)
}

const putEditUser = async (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('image', image);
    return await axios.put('/api/v1/participant/edit', data)
}

const getAllUser = async () => {
    return await axios.get('/api/v1/participant/all')
}

const deleteAUser = async (id) => {
    return await axios.delete('/api/v1/participant/delete', {
        data: {
            id: id
        }
    })
}

const getUserWithPaginate = async (page, limit) => {
    return await axios.get(`/api/v1/participant/pagination?page=${page}&limit=${limit}`)
}

const postLogin = async (email, password, delay) => {
    return await axios.post('/api/v1/login',
        {
            delay: 5000,
            email: email,
            password: password
        });
}

const postRegister = async (email, password, username) => {
    return axios.post('/api/v1/register', {
        email: email, password: password, username: username
    })
}

const getQuizByUser = () => {
    return axios.get('/api/v1/quiz-by-participant')
}

const getDataQuiz = (id) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`)
}

const postSubmitQuiz = (data) => {
    return axios.post(`/api/v1/quiz-submit`, { ...data })
}

const postCreateNewQuiz = async (name, description, difficulty, image) => {
    const data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('difficulty', difficulty);
    data.append('image', image);

    return await axios.post('/api/v1/create-new-quiz', data)
}

const getAllQuizForAdmin = () => {
    return axios.get(`/api/v1/get-all-quiz`)
}


export {
    postCreateNewUser,
    getAllUser,
    putEditUser,
    deleteAUser,
    getUserWithPaginate,
    postLogin,
    postRegister,
    getQuizByUser,
    getDataQuiz,
    postSubmitQuiz,
    postCreateNewQuiz,
    getAllQuizForAdmin
}