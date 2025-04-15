interface MentorProfile {
  name: string
  university: string
  major: string
  year: string
  subjects: string[]
}

const mentorProfiles: Record<string, MentorProfile> = {
  "1": {
    name: "Min-Ji Kim",
    university: "Seoul National University",
    major: "Computer Science",
    year: "3rd Year",
    subjects: ["Mathematics", "Computer Science", "Physics"]
  },
  "2": {
    name: "Soo-Min Lee",
    university: "Yonsei University",
    major: "English Literature",
    year: "2nd Year",
    subjects: ["English", "Literature", "History"]
  },
  "3": {
    name: "Min-Seok Kim",
    university: "KAIST",
    major: "Computer Science",
    year: "4th Year",
    subjects: ["Computer Science", "Mathematics", "Engineering"]
  }
}

export function generateAIResponse(mentorId: string, message: string): string {
  const mentor = mentorProfiles[mentorId]
  if (!mentor) return "I'm sorry, I don't have information about this mentor."

  // Simple response patterns based on message content
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return `Hello! I'm ${mentor.name}, a ${mentor.year} ${mentor.major} student at ${mentor.university}. How can I help you today?`
  }
  
  if (lowerMessage.includes("help") || lowerMessage.includes("advice")) {
    return `I'd be happy to help! As a ${mentor.major} student, I can provide guidance on ${mentor.subjects.join(", ")}. What specific topic would you like to discuss?`
  }
  
  if (lowerMessage.includes("university") || lowerMessage.includes("college")) {
    return `I'm currently studying at ${mentor.university}. It's a great place to learn and grow. Would you like to know more about the university or the application process?`
  }
  
  if (lowerMessage.includes("subject") || lowerMessage.includes("course")) {
    return `I specialize in ${mentor.subjects.join(", ")}. I can help you with study strategies, course selection, or specific topics in these areas. What would you like to know?`
  }
  
  if (lowerMessage.includes("thank")) {
    return "You're welcome! Feel free to ask me anything else about university life, academics, or your studies."
  }
  
  // Default response
  return `I understand you're asking about "${message}". As a ${mentor.major} student, I can help you with topics related to ${mentor.subjects.join(", ")}. Could you be more specific about what you'd like to know?`
} 