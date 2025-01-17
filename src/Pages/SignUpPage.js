import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleImageSelect = (url) => {
        setSelectedImage(url); // Mettre à jour l'image sélectionnée
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${process.env.REACT_APP_API}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                image: selectedImage, // Envoyer l'URL de l'image de profil
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Registration successful:', data);
            setMessage('Votre inscription a bien été prise en compte !');
            setIsSuccess(true);
        } else {
            const errorData = await response.json();
            setMessage(errorData.error || 'Une erreur est survenue lors de l\'inscription.');
            setIsSuccess(false);
        }
    };

    const images = [
        'https://i.ibb.co/7z8VDT0/5.png',
        'https://i.ibb.co/w6p8Nqr/4.png',
        'https://i.ibb.co/cJrpNcY/3.png',
        'https://i.ibb.co/GJS284Q/2.png',
        'https://i.ibb.co/31jFRP0/1.png'
    ];

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">S'inscrire</h5>

                            {message && (
                                <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`}>
                                    {isSuccess ? (
                                        <>
                                            {message}{' '}
                                            <a
                                                href="#"
                                                onClick={() => navigate('/login')}
                                                style={{ textDecoration: 'underline', color: '#28a745' }}
                                            >
                                                Connectez-vous
                                            </a>
                                        </>
                                    ) : (
                                        message
                                    )}
                                </div>
                            )}

                            {/* Sélection de l'image de profil */}
                            <div className="mb-4">
                                <h6 className="text-center">Choisissez votre image de profil</h6>
                                <div className="d-flex justify-content-around">
                                    {images.map((url, index) => (
                                        <div
                                            key={index}
                                            className={`rounded-circle overflow-hidden border border-2 ${selectedImage === url ? 'border-success' : 'border-light'}`}
                                            style={{ width: '60px', height: '60px', cursor: 'pointer' }}
                                            onClick={() => handleImageSelect(url)}
                                        >
                                            <img
                                                src={url}
                                                alt={`Profile ${index}`}
                                                className="img-fluid w-100 h-100 object-fit-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Formulaire d'inscription */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Nom
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Mot de passe
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    S'inscrire
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
