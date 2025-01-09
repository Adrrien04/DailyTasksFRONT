import React, { useEffect, useState } from "react";

const QuetesPage = () => {
    const [quetes, setQuetes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/quests")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des quêtes");
                }
                return response.json();
            })
            .then((data) => {
                setQuetes(data.member);
            })
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div>
            <h1>Liste des Quêtes</h1>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <ul>
                    {quetes.map((quete) => (
                        <li key={quete.id}>
                            <strong>{quete.name}</strong> - {quete.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default QuetesPage;
