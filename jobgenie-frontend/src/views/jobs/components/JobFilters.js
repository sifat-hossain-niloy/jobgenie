import React, { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
  Card,
  CardContent,
} from '@mui/material';

function JobFilters() {
  const [jobType, setJobType] = useState({
    fullTime: true,
    freelance: true,
    partTime: false,
    volunteer: false,
  });

  const [experienceLevels, setExperienceLevels] = useState({
    entry: false,
    intermediate: false,
    expert: false
  });

  const handleJobTypeChange = (event) => {
    setJobType({ ...jobType, [event.target.name]: event.target.checked });
  };

  const handleExperienceChange = (level, checked) => {
    setExperienceLevels(prevLevels => ({
      ...prevLevels,
      [level]: checked
    }));
  };

  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const [selectedSalary, setSelectedSalary] = useState('10000');
  const [customSalaryRange, setCustomSalaryRange] = useState({
    min: '',
    max: '',
  });

  const handleSalaryChange = (event) => {
    setSelectedSalary(event.target.value);
  };

  const handleCustomSalaryChange = (field) => (event) => {
    setCustomSalaryRange({ ...customSalaryRange, [field]: event.target.value });
  };

  const clearFilters = () => {
    setJobType({
      fullTime: false,
      freelance: false,
      partTime: false,
      volunteer: false,
    });
    setExperienceLevels({
      entry: false,
      intermediate: false,
      expert: false,
    });
    setSelectedSalary('10000');
    setCustomSalaryRange({ min: '', max: '' });
  };

  return (
    <Paper sx={{ padding: 2}}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Filter</Typography>
        <Button onClick={clearFilters} variant="outlined" color="primary">
          Clear All
        </Button>
      </Box>
      <TextField
        variant="outlined"
        fullWidth
        id="search-job-title"
        label="Search job title"
        name="search"
        sx={{ mb: 2 }}
      />
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1">Job Type</Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={jobType.fullTime} onChange={handleJobTypeChange} name="fullTime" />}
              label="Full-time"
            />
            <FormControlLabel
              control={<Checkbox checked={jobType.freelance} onChange={handleJobTypeChange} name="freelance" />}
              label="Freelance"
            />
            <FormControlLabel
              control={<Checkbox checked={jobType.partTime} onChange={handleJobTypeChange} name="partTime" />}
              label="Part-time"
            />
            <FormControlLabel
              control={<Checkbox checked={jobType.volunteer} onChange={handleJobTypeChange} name="volunteer" />}
              label="Volunteer"
            />
          </FormGroup>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1">Experience Level</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={experienceLevels.entry}
                  onChange={(event) => handleExperienceChange('entry', event.target.checked)}
                  name="entry"
                />
              }
              label="Entry Level"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={experienceLevels.intermediate}
                  onChange={(event) => handleExperienceChange('intermediate', event.target.checked)}
                  name="intermediate"
                />
              }
              label="Intermediate"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={experienceLevels.expert}
                  onChange={(event) => handleExperienceChange('expert', event.target.checked)}
                  name="expert"
                />
              }
              label="Expert"
            />
          </FormGroup>
        </CardContent>
      </Card>
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1">Salary</Typography>
          <RadioGroup
            name="salary-range"
            value={selectedSalary}
            onChange={handleSalaryChange}
          >
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
        </CardContent>
      </Card>
    </Paper>
  );
}

export default JobFilters;
