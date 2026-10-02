"use client";

import type { Section } from "@/lib/workspace";
import { useWorkspace } from "./workspace-shell";
import { Overview } from "./overview";
import { Ecosystem } from "./ecosystem";
import { Resources, Settings } from "./secondary-pages";
import { Roadmap } from "./roadmap";
import { UnifiedAccess } from "./unified-access";
import { Payments } from "./payments";
import { WorkspacePrototype } from "./workspace-prototype";

export function WorkspaceContent({ section, initialModule }: { section: Section; initialModule?: string }) {
  const { selectProduct } = useWorkspace();
  if (section === "ecosystem") return <Ecosystem onSelectProduct={selectProduct} />;
  if (section === "roadmap") return <Roadmap key={initialModule ?? "all"} initialModule={initialModule} />;
  if (section === "access") return <UnifiedAccess />;
  if (section === "payments") return <Payments />;
  if (section === "workspace") return <WorkspacePrototype />;
  if (section === "resources") return <Resources />;
  if (section === "settings") return <Settings />;
  return <Overview onSelectProduct={selectProduct} />;
}
