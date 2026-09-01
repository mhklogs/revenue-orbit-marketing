import { Fragment, type ReactNode } from "react";

const headingTags: Record<string, "h1" | "h2" | "h3" | "h4"> = {
  "1": "h1",
  "2": "h2",
  "3": "h3",
  "4": "h4",
};

function parseInline(text: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*\n]+\*|`[^`]+`)/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > lastIndex) {
      nodes.push(<Fragment key={`${keyBase}-t${k++}`}>{text.slice(lastIndex, m.index)}</Fragment>);
    }
    const token = m[0];
    if (token.startsWith("**") && token.endsWith("**")) {
      nodes.push(<strong key={`${keyBase}-b${k++}`} className="font-bold">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*") && token.endsWith("*")) {
      nodes.push(<em key={`${keyBase}-i${k++}`} className="italic">{token.slice(1, -1)}</em>);
    } else if (token.startsWith("`") && token.endsWith("`")) {
      nodes.push(<code key={`${keyBase}-c${k++}`} className="px-1 py-0.5 rounded text-[0.85em]" style={{ backgroundColor: "var(--bg-elevated)" }}>{token.slice(1, -1)}</code>);
    }
    lastIndex = m.index + token.length;
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={`${keyBase}-t${k++}`}>{text.slice(lastIndex)}</Fragment>);
  }
  return nodes;
}

function renderBlock(text: string, keyBase: string): ReactNode[] {
  const blocks: ReactNode[] = [];
  const lines = text.split("\n");
  let k = 0;

  const flushList = (list: { type: "ul" | "ol"; items: string[] } | null) => {
    if (!list) return;
    const Tag = list.type === "ul" ? "ul" : "ol";
    blocks.push(
      <Tag key={`${keyBase}-l${k++}`} className="my-1.5 pl-5 space-y-1">
        {list.items.map((item, idx) => (
          <li key={idx} className="leading-relaxed">{parseInline(item, `${keyBase}-li${idx}`)}</li>
        ))}
      </Tag>
    );
  };

  let currentList: { type: "ul" | "ol"; items: string[] } | null = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList(currentList);
      currentList = null;
      continue;
    }

    const ulMatch = trimmed.match(/^[-*]\s+(.*)$/);
    const olMatch = trimmed.match(/^\d+[.)]\s+(.*)$/);
    const headMatch = trimmed.match(/^(#{1,4})\s+(.*)$/);

    if (ulMatch || olMatch) {
      const type = ulMatch ? "ul" : "ol";
      const content = (ulMatch || olMatch)![1];
      if (currentList && currentList.type === type) {
        currentList.items.push(content);
      } else {
        flushList(currentList);
        currentList = { type, items: [content] };
      }
      continue;
    }

    flushList(currentList);
    currentList = null;

    if (headMatch) {
      const level = headMatch[1].length;
      const H = headingTags[String(level)] ?? "h2";
      blocks.push(
        <H key={`${keyBase}-h${k++}`} className="mt-2 mb-1 font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
          {parseInline(headMatch[2], `${keyBase}-h${k}`)}
        </H>
      );
      continue;
    }

    blocks.push(
      <span key={`${keyBase}-p${k++}`} className="block leading-relaxed">{parseInline(trimmed, `${keyBase}-p${k}`)}</span>
    );
  }

  flushList(currentList);
  return blocks;
}

export default function Markdown({ text }: { text: string }) {
  return <div className="space-y-0.5 text-sm leading-relaxed">{renderBlock(text, "md")}</div>;
}
