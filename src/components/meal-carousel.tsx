"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { createClient } from "@/utils/supabase/client"
interface Meal {
  id: number,
  city_id: number,
  Kahvalti: string,
  Aksam_yemegi: string,
  date: string
}

interface Props {
  selectedMeal: "Breakfast" | "Dinner"
  selectedCityId: number
}
export function MealCarousel({ selectedMeal, selectedCityId }: Props) {
  const [meal, setMeal] = React.useState<Meal[]>([])
  const supabase = createClient()
  React.useEffect(() => {
    const getMeal = async () => {

      if (selectedCityId < 1) return;
      const now = new Date();
      const dateAsString = now.toISOString()
      const { data, error } = await supabase.from("meals").select("*").eq("city_id", selectedCityId).order("date").gte("date", dateAsString)
      if (data) {
        setMeal(data)
      }
      else {
        console.log("error", error)
      }

    }
    getMeal()
  }, [selectedCityId, supabase])

  return (
    <Carousel className="w-full max-w-xs ml-4 mt-6 md:max-w-md lg:max-w-lg">
  <CarouselContent>
    {meal.length === 0 && (
      <CarouselItem>
        <div className="p-2">
          <Card className="border-dashed border-2 border-gray-300">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-center text-gray-500 text-lg font-medium">Veri bulunamadı</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    )}

    {meal?.map((m, index) => (
      <CarouselItem key={index}>
        <div className="p-2">
        <Card className="shadow-md border border-gray-200 bg-gradient-to-br from-[#fff0f0] via-[#ffdada] to-[#ff9494]">
  <CardContent className="flex aspect-square items-center flex-col justify-center p-6 space-y-4">
    <span className="text-2xl font-bold text-center tracking-wide text-gray-800 underline decoration-pink-300 decoration-2 underline-offset-4">
      {m.date}
    </span>

    <ul className="text-left text-gray-700 text-[15px] leading-relaxed tracking-wide font-medium space-y-1 list-disc list-inside">
      {m[selectedMeal === "Breakfast" ? "Kahvalti" : "Aksam_yemegi"]
        .split(",")
        .filter((x) => x.trim() !== "")
        .map((item, ind) => (
          <li key={ind}>{item.trim()}</li>
        ))}
    </ul>
  </CardContent>
</Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  )
}


