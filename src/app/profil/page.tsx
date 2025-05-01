"use client"
import React, { useEffect, useState } from 'react'


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

import Link from 'next/link'
import { MdMovie } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { MdShoppingCart } from 'react-icons/md'; // Alışveriş ikonu


function Profile() {
  const [selectedCity, setSelectedCity] = useState<City>()


  useEffect(() => {
    const SelectedCity = localStorage.getItem("selectedCity")
    if (SelectedCity) {
      setSelectedCity(JSON.parse(SelectedCity))
    }

  }, [])
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl border border-[#e3f8d4] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-[#6cbf6d] text-2xl font-bold">Profil</CardTitle>
          <CardDescription className="text-sm text-gray-600">
            Burada seçtiğiniz şehir ve KYK seçiminize göre bilgiler düzenlenir.
          </CardDescription>
        </CardHeader>

        <div className="px-4 md:px-6 py-4 space-y-5">
          {/* Şehir Seçimi */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#6cbf6d]">Varsayılan şehirinizi seçin</Label>
            <CitySelection selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
          </div>

          {/* Tema Ayarı */}
          <div className="flex items-center gap-3">
            <Label className="text-sm font-medium text-[#6cbf6d]">Tema Ayarları:</Label>
            <ModeToggle />
          </div>

          {/* Menü & Diğer Bilgiler */}
          <div className="space-y-3">
            {/* Günlük Menüler */}
            <div className="flex items-center gap-3">
              <MdFormatListBulleted className="text-[#FFEBB0] text-xl" />
              <Label className="text-sm text-[#6cbf6d]">Günlük Menüler</Label>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Her gün güncel yemek listesi.
            </CardDescription>

            {/* Şehir Seçimi */}
            <div className="flex items-center gap-3 mt-3">
              <IoLocationOutline className="text-[#FFEBB0] text-xl" />
              <Label className="text-sm text-[#6cbf6d]">Şehir Seçimi</Label>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Burada seçtiğiniz şehir ve KYK seçiminize göre bilgiler düzenlenir.
            </CardDescription>

            {/* Yurt İhtiyaçları */}
            <div className="flex items-center gap-3 mt-3">
              <Link
                href="https://ty.gl/5wpwefo2hwe3i"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#6cbf6d] font-medium"
              >
                <MdShoppingCart className="text-xl text-[#FFEBB0]" />
                <Label className="text-sm">Yurt İhtiyaçlarınızı Kontrol Edin</Label>
              </Link>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Yurt hayatını kolaylaştıran temel ihtiyaç ürünlerine hızlı erişim sağlamak için tıklayın.
            </CardDescription>

            {/* Eğlence ve Aktivite */}
            <div className="flex items-center gap-3 mt-3">
              <Link href="#" className="flex items-center gap-2 text-[#FFEBB0] font-medium">
                <MdMenuBook className="text-xl" />
                <Label className="text-sm text-[#6cbf6d]">Kitap Modu</Label>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-[#FFEBB0] font-medium">
                <MdMovie className="text-xl" />
                <Label className="text-sm text-[#6cbf6d]">Film Modu</Label>
              </Link>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Eğlenceli kitap ve film önerilerini keşfedin.
            </CardDescription>
          </div>
        </div>

        <CardFooter className="p-4 text-right">
          {/* Footer alanı boş bırakıldı, istenirse buton eklenebilir */}
        </CardFooter>
      </Card>
    </div>
  );
}

export default Profile