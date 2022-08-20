import React from "react";
import Logo from '../assets/logo.png'
import Menu from "./Menu";
import ScheduledPayments from "./ScheduledPayments";

const Sidebar = () => {
    return (
    <div className='h-screen border-r border-gray-200 w-64 px-9 space-y-16'>
        <div className='flex flex-row items-center pt-8'>
            <img src={Logo} alt='Logo' className='w-9 h-9'/>
            <div>Online Banking</div>
        </div>
        <div className='space-y-16'>
            <Menu/>
            <ScheduledPayments/>
        </div>
    </div>
    )
}

export default Sidebar