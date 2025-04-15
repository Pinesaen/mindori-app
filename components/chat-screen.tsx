"use client"

import type React from "react"

import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NavigationBar } from "@/components/navigation-bar"
import { Send, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface ChatScreenProps {
  userId: string
}

export function ChatScreen({ userId }: ChatScreenProps) {
  const router = useRouter()
  const [message, setMessage] = useState("")

  // Mock chat data
  const chatPartner = {
    id: userId,
    name: "Min-jun Kim",
    university: "Seoul National University",
    image: "/placeholder.svg?height=200&width=200",
  }

  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Hi there! I'm Min-jun, a Computer Science student at SNU. I'd be happy to help with your university preparation.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Thanks for accepting my request! I'm really interested in Computer Science but nervous about the CSAT.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "them",
      text: "Don't worry, that's completely normal. I was in your position just 3 years ago. What specific areas are you struggling with?",
      time: "10:35 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "Mostly the math section and I'm not sure how to prepare for the CS department interview if I get that far.",
      time: "10:36 AM",
    },
    {
      id: 5,
      sender: "them",
      text: "I can definitely help with both! Let's start with a study plan for the math section, and then we can do some mock interviews closer to application time.",
      time: "10:38 AM",
    },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-4 border-b flex items-center">
        <Button variant="ghost" size="icon" className="mr-2" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={chatPartner.image || "/placeholder.svg"} alt={chatPartner.name} />
          <AvatarFallback className="bg-blue-100 text-blue-700">
            {chatPartner.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div>
          <h1 className="font-semibold">{chatPartner.name}</h1>
          <p className="text-xs text-gray-500">{chatPartner.university}</p>
        </div>
      </header>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  msg.sender === "me"
                    ? "bg-blue-700 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
              >
                <p>{msg.text}</p>
                <span
                  className={`text-xs block text-right mt-1 ${msg.sender === "me" ? "text-blue-100" : "text-gray-500"}`}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon" className="bg-blue-700 hover:bg-blue-800">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <NavigationBar activeTab="chat" />
    </div>
  )
}
