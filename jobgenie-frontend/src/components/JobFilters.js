import React, { useState } from 'react'
import {
  Paper,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Slider,
  Box,
} from '@mui/material'

function JobFilters() {
  const [jobType, setJobType] = useState({
    fullTime: true,
    freelance: true,
    partTime: false,
    volunteer: false,
  })

  const [experienceLevel, setExperienceLevel] = useState('entry')

  const handleJobTypeChange = (event) => {
    setJobType({ ...jobType, [event.target.name]: event.target.checked })
  }

  const handleExperienceChange = (event) => {
    setExperienceLevel(event.target.value)
  }

  // You can adjust the salary range and steps as needed
  const [salaryRange, setSalaryRange] = useState([0, 100])
  const [selectedSalary, setSelectedSalary] = useState('10000');
  const [customSalaryRange, setCustomSalaryRange] = useState({ min: '', max: '' });

  const handleSalaryChange = (event) => {
    setSelectedSalary(event.target.value);
  };

  const handleCustomSalaryChange = (field) => (event) => {
    setCustomSalaryRange({ ...customSalaryRange, [field]: event.target.value });
  };

  // Add the rest of your state and handlers here

  return (
    <Paper style={{ padding: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Filter
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="search-job-title"
        label="Search job title"
        name="search"
      />
      <Box sx={{ mt: 2, mb: 1 }}>
        <Typography variant="subtitle1">Job Type</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={jobType.fullTime}
                onChange={handleJobTypeChange}
                name="fullTime"
              />
            }
            label="Full-time"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jobType.freelance}
                onChange={handleJobTypeChange}
                name="freelance"
              />
            }
            label="Freelance"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jobType.partTime}
                onChange={handleJobTypeChange}
                name="partTime"
              />
            }
            label="Part-time"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={jobType.volunteer}
                onChange={handleJobTypeChange}
                name="volunteer"
              />
            }
            label="Volunteer"
          />
        </FormGroup>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <Typography variant="subtitle1">Experience Level</Typography>
        <RadioGroup
          name="experience-level"
          value={experienceLevel}
          onChange={handleExperienceChange}
        >
          <FormControlLabel
            value="entry"
            control={<Radio />}
            label="Entry Level"
          />
          <FormControlLabel
            value="intermediate"
            control={<Radio />}
            label="Intermediate"
          />
          <FormControlLabel value="expert" control={<Radio />} label="Expert" />
        </RadioGroup>
      </Box>
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography variant="subtitle1">Salary</Typography>
        <RadioGroup name="salary-range" value={selectedSalary} onChange={handleSalaryChange}>
          <FormControlLabel value="10000" control={<Radio />} label="< $10,000" />
          <FormControlLabel value="30000" control={<Radio />} label="$10,000-$30,000" />
          <FormControlLabel value="50000" control={<Radio />} label="$30,000-$50,000" />
          <FormControlLabel value="custom" control={<Radio />} label="Custom" />
          {selectedSalary === 'custom' && (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1 }}>
              <TextField
                label="Min"
                variant="outlined"
                type="number"
                value={customSalaryRange.min}
                onChange={handleCustomSalaryChange('min')}
              />
              <TextField
                label="Max"
                variant="outlined"
                type="number"
                value={customSalaryRange.max}
                onChange={handleCustomSalaryChange('max')}
              />
            </Box>
          )}
        </RadioGroup>
      </Box>
      
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Apply
      </Button>
      {/* Insert Job Location and other filters here */}
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Apply
      </Button>
    </Paper>
  )
}

export default JobFilters
