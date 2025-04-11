"use client"
import { City, CitySelection } from "@/components/city-selection";
import { MealCarousel } from "@/components/meal-carousel";
import { MealSelection } from "@/components/meal-selection";


import { useEffect, useState } from "react";

export default function Details() {
    const now = new Date();
    const currentHour = now.getHours()
    const [selectedMeal, setSelectedMeal] = useState<"Breakfast" | "Dinner">(currentHour < 13 ? "Breakfast" : "Dinner")
    const [selectedCity, setSelectedCity] = useState<City>()

    useEffect(() => {
        const selectedCityAsString = localStorage.getItem("selectedCity")
        if (selectedCityAsString) {
            setSelectedCity(JSON.parse(selectedCityAsString))
        }
    }, [])
    return (
        <div>
            <div className="selections flex justify-center gap-6 z-10">
             
                <CitySelection selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
                
                <MealSelection setSelectedMeal={setSelectedMeal} selectedMeal={selectedMeal} />
            </div>
            <div className="flex justify-center">
                <MealCarousel selectedMeal={selectedMeal} selectedCityId={selectedCity?.id ?? 0} />
            </div>
        </div>
    );
}
