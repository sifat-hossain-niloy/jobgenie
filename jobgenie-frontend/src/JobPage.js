// import React from 'react'
// import { Grid } from '@mui/material'
// import JobFilters from './components/JobFilters'
// import JobList from './components/JobList'

// function JobPage() {
//   return (
//       <Grid container spacing={3} >
//         <Grid item xs={12} sm={4} >
//           <JobFilters />
//         </Grid>
//         <Grid item xs={12} sm={8}>
//           <JobList />
//         </Grid>
//       </Grid>
//   )
// }

// export default JobPage

import React, { useState } from 'react';
import { Grid } from '@mui/material';
import JobFilters from './components/JobFilters';
import JobList from './components/JobList';

function JobPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <JobFilters onSearch={handleSearch} />
      </Grid>
      <Grid item xs={12} sm={8}>
        <JobList searchQuery={searchQuery} />
      </Grid>
    </Grid>
  );
}

export default JobPage;
