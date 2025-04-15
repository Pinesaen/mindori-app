"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NavigationBar } from "@/components/navigation-bar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { use } from "react"

export default function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  const mentor = {
    id: id,
    name: "Min-Ji Kim",
    year: "3rd Year",
    university: "Seoul National University",
    major: "Computer Science",
    avatar: "/images/Mentor1.jpg",
    universityLogo: "/images/snu-logo.png",
  }

  const timeSlots = [
    { id: 1, time: "9:00 AM", available: true },
    { id: 2, time: "10:00 AM", available: true },
    { id: 3, time: "11:00 AM", available: false },
    { id: 4, time: "1:00 PM", available: true },
    { id: 5, time: "2:00 PM", available: true },
    { id: 6, time: "3:00 PM", available: false },
    { id: 7, time: "4:00 PM", available: true },
    { id: 8, time: "5:00 PM", available: true },
  ]

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="p-4 bg-white border-b">
        <div className="flex items-center space-x-4">
          <Link href="/mentors">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={mentor.avatar} />
                <AvatarFallback>{mentor.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                <Image
                  src={mentor.universityLogo}
                  alt={`${mentor.university} logo`}
                  width={16}
                  height={16}
                  className="rounded-full"
                />
              </div>
            </div>
            <div>
              <h2 className="font-semibold">Book Session with {mentor.name}</h2>
              <p className="text-sm text-gray-500">{mentor.year} • {mentor.major}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-4 overflow-auto">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">Available Time Slots</h3>
            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((slot) => (
                <Button
                  key={slot.id}
                  variant={slot.available ? "default" : "outline"}
                  className="w-full"
                  disabled={!slot.available}
                >
                  {slot.time}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">Session Details</h3>
            <p className="text-sm text-gray-600">
              Duration: 1 hour
              <br />
              Location: Online (Zoom)
              <br />
              Price: Included in your subscription
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="p-4 bg-white border-t">
        <Button className="w-full">Confirm Booking</Button>
      </footer>

      <NavigationBar activeTab="chat" />
    </div>
  )
} 