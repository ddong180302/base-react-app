import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import _ from 'lodash';
import Button from 'react-bootstrap/Button';

const ModalResult = (props) => {
    const { show, setShow, dataModalResult } = props;

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal
                backdrop='static'
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Your Result...
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Total Question: <b>{dataModalResult.countTotal}</b></div>
                    <div>Total Correct answers: <b>{dataModalResult.countCorrect}</b></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>Show answers</Button>
                    <Button variant="danger" onClick={() => handleClose()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalResult;