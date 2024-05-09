import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/Loadable';
import { element } from 'prop-types';



const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));

const Home = Loadable(lazy(() => import('../views/home/Home')));
const Jobs = Loadable(lazy(() => import('../views/jobs/Jobs')));
const Templates = Loadable(lazy(() => import('../views/templates/Templates')));
const CvBuilder = Loadable(lazy(() => import('../views/cv-builder/CVBuilder')));

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
                element: <Jobs />,
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
           
        ]
    },
];

export default Router;
