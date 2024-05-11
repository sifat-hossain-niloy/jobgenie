import React from 'react';
import { Grid, Card, CardContent, Typography, Avatar, Box } from '@mui/material';
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
/* Job 1 */

// box-sizing: border-box;

// position: absolute;
// width: 1314px;
// height: 290px;
// left: calc(50% - 1314px/2);
// top: 29px;

// border: 1px solid #6C757D;
// border-radius: 30px;


function JobList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {jobs.map((job, index) => (
          <Grid item xs={12} key={index} height = "290px" boxSizing={'border-box'} width={'1314px'} top={'29px'} borderRadius="30px" border={"1px solid #6C757D"}>
            {/* <Card >
              <CardContent> */}
                <Box  display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                  <Avatar src={job.logo} alt={job.company} sx={{ width: 56, height: 56 }} />
                  <Box>
                    <Typography variant="h6" component="div">{job.title}</Typography>
                    <Typography variant="body2" color="textSecondary">{job.company}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">{job.jobType}</Typography>
                    <Typography variant="body2">{job.location}</Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="textSecondary">{job.description}</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                  <Typography variant="body2">Salary: {job.salary}</Typography>
                  <Typography variant="body2">{job.expertise}</Typography>
                </Box>
              {/* </CardContent>
            </Card> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default JobList;
