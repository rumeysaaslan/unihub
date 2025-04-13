"use client"
import React, {  useEffect, useState } from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Card,

  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { City, CitySelection } from '@/components/city-selection'
import { Label } from '@/components/ui/label'
import { ModeToggle } from '@/components/mode-toggle'
import { MdFormatListBulleted } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


function Profile() {
  const [selectedCity, setSelectedCity] = useState<City>()

  useEffect(()=>{
    const SelectedCity=localStorage.getItem("selectedCity")
    if(SelectedCity){
      setSelectedCity(JSON.parse(SelectedCity))
    }
    
  },[])
  return (
    <div style={{ display: "flex", flexDirection: "row", backgroundColor: '#efe8dd' }} className='space-x-30 justify-center  h-screen'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Profil</CardTitle>
          <CardDescription>Burada seçtiğiniz şehir ve ve KYK seciminize göre bilgiler düzenlenir .</CardDescription>
        </CardHeader>
        <div className='flex flex-col space-y-3 ml-5'>
        <div>
        <Label htmlFor="name">Varsayılan şehirinizi seçin</Label>
        </div>
        <div>
        <CitySelection selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        </div>
        </div>
        <div className='flex flex-col space-y-3 ml-5'>
        <div>
        <Label htmlFor="name">Varsayılan Kyk yurdunuzu seçin</Label>
        </div>
        <div>
        kyk nizi secin 
        </div>
        </div>
        <div className='flex flex-row space-x-3 mt-3 ml-5'>
          
        <Label htmlFor="name">Tema Ayarlari:</Label>
        <ModeToggle />
          </div>

        <div className='flex flex-row space-y-3 space-x-3 ml-5'>
        <Avatar>
      <AvatarImage src="Hype. (1).png" alt="logo" />
      <AvatarFallback>CN</AvatarFallback>
      </Avatar>
        <h1 style={{color:'#ff3131',marginTop:'5px'}}>Websitemiz Hakkinda</h1>
        </div>
        <div className='flex flex-row  space-x-3 ml-5'>
        <MdFormatListBulleted />
        <Label  htmlFor="name">Günlük Menüler</Label>
        </div>
        <div style={{marginTop:'-10px'}} className='flex flex-row  space-x-3 ml-5'>
        <CardDescription>Hergün güncel yemek listesi .</CardDescription>
          </div>
          <div className='flex flex-row  space-x-3 ml-5'>
          <IoLocationOutline />
        <Label  htmlFor="name">Şehir Seçimi</Label>
        </div>
        <div style={{marginTop:'-10px'}} className='flex flex-row  space-x-3 ml-5'>
        <CardDescription>Burada seçtiğiniz şehir ve ve KYK seciminize göre bilgiler düzenlenir .</CardDescription>
          </div>

        <CardFooter className="flex justify-end">
        </CardFooter>
      </Card>


    </div>
  )
}

export default Profile