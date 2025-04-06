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
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {meal.length === 0 && <CarouselItem >
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span>VERI YOK</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>}
        {meal?.map((m, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square  items-center flex-col justify-center p-6">
                  <span className="text-2xl text-center pb-2 font-semibold">{m.date}</span>
                  <span className="text-xl ">{m[selectedMeal === "Breakfast" ? "Kahvalti" : "Aksam_yemegi"].split(",").filter(x => x !== "").map((m, ind) => (<li key={ind}>{m}</li>))}</span>
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


