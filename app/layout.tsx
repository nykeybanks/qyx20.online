import type { Metadata, Viewport } from "next";
import { qyxFontVariables } from "@/lib/qyx-fonts";
import { WorkspaceShell } from "@/components/workspace/workspace-shell";
import "./globals.css";
import "@/styles/workspace.css";

export const metadata: Metadata = {
  title: "QYX20 — Your QuantumYield command center",
  description: "Explore the QuantumYield command center, QYX.app unified access, QYXpay payments interface, workspace presets, and module roadmap. Clearly labeled prototypes; no live financial services.",
  applicationName: "QYX20",
  icons: { icon: "/brand/qyx/source-05/logos/q-emblem-white.png" },
};
export const viewport: Viewport = { themeColor: "#0A0A0A", colorScheme: "dark", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={qyxFontVariables}><body className="qyx-root"><WorkspaceShell>{children}</WorkspaceShell></body></html>;
}
