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
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"

import { City, CitySelection } from "@/components/city-selection"

function Profile() {
  const [selectedCity, setSelectedCity] = useState<City>()
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [notifications, setNotifications] = useState(true)
  const [dailyGoal, setDailyGoal] = useState<string>("20") // kitap sayfa hedefi
  const [badges, setBadges] = useState<string[]>([])

  // Load from storage
  useEffect(() => {
    const storedCity = localStorage.getItem("selectedCity")
    if (storedCity) setSelectedCity(JSON.parse(storedCity))

    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark" || storedTheme === "light") setTheme(storedTheme)

    const storedNotif = localStorage.getItem("notifications")
    if (storedNotif) setNotifications(storedNotif === "true")

    const storedGoal = localStorage.getItem("dailyGoal")
    if (storedGoal) setDailyGoal(storedGoal)

    const storedBadges = localStorage.getItem("badges")
    if (storedBadges) setBadges(JSON.parse(storedBadges))
  }, [])

  // Save to storage
  useEffect(() => {
    if (selectedCity) localStorage.setItem("selectedCity", JSON.stringify(selectedCity))
  }, [selectedCity])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem("notifications", String(notifications))
  }, [notifications])

  useEffect(() => {
    localStorage.setItem("dailyGoal", dailyGoal)
  }, [dailyGoal])

  useEffect(() => {
    localStorage.setItem("badges", JSON.stringify(badges))
  }, [badges])

  const toggleBadge = (b: string) => {
    setBadges((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl border border-[#e3f8d4] bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-[#6cbf6d] text-2xl font-bold">
            Profil
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            Burada seçtiğiniz şehir ve kişisel ayarlarınız kaydedilir.
          </CardDescription>
        </CardHeader>

        <div className="px-4 md:px-6 py-4 space-y-5">
          {/* Şehir */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#6cbf6d]">
              Varsayılan şehirinizi seçin
            </Label>
            <CitySelection
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          </div>

          {/* Tema */}
          <div className="flex items-center gap-3">
            <Label className="text-sm font-medium text-[#6cbf6d]">
              Tema Ayarı:
            </Label>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={(c) => setTheme(c ? "dark" : "light")}
            />
            <span className="text-sm text-gray-600">
              {theme === "dark" ? "Koyu" : "Açık"}
            </span>
          </div>

          {/* Bildirim */}
          <div className="flex items-center gap-3">
            <IoNotificationsOutline className="text-[#FFEBB0] text-xl" />
            <Label className="text-sm text-[#6cbf6d]">Bildirimler</Label>
            <Switch
              checked={notifications}
              onCheckedChange={(c) => setNotifications(c)}
            />
            <span className="text-sm text-gray-600">
              {notifications ? "Açık" : "Kapalı"}
            </span>
          </div>

          {/* Günlük hedef */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-[#6cbf6d]">
              Günlük Kitap Hedefi (sayfa)
            </Label>
            <Input
              type="number"
              value={dailyGoal}
              onChange={(e) => setDailyGoal(e.target.value)}
            />
          </div>

          {/* Başarı Rozetleri */}
          <div>
            <Label className="text-sm font-medium text-[#6cbf6d]">
              Başarı Rozetleri
            </Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["🎯 İlk Görev", "📚 Kitapçı", "🎬 Filmsever"].map((b) => (
                <button
                  key={b}
                  onClick={() => toggleBadge(b)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    badges.includes(b)
                      ? "bg-[#6cbf6d] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Menü */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MdFormatListBulleted className="text-[#FFEBB0] text-xl" />
              <Label className="text-sm text-[#6cbf6d]">Günlük Menüler</Label>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Her gün güncel yemek listesi.
            </CardDescription>

            <div className="flex items-center gap-3 mt-3">
              <IoLocationOutline className="text-[#FFEBB0] text-xl" />
              <Label className="text-sm text-[#6cbf6d]">Şehir Seçimi</Label>
            </div>
            <CardDescription className="ml-7 text-sm text-gray-600">
              Burada seçtiğiniz şehre göre bilgiler düzenlenir.
            </CardDescription>

            <div className="flex items-center gap-3 mt-3">
              <Link
                href="https://ty.gl/5wpwefo2hwe3i"
                target="_blank"
                className="flex items-center gap-2 text-[#6cbf6d] font-medium"
              >
                <MdShoppingCart className="text-xl text-[#FFEBB0]" />
                <Label className="text-sm">Yurt İhtiyaçları</Label>
              </Link>
            </div>
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