import React from 'react'
import Logo from '../../assets/logo.png'
import DarkMode from './DarkMode';
import { BiPhoneCall } from "react-icons/bi";


const Navlinks = [
  {
    id: 1,
    name: "ABOUT",
    link: "/#about",
  },
    {
      id: 2,
      name: "SERVICES",
      link: "/#services",
    },
    {
      id: 3,
      name: "JOIN",
      link: "/#join",
    },
  ];

const Navbar = () => {
  return (
    <>
    <nav className='shadow-md w-full dark:bg-dark dark:text-white'>
        <div className='container'>
            <div className='flex  items-center justify-between'>
            
                <div className='sm:flex items-center gap-3 hidden font-semibold text-gray-500 dark:text-gray-400 group'><BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-50 size-10" />{" "}
                    <span>  +91 XXXXX XXXXX</span>
                </div>
                <div>
                    <img src={Logo} className="w-16 sm:w-24 absolute top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 m-2 sm:m-0 "/>
                </div>
                <div>
                  <nav className=''>
                    <ul className='flex items-center gap-8'>
                        {Navlinks.map(({ id, name, link }) => (
                        <li key={id} className="py-4">
                        <a
                            href={link}
                            className="inline-block text-lg font-semibold  hover:text-primary duration-200  "
                        >
                            {name}
                        </a>
                        </li>
                    ))}
                    <DarkMode className='mt-10' />
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
