import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

function Profile() {
  return (
    <div style={{display:"flex", flexDirection:"row", backgroundColor:'#efe8dd' }} className='space-x-30 justify-center  h-screen'>
    <div className='flex justify-center  '>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </div>

    <div>
    <div className='flex justify-center items-center '>
      <ol>- Bildirimler -
       
      </ol>
    </div>

    </div>
    
    </div>
  )
}

export default Profile