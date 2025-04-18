import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-center flex-wrap gap-3 md:gap-6 p-4 mb-5">
    <Link
      href="/"
      className="px-4 py-2 rounded-full border border-[#d8e9c4] text-[#2d2d2d] font-semibold font-[bristol] bg-[#fcfdf2] hover:bg-[#d8e9c4] hover:shadow-md transition"
    >
      🍽 KYK Menü
    </Link>
    <Link
      href="/ihtiyaclar"
      className="px-4 py-2 rounded-full border border-[#d8e9c4] text-[#2d2d2d] font-semibold font-[bristol] bg-[#fcfdf2] hover:bg-[#d8e9c4] hover:shadow-md transition"
    >
      🎒 KYK İhtiyaçlar
    </Link>
    <Link
      href="/link"
      className="px-4 py-2 rounded-full border border-[#d8e9c4] text-[#2d2d2d] font-semibold font-[bristol] bg-[#fcfdf2] hover:bg-[#d8e9c4] hover:shadow-md transition"
    >
      🔗 KYK Link
    </Link>
    <Link
      href="/eglence"
      className="px-4 py-2 rounded-full border border-[#d8e9c4] text-[#2d2d2d] font-semibold font-[bristol] bg-[#fcfdf2] hover:bg-[#d8e9c4] hover:shadow-md transition"
    >
      🎉 KYK Eğlence
    </Link>
    <Link
      href="/profil"
      className="px-4 py-2 rounded-full border border-[#d8e9c4] text-[#2d2d2d] font-semibold font-[bristol] bg-[#fcfdf2] hover:bg-[#d8e9c4] hover:shadow-md transition"
    >
      👤 Profil
    </Link>
  </div>
  )
}

export default Navbar