'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { HomeScreen } from "@/components/home-screen"

export default function HomePage() {
  const [userName, setUserName] = useState("")
  const router = useRouter()

  useEffect(() => {
    const name = localStorage.getItem("userName")
    if (!name) {
      router.push("/")
      return
    }
    setUserName(name)
  }, [router])

  if (!userName) {
    return null // or a loading spinner
  }

  return <HomeScreen />
} 