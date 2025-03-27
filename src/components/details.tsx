"use client"
import { City, CitySelection } from "@/components/city-selection";
import { MealCarousel } from "@/components/meal-carousel";
import { MealSelection } from "@/components/meal-selection";

import { useState } from "react";

export default function Details() {

    const [selectedMeal, setSelectedMeal] = useState<"Breakfast" | "Dinner">("Breakfast")
    const [selectedCity, setSelectedCity] = useState<City>()
    return (
        <div>
            <div className="selections flex justify-center gap-6">
                <CitySelection selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
                <MealSelection setSelectedMeal={setSelectedMeal} selectedMeal={selectedMeal} />
            </div>
            <div className="flex justify-center">
                <MealCarousel selectedMeal={selectedMeal} selectedCityId={selectedCity?.id ?? 0} />
            </div>
        </div>
    );
}
