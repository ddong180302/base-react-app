import { useState } from "react";
import "./Register.scss";
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { postRegister } from "../../services/apiServices";



const Register = (props) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }

    const handleShowHidePassword = () => {
        setIsShowPassword(!isShowPassword)
    }


    const handleShowHideConfirmPassword = () => {
        setIsShowConfirmPassword(!isShowConfirmPassword)
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {

        const isValidEmail = validateEmail(email)


        if (!isValidEmail) {
            toast.error('Invalid email!')
            return;
        }

        if (!password) {
            toast.error('Invalid password!')
            return;
        }

        if (!confirmPassword) {
            toast.error('Invalid confirm password!')
            return;
        }

        else if (confirmPassword !== password) {
            toast.error('Confirmation password does not match!')
            return;
        }

        if (!username) {
            toast.error('Invalid Username')
            return;
        }


        const res = await postRegister(email, password, username);
        if (res.data && res.data.errCode === 0) {
            toast.success(res.data.errMessage)
            navigate('/login')
        }
        if (res.data.errCode !== 0) {
            toast.error(res.data.errMessage)
        }

    }

    return (
        <>
            <div className="header">
                <span>Do you already have an account?</span>
                <button onClick={() => handleLogin()}>Sign In</button>
            </div>
            <div className="register-container">

                <div className="title">
                    Tran Dang Dong
                </div>
                <div className="welcome">
                    Hello, who's this?
                </div>
                <div className="content-form">
                    <div className="content-email">
                        <label>Email</label>
                        <input
                            className="input-email form-control"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="content-password">
                        <label>Password</label>
                        <input
                            className="input-password form-control"
                            type={isShowPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <span className="eye" onClick={() => handleShowHidePassword()}>{isShowPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                    </div>

                    <div className="content-confirm-password">
                        <label>Confirm Password</label>
                        <input
                            className="input-confirm-password form-control"
                            type={isShowConfirmPassword ? 'text' : 'password'}
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                        <span className="eye" onClick={() => handleShowHideConfirmPassword()}>{isShowConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                    </div>

                    <div className="content-username">
                        <label>Username</label>
                        <input
                            className="input-username form-control"
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <button onClick={() => handleRegister()}>Create Account</button>
                    <div className="back-homepage">
                        <span onClick={() => navigate('/')}> &#60;&#60; Go to Homepage</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;