/** Generates a simple unique ID without external dependencies */
export function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

/** Runtime type guard — checks for Web Streams API ReadableStream */
export function isReadableStream(value: unknown): value is ReadableStream {
  return (
    typeof ReadableStream !== "undefined" && value instanceof ReadableStream
  );
}