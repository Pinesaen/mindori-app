import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { NavigationBar } from "@/components/navigation-bar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, Calendar, MessageSquare, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MentorsPage() {
  const mentors = [
    {
      id: 1,
      name: "Min-Ji Kim",
      year: "3rd Year",
      university: "Seoul National University",
      major: "Computer Science",
      rating: 4.9,
      reviews: 128,
      subjects: ["Mathematics", "Physics", "CSAT Math"],
      availability: "Mon-Fri, 2PM-8PM",
      avatar: "/images/Mentor1.jpg",
      achievements: ["CSAT Math Perfect Score", "National Math Olympiad Gold"],
      universityLogo: "/images/snu-logo.png",
    },
    {
      id: 2,
      name: "Soo-Min Lee",
      year: "2nd Year",
      university: "Yonsei University",
      major: "English Literature",
      rating: 4.8,
      reviews: 95,
      subjects: ["English", "Literature", "Writing"],
      availability: "Tue-Sat, 3PM-9PM",
      avatar: "/images/Mentor2.jpg",
      achievements: ["CSAT English Perfect Score", "National English Essay Contest Winner"],
      universityLogo: "/images/yonsei-logo.png",
    },
    {
      id: 3,
      name: "Min-Seok Kim",
      year: "4th Year",
      university: "Korea University",
      major: "Computer Science",
      rating: 4.9,
      reviews: 156,
      subjects: ["Computer Science", "Programming", "Algorithms"],
      availability: "Mon-Thu, 4PM-10PM",
      avatar: "/images/Mentor3.jpg",
      achievements: ["CSAT Perfect Score", "International Programming Contest Finalist"],
      universityLogo: "/images/korea-logo.png",
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="p-4 bg-white border-b">
        <h1 className="text-2xl font-bold text-blue-700">Available Mentors</h1>
      </header>

      <main className="flex-1 p-4 space-y-4 overflow-auto">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={mentor.avatar} />
                    <AvatarFallback>{mentor.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                    <Image
                      src={mentor.universityLogo}
                      alt={`${mentor.university} logo`}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold">{mentor.name}</h2>
                      <p className="text-sm text-gray-600">{mentor.year} • {mentor.major}</p>
                      <p className="text-sm text-gray-500">{mentor.university}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{mentor.rating}</span>
                      <span className="text-sm text-gray-500">({mentor.reviews})</span>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {mentor.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2">
                    <h3 className="text-sm font-medium text-gray-600">Achievements:</h3>
                    <ul className="mt-1 space-y-1">
                      {mentor.achievements.map((achievement) => (
                        <li key={achievement} className="text-xs text-gray-500 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3 flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{mentor.availability}</span>
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Link href={`/chat/${mentor.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Message
                      </Button>
                    </Link>
                    <Link href={`/book/${mentor.id}`} className="flex-1">
                      <Button className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Book Session
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>

      <NavigationBar activeTab="mentors" />
    </div>
  )
}
