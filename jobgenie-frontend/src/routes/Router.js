import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/Loadable';
// import jobs from '../data/jobs'; // Import your jobs data

const jobs = [
    {
    id: '1', // Unique job ID
    title: 'Senior Product Designer',
    company: 'Google',
    jobType: 'Full-Time',
    location: 'Remote - Jakarta, Indonesia',
    description: 'Join Google’s innovative team as a Senior Product Designer and lead the design revolution. Work alongside the brightest minds in the industry contributing your expertise to shape up the future.',
    salary: '$500-$800/month',
    expertise: 'Expert',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png' // Replace with actual logo URL if available
    },
    {
    id: '2', // Unique job ID
    title: 'Data Scientist',
    company: 'Microsoft',
    jobType: 'Part-Time',
    location: 'Redmond, WA, USA',
    description: 'Apply your deep expertise in machine learning, statistics, and data mining to make a significant impact in our product direction.',
    salary: '$1500-$3000/month',
    expertise: 'Intermediate',
    // logo: 'https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png' // Replace with actual logo URL if available
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png' // Replace with actual logo URL if available
    
    // Replace with actual logo URL if available
    },
    {
    id: '3', // Unique job ID
    title: 'Cloud Infrastructure Engineer',
    company: 'Amazon',
    jobType: 'Freelance',
    location: 'Remote - Global',
    description: 'Help us build robust, scalable, and cutting-edge cloud solutions for our millions of customers worldwide.',
    salary: '$3000-$5000/month',
    expertise: 'Expert',
    // logo: 'https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png' // Replace with actual logo URL if available
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png' // Replace with actual logo URL if available
    
    // Replace with actual logo URL if available
    },
    {
    id: '4', // Unique job ID
    title: 'UX/UI Designer',
    company: 'Airbnb',
    jobType: 'Full-Time',
    location: 'San Francisco, CA, USA',
    description: 'Create intuitive and beautiful products that offer a seamless experience to our global community.',
    salary: '$4000-$6000/month',
    expertise: 'Expert',
    // logo: 'https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png' // Replace with actual logo URL if available
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png' // Replace with actual logo URL if available
    
    // Replace with actual logo URL if available
    },
    {
    id: '5', // Unique job ID
    title: 'Frontend Developer',
    company: 'Spotify',
    jobType: 'Full-Time',
    location: 'Stockholm, Sweden',
    description: 'Work on the forefront of the music industry and develop innovative web applications that reach millions of users worldwide.',
    salary: '$3500-$4500/month',
    expertise: 'Intermediate',
    // logo: 'https://example.com/path/to/spotify/logo.png' // Replace with actual logo URL if available
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png' // Replace with actual logo URL if available
    
    }
    ];
    

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
const Home = Loadable(lazy(() => import('../views/home/Home')));
const Jobs = Loadable(lazy(() => import('../views/jobs/JobPage.js')));
const Templates = Loadable(lazy(() => import('../views/templates/Templates')));
const CvBuilder = Loadable(lazy(() => import('../views/cv-builder/CVBuilder')));
const Account = Loadable(lazy(() => import('../views/account/Account')));
const JobDetails = Loadable(lazy(() => import('../views/job-details-page/JobDetailPage.js')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/home" /> }, // Default redirect to /home
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/jobs',
        element: <Jobs jobs={jobs} />, // Pass jobs to Jobs component
      },
      {
        path: '/templates',
        element: <Templates />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/cv-builder',
        element: <CvBuilder />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/jobs/:jobId',
        element: <JobDetails jobs={jobs} />, // Pass jobs to JobDetails component
      },
    ],
  },
];
export default Router;
