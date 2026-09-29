export type Section = "overview" | "ecosystem" | "roadmap" | "resources" | "settings";
export type MotionMode = "balanced" | "immersive" | "reduced";

export const sections: Record<Section, { title: string; description: string; path: string }> = {
  overview: { title: "Overview", description: "A clear view of your QuantumYield ecosystem.", path: "/" },
  ecosystem: { title: "Ecosystem", description: "Distinct capabilities. One connected vision.", path: "/ecosystem" },
  roadmap: { title: "Roadmap", description: "A considered path from concept to connected experience.", path: "/roadmap" },
  resources: { title: "Resources", description: "The principles and guidance behind your workspace.", path: "/resources" },
  settings: { title: "Settings", description: "Make the workspace feel right for you.", path: "/settings" },
};

export const products = [
  { id: "qyxos", name: "QYXos", category: "Operating system", status: "Concept", description: "The foundation for a connected digital ecosystem.", detail: "A proposed operating layer for bringing QuantumYield experiences together. This preview describes the concept; no operating-system services are connected.", capabilities: ["Unified workspace", "Consistent navigation", "Cross-product continuity"] },
  { id: "qyxai", name: "QYXai", category: "Intelligence", status: "Concept", description: "Intelligence designed around your next move.", detail: "A concept for an intelligence layer within the QuantumYield ecosystem. Model access, conversations, and automation are not available in this interface preview.", capabilities: ["Contextual assistance", "Knowledge discovery", "Purposeful automation"] },
  { id: "qyxpay", name: "QYXpay", category: "Payments", status: "Concept", description: "A more considered way to move value.", detail: "An exploration of a unified payments experience. No payment processor, bank account, wallet, or financial service is connected. This prototype cannot move money.", capabilities: ["Payment visibility", "Clear transaction states", "Unified payment experience"] },
  { id: "qyxapp", name: "QYX.app", category: "Unified access", status: "Concept", description: "One entry point. An entire ecosystem.", detail: "A proposed unified product hub for discovering and accessing QuantumYield experiences. External applications and account services are not connected.", capabilities: ["Product discovery", "Centralized access", "Connected experiences"] },
  { id: "qyxvr", name: "QYXvr", category: "Spatial experiences", status: "Concept", description: "A new perspective on digital interaction.", detail: "A concept for spatial experiences in the QuantumYield ecosystem. Headset connectivity and immersive applications are not implemented in this preview.", capabilities: ["Spatial interfaces", "Immersive environments", "Natural interaction"] },
  { id: "qyx20", name: "QYX20", category: "Command center", status: "Prototype", description: "Your ecosystem, brought into focus.", detail: "The interface you are exploring now. Navigate the product catalog, explore proposed milestones, and adjust motion for this session. Accounts, persistent data, and external services are not connected.", capabilities: ["Ecosystem directory", "Workspace navigation", "Accessible motion controls"] },
] as const;

export type Product = (typeof products)[number];
export const coreProducts = products.slice(0, 4);

export const milestones = [
  { number: "01", title: "Establish the foundation", status: "Prototype", description: "A consistent visual language, responsive workspace, product directory, and accessible navigation.", items: ["Canonical QYX brand assets", "Desktop and mobile workspace", "Product concept explorer"], current: true },
  { number: "02", title: "Connect the workspace", status: "Proposed", description: "Explore secure identity, persistent preferences, and the service architecture needed for a connected experience.", items: ["Identity and account architecture", "Persistent workspace settings", "Validated service connections"], current: false },
  { number: "03", title: "Expand the ecosystem", status: "Proposed", description: "Develop individual product experiences around validated user needs and confirmed technical capabilities.", items: ["Product-specific experiences", "Cross-product navigation", "Capability validation"], current: false },
];
