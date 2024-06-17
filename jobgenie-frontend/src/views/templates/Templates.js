import React, { useEffect, useState } from 'react'
import PageContainer from '../../components/container/PageContainer'
import Section4 from '../home/components/Section4'
import {useLoaderData, useOutletContext } from 'react-router-dom'


const Templates = () => {

  const data = useLoaderData();

  console.log(data);

  return (
    <PageContainer title="Templates" description="Home Page">
      <div style={{ width: '100%', padding: 0, margin: 0 }}>

        <Section4 />

      </div>
      
    </PageContainer>
  )
}

export default Templates