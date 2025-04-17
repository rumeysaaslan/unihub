import React, { Dispatch, SetStateAction } from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
interface Props {
    selectedMeal: "Breakfast" | "Dinner",
    setSelectedMeal: Dispatch<SetStateAction<"Breakfast" | "Dinner">>
}

export function MealSelection({ selectedMeal, setSelectedMeal }:Props) {
    return (
        <div style={{ marginLeft: "-20px" }} className="flex items-center justify-center gap-4 bg-gradient-to-r from-[#fff0f0] via-[#ffdada] to-[#ff9494] p-2 mt-3 rounded-xl shadow-xl border border-rose-200">
        {/* Kahvaltı */}
        <Label
          htmlFor="mealSelection"
          className={`cursor-pointer font-semibold transition-colors duration-300 ${
            selectedMeal === "Breakfast" ? "text-rose-700" : "text-gray-400"
          }`}
        >
          Kahvaltı
        </Label>
      
        {/* Switch */}
        <Switch
          id="mealSelection"
          checked={selectedMeal === "Dinner"}
          onCheckedChange={(checked) => {
            setSelectedMeal(checked ? "Dinner" : "Breakfast");
          }}
          className="data-[state=checked]:bg-rose-500 data-[state=unchecked]:bg-gray-300 transition duration-300"
        />
      
        {/* Akşam Yemeği */}
        <Label
          htmlFor="mealSelection"
          className={`cursor-pointer font-semibold transition-colors duration-300 ${
            selectedMeal === "Dinner" ? "text-rose-700" : "text-gray-400"
          }`}
        >
          Akşam Yemeği
        </Label>
      </div>
    )
}
