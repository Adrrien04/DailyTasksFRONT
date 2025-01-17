// src/Components/PrivateRoute.js

import React, { useState, useEffect } from 'react';
import ModalLogin from './ModalLogin';

const PrivateRoute = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (!user) {
            setShowModal(true);
        }
    }, [user]);

    const handleCloseModal = () => setShowModal(false);


    if (user) {
        return children;
    }

    return (
        <>

            <ModalLogin show={showModal} handleClose={handleCloseModal} />

        </>
    );
};

export default PrivateRoute;
