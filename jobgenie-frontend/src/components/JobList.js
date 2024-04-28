import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const jobs = [
  { title: 'Software Engineer', location: 'New York', description: 'Develop cutting-edge software solutions.' },
  { title: 'Web Developer', location: 'San Francisco', description: 'Focus on frontend web technologies.' }
];

function JobList() {
  return (
    <Grid container spacing={2}>
      {jobs.map((job, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{job.title}</Typography>
              <Typography>{job.location}</Typography>
              <Typography color="textSecondary">{job.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default JobList;
