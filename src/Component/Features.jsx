import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import FeatureCard from './FeatureCard';

import questImage from '../assets/quest_image.jpg';
import rewardsImage from '../assets/rewards_image.jpg';

const Features = () => {
    return (
        <section id="features" style={{ padding: '40px 0' }}>
            <Container>
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    style={{ color: '#333', fontWeight: 'bold', marginBottom: '20px' }}
                >
                    Nos fonctionnalités
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={10} sm={7} md={6}>
                        <FeatureCard
                            title="Suivi des quêtes"
                            description="Suivez vos quêtes quotidiennes comme dans un jeu pour rester motivé !"
                            image={questImage}
                        />
                    </Grid>
                    <Grid item xs={10} sm={7} md={6}>
                        <FeatureCard
                            title="Récompenses et Badges"
                            description="Gagnez des récompenses et des badges en accomplissant vos quêtes quotidiennes."
                            image={rewardsImage}
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default Features;