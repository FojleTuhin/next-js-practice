"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const Navbar = () => {

    const pathName = usePathname();
    console.log(pathName);

    return (
        <div>
            <nav className="mt-10 ">
                <ul className="flex justify-evenly">
                    <li className={`${pathName=== '/' && ' font-bold text-2xl'}`}><Link href={'/'}>Home</Link></li>
                    <li className={`${pathName=== '/about' && ' font-bold text-2xl'}`}><Link href={'/about'}>About</Link></li>
                    <li className={`${pathName=== '/contact' && ' font-bold text-2xl'}`}><Link href={'/contact'}>Contact</Link></li>
                    <li>Blog</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;