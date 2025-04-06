import Link from 'next/link'
import React from 'react'
import kykodafoto from "../../../public/kyk3.jpg"
import Image from 'next/image'

function YurtLinkPage() {
  return (
 <>

 
    <div className=" flex flex-col mt-50 w-full flex items-center justify-center">
    <Image style={{width:"300px", height:'300px', border: "1px solid darkgray",  borderRadius: "10px", backgroundColor: "rgba(255, 255, 255, 0.6)", backdropFilter:"blur(10px)", textDecoration: "none", transition: "all 0.7s ease", marginTop:"-170px"}} src={kykodafoto} alt={'foto'}></Image> 
           
           
      <Link
        href="https://www.trendyol.com/koleksiyonlar/yurt-link-k-2485ae41-ab53-4930-b31f-57d3d23aad26?shared=true&adjust_t=mga6qru_4lumnip&adjust_tracker_limit=999999999&utm_source=collection&utm_medium=ios_collection_free&adjust_campaign=ios_collection_free&adjust_creative=2485ae41-ab53-4930-b31f-57d3d23aad26&utm_term=2485ae41-ab53-4930-b31f-57d3d23aad26&adjust_adgroup=18226887&utm_campaign=18226887"
        className="text-white text-2xl font-bold bg-black/60 px-6 py-4 rounded-full mt-6 hover:bg-black/80 transition"
      >
       Ürun Linkleri
      </Link>
      
    </div>
    </>
  
  )
}

export default YurtLinkPage