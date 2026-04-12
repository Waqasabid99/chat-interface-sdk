# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/) and the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.

---

## [Unreleased]

> Changes staged for the next release will appear here.

---

## [1.0.1] — 2026-04-12

### Added

- **`WidgetArticle` view** — inline article reading experience inside the widget; articles without an `href` now open in a dedicated panel instead of navigating the user away.
- **`WidgetHelp` view** — dedicated full-screen help article list accessible via the Help tab in the bottom navigation.
- **`WidgetHome`** — complete home/landing screen with:
  - Dark header with configurable `welcomeMessage` and `welcomeSubMessage`.
  - Optional **Recent message card** (`recentMessage`, `recentMessageTime`).
  - Optional **Status card** (`statusText`, `statusUpdated`).
  - Searchable **Help articles section** with client-side live filtering.
  - Bottom navigation bar (Home · Messages · Help).
- **`showHelpArticles` prop** on `ChatWidget` — opt-in toggle to render the help section and Help tab.
- **`helpArticles` prop** on `ChatWidget` — accepts an array of `HelpArticle` objects (`title`, `href?`, `description?`, `content?`, `updatedAt?`).
- **`welcomeSubMessage` prop** on `ChatWidget` — second line of the home screen heading.
- **`recentMessage` / `recentMessageTime` props** — populate the recent message preview card on the home screen.
- **`statusText` / `statusUpdated` props** — populate the system status card on the home screen.
- **`defaultView` prop** — choose whether the widget opens on the `"home"` or `"chat"` view.
- **`logo` prop** — brand logo (URL string or ReactNode) shown in both the home header and chat header.
- **`position` prop** — `"bottom-right"` (default) or `"bottom-left"` anchor for the floating widget.
- **`useFocusTrap` hook** — exported hook that traps keyboard focus within a container element.
- **`useStreamDetection` hook** — exported hook that returns `true` while any message has `status: 'streaming'`.
- Multi-view routing logic inside `ChatWidget` (`home | chat | help | article`) with smooth animated transitions.
- SSR safety guard — widget renders `null` until mounted on the client.
- `Escape` key closes the widget from any view.
- ARIA `dialog` / `aria-modal` / `aria-labelledby` wiring across all views.

### Changed

- `ChatWidget` now defaults to the **home view** (`defaultView="home"`) rather than opening directly into chat.
- `InputBar` redesigned to a modern icon-based floating bar.
- `ChatHeader` updated to show the logo alongside the agent name and back/close buttons.
- Build output now ships both **ESM** (`index.mjs`) and **CJS** (`index.cjs`) bundles plus a rolled-up `index.d.ts`.
- CSS is injected at import time via `vite-plugin-lib-inject-css`; consumers no longer need a separate CSS import step for advanced setups (though the named export `ai-chat-interface/style.css` is still recommended for tree-shaking).

### Fixed

- Focus was not returned to the trigger button after closing the chat panel — resolved with a `useEffect` on `isOpen`.
- View timer refs were not cleaned up on unmount, causing potential state updates on unmounted components.
- Stream reader lock was not released when an error occurred mid-stream — `finally { reader.releaseLock() }` added.

---

## [1.0.0] — 2026-04-01

### Added

- **`ChatWidget`** — floating chat widget component with trigger button, expandable panel, and full theming support.
- **`ChatPanel`** — main conversation panel with open/close slide animation.
- **`ChatHeader`** — panel header with agent name, avatar, clear, and close controls.
- **`MessageList`** — virtualization-friendly scrollable message list with auto-scroll-to-bottom anchor.
- **`MessageBubble`** — individual message bubble for `user` and `assistant` roles with status indicators.
- **`TypingIndicator`** — animated three-dot loading indicator shown while the assistant is responding.
- **`InputBar`** — textarea-based input with send button and `Shift+Enter` for newlines.
- **`TriggerButton`** — floating button that toggles the widget; shows logo or default chat icon.
- **`useChat` hook** — core state manager handling:
  - Sending user messages and maintaining conversation history.
  - Both **streaming** (`ReadableStream`) and **non-streaming** (`string`) response modes.
  - SSE / NDJSON chunk parsing (supports `data:` prefix and raw JSON formats).
  - `welcomeMessage` prepended as the first assistant message.
  - `retryLast()` — remove the last error bubble and re-send the previous message.
  - `clearMessages()` — reset conversation while preserving the welcome message.
  - `error` state surfaced as a string for UI rendering.
- **`useTheme` hook** — resolves `'light' | 'dark' | 'auto'` to an effective theme; listens to `prefers-color-scheme` changes live.
- **`useScrollAnchor` hook** — keeps the message list pinned to the latest message.
- **`AIInterfaceProvider` context** — optional context provider for sharing config across deeply nested components.
- **`OnMessageHandler` type** — `(message: string, history: Message[]) => Promise<string | ReadableStream>`.
- **Controlled mode** — `isOpen` + `onOpenChange` props for external state management.
- **`primaryColor` customization** — any hex value is applied via CSS custom properties without global style pollution.
- Dual module output: ESM + CJS with full TypeScript declarations.
- Size-limit enforcement: `<25 KB` for the full widget, `<12 KB` for the hook alone.
- Vitest-based unit and integration test suite with accessibility (`jest-axe`) checks.
- ESLint (strict TypeScript + React Hooks rules) and Prettier formatting enforced in CI.

---

[Unreleased]: https://github.com/Waqasabid99/chat-interface-sdk/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/Waqasabid99/chat-interface-sdk/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/Waqasabid99/chat-interface-sdk/releases/tag/v1.0.0