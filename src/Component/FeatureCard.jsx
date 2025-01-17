import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const FeatureCard = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;