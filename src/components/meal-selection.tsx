import React, { Dispatch, SetStateAction } from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
interface Props {
    selectedMeal: "Breakfast" | "Dinner",
    setSelectedMeal: Dispatch<SetStateAction<"Breakfast" | "Dinner">>
}

export function MealSelection({ selectedMeal, setSelectedMeal }:Props) {
    return (
        <div
        style={{ marginLeft: "-20px" }}
        className="flex items-center justify-center gap-4 bg-[#fcfdf2] p-2 mt-3 rounded-xl shadow-md border border-yellow-100"
      >
        {/* Kahvaltı */}
        <Label
          htmlFor="mealSelection"
          className={`cursor-pointer font-semibold transition-colors duration-300 ${
            selectedMeal === "Breakfast" ? "text-yellow-600" : "text-gray-400"
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
          className="data-[state=checked]:bg-yellow-400 data-[state=unchecked]:bg-gray-300 transition duration-300"
        />
      
        {/* Akşam Yemeği */}
        <Label
          htmlFor="mealSelection"
          className={`cursor-pointer font-semibold transition-colors duration-300 ${
            selectedMeal === "Dinner" ? "text-yellow-600" : "text-gray-400"
          }`}
        >
          Akşam Yemeği
        </Label>
      </div>
    )
}
