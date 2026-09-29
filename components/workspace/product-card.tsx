"use client";

import { ArrowUpRight, Cpu, BrainCircuit, CreditCard, Grid2X2, Scan, Command } from "lucide-react";
import { QYXProductMark } from "@/components/brand";
import type { Product } from "@/lib/workspace";

const icons = { qyxos: Cpu, qyxai: BrainCircuit, qyxpay: CreditCard, qyxapp: Grid2X2, qyxvr: Scan, qyx20: Command };

export function ProductIcon({ product, size = 19 }: { product: Product; size?: number }) {
  const Icon = icons[product.id];
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />;
}

export function ProductMark({ product, height = 25 }: { product: Product; height?: number }) {
  if (product.id === "qyxapp") return <span className="product-text-name" style={{ fontSize: height - 2 }}>QYX.app</span>;
  if (product.id === "qyxpay") return <img src="/brand/qyx/product-logos/QYXpay_01.png" alt="QYXpay" height={height} draggable={false} decoding="async" style={{ height, width: "auto", objectFit: "contain" }} />;
  return <QYXProductMark product={product.id} alt={product.name} height={height} />;
}

export function ProductCard({ product, onSelect }: { product: Product; onSelect: (product: Product) => void }) {
  return (
    <button className="product-card" id={product.id} onClick={() => onSelect(product)} aria-label={`Explore ${product.name} — ${product.status}`}>
      <span className="product-card-top"><span className="product-icon"><ProductIcon product={product} /></span><span className={`status-tag ${product.status === "Prototype" ? "status-gold" : ""}`}>{product.status}</span></span>
      <span className="product-identity"><ProductMark product={product} /><span className="product-description font-body">{product.description}</span></span>
      <span className="product-card-footer"><span>{product.category}</span><ArrowUpRight size={17} aria-hidden="true" /></span>
    </button>
  );
}
