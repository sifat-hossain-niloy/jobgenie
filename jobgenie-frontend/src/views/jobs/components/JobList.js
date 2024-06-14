import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Box, Paper } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business'; // Icon for the company, you can replace it with actual logos if available

const jobs = [
  {
    title: 'Senior Product Designer',
    company: 'Google',
    jobType: 'Full-Time',
    location: 'Remote - Jakarta, Indonesia',
    description: 'Join Google’s innovative team as a Senior Product Designer and lead the design revolution. Work alongside the brightest minds in the industry contributing your expertise to shape up the future.',
    salary: '$500-$800/month',
    expertise: 'Expert',
    logo: 'https://example.com/path/to/google/logo.png' // Replace with actual logo URL if available
  },
  {
    title: 'Data Scientist',
    company: 'Microsoft',
    jobType: 'Part-Time',
    location: 'Redmond, WA, USA',
    description: 'Apply your deep expertise in machine learning, statistics, and data mining to make a significant impact in our product direction.',
    salary: '$1500-$3000/month',
    expertise: 'Intermediate',
    logo: 'https://example.com/path/to/microsoft/logo.png' // Replace with actual logo URL if available
  },
  {
    title: 'Cloud Infrastructure Engineer',
    company: 'Amazon',
    jobType: 'Freelance',
    location: 'Remote - Global',
    description: 'Help us build robust, scalable, and cutting-edge cloud solutions for our millions of customers worldwide.',
    salary: '$3000-$5000/month',
    expertise: 'Expert',
    logo: 'https://example.com/path/to/amazon/logo.png' // Replace with actual logo URL if available
  },
  {
    title: 'UX/UI Designer',
    company: 'Airbnb',
    jobType: 'Full-Time',
    location: 'San Francisco, CA, USA',
    description: 'Create intuitive and beautiful products that offer a seamless experience to our global community.',
    salary: '$4000-$6000/month',
    expertise: 'Expert',
    logo: 'https://example.com/path/to/airbnb/logo.png' // Replace with actual logo URL if available
  },
  {
    title: 'Frontend Developer',
    company: 'Spotify',
    jobType: 'Full-Time',
    location: 'Stockholm, Sweden',
    description: 'Work on the forefront of the music industry and develop innovative web applications that reach millions of users worldwide.',
    salary: '$3500-$4500/month',
    expertise: 'Intermediate',
    logo: 'https://example.com/path/to/spotify/logo.png' // Replace with actual logo URL if available
  }
];



function calculateDaysAgo(postedDate) {
  const datePosted = new Date(postedDate);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - datePosted.getTime();
  return Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert the time difference from milliseconds to days
}

function JobList() {
  return (
    <Paper sx={{
      position: 'absolute',
      width: '65%',
      top: '92px',
      borderRadius: '25px',
      boxSizing: 'border-box',
    }}>
      <Grid container spacing={2} sx={{
        position: 'absolute',
        height: '1015px',
        left: '0px',
        top: '20px',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: '25px',
        boxSizing: 'border-box',
      }}>
        {jobs.map((job, index) => (
          <Grid item xs={11} key={index} sx={{
            position: 'relative',
            left: '40px',
            height: '290px',
            mt: index !== 0 ? 2 : 0,
            borderRadius: '25px',
            border: '1px solid #6C757D',
            boxSizing: 'border-box',
            overflowX: 'hidden'
          }}>
            <Box sx={{
              position: 'absolute',
              height: '77px',
              left: '22px',
              top: '20px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 'calc(100% - 44px)'
            }}>
              <Avatar src={job.logo} alt={job.company} sx={{ width: 56, height: 56 }} />
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: 2,
                flex: 1
              }}>
                <Typography variant="h6" component="div" sx={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '34px',
                  color: '#000000'
                }}>
                  {job.title}
                </Typography>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  gap:1,
                  alignItems: 'center'
                }}>
                  <Typography variant="body2" color="textSecondary">
                    {job.company}
                  </Typography>
                  <Typography variant="body2">
                    {job.jobType === 'Remote' ? 'Remote' : 'On-site'}
                  </Typography>
                  <Typography variant="body2">
                    {job.jobType}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end'
              }}>
                <Typography variant="body2">{job.location}</Typography>
                <Typography variant="body2">{`Posted ${calculateDaysAgo(job.postedDate)} days ago`}</Typography>
              </Box>
            </Box>
            <Box sx={{
              position: 'absolute',
              width: 'calc(100% - 44px)',
              left: '22px',
              top: '120px',
              overflow: 'auto'
            }}>
              <Typography variant="body2" color="textSecondary">
                {job.description}
              </Typography>
            </Box>
            <Box sx={{
              position: 'absolute',
              width: 'calc(100% - 40px)',
              left: '20px',
              top: '228px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Typography variant="body2">Salary: {job.salary}</Typography>
              <Typography variant="body2">{job.expertise}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default JobList;