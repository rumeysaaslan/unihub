
import * as React from "react"



import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"




function KykBoard() {

  return (
    <div style={{ display: "flex", flexDirection: "row", backgroundColor: '#efe8dd' }} className='space-x-30 justify-center  h-screen ' >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle style={{ color: '#ff3131' }}>KYK LİNK</CardTitle>
          <CardDescription>Yurt hayatını kolaylaştıran temel ihtiyaç ürünlerine hızlı erişim. İlk günden eksiksiz başla.</CardDescription>
        </CardHeader>
        <CardContent>

          <Link  href="https://ty.gl/5wpwefo2hwe3i" target="_blank" rel="noopener noreferrer" style={{
  display: 'inline-block',
  backgroundColor: '#FF69B4',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '15px',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontFamily: 'cursive'
}}>
✨ 𝐘𝐮𝐫𝐭 𝐬𝐞𝐫𝐮̈𝐯𝐞𝐧𝐢𝐧𝐢 𝐤𝐨𝐥𝐚𝐲𝐥𝐚𝐬̧𝐭𝐢𝐫𝐚𝐜𝐚𝐤 𝐭𝐮̈𝐦 𝐮̈𝐫𝐮̈𝐧𝐥𝐞𝐫 𝐛𝐮 𝐥𝐢𝐧𝐤𝐭𝐞! 🧺🎀</Link>








        </CardContent>
        <CardFooter className="flex justify-between">
        </CardFooter>
      </Card>
    </div>
  )
}

export default KykBoard