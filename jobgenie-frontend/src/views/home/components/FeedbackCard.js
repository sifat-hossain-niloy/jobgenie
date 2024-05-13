import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';

const FeedbackCard = ({ profileImg, feedback, name, rating }) => {
  return (
    <StyledCard>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 2 }}>
          <img src='/images/quote.png' style={{ width: 40, height: 40, top: '20px' }} />
          <Avatar src={profileImg} alt={name} 
          sx={{ 
            position: 'absolute', width: 92, height: 92, margin: 'auto',
            left: '180px', 
            top: '26px',
            }} />
        </Box>
        <Typography sx={{ 
            fontSize: 16, textAlign: 'center', marginTop: 2, marginBottom: 2,
            top: '119px', 
            position: 'absolute',
            width: '388px',
            height: '50px',
            left: 'calc(50% - 388px/2)',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '20px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: '#888888',
            }}>
          {feedback}
        </Typography>
        <Typography variant="h6" sx={{ position: 'absolute', fontWeight: 600, textAlign: 'center', color: '#13287E', marginBottom: 1, top: '200px',
        alignItems: 'center',
            textAlign: 'center',
            width: '388px',
            height: '50px',
            left: 'calc(50% - 388px/2)', }}>
          {name}
        </Typography>
        <Rating 
        name="read-only" 
        value={rating} 
        precision={0.5} 
        readOnly
        sx={{
            position: 'absolute',
            top: '230px', // Adjusted to position just below the user's name
            left: 'calc(50% - 388px/2)', // Centers the component horizontally
            width: '388px',
            height: '50px',
            display: 'flex',
            alignItems: 'center', // Vertically centers the stars within the component height
            justifyContent: 'center', // Horizontally centers the stars within the component width
        }} 
        />

      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#FFFFFF',

  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  borderRadius: '27px',
  position: 'relative',
  width: '450px',
  height: '289px',
}));

export default FeedbackCard;
