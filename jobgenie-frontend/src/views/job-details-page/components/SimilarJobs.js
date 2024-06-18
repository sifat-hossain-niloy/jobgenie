import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, IconButton, Paper } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useNavigate } from 'react-router-dom';

const cardStyles = {
  position: 'relative',
  borderRadius: '25px',
  border: '1px solid #6C757D',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  padding: '2px',
  cursor: 'pointer' // Add cursor pointer to indicate clickability
};

const SimilarJobs = ({ similarJobs }) => {
  const navigate = useNavigate();

  const handleJobClick = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    // <div>
    <Card sx={cardStyles}>
        <CardContent>
      <Typography variant="h6" sx={{ mb: 2 }}>Similar Jobs</Typography>
      {similarJobs.map((job) => (
        <Card key={job.id} sx={{ ...cardStyles, mb: 2 }} onClick={() => handleJobClick(job.id)}>
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Avatar src={job.logo} alt={job.company} sx={{ width: 56, height: 56 }} />
              </Grid>
              <Grid item xs>
                <Grid container direction="column" spacing={1} sx={{ paddingLeft: 2 }}>
                  <Grid item>
                    <Typography variant="subtitle1" sx={{ fontSize: '1rem' }}>{job.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>{job.company}</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.875rem' }}>{job.location}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <IconButton color="default">
                  <BookmarkIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={2} sx={{ paddingTop: 2, paddingLeft:9 }}>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>{job.jobType}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>{job.expertise}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      </CardContent>
      </Card>
  );
};

export default SimilarJobs;
