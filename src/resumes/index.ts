import type { ResumeData } from "../types/resume";

const resumeModules = import.meta.glob<ResumeData>("./*.json", {
  eager: true,
  import: "default",
});

export const resumes: ResumeData[] = Object.values(resumeModules);

export function getResumeBySlug(slug: string): ResumeData | undefined {
  return resumes.find((r) => r.slug === slug);
}
