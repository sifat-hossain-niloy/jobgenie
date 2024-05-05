import React from 'react';
import { Box } from '@mui/material';

const Dots = ({left, top}) => {
  return (
    <Box sx={{
      position: 'relative',
      width: '86px',
      height: '8px',
      left: left || '0px',
      top: top || '0px',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <span style={{
        width: '8px',
        background: '#00A8FF',
        borderRadius: '4px'
      }} />
      <span style={{
        width: '8px',
        background: '#8C7AE6',
        borderRadius: '4px'
      }} />
      <span style={{
        width: '8px',
        background: '#FBC531',
        borderRadius: '4px'
      }} />
      <span style={{
        width: '8px',
        background: '#4CD137',
        borderRadius: '4px'
      }} />
      <span style={{
        width: '8px',
        background: '#487EB0',
        borderRadius: '4px'
      }} />
      <span style={{
        width: '8px',
        background: '#E84118',
        borderRadius: '4px'
      }} />
      <span style={{
        width: '8px',
        background: '#8C7AE6',
        borderRadius: '4px'
      }} />
    </Box>
  );
}

export default Dots;
