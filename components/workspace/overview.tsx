"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers3, Route, BookOpen, ChevronRight, Circle, Cable, PanelsTopLeft, Database, MoveUpRight } from "lucide-react";
import { coreProducts, products, type Product } from "@/lib/workspace";
import { CoreDiagram } from "./core-diagram";
import { ProductCard } from "./product-card";

export function Overview({ onSelectProduct }: { onSelectProduct: (product: Product) => void }) {
  return (
    <div className="page-stack">
      <section className="page-heading"><div><div className="eyebrow page-eyebrow">YOUR WORKSPACE, REIMAGINED</div><h1>Command center<span className="heading-period">.</span></h1><p>One perspective on everything QuantumYield.</p></div><span className="environment-chip"><span className="status-dot" />INTERFACE PREVIEW</span></section>
      <section className="hero-panel" aria-labelledby="hero-title">
        <div className="hero-copy"><span className="eyebrow gold-label"><span className="label-line" />THE QUANTUMYIELD ECOSYSTEM</span><h2 id="hero-title">Built to connect.<br /><span>Designed to advance.</span></h2><p className="font-body">Your systems. Your intelligence. Your next chapter.<br className="desktop-break" /> Explore a unified vision, engineered around you.</p><div className="hero-actions"><Link className="button button-primary" href="/ecosystem">Explore ecosystem<ArrowUpRight size={16} /></Link><Link className="button button-quiet" href="/roadmap">View roadmap<ArrowRight size={16} /></Link></div><span className="hero-footnote font-mono"><span className="small-square" />ONE ECOSYSTEM. SHARED AMBITION.</span></div>
        <CoreDiagram />
      </section>
      <section className="workspace-metrics" aria-label="Workspace overview">
        <div className="metric"><span className="metric-label"><Layers3 size={14} />Ecosystem modules</span><span className="metric-value font-mono">0{products.length}<span className="metric-detail">One connected vision</span></span></div>
        <div className="metric"><span className="metric-label"><PanelsTopLeft size={14} />Your workspace</span><span className="metric-value font-mono">01<span className="metric-detail">A single point of access</span></span></div>
        <div className="metric"><span className="metric-label"><Circle size={13} />Environment</span><span className="metric-value metric-word">Prototype<span className="metric-detail">Explore the experience</span></span></div>
        <div className="metric"><span className="metric-label"><Cable size={14} />Connected services</span><span className="metric-value font-mono">00<span className="metric-detail">No live services linked</span></span></div>
      </section>
      <section className="content-section" aria-labelledby="applications-heading">
        <div className="section-heading"><div><h2 id="applications-heading">Your ecosystem</h2><p>Purpose-built products. A shared foundation.</p></div><Link href="/ecosystem" className="text-link">View all modules<ArrowRight size={15} /></Link></div>
        <div className="product-grid">{coreProducts.map((product) => <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />)}</div>
      </section>
      <div className="overview-bottom">
        <section className="utility-panel" aria-labelledby="quick-access-heading"><div className="panel-heading"><h2 id="quick-access-heading">A good place to start</h2><MoveUpRight size={16} className="muted" /></div><div className="quick-links">
          <Link href="/ecosystem" className="quick-link"><span className="quick-icon"><Layers3 size={19} /></span><span><strong>Discover the ecosystem</strong><small>Explore the thinking behind each product.</small></span><ChevronRight size={17} /></Link>
          <Link href="/roadmap" className="quick-link"><span className="quick-icon"><Route size={19} /></span><span><strong>See what comes next</strong><small>From a shared foundation to new possibilities.</small></span><ChevronRight size={17} /></Link>
          <Link href="/resources" className="quick-link"><span className="quick-icon"><BookOpen size={19} /></span><span><strong>Get to know your workspace</strong><small>The essentials, without the complexity.</small></span><ChevronRight size={17} /></Link>
        </div></section>
        <section className="utility-panel status-panel" aria-labelledby="workspace-status-heading"><div className="panel-heading"><h2 id="workspace-status-heading">Workspace status</h2><span className="status-tag status-gold">PROTOTYPE</span></div><div className="status-rows"><div><span><PanelsTopLeft size={15} />Interface</span><span className="ready-status"><span className="status-dot" />Ready to explore</span></div><div><span><Cable size={15} />External services</span><span>Not connected</span></div><div><span><Database size={15} />Data environment</span><span>Not configured</span></div></div><div className="status-note"><span className="note-symbol">i</span><p>This is an interface preview. No live accounts, transactions, or financial data.</p></div></section>
      </div>
    </div>
  );
}
