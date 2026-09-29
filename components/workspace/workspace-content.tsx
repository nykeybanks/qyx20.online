"use client";

import type { Section } from "@/lib/workspace";
import { useWorkspace } from "./workspace-shell";
import { Overview } from "./overview";
import { Ecosystem } from "./ecosystem";
import { Resources, Roadmap, Settings } from "./secondary-pages";

export function WorkspaceContent({ section }: { section: Section }) {
  const { selectProduct } = useWorkspace();
  if (section === "ecosystem") return <Ecosystem onSelectProduct={selectProduct} />;
  if (section === "roadmap") return <Roadmap />;
  if (section === "resources") return <Resources />;
  if (section === "settings") return <Settings />;
  return <Overview onSelectProduct={selectProduct} />;
}
