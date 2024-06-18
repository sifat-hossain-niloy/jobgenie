import React from 'react';
import { Grid, Paper } from '@mui/material';
import JobFilters from './components/JobFilters';
import JobList from './components/JobList';
import PageContainer from '../../components/container/PageContainer';

function JobPage({ jobs }) {
  return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <JobFilters />
        </Grid>
        <Grid item xs={12} md={8}>
          <JobList jobs={jobs} />
        </Grid>
      </Grid>
  );

}

export default JobPage;
