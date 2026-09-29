"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, ArrowRight, Bell, BookOpen, Check, ChevronDown, ChevronRight, CircleHelp, Command, Layers3, LayoutDashboard, Menu, PanelsTopLeft, Route, Search, Settings2, X, LockKeyhole } from "lucide-react";
import { QYXEmblem, QYXProductMark, QuantumYieldWordmark } from "@/components/brand";
import { products, sections, type MotionMode, type Product, type Section } from "@/lib/workspace";
import { Dialog } from "./dialog";
import { ProductIcon, ProductMark } from "./product-card";

const navigation = [
  { section: "overview", icon: LayoutDashboard },
  { section: "ecosystem", icon: Layers3 },
  { section: "roadmap", icon: Route },
  { section: "resources", icon: BookOpen },
] as const;

const WorkspaceContext = createContext<{ selectProduct: (product: Product) => void; motion: MotionMode; setMotion: (mode: MotionMode) => void } | null>(null);

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (!context) throw new Error("Workspace context is required.");
  return context;
}

export function WorkspaceShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const activeSection = (Object.keys(sections) as Section[]).find((section) => sections[section].path === pathname) ?? "overview";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [updatesOpen, setUpdatesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [motion, setMotion] = useState<MotionMode>("balanced");
  const searchResults = products.filter((product) => `${product.name} ${product.category}`.toLowerCase().includes(search.trim().toLowerCase()));

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing || event.keyCode === 229) return;
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (!document.querySelector("dialog[open]")) { setSearch(""); setSearchOpen(true); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = motion;
    return () => { delete document.documentElement.dataset.motion; };
  }, [motion]);

  const closeMobile = () => setMobileOpen(false);
  const sidebarContent = <>
    <Link href="/" aria-label="QYX20 home" className="sidebar-brand" onClick={closeMobile}><QYXProductMark product="qyx20" alt="QYX20" height={34} /><span className="font-mono">QUANTUMYIELD ECOSYSTEM</span></Link>
    <div className="workspace-switch"><span className="workspace-emblem"><QYXEmblem size={26} alt="" /></span><span><strong>QYX20 workspace</strong><small>Prototype environment</small></span><LockKeyhole size={13} aria-label="Preview only" /></div>
    <div className="nav-section-label font-mono">WORKSPACE</div>
    <nav aria-label="Main navigation" className="primary-nav">{navigation.map(({ section, icon: Icon }) => <Link href={sections[section].path} key={section} onClick={closeMobile} className={`nav-link ${activeSection === section ? "nav-link-active" : ""}`} aria-current={activeSection === section ? "page" : undefined}><Icon size={18} strokeWidth={1.6} /><span>{sections[section].title}</span>{section === "ecosystem" && <span className="nav-count">06</span>}{activeSection === section && <span className="nav-active-indicator" />}</Link>)}</nav>
    <div className="sidebar-bottom"><div className="sidebar-message"><span className="sidebar-message-mark">+</span><span className="eyebrow">ENGINEERED AS ONE</span><p>A connected vision.<br /><span>A considered future.</span></p><Link href="/roadmap" onClick={closeMobile}>Explore the direction<ArrowUpRight size={14} /></Link></div><nav className="secondary-nav" aria-label="Workspace support"><Link href="/settings" className={`nav-link ${activeSection === "settings" ? "nav-link-active" : ""}`} onClick={closeMobile} aria-current={activeSection === "settings" ? "page" : undefined}><Settings2 size={18} strokeWidth={1.6} />Settings</Link><Link href="/resources#workspace-guide" className="nav-link" onClick={closeMobile}><CircleHelp size={18} strokeWidth={1.6} />Help & resources<ArrowUpRight size={13} className="nav-trailing" /></Link></nav><div className="sidebar-footer"><QuantumYieldWordmark height={12} /><span className="font-mono">V1.0 · PREVIEW</span></div></div>
  </>;

  return <WorkspaceContext.Provider value={{ selectProduct: setSelectedProduct, motion, setMotion }}><div className="app-shell"><a className="skip-link" href="#main-content">Skip to content</a><aside className="sidebar">{sidebarContent}</aside><div className="workspace-main"><header className="topbar"><div className="breadcrumb"><button className="icon-button mobile-menu-button" aria-label="Open navigation" aria-expanded={mobileOpen} onClick={() => setMobileOpen(true)}><Menu size={21} /></button><PanelsTopLeft size={16} className="breadcrumb-icon" /><span className="breadcrumb-workspace">Workspace</span><ChevronRight size={13} /><span className="breadcrumb-current">{sections[activeSection].title}</span></div><div className="topbar-actions"><button className="global-search-button" onClick={() => { setSearch(""); setSearchOpen(true); }} aria-label="Search workspace"><Search size={16} /><span>Search workspace...</span><kbd><Command size={10} />K</kbd></button><div className="topbar-separator" /><button className="icon-button" aria-label="Workspace updates" onClick={() => setUpdatesOpen(true)}><Bell size={18} strokeWidth={1.6} /></button><button className="profile-button" aria-label="About preview mode" onClick={() => setAboutOpen(true)}><span>P</span><ChevronDown size={13} /></button></div></header><main id="main-content" className="workspace-content" tabIndex={-1}>{children}<footer className="main-footer"><span>Precision over decoration. <span className="footer-secondary">System over screens.</span></span><span className="font-mono">QYX20<span className="footer-divider">/</span>BUILT WITH INTENTION</span></footer></main></div></div>
    <Dialog open={mobileOpen} onClose={closeMobile} title="Navigation" className="mobile-navigation-dialog"><div className="mobile-sidebar-content">{sidebarContent}</div></Dialog>
    <Dialog open={searchOpen} onClose={() => setSearchOpen(false)} title="Workspace search"><div className="search-dialog-body"><label className="search-field dialog-search"><Search size={19} /><span className="sr-only">Search modules and capabilities</span><input aria-label="Search modules and capabilities" autoFocus placeholder="Find a module or capability…" value={search} onChange={(event) => setSearch(event.target.value)} />{search && <button className="icon-button" aria-label="Clear search" onClick={() => setSearch("")}><X size={16} /></button>}</label><span className="eyebrow search-results-label">ECOSYSTEM MODULES</span><div className="search-results">{searchResults.length ? searchResults.map((product) => <button key={product.id} onClick={() => { setSearchOpen(false); setSelectedProduct(product); }} className="search-result"><span className="product-icon"><ProductIcon product={product} /></span><span><strong>{product.name}</strong><small>{product.category}</small></span><span className="status-tag">{product.status}</span><ArrowUpRight size={16} /></button>) : <div className="empty-state" role="status"><Search size={24} /><h3>No results for “{search}”</h3><p>Try a product name or a category like intelligence.</p></div>}</div><div className="search-hint"><span><kbd>esc</kbd> to close</span><span>{searchResults.length} results</span></div></div></Dialog>
    <Dialog open={selectedProduct !== null} onClose={() => setSelectedProduct(null)} title="Module overview">{selectedProduct && <div className="product-detail"><div className="product-detail-identity"><span className="product-icon"><ProductIcon product={selectedProduct} size={24} /></span><ProductMark product={selectedProduct} height={31} /><span className="status-tag status-gold">{selectedProduct.status}</span></div><span className="eyebrow gold-label">{selectedProduct.category}</span><h2>{selectedProduct.description}</h2><p className="font-body">{selectedProduct.detail}</p><div className="capability-list"><span className="eyebrow">{selectedProduct.status === "Concept" ? "PROPOSED DIRECTION" : "IN THIS PREVIEW"}</span>{selectedProduct.capabilities.map((capability) => <span key={capability}><Check size={15} />{capability}</span>)}</div><div className="detail-actions">{selectedProduct.id === "qyx20" ? <Link className="button button-primary" href="/" onClick={() => setSelectedProduct(null)}>Open workspace<ArrowRight size={16} /></Link> : <button className="button button-secondary" disabled><LockKeyhole size={15} />Not available to launch</button>}<Link className="text-link" href="/roadmap" onClick={() => setSelectedProduct(null)}>Explore roadmap<ArrowUpRight size={15} /></Link></div></div>}</Dialog>
    <Dialog open={updatesOpen} onClose={() => setUpdatesOpen(false)} title="Workspace updates"><div className="updates-content"><span className="status-tag status-gold">INTERFACE V1.0</span><h2>A clearer starting point.</h2><p className="font-body">Your QYX20 interface preview brings the ecosystem, proposed roadmap, and workspace guidance into one place.</p><ul><li><Check size={15} />Responsive workspace navigation</li><li><Check size={15} />Searchable ecosystem directory</li><li><Check size={15} />Accessible, adjustable motion</li></ul><p className="subtle-note">These are local release notes, not a live notification feed.</p><button className="button button-primary" onClick={() => setUpdatesOpen(false)}>Continue exploring<ArrowRight size={16} /></button></div></Dialog>
    <Dialog open={aboutOpen} onClose={() => setAboutOpen(false)} title="About this workspace"><div className="updates-content"><QYXProductMark product="qyx20" alt="QYX20" height={36} /><h2>Room for what comes next.</h2><p className="font-body">You are exploring a working interface prototype, not a signed-in account. Navigation, search, product details, and motion controls are available.</p><div className="information-banner"><span className="note-symbol">i</span><p>No account, financial connection, or persistent storage is configured. Preferences apply only to this browsing session.</p></div><button className="button button-primary" onClick={() => setAboutOpen(false)}>Back to workspace<ArrowRight size={16} /></button></div></Dialog>
  </WorkspaceContext.Provider>;
}
