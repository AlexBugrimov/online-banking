import React from 'react'
import {IoMdWater, IoMdCheckbox, IoIosClipboard, IoIosStar, IoIosNotifications} from 'react-icons/io'

enum TransactionStatus {
  UNSUCCESSFULLY = 'Unsuccessfully',
  SUCCESSFULLY = 'Successfully',
  PENDING = 'Pending',
  WARNING = 'Warning',
}

const findColor = (status?: TransactionStatus): string => {
  switch (status) {
    case TransactionStatus.SUCCESSFULLY: return 'bg-blue-500'
    case TransactionStatus.UNSUCCESSFULLY: return 'bg-indigo-600'
    case TransactionStatus.PENDING: return 'bg-teal-400'
    case TransactionStatus.WARNING: return 'bg-yellow-500'
    default: return 'bg-red-500'
  }
};

type Transaction = {
  name: string
  status?: TransactionStatus
  price: string
  icon: JSX.Element
}

const today: Transaction[] = [
  {
    name: "Water Bill",
    status: TransactionStatus.UNSUCCESSFULLY,
    price: '-$280',
    icon: <IoMdWater color='white'/>
  }
]

const yesterday: Transaction[] = [
  {
    name: "Income: Salary Oct",
    price: '+$1200',
    icon: <IoMdCheckbox color='white'/>
  },
  {
    name: "Electric Bill",
    status: TransactionStatus.SUCCESSFULLY,
    price: '-$480',
    icon: <IoIosClipboard color='white'/>
  },
  {
    name: "Income : Jane transfers",
    status: TransactionStatus.PENDING,
    price: '+$500',
    icon: <IoIosStar color='white'/>
  },
  {
    name: "Internet Bill",
    status: TransactionStatus.WARNING,
    price: '-$100',
    icon: <IoIosNotifications color='white'/>
  }
]

const Transactions = () => {
  return <section>
    <div className='mt-11'>
      <h3>Today</h3>
      <div>{today.map(({name, status, price, icon}, index) => {
        return <div key={index} className='flex flex-row items-center border-b border-b-gray-200 py-3'>
          <div className={`h-10 w-10 bg-indigo-700 rounded-lg flex items-center justify-center mr-3`}>
            {icon}
          </div>
          <div className='flex-1'>
            <div className='text-lg font-medium'>{name}</div>
            <div className='text-sm'>{status}</div>
          </div>
          <div className='text-red-600'>
            {price}
          </div>
        </div>
      })}</div>
    </div>
    <div className='mt-6'>
      <h3>Yesterday</h3>
      <div>{yesterday.map(({name, status, price, icon}, index) => {
        return <div key={index} className='flex flex-row items-center border-b border-b-gray-200 py-3'>
          <div className={`h-10 w-10 rounded-lg flex items-center justify-center mr-3 ${findColor(status)}`}>
            {icon}
          </div>
          <div className='flex-1'>
            <div className='text-lg font-medium'>{name}</div>
            <div className='text-sm'>{status}</div>
          </div>
          <div className={status ? 'text-red-600' : 'text-indigo-600'}>
            {price}
          </div>
        </div>
      })}</div>
    </div>
  </section>
}

export default Transactions