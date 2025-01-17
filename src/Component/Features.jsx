import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import FeatureCard from './FeatureCard';  // Import du composant FeatureCard

import questImage from '../assets/quest_image.png';
import rewardsImage from '../assets/rewards_image.png';

const Features = () => {
  return (
    <section id="features" style={{ padding: '40px 0' }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Nos fonctionnalités
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              title="Suivi des quêtes"
              description="Suivez vos quêtes quotidiennes comme dans un jeu pour rester motivé !"
              image={questImage}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              title="Récompenses et Badges"
                          description="Gagnez des récompenses et des badges en accomplissant vos quêtes quotidiennes."
                image={rewardsImage}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              title="Suivi des progrès"
              description="Suivez vos progrès au quotidien et boostez votre motivation à chaque objectif atteint."
             
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Features;