export const isReadableStream = (obj: unknown): obj is ReadableStream => {
  return obj instanceof ReadableStream
}
