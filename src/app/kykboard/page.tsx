
import * as React from "react"



import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




function KykBoard() {

  return (
    <div style={{display:"flex", flexDirection:"row", backgroundColor:'#efe8dd' }} className='space-x-30 justify-center  h-screen ' >
      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle style={{color:'#ff3131'}}>KYK PANO</CardTitle>
        <CardDescription>Kyk içinde merak edilen tüm bilgiler</CardDescription>
      </CardHeader>
      <CardContent>
      <h4>Yemekhane Bilgileri</h4>
        <div style={{border:'1px solid darkgray',padding:'10px', borderRadius:'30px', marginLeft:'-10px' }} >
         
        <div>
          <span style={{color:''}}>Kahvaltı saatleri: </span>
          <span>06.00-12.00 </span>
        </div>
        <div className="flex mt-2 text-2xl mb-2">
        <CardDescription>(Haftasonu:</CardDescription>
        <CardDescription>06.00-12.30)</CardDescription>
        </div>
        <div>
        <span style={{color:''}}>Akşam yemeği: </span>
        <span>16.00-23.00</span>
        </div>
        </div>
        <div className="mt-3">
        <h4>Yurt Saatleri</h4>
        </div>
        <div style={{border:'1px solid darkgray',padding:'10px', borderRadius:'30px', marginLeft:'-10px' }} >
        <div>
          <span style={{color:''}}>Yurt son giriş : </span>
          <span>23.00</span>
        </div>
        <div className="mt-1">
          <span style={{color:''}}>Yurt ilk çıkış : </span>
          <span>06.00</span>
        </div>
        </div>
      
     
      </CardContent>
      <CardFooter className="flex justify-between">
      </CardFooter>
    </Card>
    </div>
  )
}

export default KykBoard