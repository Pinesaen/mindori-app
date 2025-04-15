import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { NavigationBar } from "@/components/navigation-bar"
import Image from "next/image"

export function HomeScreen() {
  // Mock news data
  const newsItems = [
    {
      id: 1,
      title: "SKY University Application Deadlines Approaching",
      description: "Seoul National, Korea, and Yonsei Universities application deadlines are next month...",
      image: "/placeholder.svg?height=300&width=500",
      author: "Admissions Guide",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "How to Prepare for CSAT (수능) Effectively",
      description: "Top mentors share their strategies for acing the College Scholastic Ability Test...",
      image: "/placeholder.svg?height=300&width=500",
      author: "Study Tips",
      time: "Yesterday",
    },
    {
      id: 3,
      title: "Mentorship Success Stories",
      description: "How last year's mentees got accepted into their dream universities...",
      image: "/placeholder.svg?height=300&width=500",
      author: "Success Stories",
      time: "2 days ago",
    },
    {
      id: 4,
      title: "Virtual University Campus Tours Available",
      description: "Explore top Korean universities from home with our virtual tour guides...",
      image: "/placeholder.svg?height=300&width=500",
      author: "University Preview",
      time: "3 days ago",
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-4 border-b flex items-center">
        <div className="flex items-center">
          <Image src="/images/mindori-logo.png" alt="Mindori Logo" width={32} height={32} className="mr-2" />
          <h1 className="text-2xl font-bold text-blue-700">Mindori Mentor</h1>
        </div>
      </header>

      <ScrollArea className="flex-1 px-4">
        <div className="py-4">
          <h2 className="text-lg font-semibold mb-4">University Preparation News</h2>
          <div className="space-y-4">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                        {item.author.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{item.author}</span>
                    <span className="text-xs text-gray-400 ml-auto">{item.time}</span>
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollArea>

      <NavigationBar activeTab="home" />
    </div>
  )
}
