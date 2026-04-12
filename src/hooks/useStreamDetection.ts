import { useMemo } from 'react'

export const useStreamDetection = (response: ReadableStream<Uint8Array>) => {
  return useMemo(() => {
    // Check if response is a ReadableStream
    return response instanceof ReadableStream
  }, [response])
}
