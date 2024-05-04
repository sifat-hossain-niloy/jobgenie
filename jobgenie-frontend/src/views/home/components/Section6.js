import React from 'react';
import { Container, Grid, Box, Typography, Card } from '@mui/material';
import Dots from '../../../components/Dots';
import Slider from 'react-slick';
import FeedbackCard from './FeedbackCard';

const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const contentData = [
    {
      profileImg: '/images/profile1.jpg',
      feedback: 'Absolutely wonderful experience with this service. Highly recommended!',
      name: 'John Doe',
      rating: 5
    },
    {
      profileImg: '/images/profile2.jpg',
      feedback: 'The customer support was excellent and the product exceeded my expectations.',
      name: 'Jane Smith',
      rating: 4.5
    },
    {
      profileImg: '/images/profile3.jpg',
      feedback: 'Good value for money and quick delivery. I will definitely come back.',
      name: 'Alice Johnson',
      rating: 4
    },
    {
      profileImg: '/images/profile4.jpg',
      feedback: 'Some issues with the service but they were resolved quickly by the team.',
      name: 'Bob Brown',
      rating: 3.5
    },
    {
      profileImg: '/images/profile5.jpg',
      feedback: 'Loved the interface and the ease of use. Perfect for my needs!',
      name: 'Carol White',
      rating: 5
    }
  ];

const Section6 = () => {
  return (
    <Container maxWidth='false' sx={{ 
        width: '100%',
        height: '731px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '731px',
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
            Your Success, Our Inspiration
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
            What our users say
          </Typography>
        </div>
        {/* Slider */}
        <Box sx={{
        position: 'absolute',
        width: '1450px',
        height: '500px',
        left: 'calc(50% - 1450px/2-20px)',
        top: '225px',
        }}>
            <Slider {...sliderSettings}>
                {contentData.map((item, index) => (
                <div key={index}>
                    <FeedbackCard
                    profileImg={item.profileImg}
                    feedback={item.feedback}
                    name={item.name}
                    rating={item.rating}
                    />
                </div>
                ))}
            </Slider>
        </Box>
      </Box>
    </Container>
  );
}

export default Section6;
