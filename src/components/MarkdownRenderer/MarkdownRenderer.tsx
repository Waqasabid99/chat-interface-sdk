'use client'

import { useState, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '../../utils/cn'
import styles from './MarkdownRenderer.module.css'

interface MarkdownRendererProps {
  content: string
  className?: string
  isStreaming?: boolean
}

const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
)

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

/**
 * Custom CodeBlock component with a Copy button.
 * Handles both inline code and fenced code blocks.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodeBlock = ({ inline, className, children, ...props }: any) => {
  const [copied, setCopied] = useState(false)
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''

  const handleCopy = useCallback(() => {
    const text = String(children).replace(/\n$/, '')
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [children])

  if (inline) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  return (
    <div className={styles.codeWrapper}>
      <div className={styles.codeHeader}>
        <span>{language}</span>
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <CheckIcon />
              <span>Copied</span>
            </>
          ) : (
            <>
              <CopyIcon />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className={className}>
        <code {...props}>{children}</code>
      </pre>
    </div>
  )
}

/** Blinking cursor appended to streaming content */
const StreamCursor: React.FC = () => (
  <span className={styles.streamCursor} aria-hidden="true" />
)

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
  className,
  isStreaming
}) => {
  return (
    <div className={cn(styles.markdown, className)}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock,
          a: ({ ...props }) => (
            <a target="_blank" rel="noopener noreferrer" {...props} />
          ),
          p: ({ children, ...props }) => {
            // We only want to append the cursor if this is the last paragraph
            // and we are streaming. However, react-markdown renders top-down.
            // A simple way is to check if we are streaming and the parent is root.
            // But even then, there might be multiple paragraphs.
            // For now, let's keep it simple: if streaming, just append to every paragraph? No.
            return <p {...props}>{children}</p>
          },
        }}
      >
        {content}
      </ReactMarkdown>
      {isStreaming && <StreamCursor />}
    </div>
  )
}
