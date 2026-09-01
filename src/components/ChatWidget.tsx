"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import Markdown from "./Markdown";

type Msg = { role: "user" | "assistant"; text: string };

const SUGGESTIONS = [
  "What services do you offer?",
  "Tell me about your team",
  "Which industries do you serve?",
  "How do you measure results?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", text: "Hi! I'm the ROM assistant. Ask me anything about our services, team, industries, or results." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text?: string) {
    const q = (text ?? input).trim();
    if (!q || loading) return;
    setInput("");
    const history = messages
      .slice(-8)
      .map((m) => ({ role: m.role, parts: [{ text: m.text }] }));
    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q, history }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply || "Sorry, I couldn't respond right now." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-105"
        style={{ backgroundColor: "var(--dark)", border: "1px solid var(--border-subtle)" }}
        aria-label="Open chat assistant"
      >
        {open ? (
          <X className="w-6 h-6" style={{ color: "var(--accent-light)" }} />
        ) : (
          <Bot className="w-7 h-7" style={{ color: "var(--accent-light)" }} />
        )}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-[200] w-[calc(100vw-2.5rem)] max-w-[380px] h-[70vh] max-h-[520px] rounded-2xl overflow-hidden flex flex-col shadow-2xl border"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            {/* Header */}
            <div className="px-4 py-3.5 flex items-center gap-3" style={{ backgroundColor: "var(--dark)" }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--accent-soft)" }}>
                <MessageCircle className="w-5 h-5" style={{ color: "var(--accent-light)" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">ROM Assistant</p>
                <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>Powered by Gemini · Answers about our site</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-4 space-y-3" style={{ backgroundColor: "var(--bg-secondary)" }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user" ? "rounded-br-sm" : "rounded-bl-sm"
                    }`}
                    style={
                      m.role === "user"
                        ? { backgroundColor: "var(--accent)", color: "#ffffff" }
                        : { backgroundColor: "var(--bg-card)", color: "var(--text-primary)", border: "1px solid var(--border-subtle)" }
                    }
                  >
                    {m.role === "assistant" ? <Markdown text={m.text} /> : m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-sm" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>
                    Typing…
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-3 py-2 flex flex-wrap gap-2" style={{ backgroundColor: "var(--bg-secondary)" }}>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors"
                    style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-subtle)", color: "var(--text-secondary)" }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 flex items-center gap-2 border-t" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-subtle)" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send();
                }}
                placeholder="Ask about our services, team…"
                className="flex-1 h-10 px-3.5 rounded-full text-sm outline-none border"
                style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border-subtle)", color: "var(--text-primary)" }}
              />
              <button
                onClick={() => send()}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all disabled:opacity-50"
                style={{ backgroundColor: "var(--accent)" }}
                disabled={loading || !input.trim()}
                aria-label="Send"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
