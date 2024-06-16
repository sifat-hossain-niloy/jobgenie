import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Typography } from '@mui/material';
import JobDetails from './components/JobDetails';
import SimilarJobs from './components/SimilarJobs';

const JobDetailPage = ({ jobs }) => {
  const { jobId } = useParams();
  const job = jobs.find(job => job.id === jobId); // Fetch the selected job based on jobId

  if (!job) {
    return <Typography variant="h6">Job not found</Typography>;
  }

  // Filter similar jobs based on some criteria, e.g., same company or job type
  const similarJobs = jobs.filter(j => j.company === job.company && j.id !== job.id);
  return (
    <Paper sx={{ padding: 2, margin: 'auto', maxWidth: 1200 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <JobDetails job={job} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SimilarJobs similarJobs={jobs} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default JobDetailPage;
