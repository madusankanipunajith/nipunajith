import { React, useEffect, useState } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";
import { jithson, profile } from '../assets';


const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Projects', href: '/projects', current: false },
    { name: 'Awards', href: '/awards', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [nav, setNav] = useState([]);
    
    const handleNav = (name) =>{
        var updateNav = navigation.map((item) => {
            
            if (item.name === name){
                item.current = true
            }else{
                item.current = false
            }

            return item

        })

        setNav(updateNav);
    }

    useEffect(() => {
        var currentURL = window.location.href.split("/")[3]
        console.log(currentURL);
        var extenstion = currentURL.charAt(0).toUpperCase() + currentURL.slice(1)
        if(currentURL.length === 0 || extenstion === "#comments"){
            setNav(navigation)
        }else{
            handleNav(extenstion)            
        }      
    }, []);

    return (
        <Disclosure as="nav" className="bg-black-gradient">
            {({ open }) => (
                <>
                    <div className={`mr-0 max-w-full px-2 sm:px-6 lg:pr-4 lg:py-4 md:text-[28px] text-[18px] font-poppins `}>
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-[4rem] w-auto lg:hidden object-contain bg-slate-200"
                                        src={jithson}
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-[5rem] w-auto lg:block object-contain"
                                        src={jithson}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-10 sm:block">

                                    <ul className="flex space-x-4 list-none items-start font-poppins text-[28px]">
                                        {nav.map((item) => (
                                            <li  key={item.name} onClick={() => handleNav(item.name)}>
                                                <NavLink to={item.href}  aria-current={item.current ? 'page' : undefined} className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md md:text-lg text-sm font-medium'
                                                    )}>
                                                    {item.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center lg:pr-2 pr-0 sm:static sm:inset-auto sm:ml-10 sm:pr-0">
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-12 w-12 border-[2px] border-white rounded-full"
                                                src={profile}
                                                alt="profile"
                                            />
                                        </Menu.Button>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {nav.map((item) => (
                                <Disclosure.Button onClick={()=> handleNav(item.name)}
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
