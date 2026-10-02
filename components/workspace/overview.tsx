"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products, type Product } from "@/lib/workspace";
import { CoreDiagram } from "./core-diagram";
import { CommandPanels } from "./command-panels";
import { MetricStrip, PageHeader, PreviewNotice } from "./workspace-primitives";

export function Overview({ onSelectProduct }: { onSelectProduct: (product: Product) => void }) {
  return (
    <div className="page-stack console-page command-page">
      <PageHeader eyebrow="QYX20 / WORKSPACE CONTROL" title="Command center" description="Your modules. Your workspace. One clear perspective." actions={<Link className="button button-primary" href="/workspace">Open workspace<ArrowUpRight size={15} /></Link>} />
      <PreviewNotice>Interface prototype. Explore connected navigation—not live accounts or financial services.</PreviewNotice>
      <section className="hero-panel" aria-labelledby="hero-title">
        <div className="hero-copy"><span className="eyebrow gold-label"><span className="label-line" />ONE ECOSYSTEM. A CLEARER PERSPECTIVE.</span><h2 id="hero-title">Everything in view.<br /><span>Ready for what’s next.</span></h2><p className="font-body">Launch your workspace. Explore payment flows.<br className="desktop-break" /> Understand where every module stands.</p><div className="hero-actions"><Link className="button button-primary" href="/access">Open QYX.app<ArrowUpRight size={16} /></Link><Link className="button button-quiet" href="/payments">Explore QYXpay<ArrowRight size={16} /></Link></div><span className="hero-footnote font-mono"><span className="small-square" />03 INTERFACE PROTOTYPES / 06 ECOSYSTEM MODULES</span></div>
        <CoreDiagram />
      </section>
      <MetricStrip items={[{ label: "Ecosystem modules", value: String(products.length).padStart(2, "0"), detail: "Across the QuantumYield ecosystem" }, { label: "Interface prototypes", value: String(products.filter(p => p.status === "Prototype").length).padStart(2, "0"), detail: "QYX20 · QYX.app · QYXpay", accent: true }, { label: "Connected services", value: "00", detail: "No live integrations configured" }, { label: "Next milestones", value: "03", detail: "Identity · payments · persistence" }]} />
      <CommandPanels onSelectProduct={onSelectProduct} />
    </div>
  );
}
