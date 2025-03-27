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
      const now = new Date();
      const dateAsString = now.toISOString()
      const { data, error } = await supabase.from("meals").select("*").eq("city_id", selectedCityId).eq("date", dateAsString)
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
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {meal?.map((m, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{selectedMeal === "Breakfast" ? m.Kahvalti : m.Aksam_yemegi}</span>
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
