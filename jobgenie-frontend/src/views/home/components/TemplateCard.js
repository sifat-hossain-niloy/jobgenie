import React from 'react';
import { Card, Typography, CardMedia, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TemplateCard = ({ image }) => {
  return (
    <Card sx={{
        width: '434px',
        height: '590px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 2px 28px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        margin: '10px',
        transition: 'transform 0.3s ease-in-out', // Animation timing
        '&:hover': {
          transform: 'scale(1.05)', // Scales up the card on hover
        }
      }}>
      <CardMedia
        component="img"
        image={`/images/${image}`}
        alt="Template Preview"
        sx={{
          width: '422px',
          height: '482px',
          position: 'absolute',
          top: '4.48px',
          left: 'calc(50% - 422px/2)', // Center horizontally
        }}
      />
      {/* Buttons */}
      <Box sx={{
        position: 'absolute',
        width: '100%', // Full width of the card
        display: 'flex',
        justifyContent: 'center',
        top: '515.8px', // Position from top
      }}>
        <Button variant="contained" sx={{
          width: '172.77px',
          height: '51px',
          backgroundColor: '#1D88ED',
          borderRadius: '100px',
          mr: 2,  // Margin right for spacing between buttons
          fontWeight: 'bold',
        }}>
          See Template
          <ArrowForwardIcon sx={{ ml: 1 }}/>
        </Button>
        <Button variant="outlined" sx={{
          width: '172.77px',
          height: '51px',
          borderColor: '#1D88ED',
          borderRadius: '100px',
          fontWeight: 'bold',
        }}>
          Use Template
          <ArrowForwardIcon sx={{ ml: 1 }}/>
        </Button>
      </Box>
    </Card>
  )
}

export default TemplateCard;
