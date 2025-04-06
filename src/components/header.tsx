import Image from "next/image"
import React from 'react'
import Logo from "../../public/unihub.png"

import { ModeToggle } from "./mode-toggle"
import Link from "next/link"


const Header = () => {
    return (
        <header className="mb-2 md:mb-7 " >

            <div className='flex justify-center  object-contain'>
                <Link href={"/"}>
                    <Image src={Logo} alt="logo" className="w-auto rounded-full mb-3 mt-3 h-24 md:h-32" /> </Link>
            </div>

            <div className="top-0 right-0 absolute p-5" ><ModeToggle /></div>

        </header>
    )
}

export default Header;