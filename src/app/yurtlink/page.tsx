import Link from 'next/link'
import React from 'react'
import kykodafoto from "../../../public/kyk (1).png"
import Image from 'next/image'

function YurtLinkPage() {
  return (
   
      <div className='flex flex-col justify-center'>
        <div className='flex '>
          
        <Link
      href="https://www.instagram.com/kykhub?igsh=enJjeWNjZnB4c3cy&utm_source=qr"
      className="flex items-center ml-190 gap-2 mt-4 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Instagram Icon - sade SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-5 h-5 text-pink-500 transition-transform duration-300 group-hover:scale-110"
      >
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.6.5.3.9.7 1.2 1.2.3.4.5 1.1.6 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.3-.3.5-.7.9-1.2 1.2-.4.3-1.1.5-2.3.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.6a3.3 3.3 0 0 1-1.2-1.2c-.3-.4-.5-1.1-.6-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.3.3-.5.7-.9 1.2-1.2.4-.3 1.1-.5 2.3-.6C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.5.2-1.9.4-.5.2-.8.5-1.1 1.1-.2.3-.3.9-.4 1.9-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.5.4 1.9.2.5.5.8 1.1 1.1.3.2.9.3 1.9.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.5-.2 1.9-.4.5-.2.8-.5 1.1-1.1.2-.3.3-.9.4-1.9.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.5-.4-1.9a2.1 2.1 0 0 0-1.1-1.1c-.3-.2-.9-.3-1.9-.4-1.3-.1-1.7-.1-4.8-.1zM12 5.8a6.2 6.2 0 1 1 0 12.4 6.2 6.2 0 0 1 0-12.4zm0 1.8a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm5.4-.9a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0z" />
      </svg>

      {/* Gradient UNIHUB text */}
      <span className="text-lg font-medium">
        Instagram:{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] group-hover:brightness-110 transition">
          UNIHUB
        </span>
      </span>
    </Link>
        </div>

      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '220px', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      

        <Image style={{ width: "400px", height: '600', border: "1px solid darkgray", borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.6)", backdropFilter: "blur(10px)", textDecoration: "none", transition: "all 0.7s ease", marginTop: "-170px", zIndex: '1' }} src={kykodafoto} alt={'foto'}></Image>


        <Link
          target='blank'
          href="https://www.trendyol.com/koleksiyonlar/yurt-link-k-2485ae41-ab53-4930-b31f-57d3d23aad26?shared=true&adjust_t=mga6qru_4lumnip&adjust_tracker_limit=999999999&utm_source=collection&utm_medium=ios_collection_free&adjust_campaign=ios_collection_free&adjust_creative=2485ae41-ab53-4930-b31f-57d3d23aad26&utm_term=2485ae41-ab53-4930-b31f-57d3d23aad26&adjust_adgroup=18226887&utm_campaign=18226887"
          style={{
            zIndex: '2',
            color: 'white',
            fontSize: '1.25rem',  // 2xl font size
            fontWeight: 'bold',
            backgroundColor: '#FF6A00',  // Trendyol turuncusu (görseldeki gibi)
            paddingLeft: '1.5rem',  // px-6
            paddingRight: '1.5rem', // px-6
            paddingTop: '0.5rem',    // py-4
            paddingBottom: '1rem', // py-4
            borderRadius: '9999px', // rounded-full
            marginTop: '-13rem',   // mt-6
            transition: 'background-color 0.3s ease', // transition
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Hafif gölge efekti
           
          }}
        >
         Trendyol Ürün Linkleri
        </Link>
         
      </div>
           

          </div>
   

  )
}

export default YurtLinkPage