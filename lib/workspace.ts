export type Section = "overview" | "ecosystem" | "access" | "payments" | "workspace" | "roadmap" | "resources" | "settings";
export type MotionMode = "balanced" | "immersive" | "reduced";

export const sections: Record<Section, { title: string; description: string; path: string }> = {
  overview: { title: "Command center", description: "Module readiness, workspace access, and the next steps for QuantumYield.", path: "/" },
  access: { title: "QYX.app", description: "Unified access to the QuantumYield interface prototypes and product concepts.", path: "/access" },
  payments: { title: "QYXpay", description: "A payments workspace prototype. Explore illustrative transaction states; no money moves.", path: "/payments" },
  workspace: { title: "Workspace", description: "Explore a focused workspace prototype and its proposed service architecture.", path: "/workspace" },
  ecosystem: { title: "Ecosystem", description: "Distinct capabilities. One connected vision.", path: "/ecosystem" },
  roadmap: { title: "Roadmap", description: "A considered path from concept to connected experience.", path: "/roadmap" },
  resources: { title: "Resources", description: "The principles and guidance behind your workspace.", path: "/resources" },
  settings: { title: "Settings", description: "Make the workspace feel right for you.", path: "/settings" },
};

export const products = [
  { id: "qyxos", name: "QYXos", category: "Operating system", status: "Concept", description: "The foundation for a connected digital ecosystem.", detail: "A proposed operating layer for bringing QuantumYield experiences together. This preview describes the concept; no operating-system services are connected.", capabilities: ["Unified workspace", "Consistent navigation", "Cross-product continuity"] },
  { id: "qyxai", name: "QYXai", category: "Intelligence", status: "Concept", description: "Intelligence designed around your next move.", detail: "A concept for an intelligence layer within the QuantumYield ecosystem. Model access, conversations, and automation are not available in this interface preview.", capabilities: ["Contextual assistance", "Knowledge discovery", "Purposeful automation"] },
  { id: "qyxpay", name: "QYXpay", category: "Payments", status: "Prototype", description: "Payment clarity. From first intent to final state.", detail: "Explore a payments workspace with an illustrative ledger, transaction inspection, and a scenario preview. All examples are fictional. No processor, bank, or wallet is connected, and no money moves.", capabilities: ["Illustrative ledger and filters", "Transaction state inspection", "Payment scenario preview"] },
  { id: "qyxapp", name: "QYX.app", category: "Unified access", status: "Prototype", description: "One entry point. An entire ecosystem.", detail: "A working product launcher for the interfaces in this preview. Search modules, open available workspaces, and inspect concepts. Unified identity and external application access remain planned; this is not a signed-in session.", capabilities: ["Searchable module launcher", "Direct prototype navigation", "Access readiness overview"] },
  { id: "qyxvr", name: "QYXvr", category: "Spatial experiences", status: "Concept", description: "A new perspective on digital interaction.", detail: "A concept for spatial experiences in the QuantumYield ecosystem. Headset connectivity and immersive applications are not implemented in this preview.", capabilities: ["Spatial interfaces", "Immersive environments", "Natural interaction"] },
  { id: "qyx20", name: "QYX20", category: "Command center", status: "Prototype", description: "Your ecosystem, brought into focus.", detail: "Your command center for module readiness, access, and roadmap context. Explore workspace presets, inspect dependencies, and navigate local product interfaces. Accounts, persistent data, and external services are not connected.", capabilities: ["Module readiness and dependencies", "Workspace layout exploration", "Connected module roadmap"] },
] as const;

export type Product = (typeof products)[number];
