# Chat Interface SDK

A complete plug-and-play chat interface that you can add to your project and have a customizable AI Chat Interface.

## Installation

```bash
npm install chat-interface-sdk
```

## Usage

```tsx
import { ChatWidget } from 'chat-interface-sdk'

function App() {
  return (
    <div>
      <ChatWidget
        apiEndpoint="/api/chat"
        theme="light"
      />
    </div>
  )
}
```

## Development

```bash
npm install
npm run dev  # Start dev server
npm run build  # Build for production
npm run test  # Run tests
```

## Project Structure

- `src/` - Source code
- `dev/` - Development sandbox
- `tests/` - Unit and integration tests
- `.github/` - GitHub workflows

## License

MIT 
