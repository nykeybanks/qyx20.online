import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkspaceContent } from "@/components/workspace/workspace-content";
import { sections, type Section } from "@/lib/workspace";

const routeSections = Object.keys(sections).filter((section) => section !== "overview") as Section[];
export const dynamicParams = false;

export function generateStaticParams() {
  return routeSections.map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  const entry = routeSections.includes(section as Section) ? sections[section as Section] : null;
  return { title: entry ? `${entry.title} — QYX20` : "Page not found — QYX20", description: entry?.description };
}

export default async function SectionPage({ params, searchParams }: { params: Promise<{ section: string }>; searchParams: Promise<{ module?: string | string[] }> }) {
  const { section } = await params;
  if (!routeSections.includes(section as Section)) notFound();
  const { module } = await searchParams;
  return <WorkspaceContent section={section as Section} initialModule={typeof module === "string" ? module : undefined} />;
}
