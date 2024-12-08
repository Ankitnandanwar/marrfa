import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    let Links = [
        { name: 'HOME', link: '/' },
        { name: 'SERVICES', link: '/services' },
        { name: 'ABOUT', link: '/about' },
        { name: 'BLOGS', link: '/blogs' },
        { name: 'CONTACT', link: '/contact' },
    ]


    return (

        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-white py-4 px-7 md:px-10'>
                <img src={assets.logo} alt="logo" className='w-16 cursor-pointer' />
                <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='text-2xl text-white cursor-pointer absolute right-8 top-6 md:hidden'>
                    {
                        mobileMenuOpen ? <IoMdClose className='text-[#021f3e]' /> : <RiMenu3Fill className='text-[#021f3e]' />
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
                md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in
                ${mobileMenuOpen ? 'top-16 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
                    {
                        Links.map((item) => (
                            <li key={item.name} className='md:ml-8 relative text-[12px] md:my-0 my-7'>
                                <NavLink to={item.link} className='hover:text-[#FF5733] duration-500 tracking-widest font-semibold'>{item.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>

                <div className='md:block hidden'>
                    <div className='flex items-center gap-6'>
                        <button className='bg-[#FF5733] px-4 py-1.5 rounded-md text-white font-semibold'>Log In</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar