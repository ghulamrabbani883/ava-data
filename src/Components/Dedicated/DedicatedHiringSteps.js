import React from 'react'
import { HiringStepsData } from './dedicatedData';

const DedicatedHiringSteps = () => {
  return (
    <section className='dedicatedHiring'>
      <div className="hiringHeader">
        <h2 className="hiringHeaderTitle">
        Quick And Easy <span>Steps Of Hiring</span>
        </h2>
      </div>
      <div className="hiringStepWrapper">
        {HiringStepsData.map((data) => {
          return (
            <div className="hringStep" key={data.id}>
                <p className='hiringStepNumber'>{data.id}</p>
              <h3 className="hiringStepTitle">{data.title}</h3>
              <p className="hiringStepPara">{data.para}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default DedicatedHiringSteps
