import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner10 } from "react-icons/im";

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const handleLogin = async () => {
        //alert('me')
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid email');
            return;
        }

        if (!password) {
            toast.error('Invalid password')
            return;
        }
        setIsLoading(true);
        let data = await postLogin(email, password);
        console.log('check data: ', data);
        if (data && data.errCode === 0) {
            dispatch(doLogin(data))
            toast.success(data.errMessage)
            setIsLoading(false)
            navigate('/')
        }

        if (data && data.errCode !== 0) {
            toast(data.errMessage)
            setIsLoading(false)
        }
    }

    const handleRegister = () => {
        navigate('/register')
    }

    const handleKeyDown = (event) => {
        if (event && event.key === "Enter") {
            handleLogin();
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span className='header-text'>
                    Don't have an account yet?
                </span>
                <button className='header-btn' onClick={() => handleRegister()}>Sign up</button>
            </div>
            <div className='title col-4 mx-auto' >
                Tran Dang Dong
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)}
                    />
                </div>
                <span className='forgot-password'>Forgot password ?</span>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                        disabled={isLoading}
                    >
                        {isLoading === true && <ImSpinner10 className='loader-icon' />}
                        <span>Login to Quiz</span>
                    </button>
                </div>
                <div className='back-homepage text-center'>
                    <span onClick={() => navigate('/')}> &#60;&#60; Go to Homepage</span>
                </div>
            </div>
        </div>
    )
}

export default Login;