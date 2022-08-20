import React from 'react'
import VisaLogo from "../assets/visa_logo.png";

const Card = () => {
  return <div className='card mt-9'>
    <div className='relative p-5 text-white'>
      <div className='text-lg'>Bugrimov Alex</div>
      <div className='mt-10 space-y-2'>
        <div className=''>Amazon Platinum</div>
        <div className=''>4759 .... .... 9988</div>
        <div className='flex justify-between relative'>
          <span>$5.888.57</span>
          <img src={VisaLogo} alt='Visa' className='h-4'/>
        </div>
      </div>
    </div>
  </div>
}

export default Card