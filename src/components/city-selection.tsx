"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { createClient } from "@/utils/supabase/client"
import { Dispatch } from "react"
 export interface City {
    id: number,
    name: string,
}

interface Props {
    selectedCity: City|undefined,
    setSelectedCity: Dispatch<React.SetStateAction<City|undefined>>
}
export function CitySelection({ selectedCity, setSelectedCity }: Props) {
    const [open, setOpen] = React.useState(false)
    const [cities, setCities] = React.useState<City[]>([])
    const supabase = createClient()

    React.useEffect(() => {
        const getCities = async () => {
            const { data, error } = await supabase.from('cities').select("*")
            console.log(data)
            if (data) {
                setCities(data)
            }
            else {
                console.log("error", error)
            }
        }
        getCities()
    }, [supabase])


    return (
        <div className="">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-auto justify-between"
                    >
                        {selectedCity
                            ? cities.find((city) => city.id === selectedCity.id)?.name
                            : "il secimi yapin"}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="il secimi yapin" />
                        <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {cities.map((city) => (
                                    <CommandItem
                                        key={city.name}
                                        value={city.id.toString()}
                                        onSelect={(currentValue) => {
                                            if (selectedCity?.id!== Number(currentValue)) {
                                                setSelectedCity(cities.find(x=>x.id==Number(currentValue)))
                                                setOpen(false)
                                            }
                                        }}
                                    >
                                        {city.name}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                selectedCity?.id === city.id ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}