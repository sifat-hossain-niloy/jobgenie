import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function CheckItem({ text }) {
  return (
    <Box sx={{
        position: 'relative',
        width: '414px',
        height: '30px',
        transition: 'transform 0.1s ease-in-out', // Animation timing
        '&:hover': {
          transform: 'scale(1.1)', // Scales up the card on hover
        }
    }}>
      <img src="/images/check.png" alt="Check" style={{ width: '30px', height: '30px' }} />
      <Typography sx={{
        position: 'absolute',
        width: '375px',
        height: '18px',
        left: '39px',
        top: '6px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#495057',
      }}>
        {text}
      </Typography>
    </Box>
  );
}

export default CheckItem;
