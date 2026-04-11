import { useMemo } from 'react'

export const useStreamDetection = (response: any) => {
  return useMemo(() => {
    // Check if response is a ReadableStream
    return response instanceof ReadableStream
  }, [response])
}