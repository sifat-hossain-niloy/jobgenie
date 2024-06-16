import React from 'react';
import { Card, CardContent, Typography, Grid, Button, IconButton, Avatar } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const cardStyles = {
    position: 'relative',
    borderRadius: '25px',
    border: '1px solid #6C757D',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    padding: '16px'
};
  

const dummyData = {
  aboutJob: "This is a great opportunity to work with a leading company in the industry. You will be responsible for leading the design team and collaborating with various departments to deliver high-quality products.",
  minimumQualifications: [
    "Bachelor's degree in Design or related field.",
    "5+ years of experience in product design.",
    "Proficiency in design software such as Adobe Creative Suite and Figma."
  ],
  preferredQualifications: [
    "Master's degree in Design or related field.",
    "Experience with user research and usability testing.",
    "Strong communication and teamwork skills."
  ],
  responsibilities: [
    "Lead the design team in creating innovative products.",
    "Collaborate with engineers and product managers to define product requirements.",
    "Conduct user research and usability testing to inform design decisions."
  ]
};
const JobDetails = ({ job }) => {
    return (
      <Card sx={cardStyles}>
        <CardContent>
          {/* Title and Buttons Row */}
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">{job.title}</Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Button variant="contained" color="primary">Apply</Button>
                </Grid>
                <Grid item>
                  <IconButton color="default">
                    <BookmarkIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="default">
                    <ShareIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
  
          {/* Company and Job Info Row */}
          <Grid container alignItems="center" spacing={2} sx={{ mt: 2 }}>
            <Grid item>
              <Avatar src={job.logo} alt={job.company} sx={{ width: 56, height: 56 }} />
            </Grid>
            <Grid item xs>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle1">{job.company}</Typography>
                    </Grid>
                    <Grid item>
                      <LocationOnIcon fontSize="small" color="action" />
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="textSecondary">{job.location}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography variant="body2">{job.jobType}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">{job.jobType === 'Remote' ? 'Remote' : 'On-site'}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2">{job.expertise}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
  
          {/* Job Description and Other Details */}
          <Typography variant="body1" sx={{ mt: 2 }}>{job.description}</Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>Salary: {job.salary}</Typography>
          <Typography variant="body2">Expertise: {job.expertise}</Typography>
  
          {/* Additional Sections */}
          <Typography variant="h6" sx={{ mt: 4 }}>About the job</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>{dummyData.aboutJob}</Typography>
  
          <Typography variant="h6" sx={{ mt: 4 }}>Minimum Qualifications</Typography>
          {dummyData.minimumQualifications.map((qualification, index) => (
            <Typography key={index} variant="body2" sx={{ mt: 1 }}>- {qualification}</Typography>
          ))}
  
          <Typography variant="h6" sx={{ mt: 4 }}>Preferred Qualifications</Typography>
          {dummyData.preferredQualifications.map((qualification, index) => (
            <Typography key={index} variant="body2" sx={{ mt: 1 }}>- {qualification}</Typography>
          ))}
  
          <Typography variant="h6" sx={{ mt: 4 }}>Responsibilities</Typography>
          {dummyData.responsibilities.map((responsibility, index) => (
            <Typography key={index} variant="body2" sx={{ mt: 1 }}>- {responsibility}</Typography>
          ))}
        </CardContent>
      </Card>
    );
  };
  
export default JobDetails;  