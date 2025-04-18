
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
    <div style={{ display: "flex", flexDirection: "row" }} className="space-x-4 justify-center  p-4 ">
    <Card className=" w-full sm:w-[350px] bg-white rounded-xl shadow-sm p-4">
      <CardHeader>
        <CardTitle style={{ color: '#6cbf6d' }}>KYK LİNK</CardTitle>
        <CardDescription>
          Yurt hayatını kolaylaştıran temel ihtiyaç ürünlerine hızlı erişim. İlk günden eksiksiz başla.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href="https://ty.gl/5wpwefo2hwe3i"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#A3D9A5', // Pastel yeşili tonları
            color: '#2d2d2d', // Koyu gri metin rengi
            padding: '12px 24px',
            borderRadius: '15px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontFamily: 'cursive',
            textAlign: 'center',
          }}
        >
          ✨ 𝐘𝐮𝐫𝐭 𝐬𝐞𝐫𝐮̈𝐯𝐞𝐧𝐢𝐧𝐢 𝐤𝐨𝐥𝐚𝐲𝐚𝐬̧𝐭𝐢𝐫𝐚𝐜𝐚𝐤 𝐭𝐮̈𝐦 𝐮̈𝐫𝐮̈𝐧𝐥𝐞𝐫 𝐛𝐮 𝐥𝐢𝐧𝐤𝐭𝐞! 🧺🎀
        </Link>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* Footer content, if needed */}
      </CardFooter>
    </Card>
  </div>
  )
}

export default KykBoard