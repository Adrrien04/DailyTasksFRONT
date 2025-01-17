import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalLogin = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} style={{ marginTop: '100px' }}>
            <Modal.Header closeButton>
                <Modal.Title>Veuillez vous connecter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Afin de poursuivre votre action, veuillez vous connecter.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => window.location.href ='/'}>
                    Accueil
                </Button>
                <Button variant="primary" onClick={() => window.location.href = '/login'}>
                    Se connecter
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalLogin;