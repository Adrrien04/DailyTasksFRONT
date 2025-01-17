import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const QuestsPage = () => {
    const [quests, setQuests] = useState([]);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [questsDetails, setQuestsDetails] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }

        if (!storedUser) {
            setError("Utilisateur non spécifié.");
            return;
        }

        fetch(`${process.env.REACT_APP_API}/api/daily_quests`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération des quêtes");
                }
                return response.json();
            })
            .then((data) => {
                const userQuests = data.member.filter((quest) => {
                    const questUserId = quest.user.split('/')[3];
                    return questUserId === storedUser.id.toString();
                });

                if (userQuests.length > 0) {
                    setQuests(userQuests);

                    const questDetailsPromises = userQuests.map((quest) =>
                        fetch(`http://127.0.0.1:8000${quest.quest}`)
                            .then((response) => response.json())
                            .then((questData) => questData)
                            .catch((err) => console.error("Erreur lors de la récupération de la quête", err))
                    );

                    Promise.all(questDetailsPromises)
                        .then((questsData) => setQuestsDetails(questsData))
                        .catch((err) => setError("Erreur lors de la récupération des détails des quêtes"));
                } else {
                    throw new Error("Aucune quête trouvée pour cet utilisateur.");
                }
            })
            .catch((err) => setError(err.message));
    }, []);

    const handleQuestCompletion = (questId) => {
        fetch(`${process.env.REACT_APP_API}/api/mark_quest_done/${questId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ done: true }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors de la mise à jour de la quête");
                }
                return response.json();
            })
            .then((updatedQuest) => {
                setQuests((prevQuests) =>
                    prevQuests.map((quest) =>
                        quest.id === questId ? { ...quest, done: true } : quest
                    )
                );
            })
            .catch((err) => setError(err.message));
    };

    return (
        <div className="container mt-4">
            <h1>Quêtes de {user ? user.name : "Chargement..."}</h1>
            {error ? (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {questsDetails.length > 0 ? (
                        questsDetails.map((questDetail, index) => (
                            <div key={index} className="col mb-4">
                                <Card className="h-100 animate__animated animate__fadeInUp">
                                    <Card.Img
                                        variant="top"
                                        src={questDetail.img}
                                        alt={questDetail.title}
                                        style={{ objectFit: "cover", height: "300px" }}
                                    />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{questDetail.title}</Card.Title>
                                        <Card.Text className="flex-grow-1">{questDetail.description}</Card.Text>
                                        <Card.Text>Catégorie : {questDetail.category}</Card.Text>
                                        <Card.Text>
                                            Difficulté : {questDetail.difficulty}
                                            {questDetail.difficulty === "easy" && (
                                                <span style={{ color: "green", marginLeft: "10px" }}>●●●</span>
                                            )}
                                            {questDetail.difficulty === "medium" && (
                                                <span style={{ color: "orange", marginLeft: "10px" }}>●●●</span>
                                            )}
                                            {questDetail.difficulty === "hard" && (
                                                <span style={{ color: "red", marginLeft: "10px" }}>●●●</span>
                                            )}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span
                                                className={`badge ${quests[index].done ? "bg-success" : "bg-danger"}`}
                                            >
                                                {quests[index].done ? "Accomplie" : "Non accomplie"}
                                            </span>
                                            <input
                                                type="checkbox"
                                                disabled={quests[index].done}
                                                checked={quests[index].done}
                                                onChange={() => handleQuestCompletion(quests[index].id)}
                                                style={{ transform: "scale(1.5)" }}
                                            />
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100vh",
                            }}
                        >
                            <div className="spinner-grow text-warning" role="status"/>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuestsPage;
