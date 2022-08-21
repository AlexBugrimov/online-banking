import React from 'react'
import {BiUser} from 'react-icons/bi'
import {GrNotification} from 'react-icons/gr'
import Avatar from '../assets/avatar.png'
import Card from "./Card";
import Transactions from "./Transactions";

const ContentRight = () => {
  return <section className='w-96 bg-gray-100 rounded-tl-70px overflow-hidden px-8'>
    <div className='pt-12 flex justify-end space-x-9 items-center'>
      <GrNotification size={20}/>
      <BiUser size={20}/>
      <img src={Avatar} alt='Avatar' className='h-9 w-9 object-cover rounded-full'/>
    </div>
    <Card/>
    <button className='py-3 rounded border border-indigo-400 text-indigo-400 border-dashed w-full mt-10'>Add new card</button>
    <div>
      <Transactions/>
    </div>
  </section>
}

export default ContentRight