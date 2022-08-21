import React from 'react'
import Sidebar from './components/Sidebar'
import ContentRight from "./components/ContentRight";
import ContentLeft from "./components/ContentLeft";

const App = () => {
  return (
    <div className='w-full min-h-screen bg-white flex flex-row'>
      <Sidebar/>
      <ContentLeft/>
      <ContentRight/>
    </div>
  );
}

export default App
