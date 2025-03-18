import React, { Dispatch, SetStateAction } from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
interface Props {
    selectedMeal: "Breakfast" | "Dinner",
    setSelectedMeal: Dispatch<SetStateAction<"Breakfast" | "Dinner">>
}

export function MealSelection({ selectedMeal, setSelectedMeal }:Props) {
    return (
        <div className="flex space-x-2">
            <Label htmlFor="mealSelection">Kahvaltı</Label>
            <Switch checked={selectedMeal==="Dinner"} onCheckedChange={(checked) => { setSelectedMeal(checked?"Dinner":"Breakfast") }} id="mealSelection" />
            <Label htmlFor="mealSelection">Akşam Yemeği</Label>
        </div>
    )
}
