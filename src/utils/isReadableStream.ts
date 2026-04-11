export const isReadableStream = (obj: any): obj is ReadableStream => {
  return obj instanceof ReadableStream
}