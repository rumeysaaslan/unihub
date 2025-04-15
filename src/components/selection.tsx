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
import { Dispatch } from "react"
export interface Item {
    id: number,
    name: string,
}

interface Props {
    selectedItem: Item | undefined,
    setSelectedItem: Dispatch<React.SetStateAction<Item | undefined>>
    getItems: () => Promise<Item[]>
    title: string
}
export const Selection: React.FC<Props> = ({ selectedItem, setSelectedItem, getItems, title }) => {
    const [open, setOpen] = React.useState(false)
    const [items, setItems] = React.useState<Item[]>([])

    React.useEffect(() => {
        getItems().then((re) => {
            setItems(re)
        })
    }, [getItems])

    return (
        <div  >
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-auto justify-between"
                    >
                        {selectedItem
                            ? items.find((item) => item.name === selectedItem.name)?.name
                            : `${title} secimi yapin`}
                        <ChevronsUpDown className="opacity-50 " />
                    </Button  >
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command >
                        <CommandInput placeholder={`${title} secimi yapin`} />
                        <CommandList>
                            <CommandEmpty>Şehir bulunamadı.</CommandEmpty>
                            <CommandGroup>
                                {items.map((item) => (
                                    <CommandItem
                                        key={item.name}
                                        value={item.name}
                                        onSelect={(currentValue) => {
                                            if (selectedItem?.name !== currentValue) {
                                                const item = items.find(x => x.name == currentValue)
                                                if (item) {
                                                    setSelectedItem(item)
                                                    setOpen(false)
                                                }
                                            }
                                        }}
                                    >
                                        {item.name}
                                        <Check
                                            className={cn(
                                                "ml-auto ",
                                                selectedItem?.name === item.name ? "opacity-100" : "opacity-0"
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