import React from 'react'

const payments: string[] = [
  'Monthly Rent', 'Food Payment', 'Utility Bills'
]

const ScheduledPayments = () => {
  return <div>
    <div className='mb-4 text-indigo-700'>Scheduled Payments</div>
    <div className='space-y-7'>
      {payments.map((value, index) => (
        <div className='flex items-center text-gray-500' key={index}>
          <div className='h-4 w-4 border border-gray-300 mr-4 rounded-full'/>
          {value}</div>
      ))}
    </div>
  </div>
}

export default ScheduledPayments