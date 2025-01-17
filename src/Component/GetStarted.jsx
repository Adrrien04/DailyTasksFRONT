import React from 'react';
import { Container, Grid, Typography } from '@mui/material';


import goalImage from '../assets/goal.png';
import motivationImage from '../assets/mot.png';
import shareImage from '../assets/share.png';

const GetStarted = () => {
    return (
        <section id="features" style={{ padding: '40px 0', backgroundColor: 'rgba(255,246,209,255)' }}>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    Les membres utilisent DailyTasks pour améliorer
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={motivationImage} alt="Santé et fitness" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                            </div>
                            <Typography variant="h5" gutterBottom>
                                Motivation et Objectif
                            </Typography>
                            <Typography variant="body1" style={{ textAlign: 'justify' }}>
                                Les utilisateurs utilisent DailyTasks pour se fixer des objectifs quotidiens sous forme de “mini-quêtes” afin de rester motivés et améliorer leur routine. Ces quêtes peuvent inclure des actions simples, comme faire du sport, méditer ou accomplir une tâche professionnelle.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={goalImage} alt="Récompenses et Badges" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                            </div>
                            <Typography variant="h5" gutterBottom>
                                Gamification des Tâches
                            </Typography>
                            <Typography variant="body1" style={{ textAlign: 'justify' }}>
                                L’application rend les tâches du quotidien plus amusantes grâce à un système de points, de badges et de récompenses. Cela transforme la réalisation des objectifs en un jeu, ce qui encourage les utilisateurs à rester engagés.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ width: '100%', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={shareImage} alt="Suivi des progrès" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
                            </div>
                            <Typography variant="h5" gutterBottom>
                                Partage et Interactions Sociales
                            </Typography>
                            <Typography variant="body1" style={{ textAlign: 'justify' }}>
                                DailyTasks permet aux utilisateurs de partager leurs quêtes avec leurs amis ou la communauté, de découvrir des défis créés par d’autres, et même de collaborer sur des objectifs communs. Cela crée un sentiment d’appartenance et stimule l’esprit de compétition amicale.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default GetStarted;
