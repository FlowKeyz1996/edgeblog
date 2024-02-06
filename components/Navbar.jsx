import React from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, Bars3Icon} from '@heroicons/react/24/solid'



const Navbar = () => {

  return (
    <div>
        <div className="max-w-7xl mx-auto mt-8">
         
        <nav className="flex justify-between aligin-center">
        <div className="mr-5 ">
            <Link href="/" className="mr-7">Popular</Link>
            <Link href="/new" className="ml-4 hover:bg-primary hover:text-white hover:p-0.5 hover:rounded">New</Link>
        </div>
        <div>
        <img src="/logo.svg" alt='arrow' className="hover:cursor-pointer" />
        </div>
        <div className="flex cursor-pointer">
        <Bars3Icon className="h-7 w-7 mr-3"/>
        <MagnifyingGlassIcon className="h-7 w-7"/>
        </div>
        
        </nav>
        </div>
    </div>
  )
}

export default Navbar