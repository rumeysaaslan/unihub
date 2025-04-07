import Link from 'next/link'
import React from 'react'
import kykodafoto from "../../../public/kyk (1).png"
import Image from 'next/image'

function YurtLinkPage() {
  return (
    <>


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
            backgroundColor: '#ff3131',  // bg-black/60
            paddingLeft: '1.5rem',  // px-6
            paddingRight: '1.5rem', // px-6
            paddingTop: '0.5rem',    // py-4
            paddingBottom: '1rem', // py-4
            borderRadius: '9999px', // rounded-full
            marginTop: '-13rem',   // mt-6
            transition: 'background-color 0.3s ease', // transition
          }}
        >
          Ürün Linkleri
        </Link>

      </div>
    </>

  )
}

export default YurtLinkPage