import { ButtonHTMLAttributes } from 'react';
import { default as default_2 } from 'react';
import { RefObject } from 'react';

declare interface AIInterfaceConfig {
    theme: 'light' | 'dark' | 'auto';
    apiEndpoint: string;
}

export declare const AIInterfaceProvider: default_2.FC<{
    config: AIInterfaceConfig;
    children: default_2.ReactNode;
}>;

export declare interface ChatConfig {
    theme: 'light' | 'dark' | 'auto';
    apiEndpoint: string;
    maxMessages?: number;
}

export declare const ChatHeader: default_2.FC<ChatHeaderProps>;

declare interface ChatHeaderProps {
    /** Display name of the AI agent */
    agentName?: string;
    /** Avatar: URL string, ReactNode, or undefined (falls back to initials) */
    agentAvatar?: string | default_2.ReactNode;
    /** Optional brand logo — shown left of the agent group */
    logo?: string | default_2.ReactNode;
    /**
     * When true, the header shows a live "Typing…" status indicator
     * under the agent name.
     */
    isLoading?: boolean;
    /** Closes the chat panel */
    onClose: () => void;
    /**
     * When provided, a ← back button is rendered on the far left.
     * Clicking it navigates back to the home view.
     */
    onBack?: () => void;
    /**
     * Clears the message history.
     * When undefined, the clear button is not rendered.
     */
    onClear?: () => void;
    /**
     * Applied to the agent name <h2>.
     * Must match the aria-labelledby on the dialog element.
     */
    dialogLabelId?: string;
    /** Extra class on the root <header> element */
    className?: string;
}

export declare const ChatPanel: default_2.ForwardRefExoticComponent<ChatPanelProps & default_2.RefAttributes<HTMLDivElement>>;

declare interface ChatPanelProps {
    /** Controls visibility — drives open/close animation */
    isOpen: boolean;
    /** Closes the panel — wired to ChatWidget's close() */
    onClose: () => void;
    /** Full message history from useChat */
    messages: Message[];
    /** True while a response is loading or streaming */
    isLoading: boolean;
    /** Error string from useChat, or null */
    error: string | null;
    /** Send a new message — wired to useChat's sendMessage() */
    onSend: (text: string) => void;
    /** Retry the last failed message — wired to useChat's retryLast() */
    onRetry: () => void;
    /** Clear all messages — wired to useChat's clearMessages() */
    onClear: () => void;
    /** Agent display name — forwarded to ChatHeader */
    agentName?: string;
    /** Agent avatar URL or ReactNode — forwarded to ChatHeader */
    agentAvatar?: string | default_2.ReactNode;
    /** Brand logo — forwarded to ChatHeader */
    logo?: string | default_2.ReactNode;
    /** InputBar placeholder text */
    placeholder?: string;
    /**
     * When provided, a ← back button appears in the header.
     * Clicking it navigates back to the home view.
     */
    onBack?: () => void;
    /**
     * ID of the dialog element — used by ChatWidget's TriggerButton as
     * aria-controls so the button announces which element it opens.
     */
    dialogId?: string;
    /**
     * ID applied to the agent name <h2> inside ChatHeader.
     * Referenced by aria-labelledby on the dialog element.
     */
    dialogLabelId?: string;
    /** Extra class on the root dialog element */
    className?: string;
}

export declare const ChatWidget: default_2.FC<ChatWidgetProps>;

declare interface ChatWidgetProps {
    /** Required — handler returning a string or ReadableStream */
    onMessage: OnMessageHandler;
    /** Name shown in the widget header. Default: "AI Assistant" */
    agentName?: string;
    /** URL string or React element used as the agent's avatar */
    agentAvatar?: string | default_2.ReactNode;
    /** Brand logo shown in the widget header and home screen */
    logo?: string | default_2.ReactNode;
    /** Color scheme. "auto" follows system preference. Default: "auto" */
    theme?: 'light' | 'dark' | 'auto';
    /** Hex color for buttons and accents. Default: "#2563EB" */
    primaryColor?: string;
    /** Input field placeholder text */
    placeholder?: string;
    /**
     * Large heading shown in the dark home screen header.
     * Use "\n" for line breaks. Default: "Need support?\nHow can we help?"
     * Also used as the first assistant message in the chat.
     */
    welcomeMessage?: string;
    /**
     * Sub heading shown in the dark home screen header.
     * Use "\n" for line breaks. Default: "Need support?\nHow can we help?"
     * Also used as the first assistant message in the chat.
     */
    welcomeSubMessage?: string;
    /** Preview text of the agent's most recent message (shown in home card) */
    recentMessage?: string;
    /** Human-readable time since the recent message, e.g. "1m" */
    recentMessageTime?: string;
    /** Status text shown in the status card, e.g. "All Systems Operational" */
    statusText?: string;
    /** When the status was last updated, e.g. "Updated Apr 12, 08:14 UTC" */
    statusUpdated?: string;
    /** List of help articles. Requires showHelpArticles=true to display. */
    helpArticles?: HelpArticle[];
    /**
     * When true and helpArticles is non-empty, renders the help search section
     * on the home screen and the Help tab in the bottom nav.
     */
    showHelpArticles?: boolean;
    /** Which view to start on. Default: "home" */
    defaultView?: 'home' | 'chat';
    /** External open state (controlled mode) */
    isOpen?: boolean;
    /** Callback when open state changes (controlled mode) */
    onOpenChange?: (open: boolean) => void;
    /** Anchor position on screen. Default: "bottom-right" */
    position?: 'bottom-right' | 'bottom-left';
    /** Extra class for the root container */
    className?: string;
    /** Inline style override for the root container */
    style?: default_2.CSSProperties;
}

declare interface HelpArticle {
    /** Article title displayed as a clickable link */
    title: string;
    /** Optional href — opens in a new tab when clicked */
    href?: string;
    /** Article description (shown in single view) */
    description?: default_2.ReactNode | string;
    /** Article main content details */
    content?: default_2.ReactNode | string;
    /** Human readable last updated time */
    updatedAt?: string;
}

export declare const InputBar: default_2.FC<InputBarProps>;

declare interface InputBarProps {
    /** Called when the user submits a non-empty message. */
    onSend: (text: string) => void;
    /** When true, textarea and send button are disabled. */
    isLoading?: boolean;
    /** Placeholder text shown in the textarea. */
    placeholder?: string;
    /**
     * When true, the textarea receives focus as soon as the component mounts.
     * Pass `true` whenever the chat panel opens.
     */
    autoFocus?: boolean;
    /** Extra class applied to the root wrapper. */
    className?: string;
}

export declare interface Message {
    id: string;
    role: Role;
    content: string;
    timestamp: Date;
    status?: Status;
}

export declare const MessageBubble: default_2.FC<MessageBubbleProps>;

declare interface MessageBubbleProps {
    message: Message;
    /**
     * Called when the user clicks the retry button on an error bubble.
     * Only rendered for assistant messages with status="error".
     */
    onRetry?: () => void;
    /** Extra class applied to the outermost row element. */
    className?: string;
}

export declare const MessageList: default_2.FC<MessageListProps>;

declare interface MessageListProps {
    messages: Message[];
    /**
     * Passed down to every error-status assistant bubble.
     * Triggers retryLast() from useChat.
     */
    onRetry?: () => void;
    /** Extra class applied to the scrollable root element. */
    className?: string;
}

export declare type OnMessageHandler = (message: string, history: Message[]) => Promise<string | ReadableStream>;

declare type ResolvedTheme = 'light' | 'dark';

export declare type Role = 'user' | 'assistant';

export declare type Status = 'loading' | 'streaming' | 'done' | 'error';

/**
 * useTheme.ts
 *
 * Resolves the widget's effective theme ("light" | "dark") and keeps it in
 * sync with the OS preference when theme="auto". Updates dynamically if the
 * user switches their system theme mid-session.
 */
declare type ThemeProp = 'light' | 'dark' | 'auto';

export declare const TriggerButton: default_2.ForwardRefExoticComponent<TriggerButtonProps & default_2.RefAttributes<HTMLButtonElement>>;

declare interface TriggerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Whether the chat panel is currently open */
    isOpen: boolean;
    /** Primary accent color — used to derive the button background inline */
    primaryColor?: string;
    /**
     * Optional brand logo shown on the button face when the panel is closed.
     * string  → treated as an image URL
     * ReactNode → rendered directly
     * undefined → default chat bubble SVG
     */
    logo?: string | default_2.ReactNode;
    /**
     * Number of messages currently in the conversation.
     * When > 0 and the panel is closed, an unread indicator dot is shown.
     */
    messageCount?: number;
}

export declare const TypingIndicator: default_2.FC<TypingIndicatorProps>;

declare interface TypingIndicatorProps {
    /**
     * Visual style variant.
     * - "bubble"     → inside a MessageBubble loading state (default)
     * - "inline"     → compact, for ChatHeader status line
     * - "standalone" → centered block with text label
     */
    variant?: TypingIndicatorVariant;
    /**
     * Accessible label announced by screen readers.
     * Defaults differ by variant:
     *   bubble / standalone → "Thinking…"
     *   inline              → "Assistant is typing"
     */
    label?: string;
    /**
     * Text shown below the dots in the "standalone" variant only.
     * Defaults to the label value.
     */
    caption?: string;
    /** Extra class on the root element */
    className?: string;
}

declare type TypingIndicatorVariant = 'bubble' | 'inline' | 'standalone';

export declare function useChat({ onMessage, welcomeMessage, }: UseChatOptions): UseChatReturn;

export declare interface UseChatOptions {
    onMessage: OnMessageHandler;
    /** Optional welcome message shown as the first assistant message */
    welcomeMessage?: string;
}

export declare interface UseChatReturn {
    messages: Message[];
    sendMessage: (text: string) => Promise<void>;
    isLoading: boolean;
    error: string | null;
    clearMessages: () => void;
    retryLast: () => Promise<void>;
}

/**
 * Activates a focus trap inside `ref` when `active` is true.
 * On activation, focuses the first focusable child.
 * Tab / Shift+Tab cycle within the container.
 */
export declare function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean): void;

export declare const useScrollAnchor: () => RefObject<HTMLDivElement>;

export declare const useStreamDetection: (response: ReadableStream<Uint8Array>) => boolean;

/**
 * Returns the resolved theme ("light" | "dark").
 *
 * - "light" / "dark" → returned as-is
 * - "auto"           → derived from prefers-color-scheme and updated live
 */
export declare function useTheme(theme: ThemeProp): ResolvedTheme;

export declare const WidgetHelp: default_2.FC<WidgetHelpProps>;

declare interface WidgetHelpProps {
    helpArticles: HelpArticle[];
    /** Return to home view */
    onGoHome: () => void;
    /** Open the chat view */
    onStartChat: () => void;
    /** Close the widget entirely */
    onClose: () => void;
    /** Called when a help article is clicked */
    onArticleClick?: (article: HelpArticle) => void;
    /** Extra class on the root element */
    className?: string;
}

export declare const WidgetHome: default_2.FC<WidgetHomeProps>;

declare interface WidgetHomeProps {
    /** Large welcome heading displayed in the dark header */
    welcomeMessage?: string;
    /** Large welcome sub heading displayed in the dark header */
    welcomeSubMessage?: string;
    /** Agent display name shown in the "Recent message" card */
    agentName?: string;
    /** Agent avatar — URL string or ReactNode */
    agentAvatar?: string | default_2.ReactNode;
    /** Brand logo shown top-left in the dark header */
    logo?: string | default_2.ReactNode;
    /** Preview text of the most recent message */
    recentMessage?: string;
    /** Human-readable time since the recent message, e.g. "1m" */
    recentMessageTime?: string;
    /** Status text, e.g. "All Systems Operational" */
    statusText?: string;
    /** When the status was last updated, e.g. "Updated Apr 12, 08:14 UTC" */
    statusUpdated?: string;
    /** List of help articles. Requires showHelpArticles=true to display. */
    helpArticles?: HelpArticle[];
    /**
     * When true and helpArticles is non-empty, renders the search + article section
     * and the Help tab in the bottom nav.
     */
    showHelpArticles?: boolean;
    /** Called when "Send us a message" CTA or Messages tab is clicked */
    onStartChat: () => void;
    /** Called when the Help tab is clicked */
    onShowHelp?: () => void;
    /** Called when the × button is clicked */
    onClose: () => void;
    /** Called when a help article is clicked */
    onArticleClick?: (article: HelpArticle) => void;
    /** Extra class on the root element */
    className?: string;
}

export { }
