import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';


const ModalViewUser = (props) => {
    const { showModalViewUser, setShowModalViewUser, dataView } = props;
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        if (!_.isEmpty(dataView)) {
            setEmail(dataView.email)
            setUsername(dataView.username)
            setRole(dataView.role)
            if (dataView.image) {
                setImage(`data:image/png;base64,${dataView.image}`)
            } else {
                setImage('')
            }

        }

    }, [dataView])


    const handleClose = () => {
        setShowModalViewUser(false)
    }

    return (
        <>
            <Modal
                show={showModalViewUser}
                size="xl"
                onHide={handleClose}
                backdrop='static'
                className='modal-add-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={email}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">UserName</label>
                            <input
                                type="text"
                                className="form-control"
                                disabled
                                value={username}

                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                disabled
                            >
                                <option>{role}</option>
                            </select>
                        </div>
                        <div className='col-md-12'>
                            Image File
                        </div>
                        <div className='col-md-12 img-preview'>
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
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalViewUser;