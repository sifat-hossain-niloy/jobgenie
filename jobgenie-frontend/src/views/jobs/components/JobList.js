import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Avatar, Box, Paper } from '@mui/material';

const cardStyles = {
  position: 'relative',
  borderRadius: '25px',
  border: '1px solid #6C757D',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  padding: '16px',
  cursor: 'pointer'
};


function calculateDaysAgo(postedDate) {
  const datePosted = new Date(postedDate);
  const currentDate = new Date();
  const differenceInTime = currentDate.getTime() - datePosted.getTime();
  return Math.floor(differenceInTime / (1000 * 3600 * 24)); // Convert the time difference from milliseconds to days
}

const JobList = ({ jobs }) => {
  const navigate = useNavigate();

  const handleJobClick = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <Paper sx={{ padding: 2, borderRadius: '25px', boxSizing: 'border-box' }}>
      <Grid container spacing={2}>
        {jobs.map((job) => (
          <Grid item xs={12} key={job.id} sx={{ cursor: 'pointer' }} onClick={() => handleJobClick(job.id)}>
            <Card sx={cardStyles}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                  <Avatar src={job.logo} alt={job.company} sx={{ width: 56, height: 56 }} />
                  <Box sx={{ marginLeft: 2, flex: 1 }}>
                    <Typography variant="h6">{job.title}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" color="textSecondary">{job.company}</Typography>
                      <Typography variant="body2" color="textSecondary">{job.location}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2">{`Posted ${calculateDaysAgo(job.postedDate)} days ago`}</Typography>
                </Box>
                <Box sx={{ marginBottom: 2 }}>
                  <Typography variant="body2">{job.description}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">Salary: {job.salary}</Typography>
                  <Typography variant="body2">Expertise: {job.expertise}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default JobList;
