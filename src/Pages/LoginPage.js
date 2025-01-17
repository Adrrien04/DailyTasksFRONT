import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${process.env.REACT_APP_API}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });


        if (response.ok) {
            const data = await response.json();
            console.log('Login successful:', data);

            setUser(data.user);
            setError('');
            localStorage.setItem('user', JSON.stringify(data.user));
            alert('Connexion réussie!');
            navigate('/');
        } else {
            const errorData = await response.json();
            setError(errorData.message || 'Email ou mot de passe incorrect.');
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">
                                {user ? `Bonjour, ${user.name}` : 'Se connecter'}
                            </h5>
                            {error && <div className="alert alert-danger">{error}</div>}

                            <form onSubmit={handleSubmit}>
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
                                    Se connecter
                                </button>
                                <p>
                                    Pas encore inscrit ?{" "}
                                    <a
                                        href="#"
                                        onClick={() => navigate("/register")}
                                        style={{textDecoration: "underline", color: "#007bff"}}
                                    >
                                        Inscrivez-vous
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
