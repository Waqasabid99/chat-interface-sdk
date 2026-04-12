# ai-chat-interface

> Zero-config AI chat widget for React. Drop in `<ChatWidget />`, pass your message handler, get a fully functional streaming chat — themed, accessible, and ready for production.

[![npm version](https://img.shields.io/npm/v/ai-chat-interface?style=flat-square)](https://www.npmjs.com/package/ai-chat-interface)
[![bundle size](https://img.shields.io/bundlephobia/minzip/ai-chat-interface?style=flat-square)](https://bundlephobia.com/package/ai-chat-interface)
[![license](https://img.shields.io/npm/l/ai-chat-interface?style=flat-square)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [ChatWidget Props](#chatwidget-props)
- [Streaming](#streaming)
- [useChat Hook](#usechat-hook)
- [Hooks Reference](#hooks-reference)
- [Types](#types)
- [Help Articles](#help-articles)
- [Theming & Customization](#theming--customization)
- [Controlled Mode](#controlled-mode)
- [Accessibility](#accessibility)
- [Contributing / Development](#contributing--development)
- [License](#license)

---

## Features

- 🚀 **Plug-and-play** — one component, one required prop
- 🌊 **First-class streaming** — natively handles `ReadableStream` responses (SSE / NDJSON)
- 🎨 **Themeable** — `light`, `dark`, or `auto` (follows OS preference), with a single `primaryColor` accent
- 🏠 **Multi-view widget** — Home screen, Chat panel, Help centre, and Article view built-in
- 🔍 **Help articles** — searchable knowledge-base with client-side filtering
- ♿ **Accessible** — focus trap, `Escape` to close, full ARIA support
- 📦 **Tiny footprint** — `<25 KB` ESM (widget), `<12 KB` (hook only), tree-shakeable
- 🔒 **TypeScript-first** — full type declarations included
- ⚛️ **React 18+** — concurrent-mode safe

---

## Installation

```bash
npm install ai-chat-interface
# or
yarn add ai-chat-interface
# or
pnpm add ai-chat-interface
```

**Peer dependencies** (install if not already present):

```bash
npm install react react-dom
```

> Requires **React ≥ 18** and **Node ≥ 18**.

---

## Quick Start

### Import the widget

```tsx
import { ChatWidget } from 'ai-chat-interface'

function App() {
  const handleMessage = async (message: string) => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    })
    return res.body! // Return a ReadableStream for streaming, or a string for one-shot responses
  }

  return <ChatWidget onMessage={handleMessage} />
}
```

That's it. The floating trigger button will appear in the bottom-right corner of your page.

---

## ChatWidget Props

`<ChatWidget />` is the top-level component. All props except `onMessage` are optional.

### Required

| Prop        | Type                | Description                                                                                              |
| ----------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| `onMessage` | `OnMessageHandler`  | Called for every user message. Must return a `Promise<string \| ReadableStream>`. See [Streaming](#streaming). |

### Identity & Branding

| Prop          | Type                        | Default           | Description                                                    |
| ------------- | --------------------------- | ----------------- | -------------------------------------------------------------- |
| `agentName`   | `string`                    | `"AI Assistant"`  | Display name shown in the header and recent-message card.      |
| `agentAvatar` | `string \| React.ReactNode` | —                 | Agent avatar. URL string renders an `<img>`; ReactNode is used as-is. Falls back to initials. |
| `logo`        | `string \| React.ReactNode` | —                 | Brand logo shown in the widget header and home screen.         |
| `primaryColor`| `string`                    | `"#2563EB"`       | Hex accent color applied to buttons, indicators, and links.    |

### Content

| Prop               | Type     | Default                            | Description                                                                         |
| ------------------ | -------- | ---------------------------------- | ----------------------------------------------------------------------------------- |
| `welcomeMessage`   | `string` | `"Need support?\nHow can we help?"` | Large heading on the home screen. Use `\n` for line breaks. Also prepended as the first assistant message in the chat. |
| `welcomeSubMessage`| `string` | —                                  | Smaller sub-heading on the home screen. Supports `\n` line breaks.                  |
| `placeholder`      | `string` | `"Type a message…"`                | Input field placeholder text.                                                       |
| `recentMessage`    | `string` | —                                  | Preview text of the agent's most recent message (shown on the home screen card).    |
| `recentMessageTime`| `string` | —                                  | Human-readable time label, e.g. `"1m"`, `"Just now"`.                              |
| `statusText`       | `string` | —                                  | Status line shown on the home screen, e.g. `"All Systems Operational"`.             |
| `statusUpdated`    | `string` | —                                  | Last-updated label, e.g. `"Updated Apr 12, 08:14 UTC"`.                             |

### Help Articles

| Prop              | Type            | Default | Description                                                                          |
| ----------------- | --------------- | ------- | ------------------------------------------------------------------------------------ |
| `helpArticles`    | `HelpArticle[]` | —       | Array of help article objects. See [Help Articles](#help-articles).                  |
| `showHelpArticles`| `boolean`       | `false` | When `true` and `helpArticles` is non-empty, renders the search section and Help tab.|

### Layout & Behaviour

| Prop          | Type                        | Default          | Description                                                              |
| ------------- | --------------------------- | ---------------- | ------------------------------------------------------------------------ |
| `theme`       | `'light' \| 'dark' \| 'auto'` | `"auto"`         | Color mode. `"auto"` respects the user's OS preference and updates live. |
| `defaultView` | `'home' \| 'chat'`          | `"home"`         | Which panel is shown when the widget opens.                              |
| `position`    | `'bottom-right' \| 'bottom-left'` | `"bottom-right"` | Anchor position of the floating widget.                        |
| `isOpen`      | `boolean`                   | —                | External open state (enables **controlled mode**).                       |
| `onOpenChange`| `(open: boolean) => void`   | —                | Called whenever open state changes. Use with `isOpen`.                   |
| `className`   | `string`                    | —                | Extra CSS class added to the root container.                             |
| `style`       | `React.CSSProperties`       | —                | Inline style override for the root container.                            |

---

## Streaming

The `onMessage` callback receives the current user message and conversation history, and must return either:

- A **`string`** — the assistant's full reply (non-streaming)
- A **`ReadableStream`** — the widget handles SSE / NDJSON chunked text automatically (streaming)

### Non-streaming example

```tsx
const handleMessage = async (message: string) => {
  const res = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message }),
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await res.json()
  return data.reply // string
}
```

### Streaming example (OpenAI-compatible)

```tsx
const handleMessage = async (message: string) => {
  const res = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message, stream: true }),
    headers: { 'Content-Type': 'application/json' },
  })

  if (!res.ok) throw new Error(`API error ${res.status}`)
  return res.body! // ReadableStream — the widget renders tokens as they arrive
}
```

### Using conversation history

The `onMessage` handler also receives the full message history, enabling multi-turn conversations:

```tsx
import type { Message } from 'ai-chat-interface'

const handleMessage = async (message: string, history: Message[]) => {
  const messages = [
    ...history.map(m => ({ role: m.role, content: m.content })),
    { role: 'user', content: message },
  ]

  const res = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ messages, stream: true }),
    headers: { 'Content-Type': 'application/json' },
  })

  return res.body!
}
```

---

## useChat Hook

For building fully custom chat UIs, you can use the `useChat` hook directly — without any of the widget UI.

```tsx
import { useChat } from 'ai-chat-interface'

function MyChatUI() {
  const { messages, sendMessage, isLoading, error, clearMessages, retryLast } =
    useChat({
      onMessage: async (msg) => {
        const res = await fetch('/api/chat', {
          method: 'POST',
          body: JSON.stringify({ message: msg }),
          headers: { 'Content-Type': 'application/json' },
        })
        return res.body!
      },
      welcomeMessage: 'Hello! How can I help you today?',
    })

  return (
    <div>
      {messages.map(m => (
        <p key={m.id}><strong>{m.role}:</strong> {m.content}</p>
      ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={() => sendMessage('Hello')}>Send</button>
      <button onClick={retryLast} disabled={isLoading}>Retry</button>
      <button onClick={clearMessages}>Clear</button>
    </div>
  )
}
```

### `useChat` return values

| Value           | Type                          | Description                                                                              |
| --------------- | ----------------------------- | ---------------------------------------------------------------------------------------- |
| `messages`      | `Message[]`                   | Current message history, including streaming placeholders.                               |
| `sendMessage`   | `(text: string) => Promise<void>` | Sends a user message. No-ops if `isLoading` is `true` or `text` is empty.           |
| `isLoading`     | `boolean`                     | `true` while waiting for or streaming a response.                                        |
| `error`         | `string \| null`              | Last error message, or `null` if none.                                                   |
| `clearMessages` | `() => void`                  | Resets the conversation to its initial state (preserving `welcomeMessage` if set).       |
| `retryLast`     | `() => Promise<void>`         | Strips the last assistant message (e.g. an error bubble) and re-sends the last user message. |

---

## Hooks Reference

Additional hooks exported for advanced use cases:

### `useTheme(theme)`

Resolves the effective theme string and reactively updates when `"auto"` is used.

```tsx
import { useTheme } from 'ai-chat-interface'

const resolved = useTheme('auto') // 'light' | 'dark'
```

### `useScrollAnchor()`

Returns a `ref` that keeps a scroll container pinned to the bottom as new content arrives.

### `useStreamDetection(messages)`

Returns `true` when a message is currently streaming (its status is `'streaming'`).

### `useFocusTrap(ref, active)`

Traps keyboard focus within `ref` when `active` is `true`. Used internally by `ChatPanel`.

---

## Types

All types are exported from the package root:

```tsx
import type {
  Message,
  OnMessageHandler,
  UseChatOptions,
  UseChatReturn,
  Role,
  Status,
  ChatConfig,
} from 'ai-chat-interface'
```

### `Message`

```ts
interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  status?: 'loading' | 'streaming' | 'done' | 'error'
}
```

### `OnMessageHandler`

```ts
type OnMessageHandler = (
  message: string,
  history: Message[]
) => Promise<string | ReadableStream>
```

### `HelpArticle`

```ts
interface HelpArticle {
  /** Article title displayed as a clickable link */
  title: string
  /** Optional external URL — opens in a new tab when provided */
  href?: string
  /** Short description shown in the article card */
  description?: React.ReactNode | string
  /** Full article body content */
  content?: React.ReactNode | string
  /** Human-readable last-updated label, e.g. "Apr 12, 2026" */
  updatedAt?: string
}
```

---

## Help Articles

Pass an array of `HelpArticle` objects to enable the built-in knowledge base:

```tsx
const articles = [
  {
    title: 'Getting started',
    description: 'A quick overview of the platform.',
    content: 'Full article content here…',
    updatedAt: 'Apr 12, 2026',
  },
  {
    title: 'Billing FAQ',
    href: 'https://docs.example.com/billing', // opens in new tab
    description: 'Answers to common billing questions.',
  },
]

<ChatWidget
  onMessage={handleMessage}
  helpArticles={articles}
  showHelpArticles={true}
/>
```

- Articles **without** an `href` open inline in the widget's Article view.
- Articles **with** an `href` open in a new browser tab.
- The home screen includes a **live client-side search** input that filters articles by title.

---

## Theming & Customization

### Theme

```tsx
<ChatWidget theme="dark" onMessage={handleMessage} />
// or let it follow the OS:
<ChatWidget theme="auto" onMessage={handleMessage} />
```

### Primary color

```tsx
<ChatWidget primaryColor="#7c3aed" onMessage={handleMessage} />
```

Any valid CSS hex color works. The color is applied via CSS custom properties so the widget always respects the chosen accent without injecting global styles.

### CSS custom properties

The widget exposes these CSS variables on its root element, which you can override from your own styles if needed:

| Variable                    | Default       | Description                   |
| --------------------------- | ------------- | ----------------------------- |
| `--aiw-primary`             | `#2563EB`     | Main accent color             |
| `--aiw-primary-hover`       | derived       | Hover state of primary color  |
| `--aiw-radius`              | `1rem`        | Border radius                 |
| `--aiw-font`                | system stack  | Widget font family            |

---

## Controlled Mode

By default the widget manages its own open/closed state. To drive it externally:

```tsx
import { useState } from 'react'
import { ChatWidget } from 'ai-chat-interface'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open chat</button>
      <ChatWidget
        onMessage={handleMessage}
        isOpen={open}
        onOpenChange={setOpen}
      />
    </>
  )
}
```

---

## Accessibility

- Full **keyboard navigation** — `Tab`, `Shift+Tab`, `Enter`, `Space`
- **`Escape`** closes the widget from any view
- **Focus trap** keeps focus inside the open panel
- Focus returns to the trigger button when the widget closes
- ARIA roles: `dialog`, `aria-modal`, `aria-labelledby`, `aria-label` on all interactive elements
- All SVG icons are `aria-hidden` with a text alternative on their parents

---

## Contributing / Development

```bash
# 1. Clone and install dependencies
git clone https://github.com/Waqasabid99/chat-interface-sdk.git
cd chat-interface-sdk
npm install

# 2. Start the dev sandbox (hot-reload)
npm run dev

# 3. Run all tests
npm test

# 4. Run tests in watch mode
npm run test:watch

# 5. Check types
npm run type-check

# 6. Lint
npm run lint

# 7. Format code
npm run format

# 8. Build the library
npm run build

# 9. Check bundle size
npm run size
```

## License

[MIT](./LICENSE) © Waqas Ali Abid
