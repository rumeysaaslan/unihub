import { JSDOM } from "jsdom"
import * as React from "react"


import { Card, CardContent } from "@/components/ui/card"

export interface Meal {
  date: string,
  recipes: string[]
  calories: string
}

interface Props {
  selectedMeal: "Breakfast" | "Dinner"
  selectedCityName: string
}

export const DataCollect: React.FC<Props> = async ({ selectedMeal, selectedCityName }: Props) => {

  const response = await fetch(`https://kykyemek.com/Menu/GetDailyMenu/${selectedCityName}?city=${selectedCityName}&mealType=${selectedMeal === "Dinner" ? "true" : "false"}`)
  const htmlString = await response.text()
  const dom = new JSDOM(htmlString)
  const document = dom.window.document

  const meals: Meal[] = []
  const days = document.querySelectorAll(".col")
  days.forEach(day => {
    const items = day.querySelectorAll("p")
    const yemekler: string[] = []
    items.forEach((item) => {
      yemekler.push(item.innerHTML)
    })
    const date = yemekler[0];
    delete yemekler[0]
    meals.push({
      date: date,
      recipes: yemekler,
      calories: yemekler[yemekler.length - 1]
    })
    console.log(meals)
  })
  return (
    <div className="flex relative  flex-wrap p-2.5 ml-8 ">{meals.map((item, index: number) => (
      <div key={index.toString()} className="m-3   ">
        <Card>
          <CardContent className="flex aspect-square h-128 overflow-scroll items-center justify-center p-6 md:p-18">
            <ol className="text-3xl font-semibold list-disc">{item.date}{item.recipes.map((li, index) => (
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