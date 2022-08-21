import React from 'react'
import {BiSearch, BiCreditCard, BiDoughnutChart, BiHome, BiUser, BiTrash, BiEdit} from 'react-icons/bi'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import Avatar1 from '../assets/avatar_1.png'

const ContentLeft = () => {
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => console.info('swipe action triggered')}
      >
        <div className='flex items-center px-4'>
          <BiTrash size={20} color={'white'}/>
        </div>
      </SwipeAction>
      <SwipeAction
        destructive={true}
        onClick={() => console.info('swipe action triggered')}
      >
        <div className='flex items-center px-4'>
          <BiEdit size={20} color={'white'}/>
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return <section className='content-left px-16 flex-1 pt-14 h-screen overflow-y-scroll'>
    <div className='border border-gray-300 rounded-lg w-full flex items-center py-3 px-3'>
      <BiSearch className='mr-2'/>
      <input type="text" className='flex-1' placeholder='Search'/>
    </div>
    <h3 className='text-xl text-indigo-700 my-8'>Welcome back AR Shakir!</h3>
    <div className='flex flex-row space-x-6'>
      {cards.map(({bgColor, textColor, icon, label}, index) => <Card bgColor={bgColor} textColor={textColor} icon={icon}
                                                                     label={label}/>)}
    </div>
    <div className='mt-20'>
      <div className='rounded-2xl bg-indigo-700'>
        <SwipeableList threshold={0.9} type={Type.IOS}>
          <SwipeableListItem trailingActions={trailingActions()}>
            <div className='bg-white p-4 rounded-xl border border-gray-200 w-full flex'>
              <img src={Avatar1} alt='Img' className='w-8 h-8 object-cover rounded-full mr-3'/>
              <div className='text-sm'>
                <div className='text-gray-900'>Push</div>
                <div className='text-gray-400 text-xs'>12345678</div>
              </div>
            </div>
          </SwipeableListItem>
        </SwipeableList>
      </div>
    </div>
  </section>
}

const cards: CardProps[] = [
  {
    bgColor: 'bg-green-600',
    textColor: 'text-green-600',
    icon: <BiCreditCard size={25} className='mb-5'/>,
    label: 'Transfer via card number'
  },
  {
    bgColor: 'bg-indigo-600',
    textColor: 'text-indigo-600',
    icon: <BiDoughnutChart size={25} className='mb-5'/>,
    label: 'Transfer to another bank'
  },
  {
    bgColor: 'bg-orange-600',
    textColor: 'text-orange-600',
    icon: <BiUser size={25} className='mb-5'/>,
    label: 'Transfer to the same bank'
  },
  {
    bgColor: 'bg-teal-600',
    textColor: 'text-teal-600',
    icon: <BiHome size={25} className='mb-5'/>,
    label: 'Transfer to another bank'
  }
]

type CardProps = {
  bgColor: string
  textColor: string
  icon: JSX.Element
  label: string
}

const Card = ({bgColor, textColor, icon, label}: CardProps) => {
  return <div className={`rounded-xl ${bgColor} bg-opacity-10 p-5 w-36 ${textColor} space-y-4`}>
    <div>{icon}</div>
    <div><span className='text-sm'>{label}</span></div>
  </div>
}

export default ContentLeft