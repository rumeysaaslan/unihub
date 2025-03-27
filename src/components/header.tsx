import Image from "next/image"
import React from 'react'
import Logo from "../../public/Orange and Yellow Kitchen Food Logo.jpg"

import { ModeToggle } from "./mode-toggle"
import Link from "next/link"


const Header = () => {
    return (
        <header>
            <div style={{display:'flex',justifyContent:'center'}}>
            <div className='flex justify-center  object-contain'>
                <Link href={"/"}>
                <Image src={Logo} alt="logo" className="w-auto rounded-full  h-24 md:h-32" /> </Link>
            </div>
            <div className="mt-6 md:mt-12 md:ml-2 ">
           <Link className="bg-amber-500 border-2 rounded-4xl p-1" href={"/fullmeallist"}><span className=""> Tam Liste </span></Link>
            </div>
            <div className="mt-5 ml-5 md:mt-10" ><ModeToggle/></div>
            </div>
        </header>
    )
}

export default Header;