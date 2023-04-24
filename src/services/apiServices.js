import axios from '../utils/axiosCustomize';



const postCreateNewUser = async (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('image', image);

    return await axios.post('api/v1/participant', data)
}

const putEditUser = async (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('image', image);
    return await axios.put('api/v1/participant/edit', data)
}

const getAllUser = async () => {
    return await axios.get('api/v1/participant/all')
}

const deleteAUser = async (id) => {
    return await axios.delete('/api/v1/participant/delete', {
        data: {
            id: id
        }
    })
}

export {
    postCreateNewUser,
    getAllUser,
    putEditUser,
    deleteAUser
}