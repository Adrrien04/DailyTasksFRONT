import React, { useState, useEffect } from 'react';
import { Box, Button, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import headerImg from '../assets/main123.png';

const Header = () => {
    const [user, setUser] = useState(null);
    const [remainingQuests, setRemainingQuests] = useState(0);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
            fetchQuests(storedUser.id);
        }
    }, []);

    const fetchQuests = async (userId) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/api/daily_quests`);
            const data = await response.json();

            const userQuests = data.member.filter((quest) => quest.user === `/api/users/${userId}`);

            const remaining = userQuests.filter((quest) => !quest.done).length;
            setRemainingQuests(remaining);
        } catch (error) {
            console.error('Error fetching quests:', error);
        }
    };



    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundColor: 'rgba(255,246,209,255)',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    return (
        <CustomBox component="header">
            <BoxText component="section">
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        color: 'orange',
                    }}
                >
                    Bienvenue dans DailyTasks! 
                </Typography>

                <Typography
                    variant="body1"
                    component="p"
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: 'orange',
                    }}
                >
                    Transformez vos tâches en jeu & accomplissez vos objectifs tout en vous amusant !
                </Typography>

                <Box>
                    {user ? (
                        <>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'orange',
                                    mb: 2,
                                }}
                            >
                                Bonjour {user.name}, êtes-vous prêts à faire vos quêtes ?
                            </Typography>
                            <Link to="/mesquetes" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mr: 2,
                                        px: 6,
                                        py: 2,
                                        fontSize: '1.2rem',
                                        textTransform: 'capitalize',
                                        borderRadius: '30px',
                                        color: 'orange',
                                        backgroundColor: '#14192d',
                                        position: 'relative',
                                        '&&:hover': {
                                            backgroundColor: '#343a55',
                                        },
                                    }}
                                >
                                    Voir mes quêtes du jour
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '-8px',
                                            right: '-8px',
                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            backgroundColor: 'red',
                                            color: 'white',
                                            fontSize: '12px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {remainingQuests}
                                    </Box>
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mr: 2,
                                        px: 4,
                                        py: 1,
                                        fontSize: '0.9rem',
                                        textTransform: 'capitalize',
                                        borderRadius: 0,
                                        color: 'orange',
                                        backgroundColor: '#14192d',
                                        '&&:hover': {
                                            backgroundColor: '#343a55',
                                        },
                                    }}
                                >
                                    Connexion
                                </Button>
                            </Link>

                            <Button
                                component={Link}
                                to={'/register'}
                                variant="contained"
                                sx={{
                                    px: 4,
                                    py: 1,
                                    fontSize: '0.9rem',
                                    textTransform: 'capitalize',
                                    borderRadius: 0,
                                    color: '#fff',
                                    backgroundColor: 'orange',
                                    borderColor: '#fff',
                                    '&&:hover': {
                                        color: '#fff',
                                        backgroundColor: '#FFD700',
                                        borderColor: '#FFD700',
                                    },
                                }}
                            >
                                Inscription
                            </Button>
                        </>
                    )}
                </Box>
            </BoxText>

            <Box
                sx={(theme) => ({
                    [theme.breakpoints.down('md')]: {
                        flex: '1',
                        paddingTop: '30px',
                        alignSelf: 'center',
                    },
                    [theme.breakpoints.up('md')]: {
                        flex: '2',
                        alignSelf: 'flex-end',
                    },
                })}
            >
                <img
                    src={headerImg}
                    alt="header"
                    style={{
                        width: '100%',
                        marginBottom: -15,
                    }}
                />
            </Box>
        </CustomBox>
    );
};

export default Header;
