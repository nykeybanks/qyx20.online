"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Layers3, LockKeyhole } from "lucide-react";
import type { Product } from "@/lib/workspace";
import { moduleRoutes, moduleSpecs } from "@/lib/workspace-modules";
import { ProductIcon, ProductMark } from "./product-card";

export function ModuleInspector({ product, onClose }: { product: Product; onClose: () => void }) {
  const [view, setView] = useState("Overview");
  const spec = moduleSpecs[product.id];
  const route = moduleRoutes[product.id];
  return <div className="product-detail module-inspector"><div className="product-detail-identity"><span className="product-icon"><ProductIcon product={product} size={23} /></span><ProductMark product={product} height={29} /><span className={`status-tag ${route ? "status-gold" : ""}`}>{product.status}</span></div><span className="eyebrow gold-label">{spec.code}</span><div className="segmented-control" aria-label="Module detail view">{["Overview", "Capabilities", "Dependencies"].map(tab => <button key={tab} aria-pressed={view === tab} onClick={() => setView(tab)}>{tab}</button>)}</div><div className="inspector-view" aria-live="polite">{view === "Overview" ? <><h2>{product.description}</h2><p className="font-body">{product.detail}</p><dl className="detail-facts"><div><dt>Module</dt><dd>{product.category}</dd></div><div><dt>Availability</dt><dd>{route ? "Local interface preview" : "Concept only"}</dd></div><div><dt>Live connection</dt><dd>Not connected</dd></div></dl></> : view === "Capabilities" ? <><h2>{route ? "Explore the interface." : "A proposed direction."}</h2><div className="capability-list">{product.capabilities.map(capability => <span key={capability}>{route ? <Check size={15} /> : <Layers3 size={15} />}{capability}<small>{route ? "PREVIEW" : "PLANNED"}</small></span>)}</div><p className="inspector-boundary">{spec.boundary}</p></> : <><h2>What this module depends on.</h2><div className="dependency-list">{spec.dependencies.map(item => <div key={item}><Layers3 size={16} /><span>{item}</span></div>)}</div><div className="next-step-note"><span className="eyebrow gold-label">NEXT TO VALIDATE</span><p>{spec.next}</p></div></>}</div><div className="detail-actions">{route ? <Link className="button button-primary" href={route} onClick={onClose}>Open {product.name}<ArrowRight size={15} /></Link> : <button className="button button-secondary" disabled><LockKeyhole size={15} />Concept only</button>}<Link className="text-link" href={`/roadmap?module=${encodeURIComponent(product.name)}`} onClick={onClose}>Related roadmap<ArrowRight size={14} /></Link></div></div>;
}
