import React from 'react';
import { Card, Typography, Box } from '@mui/material';

const FeatureCard = ({ IconComponent, title, description }) => {
  const titleColor = '#13287E';  // Defined color variable for reuse

  return (
    <Card sx={{
      position: 'relative',
      width: '434px',
      height: '281px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.1)',
      margin: '10px',
      justifyContent: 'center',
      paddingLeft: '20px',
      paddingRight: '20px',
      transition: 'transform 0.3s ease-in-out', // Animation timing
        '&:hover': {
          transform: 'scale(1.05)', // Scales up the card on hover
        }
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        height: '50px',
        marginTop: '40px',
      }}>
        {/* Render the passed IconComponent with title color */}
        {IconComponent && <IconComponent sx={{ fontSize: '50px', color: titleColor }} />}
      </Box>
      <Typography sx={{
        mt: 2, // Margin top to push the typography down after the icon
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '18px',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: titleColor,
      }}>
        {title}
      </Typography>
      <Typography sx={{
        mt: 1, // Margin top for spacing between title and description
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '32px',
        textAlign: 'center',
        color: '#888888',
        width: '90%', // Control the width to 90% of the card width
        margin: 'auto', // Center it horizontally
      }}>
        {description}
      </Typography>
    </Card>
  );
}

export default FeatureCard;
