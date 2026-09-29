"use client";

import { useState } from "react";
import { Search, X, Layers3 } from "lucide-react";
import { products, type Product } from "@/lib/workspace";
import { ProductCard } from "./product-card";

export function Ecosystem({ onSelectProduct }: { onSelectProduct: (product: Product) => void }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All modules");
  const visible = products.filter((product) => `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query.trim().toLowerCase()) && (filter === "All modules" || product.status === filter));
  return <div className="page-stack"><section className="page-heading"><div><div className="eyebrow page-eyebrow">CONNECTED BY DESIGN</div><h1>The ecosystem<span className="heading-period">.</span></h1><p>Six distinct ideas. One QuantumYield vision.</p></div><span className="environment-chip"><Layers3 size={13} />06 MODULES</span></section><div className="catalog-toolbar"><div className="segmented-control" aria-label="Filter modules">{["All modules", "Concept", "Prototype"].map((item) => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><label className="search-field"><Search size={16} /><span className="sr-only">Search ecosystem</span><input aria-label="Search ecosystem" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a module…" />{query && <button className="icon-button" aria-label="Clear module search" onClick={() => setQuery("")}><X size={15} /></button>}</label></div><p className="result-count font-mono" role="status">{visible.length} MODULE{visible.length === 1 ? "" : "S"} / {filter.toUpperCase()}</p>{visible.length ? <div className="product-grid catalog-grid">{visible.map((product) => <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />)}</div> : <div className="empty-state"><Search size={28} /><h2>No modules found</h2><p>Try another name or explore all modules.</p><button className="button button-secondary" onClick={() => { setQuery(""); setFilter("All modules"); }}>Reset filters</button></div>}<div className="information-banner"><span className="note-symbol">i</span><p>Product descriptions represent concepts, not available services. Select a module to see its current scope.</p></div></div>;
}
