import React from "react";
import {BiCalculator, BiCreditCardAlt, BiGridAlt, BiHomeAlt, BiUser} from "react-icons/bi";
import {RiSettings5Line} from "react-icons/ri"

type MenuItem = {
    name: string
    icon: JSX.Element
}

const menuItems: MenuItem[] = [
    {name: "Home", icon: <BiHomeAlt/>},
    {name: "Account", icon: <BiGridAlt/>},
    {name: "Cards", icon: <BiCreditCardAlt/>},
    {name: "Contacts", icon: <BiUser/>},
    {name: "Loan Calculator", icon: <BiCalculator/>},
    {name: "Settings", icon: <RiSettings5Line/>},
]

const Menu = () => <div>
    <div className='mb-4 text-indigo-700'>Menu</div>
    <ul className='space-y-7'>
        {menuItems.map(({name, icon}, index) =>
          <li key={index} className='flex flex-row items-center text-gray-500'>
              <div className='mr-4'>{icon}</div>
              <div>{name}</div>
          </li>)}
    </ul>
</div>

export default Menu