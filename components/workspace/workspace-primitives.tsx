import type { ReactNode } from "react";
import { ArrowUpRight, Info } from "lucide-react";
import Link from "next/link";

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description: string; actions?: ReactNode }) {
  return <header className="page-heading console-heading"><div><div className="eyebrow page-eyebrow">{eyebrow}</div><h1>{title}<span className="heading-period">.</span></h1><p>{description}</p></div>{actions ?? <span className="environment-chip"><span className="status-dot" />WORKSPACE PROTOTYPE</span>}</header>;
}
export function PreviewNotice({ children }: { children: ReactNode }) {
  return <div className="preview-notice"><Info size={15} /><p>{children}</p><span className="eyebrow">PREVIEW ONLY</span></div>;
}
export function Panel({ title, eyebrow, action, children, className = "" }: { title: string; eyebrow?: string; action?: ReactNode; children: ReactNode; className?: string }) {
  return <section className={`console-panel ${className}`}><div className="console-panel-heading"><div>{eyebrow && <span className="eyebrow muted">{eyebrow}</span>}<h2>{title}</h2></div>{action}</div>{children}</section>;
}
export function RouteLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="text-link">{children}<ArrowUpRight size={14} /></Link>;
}
export function MetricStrip({ items }: { items: { label: string; value: string; detail: string; accent?: boolean }[] }) {
  return <section className="console-metrics" aria-label="Workspace summary">{items.map(item => <div className="console-metric" key={item.label}><span className="eyebrow">{item.label}</span><strong className={`font-mono ${item.accent ? "gold-label" : ""}`}>{item.value}</strong><small>{item.detail}</small></div>)}</section>;
}
