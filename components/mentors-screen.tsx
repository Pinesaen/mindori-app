"use client"

import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { NavigationBar } from "@/components/navigation-bar"
import { MessageSquare, Filter } from "lucide-react"
import Image from "next/image"

export function MentorsScreen() {
  const [showFilters, setShowFilters] = useState(false)

  // Mock recommended mentors
  const recommendedProfiles = [
    {
      id: 1,
      name: "Min-ji Kim",
      university: "Seoul National University",
      major: "Pre-Med",
      bio: "SNU medical student helping high schoolers prepare for medical school entrance",
      interests: ["CSAT Prep", "Medical School", "Interview Tips"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Joon-ho Park",
      university: "Korea University",
      major: "Engineering",
      bio: "Engineering student offering guidance on university applications and CSAT preparation",
      interests: ["Math Tutoring", "Engineering", "Application Essays"],
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Yuna Choi",
      university: "Yonsei University",
      major: "International Studies",
      bio: "Helping students interested in global studies and language programs",
      interests: ["Language Exams", "Study Abroad", "Scholarship Applications"],
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/mindori-logo.png" alt="Mindori Logo" width={32} height={32} className="mr-2" />
          <h1 className="text-2xl font-bold text-blue-700">Find Mentors</h1>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-1"
        >
          <Filter className="h-4 w-4" />
          Preferences
        </Button>
      </header>

      {showFilters && (
        <div className="p-4 border-b">
          <h2 className="font-semibold mb-2">Mentor Preferences</h2>

          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium mb-1">University</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="snu" />
                  <Label htmlFor="snu" className="text-sm">
                    Seoul National
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="korea" />
                  <Label htmlFor="korea" className="text-sm">
                    Korea University
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="yonsei" />
                  <Label htmlFor="yonsei" className="text-sm">
                    Yonsei
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="kaist" />
                  <Label htmlFor="kaist" className="text-sm">
                    KAIST
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Interests</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="csat" />
                  <Label htmlFor="csat" className="text-sm">
                    CSAT Prep
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="interview" />
                  <Label htmlFor="interview" className="text-sm">
                    Interview Prep
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="essay" />
                  <Label htmlFor="essay" className="text-sm">
                    Essay Writing
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="portfolio" />
                  <Label htmlFor="portfolio" className="text-sm">
                    Portfolio
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <h2 className="text-lg font-semibold">Recommended Mentors</h2>

          {recommendedProfiles.map((profile) => (
            <Card key={profile.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={profile.image || "/placeholder.svg"}
                  alt={profile.name}
                  className="w-full h-48 object-cover"
                />
              </div>

              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{profile.name}</h3>
                    <p className="text-sm text-gray-600">{profile.university}</p>
                    <p className="text-sm text-gray-500">{profile.major}</p>
                  </div>

                  <Button className="bg-blue-700 hover:bg-blue-800">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Request Mentorship
                  </Button>
                </div>

                <p className="text-sm mt-2">{profile.bio}</p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {profile.interests.map((interest, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <NavigationBar activeTab="mentors" />
    </div>
  )
}
