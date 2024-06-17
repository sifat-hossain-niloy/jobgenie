// import React, { useState } from 'react'
// import {
//   Paper,
//   Typography,
//   TextField,
//   Checkbox,
//   Button,
//   FormGroup,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   Radio,
//   FormControlLabel,
//   Slider,
//   Card,
//   CardContent,
//   Box,
// } from '@mui/material'



// function JobFilters() {
//   const [jobType, setJobType] = useState({
//     fullTime: true,
//     freelance: true,
//     partTime: false,
//     volunteer: false,
//   })

//   const [experienceLevel, setExperienceLevel] = useState('entry')

//   const handleJobTypeChange = (event) => {
//     setJobType({ ...jobType, [event.target.name]: event.target.checked })
//   }

//   const [experienceLevels, setExperienceLevels] = useState({
//     entry: false,
//     intermediate: false,
//     expert: false
//   });
  
//   // Handler to update state
//   const handleExperienceChange = (level, checked) => {
//     setExperienceLevels(prevLevels => ({
//       ...prevLevels,
//       [level]: checked
//     }));
//   };

//   // You can adjust the salary range and steps as needed
//   const [salaryRange, setSalaryRange] = useState([0, 100])
//   const [selectedSalary, setSelectedSalary] = useState('10000')
//   const [customSalaryRange, setCustomSalaryRange] = useState({
//     min: '',
//     max: '',
//   })

//   const handleSalaryChange = (event) => {
//     setSelectedSalary(event.target.value)
//   }

//   const handleCustomSalaryChange = (field) => (event) => {
//     setCustomSalaryRange({ ...customSalaryRange, [field]: event.target.value })
//   }
//   const clearFilters = () => {
//     // Reset all filter states here
//     // Example:
//     handleJobTypeChange({ fullTime: false, freelance: false, partTime: false, volunteer: false });
//     handleExperienceChange(''); // Reset experience level
//     handleSalaryChange(''); // Reset salary
//     handleCustomSalaryChange({ min: '', max: '' }); // Clear custom salary range
//   };


// return (
//   <Paper style={{
//     padding: '16px',
//     position: 'absolute',
//     width: '30%',
//     height: '1014px',
//     left: '57px',
//     top: '92px',
//     overflowY: 'scroll',
//     background: '#FFFFFF',
//     border: '1px solid #CED4DA',
//     borderRadius: '40px'
//   }}>
//   <Box sx={{
//       position: 'absolute',
//       width: '92%',
//       height: '80px',
//       // left: '17px',
//       top: '0px',
//       border: '1px solid #CED4DA',
//       borderRadius: '25px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: '10px'
//     }}>
//       <Typography variant="h6" gutterBottom
//       sx={
//         {
//           borderRadius: '25px',  // Adjusted from 10px to 25px to match your requirement
//           boxSizing: 'border-box',
//           position: 'absolute', // Note: Absolute positioning might require additional context or adjustments based on the parent container
//           width: '60px',
//           // border: '1px solid #CED4DA'
//         }
//       }
//       >
//         Filter
//       </Typography>
//       <Button onClick={clearFilters} variant="outlined" color="primary"
//       sx={
//         {
//           borderRadius: '25px',  // Adjusted from 10px to 25px to match your requirement
//           boxSizing: 'border-box',
//           position: 'absolute', // Note: Absolute positioning might require additional context or adjustments based on the parent container
//           // width: '10',
//           right:'10px',
//           // border: '1px solid #CED4DA'
//         }
//       }>
//         Clear All
//       </Button>
//     </Box>
    
//       <TextField
//         variant="outlined"
//         fullWidth
//         id="search-job-title"
//         label="Search job title"
//         name="search"
//         sx={
//           {
//             borderRadius: '25px',  // Adjusted from 10px to 25px to match your requirement
//             boxSizing: 'border-box',
//             position: 'absolute', // Note: Absolute positioning might require additional context or adjustments based on the parent container
//             width: '90%',
//             height: '70px',
//             left: '17px',
//             top: '100px',
//             // border: '1px solid #CED4DA'
//           }
//         }
//       />

    //   <Card variant="outlined" sx={{
    //     position: 'absolute',
    //     width: '90%',
    //     height: '220px',
    //     left: '18px',
    //     top: '180px',
    //   }}>
    //   <CardContent>
    //     <FormGroup>
    //       <Box >
    //         <Typography variant="subtitle1">Job Type</Typography>
    //         <FormGroup>
    //           <FormControlLabel
    //             control={<Checkbox checked={jobType.fullTime} onChange={handleJobTypeChange} name="fullTime" />}
    //             label="Full-time"
    //           />
    //           <FormControlLabel
    //             control={<Checkbox checked={jobType.freelance} onChange={handleJobTypeChange} name="freelance" />}
    //             label="Freelance"
    //           />
    //           <FormControlLabel
    //             control={<Checkbox checked={jobType.partTime} onChange={handleJobTypeChange} name="partTime" />}
    //             label="Part-time"
    //           />
    //           <FormControlLabel
    //             control={<Checkbox checked={jobType.volunteer} onChange={handleJobTypeChange} name="volunteer" />}
    //             label="Volunteer"
    //           />
    //         </FormGroup>
    //       </Box>
    //     </FormGroup>
    //   </CardContent>
    // </Card>
    // <Card variant="outlined" sx={{
    //   position: 'absolute',
    //   width: '90%',
    //   height: '175px',
    //   left: '18px',
    //   top: '420px'
    // }}>
    //   <CardContent>
    //     <Typography variant="subtitle1" 
    //     sx={{
    //       fontFamily: 'Inter Tight',
    //       fontStyle: 'normal',
    //       fontWeight: 700, // Bold
    //       fontSize: '25px',
    //       lineHeight: '30px',
    //       color: '#000000'
    //     }}
    //     >Experience Level</Typography>
    //     <FormGroup>
    //       <FormControlLabel
    //         control={
    //           <Checkbox
    //             checked={experienceLevels.entry}
    //             onChange={(event) => handleExperienceChange('entry', event.target.checked)}
    //             name="entry"
    //           />
    //         }
    //         label="Entry Level"
    //       />
    //       <FormControlLabel
    //         control={
    //           <Checkbox
    //             checked={experienceLevels.intermediate}
    //             onChange={(event) => handleExperienceChange('intermediate', event.target.checked)}
    //             name="intermediate"
    //           />
    //         }
    //         label="Intermediate"
    //       />
    //       <FormControlLabel
    //         control={
    //           <Checkbox
    //             checked={experienceLevels.expert}
    //             onChange={(event) => handleExperienceChange('expert', event.target.checked)}
    //             name="expert"
    //           />
    //         }
    //         label="Expert"
    //       />
    //     </FormGroup>
    //   </CardContent>
    // </Card>


    // <Card variant="outlined" sx={{
    //   position: 'absolute',
    //   width: '90%',
    //   height: '215px',
    //   left: '18px',
    //   top: '620px',
    // }}>
    //   <CardContent>
    //     <Typography variant="subtitle1">Salary</Typography>
    //     <RadioGroup
    //       name="salary-range"
    //       value={selectedSalary}
    //       onChange={handleSalaryChange}
    //     >
    //       <FormControlLabel value="10000" control={<Radio />} label="< $10,000" />
    //       <FormControlLabel value="30000" control={<Radio />} label="$10,000-$30,000" />
    //       <FormControlLabel value="50000" control={<Radio />} label="$30,000-$50,000" />
    //       <FormControlLabel value="custom" control={<Radio />} label="Custom" />
    //       {selectedSalary === 'custom' && (
    //         <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1 }}>
    //           <TextField
    //             label="Min"
    //             variant="outlined"
    //             type="number"
    //             value={customSalaryRange.min}
    //             onChange={handleCustomSalaryChange('min')}
    //           />
    //           <TextField
    //             label="Max"
    //             variant="outlined"
    //             type="number"
    //             value={customSalaryRange.max}
    //             onChange={handleCustomSalaryChange('max')}
    //           />
    //         </Box>
    //       )}
    //     </RadioGroup>
    //   </CardContent>
    // </Card>
//   </Paper>
// );
// }

// export default JobFilters;


import React, { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Radio,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Card,
  CardContent,
  Box,
} from '@mui/material';

function JobFilters({ onSearch }) {
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

  const [selectedSalary, setSelectedSalary] = useState('10000');
  const [customSalaryRange, setCustomSalaryRange] = useState({
    min: '',
    max: '',
  });

  const [searchInput, setSearchInput] = useState('');

  const handleJobTypeChange = (event) => {
    setJobType({ ...jobType, [event.target.name]: event.target.checked });
  };

  const handleExperienceChange = (level, checked) => {
    setExperienceLevels(prevLevels => ({
      ...prevLevels,
      [level]: checked
    }));
  };

  const handleSalaryChange = (event) => {
    setSelectedSalary(event.target.value);
  };

  const handleCustomSalaryChange = (field) => (event) => {
    setCustomSalaryRange({ ...customSalaryRange, [field]: event.target.value });
  };

<<<<<<< HEAD:jobgenie-frontend/src/views/jobs/components/JobFilters.js
return (
  <Paper style={{
    padding: '16px',
    position: 'absolute',
    width: '25%',
    height: '860px',
    left: '57px',
    top: '92px',
    overflowY: 'scroll',
    background: '#FFFFFF',
    border: '1px solid #CED4DA',
    borderRadius: '40px'
  }}>
  <Box sx={{
      position: 'absolute',
      width: '90%',
      height: '80px',
      // left: '17px',
      top: '0px',
      border: '1px solid #CED4DA',
      borderRadius: '25px',
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'space-evenly',
      justifyContent:'space-between',
      marginRight: '100px',
      padding: '10px'
=======
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchInput);
    }
  };

  const clearFilters = () => {
    handleJobTypeChange({ fullTime: false, freelance: false, partTime: false, volunteer: false });
    handleExperienceChange(''); 
    handleSalaryChange(''); 
    handleCustomSalaryChange({ min: '', max: '' }); 
  };

  return (
    <Paper style={{
      padding: '16px',
      position: 'absolute',
      width: '30%',
      height: '1014px',
      left: '57px',
      top: '92px',
      overflowY: 'scroll',
      background: '#FFFFFF',
      border: '1px solid #CED4DA',
      borderRadius: '40px'
>>>>>>> 571777e8ce97d9d7bcb3186a14e97969f74312f3:jobgenie-frontend/src/components/JobFilters.js
    }}>
      <Box sx={{
        position: 'absolute',
        width: '92%',
        height: '80px',
        top: '0px',
        border: '1px solid #CED4DA',
        borderRadius: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px'
      }}>
        <Typography variant="h6" gutterBottom sx={{
          borderRadius: '25px',  
          boxSizing: 'border-box',
          position: 'absolute', 
          width: '60px',
        }}>
          Filter
        </Typography>
        <Button onClick={clearFilters} variant="outlined" color="primary" sx={{
          borderRadius: '25px',  
          boxSizing: 'border-box',
          position: 'absolute',
          right: '10px',
        }}>
          Clear All
        </Button>
      </Box>

      <TextField
        variant="outlined"
        fullWidth
        id="search-job-title"
        label="Search job title"
        name="search"
        value={searchInput}
        onChange={handleSearchInputChange}
        onKeyPress={handleSearch}
        sx={{
          borderRadius: '25px',
          boxSizing: 'border-box',
          position: 'absolute',
          width: '90%',
          height: '70px',
          left: '17px',
          top: '100px',
        }}
      />

<Card variant="outlined" sx={{
        position: 'absolute',
        width: '90%',
        height: '220px',
        left: '18px',
        top: '180px',
      }}>
      <CardContent>
        <FormGroup>
          <Box >
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
          </Box>
        </FormGroup>
      </CardContent>
    </Card>
    <Card variant="outlined" sx={{
      position: 'absolute',
      width: '90%',
      height: '175px',
      left: '18px',
      top: '420px'
    }}>
      <CardContent>
        <Typography variant="subtitle1" 
        sx={{
          fontFamily: 'Inter Tight',
          fontStyle: 'normal',
          fontWeight: 700, // Bold
          fontSize: '25px',
          lineHeight: '30px',
          color: '#000000'
        }}
        >Experience Level</Typography>
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


    <Card variant="outlined" sx={{
      position: 'absolute',
      width: '90%',
      height: '215px',
      left: '18px',
      top: '620px',
    }}>
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
