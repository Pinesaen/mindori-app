import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { NavigationBar } from "@/components/navigation-bar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, Edit, BookOpen, Award, Calendar, School } from "lucide-react"
import Image from "next/image"

export default function ProfilesPage() {
  const userProfile = {
    name: "Ji-Woo Park",
    email: "jiwoo.park@example.com",
    avatar: "/images/Student.jpg",
    school: "Seoul International High School",
    schoolLogo: "/images/school-logo.png",
    grade: "12th Grade",
    subscription: {
      plan: "Premium",
      status: "Active",
      nextBilling: "2024-05-15",
      sessionsLeft: 8,
    },
    interests: ["Mathematics", "Physics", "Computer Science"],
    achievements: ["CSAT Mock Test Top 5%", "National Math Olympiad Bronze"],
    upcomingSessions: [
      {
        id: 1,
        mentor: "Min-Ji Kim",
        mentorAvatar: "/images/Mentor1.jpg",
        subject: "Mathematics",
        date: "2024-04-20",
        time: "3:00 PM",
      },
      {
        id: 2,
        mentor: "Soo-Min Lee",
        mentorAvatar: "/images/Mentor2.jpg",
        subject: "English",
        date: "2024-04-22",
        time: "4:30 PM",
      },
    ],
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="p-4 bg-white border-b">
        <h1 className="text-2xl font-bold text-blue-700">My Profile</h1>
      </header>

      <main className="flex-1 p-4 space-y-4 overflow-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={userProfile.avatar} />
                  <AvatarFallback>{userProfile.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
                  <Image
                    src={userProfile.schoolLogo}
                    alt={`${userProfile.school} logo`}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{userProfile.name}</h2>
                <p className="text-gray-500">{userProfile.email}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <School className="h-4 w-4" />
                  <span>{userProfile.school} • {userProfile.grade}</span>
                </div>
              </div>
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold">Subscription</h3>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs ${
              userProfile.subscription.status === "Active" 
                ? "bg-green-100 text-green-700" 
                : "bg-red-100 text-red-700"
            }`}>
              {userProfile.subscription.status}
            </span>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Plan</span>
                <span className="text-sm font-medium">{userProfile.subscription.plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Next Billing</span>
                <span className="text-sm">{userProfile.subscription.nextBilling}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Sessions Left</span>
                <span className="text-sm font-medium">{userProfile.subscription.sessionsLeft}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-2">
            <Award className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold">Academic Interests</h3>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {userProfile.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <h3 className="font-semibold">Upcoming Sessions</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userProfile.upcomingSessions.map((session) => (
                <div key={session.id} className="flex items-center space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={session.mentorAvatar} />
                    <AvatarFallback>{session.mentor.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{session.mentor}</p>
                    <p className="text-sm text-gray-500">{session.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">{session.date}</p>
                    <p className="text-sm text-gray-500">{session.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full flex items-center space-x-2">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </Button>
      </main>

      <NavigationBar activeTab="profiles" />
    </div>
  )
}
