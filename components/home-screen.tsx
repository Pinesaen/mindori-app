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
      title: "Seoul National University Open Day 2024",
      description: "Join us for SNU's annual open day on May 15th. Experience campus life, meet professors, and explore academic programs...",
      image: "/images/snu-campus.jpg",
      author: "SNU Admissions",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Yonsei University Global Leadership Program",
      description: "Applications now open for Yonsei's prestigious international exchange program. Deadline: June 30th...",
      image: "/images/yonsei-campus.jpg",
      author: "Yonsei Global",
      time: "Yesterday",
    },
    {
      id: 3,
      title: "KAIST Research Opportunities for High School Students",
      description: "Summer research internship program accepting applications. Work with top scientists in cutting-edge labs...",
      image: "/images/kaist-campus.jpg",
      author: "KAIST Research",
      time: "2 days ago",
    },
    {
      id: 4,
      title: "Korea University International Student Guide",
      description: "New comprehensive guide for international applicants. Includes scholarship information and application tips...",
      image: "/images/korea-campus.jpg",
      author: "KU International",
      time: "3 days ago",
    },
    {
      id: 5,
      title: "CSAT Preparation Workshop Series",
      description: "Free online workshops by top university mentors. Covering all subjects with practice tests and study strategies...",
      image: "/images/study-session.jpg",
      author: "Study Support",
      time: "4 days ago",
    },
    {
      id: 6,
      title: "University Application Timeline 2024",
      description: "Complete month-by-month guide for university applications. Important deadlines and checklist included...",
      image: "/images/application-guide.jpg",
      author: "Admissions Guide",
      time: "5 days ago",
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
