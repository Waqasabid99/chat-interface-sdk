// Mock handlers for development
export const mockStreamingHandler = async (message: string) => {
  // Simulate streaming response
  return new ReadableStream({
    start(controller) {
      controller.enqueue('Hello')
      setTimeout(() => controller.enqueue(' World'), 500)
      setTimeout(() => controller.close(), 1000)
    }
  })
}

export const mockNonStreamingHandler = async (message: string) => {
  return `Response to: ${message}`
}