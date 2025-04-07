import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center gap-4 md:gap-11 p-1 mb-3.5'>
      <Link style={{justifyContent:'center', alignItems:'center', border:'2px solid #efe8dd', borderRadius:'20px', padding:'4px'}} href={'/blog'}> <span style={{color:'#ff3131',fontFamily:'bristol'}}>Yurt Blog</span></Link>
     <Link  style={{justifyContent:'center', alignItems:'center', border:'2px solid #efe8dd', borderRadius:'20px', padding:'4px'}}  href={"/yurtlink"}><span style={{color:'#ff3131',fontFamily:'bristol'}}>Yurt Link</span></Link>
  
           
    </div>
  )
}

export default Navbar