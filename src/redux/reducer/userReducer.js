
import { FETCH_USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from '../action/userAction';
const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: '',
        image: '',
        role: '',
        email: ''
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            return {
                ...state,
                account: {
                    access_token: action?.payload?.data?.access_token,
                    refresh_token: action?.payload?.data?.refresh_token,
                    username: action?.payload?.data?.username,
                    image: action?.payload?.data?.image,
                    role: action?.payload?.data?.role,
                    email: action?.payload?.data?.email
                },
                isAuthenticated: true
            };

        case USER_LOGOUT_SUCCESS:
            return {
                ...state, account: {
                    access_token: '',
                    refresh_token: '',
                    username: '',
                    image: '',
                    role: '',
                    email: ''
                },
                isAuthenticated: false
            };

        default: return state;
    }
};

export default userReducer;