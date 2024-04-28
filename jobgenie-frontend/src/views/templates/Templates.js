import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/container/PageContainer'
import FeatureCard from '../../components/container/FeatureCard/FeatureCard'
import {useLoaderData, useOutletContext } from 'react-router-dom'


const Templates = () => {

  const data = useLoaderData();

  console.log(data);

  return (
    <PageContainer title="Templates" description="Templates">
    <div className='grid grid-cols-3 gap-4'>
      

      {data.map((card) => (
        <FeatureCard></FeatureCard>
      ))}

      
    </div>
    </PageContainer>
  )
}

export default Templates