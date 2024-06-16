import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const cardStyles = {
  position: 'relative',
  borderRadius: '25px',
  border: '1px solid #6C757D',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  padding: '16px'
};

const SimilarJobs = ({ similarJobs }) => {
  return (
    <div>
      <Typography variant="h6" sx={{ mb: 2 }}>Similar Jobs</Typography>
      {similarJobs.map((job) => (
        <Card key={job.id} sx={{ ...cardStyles, mb: 2 }}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Avatar src={job.logo} alt={job.company} sx={{ width: 56, height: 56 }} />
              </Grid>
              <Grid item xs>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="subtitle1" sx={{ fontSize: '1rem' }}>{job.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>{job.company}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.875rem' }}>{job.location}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>{job.jobType}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>{job.expertise}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <IconButton color="default">
                  <BookmarkIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
    
  );
};

export default SimilarJobs;
