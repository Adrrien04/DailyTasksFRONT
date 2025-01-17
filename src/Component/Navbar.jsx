import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';

const itemList = [
    {text: "Home", to: "/"},
    {text: "Quêtes disponibles", to: "/quetes"},
    {text: "Utilisateurs", to: "/users"},
    {text: "Contact", to: "/contact"}
];

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        window.location.reload();
    };

    const navLinkStyle = {
        transition: 'color 0.3s ease'
    };

    const navLinkHoverStyle = {
        color: '#ff6600'
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light"
             style={{backgroundColor: 'orange', height: '80px', padding: '10px 20px'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} style={{ width: '100px' }} className="img-fluid" alt="Logo"/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {itemList.map((item) => (
                            <li className="nav-item" key={item.text}>
                                <Link
                                    className="nav-link"
                                    to={item.to}
                                    style={navLinkStyle}
                                    onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
                                    onMouseLeave={(e) => e.target.style.color = ''}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            {user ? (
                                <button className="btn btn-outline-danger" onClick={handleLogout}>
                                    Se déconnecter
                                </button>
                            ) : (
                                <Link className="btn btn-outline-light" to="/login">
                                    Se connecter
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;