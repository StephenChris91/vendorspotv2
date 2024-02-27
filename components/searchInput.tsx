'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchInput() {
  return (
    <div className="lg:flex w-full max-w-sm items-center sm:hidden">
      <Input type="text" placeholder="Search..." className="rounded-r-none focus:outline-none"/>
      <Button type="submit" className="rounded-l-none bg-gray-800">Search</Button>
    </div>
  )
}
