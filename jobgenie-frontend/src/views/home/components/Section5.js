import React from 'react';
import { Container, Grid, Box, Typography, Card } from '@mui/material';
import Dots from '../../../components/Dots';
import FeatureCard from './FeatureCard';
import EditIcon from '@mui/icons-material/Edit';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import RecommendIcon from '@mui/icons-material/Recommend';
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { FileCopy } from '@mui/icons-material';

const features = [
    {
      IconComponent: FileCopy,
      title: "Choose from our templates",
      description: "Browse through a variety of professional templates to find the one that suits your style and career objectives."
    },
    {
      IconComponent: EditIcon,
      title: "Easily Modify Templates",
      description: "Customize your chosen template with easy-to-use editing tools to tailor your CV to your needs."
    },
    {
      IconComponent: CloudDownloadIcon,
      title: "Download and share your CV",
      description: "Easily download your finished CV in multiple formats and share it directly with employers."
    },
    {
      IconComponent: RecommendIcon,
      title: "Get job recommendations",
      description: "Receive tailored job recommendations based on your skills and preferences to boost your career prospects."
    },
    {
      IconComponent: SearchIcon,
      title: "Personalized job search",
      description: "Utilize our advanced search tools to filter and apply for jobs that match your unique career aspirations."
    },
    {
      IconComponent: ThumbUpAltIcon,
      title: "Higher chance of acceptance",
      description: "Enhance your CV using industry-specific tips and suggestions to increase your chances of landing job interviews."
    }
  ];

const Section5 = () => {
  return (
    <Container maxWidth='false' sx={{ 
        width: '100%',
        height: '925px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '925px',
        background: 'rgba(154, 161, 171, 0.18)',
      }}/>
      <Box sx={{
        position: 'relative',
        width: '1400px',
        height: '875px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginTop: '20px', // Adjusted top margin for spacing
        }}>
          <Dots />
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '30px',
            lineHeight: '42px',
            textAlign: 'center',
            textTransform: 'capitalize',
            color: '#13287E',
            mt: 2, // Adjusted top margin for alignment
            fontWeight: 'bold',
          }}>
            Our Main Features
          </Typography>
          <Typography sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '32px',
            textAlign: 'center',
            color: '#888888',
            mt: 1, // Adjusted top margin for spacing
          }}>
            Take a look at some of our main features
          </Typography>
        </div>

        <Grid container spacing={2} sx={{ mt: 3 }}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
          <FeatureCard
            IconComponent={feature.IconComponent}
            title={feature.title}
            description={feature.description}
          />
        </Grid>
      ))}
    </Grid>
      </Box>
    </Container>
  );
}

export default Section5;
