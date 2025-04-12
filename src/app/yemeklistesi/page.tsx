"use server"
import DataCollect from '@/components/data-collect'
import React from 'react'
// interface Params {
//   cityName: string,
//   cityId: number,
//   meal: "Breakfast" | "Dinner",
//   saveToDo: string
// }

const FullMeal = async ({ searchParams }: never) => {
  const { cityName, cityId, meal, saveToDo } = searchParams;

  return (
    <div  >
      <DataCollect saveToDo={saveToDo === "true"} selectedMeal={meal} selectedCityId={cityId} selectedCityName={cityName} />
    </div>
  )
}

export default FullMeal