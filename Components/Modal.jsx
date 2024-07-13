import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Order from './Order';

function Example(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className={props.width} variant="primary" onClick={handleShow}>
            <i className="fa-solid fa-cart-shopping fa-fade pe-1" style={{color: "#FFD43B"}}></i> Order Now
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="justify-content-center">
                    <Modal.Title >ENJOY UPTO 35% OFF</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Order />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Example;