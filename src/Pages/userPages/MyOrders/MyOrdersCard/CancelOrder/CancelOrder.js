import { Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { BsExclamationTriangle } from 'react-icons/bs';

const CancelOrder = ({
    id,
    handleCancel,
    cancelOrderButton,
    cancelOrderMessage,
}) => {
    const [show, setShow] = useState(false);

    // handle modal
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            {/* modal button */}
            <div onClick={handleShow}>
                {cancelOrderButton}
            </div>

            {/* modal message */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <BsExclamationTriangle />
                    <span className="ps-2 fs-3">
                        {cancelOrderMessage}
                    </span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='contained' onClick={handleClose}>
                        No
                    </Button>
                    <div onClick={handleClose}>
                        <Button variant="contained" onClick={() => handleCancel(id)}>
                            Yes
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CancelOrder;