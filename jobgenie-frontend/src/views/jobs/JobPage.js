import React from 'react'
import { Grid } from '@mui/material'
import JobFilters from './components/JobFilters'
import JobList from './components/JobList'

function JobPage() {
  return (
    <div style={{ width: '100%', padding: 0, margin: 0 }}>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={4} >
          <JobFilters />
        </Grid>
        <Grid item xs={12} sm={8}>
          <JobList />
        </Grid>
      </Grid>
    </div>
  )
}

export default JobPage
