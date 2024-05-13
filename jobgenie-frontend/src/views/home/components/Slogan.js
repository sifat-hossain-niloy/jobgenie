import React from 'react';
import { Box, Typography } from '@mui/material';
import { Description } from '@mui/icons-material';
import { keyframes } from '@mui/system';

// Keyframes for the sliding effect
const slideIn = keyframes`
  from {
    transform: translateX(1500%);
  }
  to {
    transform: translateX(0);
  }
`;

function Slogan() {
  return (
    <Box sx={{
      position: 'absolute',
      width: '475px',
      height: '40px',
      left: '97px',
      top: '51px',
      bgcolor: 'rgba(29, 136, 237, 0.16)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'  // Hide anything that overflows during the animation
    }}>
      <Box sx={{
        position: 'relative',
        width: '32px',
        height: '32px',
        left: '13px',
        bgcolor: '#4DC0B9',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: `${slideIn} 1s ease forwards`  // Apply the animation
        }}>
        <Description sx={{
          color: '#FFFFFF',  
          fontSize: '22px'
        }} />
      </Box>

      <Typography sx={{
        position: 'absolute',
        width: '450px',
        left: '35px',  // Adjust to position the text properly after the ellipse
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '24px',
        color: '#1D88ED',
        textAlign: 'center',
        opacity: 0,  // Start with the text invisible
        animation: `${keyframes`
          0% { opacity: 0; transform: translateX(100px); }
          50% { opacity: 0; transform: translateX(100px); }
          100% { opacity: 1; transform: translateX(0); }
        `} 1s ease forwards`  
      }}>
        Build your first professional CV in no time!
      </Typography>
    </Box>
  );
}

export default Slogan;
