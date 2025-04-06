'use server'
import { JSDOM } from "jsdom"
import * as React from "react"


import { Card, CardContent } from "@/components/ui/card"
import { createClient } from "@/utils/supabase/client"

export interface Meal {
  date: string,
  breakfast: string[]
  dinner: string[]
}

interface Props {
  selectedMeal: "Breakfast" | "Dinner"
  selectedCityName: string
  selectedCityId: number
  saveToDo: boolean
}

interface DatabaseMeal {
  id: number,
  created_at: string
  Kahvalti: string
  Aksam_yemegi: string
  city_id: number
  date: string
}

function turkishDateToJSDate(turkishDateStr: string) {
  const months: Record<string, number> = {
    "Ocak": 0, "Şubat": 1, "Mart": 2, "Nisan": 3, "Mayıs": 4, "Haziran": 5,
    "Temmuz": 6, "Ağustos": 7, "Eylül": 8, "Ekim": 9, "Kasım": 10, "Aralık": 11
  };

  // String'i parçala
  const [day, monthName, year] = turkishDateStr.split(" ");

  // Ay ismini sayıya çevir
  const month = months[monthName];

  // Date nesnesi oluştur (Aylar 0 tabanlı olduğu için month zaten uygun)
  return new Date(Number(year), month, Number(day));
}
export const DataCollect: React.FC<Props> = async ({ selectedCityName, selectedCityId, saveToDo }: Props) => {

  const mealTypes = [true, false]
  const meals: Meal[] = []

  for (const mealType of mealTypes) {
    const response = await fetch(`https://kykyemek.com/Menu/GetDailyMenu/${selectedCityName}?city=${selectedCityName}&mealType=${mealType}`)
    const htmlString = await response.text()
    const dom = new JSDOM(htmlString)
    const document = dom.window.document

    const days = document.querySelectorAll(".col")
    days.forEach(async day => {
      const items = day.querySelectorAll("p")
      const yemekler: string[] = []
      items.forEach((item) => {
        yemekler.push(item.innerHTML)
      })
      const date = yemekler[0];
      delete yemekler[0]

      let newmeal = meals.find(meal => meal.date === date)
      if (newmeal) {
        if (mealType) {
          newmeal.dinner = yemekler
        }
        else {
          newmeal.breakfast = yemekler
        }
      }
      else {
        newmeal = {
          date: date,
          dinner: yemekler,
          breakfast: [],
        }
        meals.push(newmeal)
      }
    })
  }
  console.log(meals)
  if (saveToDo) {
    const supabase = createClient()
    for (const meal of meals) {
      await supabase.from("meals").insert({
        Kahvalti: meal.breakfast.join(","),
        Aksam_yemegi: meal.dinner.join(","),
        city_id: selectedCityId,
        date: turkishDateToJSDate(meal.date).toISOString(),
      } as DatabaseMeal).throwOnError()
    }
  }
  return (
    <div className="flex relative  flex-wrap p-2.5 ml-8 ">{meals.map((item, index: number) => (
      <div key={index.toString()} className="m-3   ">
        <Card>
          <CardContent className="flex aspect-square h-128 overflow-scroll items-center justify-center p-6 md:p-18">
            <ol className="text-3xl font-semibold list-disc">{item.date}{item.breakfast.map((li, index) => (
              <li className="" key={index}>
                {li}</li>
            ))}</ol>
          </CardContent>
        </Card>
      </div>
    ))
    }
    </div >
  )
}

export default DataCollect