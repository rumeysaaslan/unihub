"use client"
import { CitySelection } from "@/components/city-selection";
import { MealCarousel } from "@/components/meal-carousel";
import { MealSelection } from "@/components/meal-selection";
import { useState } from "react";

export default function Home() {
  const [selectedMeal, setSelectedMeal] = useState<"Breakfast" | "Dinner">("Breakfast")
  const [selectedCityId, setSelectedCityId] = useState<number>(0)
  return (
    <div>
      <div className="selections flex justify-center gap-6">
        <CitySelection selectedCityId={selectedCityId} setSelectedCityId={setSelectedCityId} />
        <MealSelection setSelectedMeal={setSelectedMeal} selectedMeal={selectedMeal } />
      </div>
      <div className="flex justify-center selections">
        <MealCarousel selectedMeal={selectedMeal} selectedCityId={selectedCityId} />
      </div>
    </div>
  );
}


