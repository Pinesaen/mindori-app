"use client"

import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NavigationBar } from "@/components/navigation-bar"
import { Search, Filter } from "lucide-react"
import Image from "next/image"

export function ProfilesScreen() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock mentor profiles
  const students = [
    {
      id: 1,
      name: "Min-jun Kim",
      university: "Seoul National University",
      major: "Computer Science",
      bio: "3rd year SNU student helping high schoolers prepare for CS programs",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Ji-woo Park",
      university: "Korea University",
      major: "Electrical Engineering",
      bio: "Engineering mentor with 2 years of tutoring experience",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Seo-yeon Lee",
      university: "Yonsei University",
      major: "Business Administration",
      bio: "Can guide you through business school applications and interviews",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Jun-ho Choi",
      university: "Seoul National University",
      major: "Psychology",
      bio: "Helping students manage academic stress and university preparation",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Hae-won Kang",
      university: "Korea University",
      major: "Design",
      bio: "Guiding creative students through portfolio preparation",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Tae-young Jung",
      university: "Yonsei University",
      major: "Data Science",
      bio: "CSAT top scorer offering math and science preparation",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-4 border-b flex items-center">
        <div className="flex items-center">
          <Image src="/images/mindori-logo.png" alt="Mindori Logo" width={32} height={32} className="mr-2" />
          <h1 className="text-2xl font-bold text-blue-700">Find Mentors</h1>
        </div>
      </header>

      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search for university mentors..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-3 w-3" />
            University
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-3 w-3" />
            Major
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Filter className="h-3 w-3" />
            Interests
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="grid grid-cols-2 gap-4 p-4">
          {students.map((student) => (
            <Card key={student.id} className="overflow-hidden">
              <img src={student.image || "/placeholder.svg"} alt={student.name} className="w-full h-32 object-cover" />
              <CardContent className="p-3">
                <h3 className="font-semibold text-sm">{student.name}</h3>
                <p className="text-xs text-gray-600">{student.university}</p>
                <p className="text-xs text-gray-500">{student.major}</p>
                <p className="text-xs mt-1 line-clamp-2">{student.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <NavigationBar activeTab="profiles" />
    </div>
  )
}
