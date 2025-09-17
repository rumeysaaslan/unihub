"use client"
import React, { useEffect, useState } from "react"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link"

import {
  MdFormatListBulleted,
  MdMovie,
  MdMenuBook,
  MdShoppingCart,
  MdEmojiEvents,
} from "react-icons/md"
import { IoLocationOutline, IoNotificationsOutline } from "react-icons/io5"

import { City, CitySelection } from "@/components/city-selection"
import { ModeToggle } from "@/components/mode-toggle"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"

function Profile() {
  const [selectedCity, setSelectedCity] = useState<City>()
  const [notifications, setNotifications] = useState(true)
  const [dailyGoal, setDailyGoal] = useState("20")

  // LocalStorage load
  useEffect(() => {
    const storedCity = localStorage.getItem("selectedCity")
    if (storedCity) setSelectedCity(JSON.parse(storedCity))

    const storedNotif = localStorage.getItem("notifications")
    if (storedNotif) setNotifications(storedNotif === "true")

    const storedGoal = localStorage.getItem("dailyGoal")
    if (storedGoal) setDailyGoal(storedGoal)
  }, [])

  // Save
  useEffect(() => {
    if (selectedCity) localStorage.setItem("selectedCity", JSON.stringify(selectedCity))
  }, [selectedCity])

  useEffect(() => {
    localStorage.setItem("notifications", String(notifications))
  }, [notifications])

  useEffect(() => {
    localStorage.setItem("dailyGoal", dailyGoal)
  }, [dailyGoal])

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl border border-[#e3f8d4] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-[#6cbf6d] text-2xl font-bold">Profil</CardTitle>
          <CardDescription className="text-sm text-gray-600">
            Burada seçtiğiniz şehir ve kişisel ayarlarınız kaydedilir.
          </CardDescription>
        </CardHeader>

        <div className="px-4 md:px-6 py-4 space-y-6">
          {/* Şehir Seçimi */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#6cbf6d]">Varsayılan şehirinizi seçin</Label>
            <CitySelection selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
          </div>

          {/* Tema */}
          <div className="flex items-center gap-3">
            <Label className="text-sm font-medium text-[#6cbf6d]">Tema Ayarı:</Label>
            <ModeToggle />
          </div>

          {/* Bildirim */}
          <div className="flex items-center gap-3">
            <IoNotificationsOutline className="text-[#FFEBB0] text-xl" />
            <Label className="text-sm text-[#6cbf6d]">Bildirimler</Label>
            <Switch checked={notifications} onCheckedChange={(c) => setNotifications(c)} />
            <span className="text-sm text-gray-600">{notifications ? "Açık" : "Kapalı"}</span>
          </div>

          {/* Günlük hedef */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#6cbf6d]">Günlük Kitap Hedefi (sayfa)</Label>
            <Input
              type="number"
              value={dailyGoal}
              onChange={(e) => setDailyGoal(e.target.value)}
            />
          </div>

          {/* Menü & Diğer Bilgiler */}
          <div className="space-y-4">
            {/* Günlük Menüler */}
            <div className="flex items-center gap-3">
              <MdFormatListBulleted className="text-[#FFEBB0] text-xl" />
              <Label className="text-sm text-[#6cbf6d]">Günlük Menüler</Label>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Her gün güncel yemek listesi.
            </CardDescription>

            {/* Şehir */}
            <div className="flex items-center gap-3 mt-2">
              <IoLocationOutline className="text-[#FFEBB0] text-xl" />
              <Label className="text-sm text-[#6cbf6d]">Şehir Seçimi</Label>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Burada seçtiğiniz şehre göre bilgiler düzenlenir.
            </CardDescription>

            {/* Yurt İhtiyaçları */}
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="https://ty.gl/5wpwefo2hwe3i"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#6cbf6d] font-medium"
              >
                <MdShoppingCart className="text-xl text-[#FFEBB0]" />
                <Label className="text-sm">Yurt İhtiyaçları</Label>
              </Link>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Yurt hayatını kolaylaştıran temel ihtiyaç ürünlerine hızlı erişim.
            </CardDescription>

            {/* Eğlence */}
            <div className="flex items-center gap-3 mt-3">
              <MdMenuBook className="text-xl text-[#FFEBB0]" />
              <Label className="text-sm text-[#6cbf6d]">Kitap Modu</Label>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Eğlenceli kitap önerilerini keşfedin.
            </CardDescription>

            <div className="flex items-center gap-3 mt-3">
              <MdMovie className="text-xl text-[#FFEBB0]" />
              <Label className="text-sm text-[#6cbf6d]">Film Modu</Label>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Keyifli film önerilerini inceleyin.
            </CardDescription>

            {/* Başarılar */}
            <div className="flex items-center gap-3 mt-3">
              <MdEmojiEvents className="text-xl text-[#FFEBB0]" />
              <Label className="text-sm text-[#6cbf6d]">Başarılar</Label>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Kazandığınız başarı rozetlerini burada görüntüleyin.
            </CardDescription>
          </div>
        </div>

        <CardFooter className="p-4 text-right">
          <p className="text-xs text-gray-400">KYK Hub © 2025</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Profile