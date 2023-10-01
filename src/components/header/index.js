"use client";
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../../../public/assets/Logo.png';

function Header() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    return (
        <nav className="animate-slideDownEnter flex flex-col sm:flex-col md:flex-row justify-between sm:items-stretch md:items-center py-5 text-lg text-dark-blue-color">
            <div className='flex justify-between items-center'>
                <div>
                    <Link className={` `} href="/">
                        <Image src={Logo} alt="Logo" width={100} />
                    </Link>
                </div>
                <div className='block sm:block md:hidden'>
                    {open ?
                        <span onClick={() => setOpen(false)} className='p-3'> <AiOutlineClose width="26px" height="20px" /></span>
                        :
                        <span onClick={() => setOpen(true)} className='p-3'>  <GiHamburgerMenu width="26px" height="20px" /></span>
                    }
                </div>
            </div>

            <div>
                <ul className={`hidden md:flex gap-2`}>
                    <li className="cursor-pointer ">
                        <Link className={` ${pathname === '/' ? 'font-semibold' : ''} hover:bg-highlight-color p-4`} href="/">
                            Home
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link className={` ${pathname === '/contact-me' ? 'font-semibold' : ''} hover:bg-highlight-color p-4`} href="/contact-me">
                            Contact Me
                        </Link>
                    </li>
                    {/* <li className="cursor-pointer">Education</li>
                    <li className="cursor-pointer">Experience</li>
                    <li className="cursor-pointer">Contact Me</li> */}
                </ul>

                {/* for mobile screen */}
                {open &&
                    <ul className={`animate-slideDownEnter gap-8 md:hidden sm:flex-col mt-6`}>
                        <li className="cursor-pointer my-2 ">
                            <Link className={` ${pathname === '/' ? 'font-semibold' : ''} `} href="/">
                                Home
                            </Link>
                        </li>
                        <li className="cursor-pointer my-2 ">
                            <Link className={` ${pathname === '/contact-me' ? 'font-semibold' : ''}`} href="/contact-me">
                                Contact Me
                            </Link>
                        </li>
                        {/* <li className="cursor-pointer my-2">Education</li>
                        <li className="cursor-pointer my-2">Experience</li>
                        <li className="cursor-pointer my-2">Contact Me</li> */}
                    </ul>
                }
            </div>
        </nav>
    )

}

export default Header;