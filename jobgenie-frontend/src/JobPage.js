import React from 'react'
import { Grid } from '@mui/material'
import JobFilters from './components/JobFilters'
import JobList from './components/JobList'

function JobPage() {
  return (
      <Grid container spacing={3} sx={{ mt: 0.25 }} >
        <Grid item xs={12} sm={4}>
          <JobFilters />
        </Grid>
        <Grid item xs={12} sm={8}>
          <JobList />
        </Grid>
      </Grid>
  )
}

export default JobPage
