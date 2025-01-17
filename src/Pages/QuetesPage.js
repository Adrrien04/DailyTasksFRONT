import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Card, Button} from 'react-bootstrap';
import {FaTasks} from 'react-icons/fa';
import 'animate.css';

const theme = createTheme({
    components: {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: 'orange',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkorange',
                        },
                    },
                },
            },
        },
    },
});

const QuetesPage = () => {
    const [quetes, setQuetes] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const questsPerPage = 9;
    const [hoveredButton, setHoveredButton] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/api/quests`)
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

    const indexOfLastQuest = currentPage * questsPerPage;
    const indexOfFirstQuest = indexOfLastQuest - questsPerPage;
    const currentQuests = quetes.slice(indexOfFirstQuest, indexOfLastQuest);


    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="container">
                <div>
                    <p style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '400'}}></p>
                </div>
                <h1 style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '700'}}>Liste des
                    Quêtes</h1>
                {error ? (
                    <p style={{color: "red"}}>{error}</p>
                ) : (
                    <>
                        <Stack spacing={2} alignItems="center">

                            <Pagination
                                count={Math.ceil(quetes.length / questsPerPage)}
                                page={currentPage}
                                onChange={handlePageChange}
                                variant="outlined"
                                color="primary"
                            />
                        </Stack>
                        <div>
                            <p style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '400'}}>

                            </p>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {currentQuests.map((quete) => (
                                <div className="col" key={quete.id}>
                                    <Card className="h-100 animate__animated animate__fadeInUp">
                                        <Card.Img variant="top" src={quete.img} alt={quete.title}
                                                  style={{objectFit: 'cover', height: '300px'}}/>
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title>{quete.title}</Card.Title>
                                            <Card.Text className="flex-grow-1">{quete.description}</Card.Text>
                                            <Card.Text>Catégorie : {quete.category}</Card.Text>
                                            <Card.Text>
                                                Difficulté : {quete.difficulty}
                                                {quete.difficulty === 'easy' && (
                                                    <span style={{color: 'green', marginLeft: '10px'}}>●●●</span>
                                                )}
                                                {quete.difficulty === 'medium' && (
                                                    <span style={{color: 'orange', marginLeft: '10px'}}>●●●</span>
                                                )}
                                                {quete.difficulty === 'hard' && (
                                                    <span style={{color: 'red', marginLeft: '10px'}}>●●●</span>
                                                )}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '400'}}></p>
                        </div>
                        <Stack spacing={2} alignItems="center">
                            <Pagination
                                count={Math.ceil(quetes.length / questsPerPage)}
                                page={currentPage}
                                onChange={handlePageChange}
                                variant="outlined"
                                color="primary"
                            />
                        </Stack>
                        <div>
                            <p style={{textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: '400'}}></p>
                        </div>
                    </>
                )}
            </div>
        </ThemeProvider>
    );
};

export default QuetesPage;