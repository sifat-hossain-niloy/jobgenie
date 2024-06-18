import React from 'react';
import { Grid, Container } from '@mui/material';
import JobFilters from './components/JobFilters';
import JobList from './components/JobList';
import PageContainer from '../../components/container/PageContainer';

function JobPage({ jobs }) {
  return (
    <PageContainer title="Jobs" description="Job Page">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <JobFilters />
          </Grid>
          <Grid item xs={12} md={8}>
            <JobList jobs={jobs} />
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
}

export default JobPage;
