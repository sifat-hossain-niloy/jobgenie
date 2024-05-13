import React from 'react'
import { Card, Box, Typography } from '@mui/material'

const Sec2Card = ({ title, subtitle, image  }) => {
  return (
    <Card sx={{
      width: '520px',
      height: '100px',
      borderRadius: '10px',
      transition: 'transform 0.3s ease-in-out', // Animation timing
      '&:hover': {
        transform: 'scale(1.05)', // Scales up the card on hover
      }
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          marginRight: '16px',
          marginTop: '8px',
        }}>
          <img src={`/images/${image}`} alt="s2i1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '-28px',
        }}>
          <Typography sx={{
            /* Easy Online Resume Builder */
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '22px',
            lineHeight: '29px',
            color: '#13287E',
          }}>
            {title}
          </Typography>

          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '15px',
            lineHeight: '19px',
            color: '#888888',
          }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default Sec2Card
