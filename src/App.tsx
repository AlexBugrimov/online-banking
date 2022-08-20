import React from 'react'
import Sidebar from './components/Sidebar'
import RightContent from "./components/RightContent";

const App = () => {
  return (
    <div className='w-full min-h-screen bg-white flex flex-row'>
      <Sidebar/>
      <section className='flex-1 bg-white'>Content Left</section>
      <RightContent/>
    </div>
  );
}

export default App
