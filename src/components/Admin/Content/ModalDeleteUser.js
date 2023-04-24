import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import _ from 'lodash';
import Button from 'react-bootstrap/Button';
import { deleteAUser } from '../../../services/apiServices';
import { toast } from 'react-toastify';

const ModalDeleteUser = (props) => {
    const { showModalDeleteUser, setShowModalDeleteUser, dataDelete, resetEditData } = props;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')


    useEffect(() => {
        if (!_.isEmpty(dataDelete)) {
            setEmail(dataDelete.email)
            setPassword(dataDelete.email)
            setUsername(dataDelete.username)
            setRole(dataDelete.role)
            if (dataDelete.image) {
                setImage(`data:image/png;base64,${dataDelete.image}`)
            }
        }
    }, [dataDelete])

    const handleClose = () => {
        setShowModalDeleteUser(false)
        setEmail("")
        setPassword("")
        setUsername("")
        setRole("")
        setImage("")
        resetEditData()
    }

    const handleDeleteAUser = async () => {
        let data = await deleteAUser(dataDelete.id)
        if (data && data.errCode === 0) {
            toast.success(data.errMessage)
            handleClose();
            await props.fetchListUsers();
        }
        if (data && data.errCode !== 0) {
            toast(data.errMessage);
        }
    }
    return (
        <>
            <Modal
                className='modal-add-user'
                size="xl"
                backdrop='static'
                show={showModalDeleteUser}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Modal Delete User
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='row' >
                        <div className='col-md-6'>
                            <label className='form-lable'>Email</label>
                            <input
                                className='form-control'
                                type='email'
                                disabled
                                value={email}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label className='form-lable'>Password</label>
                            <input
                                className='form-control'
                                type='password'
                                disabled
                                value={password}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label className='form-lable'>UserName</label>
                            <input
                                className='form-control'
                                type='text'
                                disabled
                                value={username}
                            />
                        </div>
                        <div className='col-md-6'>
                            <label className='form-lable'>Role</label>
                            <input
                                className='form-control'
                                type='text'
                                disabled
                                value={role}
                            />
                        </div>
                        <div className='col-md-12'>Image</div>
                        <div className='col-md-12 img-preview' >
                            {
                                image ?
                                    <img src={image} alt='' />
                                    :
                                    "No data"
                            }
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>Close</Button>
                    <Button variant="danger" onClick={() => handleDeleteAUser()}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDeleteUser;