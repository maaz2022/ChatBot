import { chatbotPrompt } from "@/app/helpers/constants/chatbot-prompts"
import { ChatGPTMessage } from "@/lib/openai-stream"
import { MessageArraySchema } from "@/lib/validators/message"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const parsedMessages = MessageArraySchema.parse(messages)

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => {
    return {
      role: message.isUserMessage ? 'user' : 'system',
      content: message.text,
    }
  })

  outboundMessages.unshift({
    role: 'system',
    content: chatbotPrompt,
  })

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: outboundMessages,
    temperature: 0.4,
    top_p:1,
    frequency_penalty: 0,
    presence_penelty:0,
    max_tokens: 150,
    stream: true,
    n:1
  }
} 