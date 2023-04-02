import React,{useRef, useState} from 'react'
import CareerBanner from '../Components/Career/CareerBanner'
import CareerOpening from '../Components/Career/CareerOpening'
import CareerJoin from './../Components/Career/CareerJoin';
import { Helmet } from 'react-helmet';
import CareerPerks from '../Components/Career/CareerPerks';

const Career = () => {
  const scrollToJobOpening = useRef();
  const handleJobOpening = ()=>{
    scrollToJobOpening.current?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <main className='career'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Ava-Data/Career</title>
                <link rel="canonical" href="http://localhost:3000/career" />
            </Helmet>
      <CareerBanner handleJobOpening={handleJobOpening}  />
      <CareerJoin />
      <CareerPerks />
      <CareerOpening scrollToJobOpening={scrollToJobOpening} />
    </main>
  )
}

export default Career
