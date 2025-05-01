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
    selectedCity: City | undefined,
    setSelectedCity: Dispatch<React.SetStateAction<City | undefined>>
}
export function CitySelection({ selectedCity, setSelectedCity }: Props) {
    const [open, setOpen] = React.useState(false)
    const [cities, setCities] = React.useState<City[]>([])
    const supabase = createClient()

    React.useEffect(() => {
        const getCities = async () => {
            const { data, error } = await supabase.from('cities').select("*").eq("is_active", "true")
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
        <div className="flex justify-center">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-44 md:w-60 px-4 py-2 text-base font-medium bg-[#fcfdf2] shadow-sm rounded-xl border mt-3 border-yellow-100 hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="truncate text-gray-700">
                  {selectedCity
                    ? cities.find((city) => city.name === selectedCity.name)?.name
                    : "İl seçimi yapın"}
                </span>
              </div>
              <ChevronsUpDown className="h-4 w-4 text-yellow-500 opacity-60" />
            </Button>
          </PopoverTrigger>
      
          <PopoverContent className="w-44 md:w-60 p-0 mt-2 rounded-xl border border-yellow-100 shadow-xl bg-[#fcfdf2]">
            <Command>
              <CommandInput
                placeholder="İl ara..."
                className="px-3 py-2 focus:ring-0 focus:outline-none border-b border-yellow-50 bg-[#fcfdf2] placeholder:text-gray-500"
              />
              <CommandList>
                <CommandEmpty className="p-3 text-sm text-gray-500">Şehir bulunamadı.</CommandEmpty>
                <CommandGroup>
                  {cities.map((city) => (
                    <CommandItem
                      key={city.name}
                      value={city.name}
                      onSelect={(currentValue) => {
                        if (selectedCity?.name !== currentValue) {
                          const city = cities.find((x) => x.name === currentValue);
                          if (city) {
                            setSelectedCity(city);
                            setOpen(false);
                            localStorage.setItem("selectedCity", JSON.stringify(city));
                          }
                        }
                      }}
                      className="cursor-pointer px-3 py-2 hover:bg-yellow-100 transition-colors"
                    >
                      {city.name}
                      <Check
                        className={cn(
                          "ml-auto text-yellow-500 transition-opacity",
                          selectedCity?.name === city.name ? "opacity-100" : "opacity-0"
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