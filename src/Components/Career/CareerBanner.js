import React from 'react'
import './style.css'

const CareerBanner = ({jobOpeningClicked, setJobOpeningClicked}) => {
  return (
    <section className='careerBanner'>
      <h1 className='careerBannerHeading1'>Learn, Experiment, Grow</h1>  
      <h2 className='careerBannerHeading2'>Build a freelance career with us, and enjoy remote life</h2>  
       <button type='button' onClick={()=>setJobOpeningClicked(true)}>Job Openings</button> 
    </section>
  )
}

export default CareerBanner
