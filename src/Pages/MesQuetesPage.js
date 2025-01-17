import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const VosQuetesPage = ({ selectedQuests }) => {
    return (
        <div className="container">
            <h1>Vos Quêtes</h1>
            {selectedQuests.length === 0 ? (
                <p>Aucune quête sélectionnée pour le moment.</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {selectedQuests.map((quete) => (
                        <div className="col" key={quete.id}>
                            <div className="card h-100 d-flex flex-column">
                                <img
                                    src={quete.img}
                                    className="card-img-top img-fluid"
                                    alt={quete.title}
                                    style={{ objectFit: 'cover', height: '200px' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{quete.title}</h5>
                                    <p className="card-text">{quete.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VosQuetesPage;
