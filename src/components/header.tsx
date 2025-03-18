import Image from "next/image"
import React from 'react'
import Logo from "../../public/logo.png"

const Header = () => {
    return (
        <header>
            <div className='flex justify-center  object-contain'>
                <Image src={Logo} alt="logo" className="w-auto h-32" />
            </div>
        </header>
    )
}

export default Header;