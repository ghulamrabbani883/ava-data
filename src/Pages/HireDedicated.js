import React from 'react'
import DedicatedBanner from '../Components/Dedicated/DedicatedBanner'
import DedicatedContent from '../Components/Dedicated/DedicatedContent'
import DedicatedPricing from '../Components/Dedicated/DedicatedPricing'
import DedicatedFAQ from '../Components/Dedicated/DedicatedFAQ'
import DedicatedTalent from '../Components/Dedicated/DedicatedTalent'
import DedicatedTeams from '../Components/Dedicated/DedicatedTeams'
import DedicatedHiringSteps from '../Components/Dedicated/DedicatedHiringSteps'
import DedicatedProcess from '../Components/Dedicated/DedicatedProcess'
import { Helmet } from "react-helmet";

const HireDedicated = () => {
  
  return (
    <main className='hireDedicated'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hire-dedicated-developers</title>
        <link rel="canonical" href="http://localhost:3000/our-work" />
      </Helmet>
      <DedicatedBanner />
      <DedicatedContent />
      <DedicatedPricing />
      <DedicatedFAQ />
      <DedicatedTalent />
      <DedicatedTeams />
      <DedicatedHiringSteps />
      <DedicatedProcess />
    </main>
  )
}

export default HireDedicated
