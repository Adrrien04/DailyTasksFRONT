import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [visibleEmail, setVisibleEmail] = useState({});

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/api/users`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des utilisateurs");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data.member);
            })
            .catch((err) => setError(err.message));
    }, []);

    const toggleEmailVisibility = (userId) => {
        setVisibleEmail((prevState) => ({
            ...prevState,
            [userId]: !prevState[userId],
        }));
    };

    return (
        <div className="container">
            <h1>Liste des Utilisateurs</h1>
            {error ? (
                <p style={{color: "red"}}>{error}</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {users.map((user) => (
                        <div key={user.id} className="col mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <div className="rounded-circle overflow-hidden border border-2"
                                         style={{width: '100px', height: '100px', margin: 'auto'}}>
                                        <img
                                            src={user.profileImage}
                                            alt={user.name}
                                            className="img-fluid w-100 h-100 object-fit-cover"
                                        />
                                    </div>
                                    <h5 className="card-title mt-2">{user.name}</h5>


                                    <div className="d-flex justify-content-center align-items-center">
                                        <span style={{marginRight: '10px'}}>
                                            {visibleEmail[user.id] ? user.mail : "Voir l'adresse mail"}
                                        </span>
                                        <button
                                            onClick={() => toggleEmailVisibility(user.id)}
                                            className="btn btn-light"
                                            style={{border: 'none', background: 'transparent'}}
                                        >
                                            {visibleEmail[user.id] ? <FaEyeSlash/> : <FaEye/>}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UsersPage;
