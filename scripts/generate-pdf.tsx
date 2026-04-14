import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { MyDocument } from "../src/resume/Document";
import type { ResumeData } from "../src/types/resume";
import fs from "fs";
import path from "path";

const resumesDir = path.resolve(import.meta.dirname, "../src/resumes");
const outputDir = path.resolve(import.meta.dirname, "../output");

async function main() {
  const nameArgIndex = process.argv.indexOf("--name");
  const nameArg = nameArgIndex !== -1 ? process.argv[nameArgIndex + 1] : undefined;

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(resumesDir).filter((f) => f.endsWith(".json"));

  if (files.length === 0) {
    console.log("No resume JSON files found in src/resumes/");
    return;
  }

  let generated = 0;
  for (const file of files) {
    const raw = fs.readFileSync(path.join(resumesDir, file), "utf-8");
    const data: ResumeData = JSON.parse(raw);

    if (nameArg && data.slug !== nameArg) continue;

    const designation = data.personalInfo.designation
      ? `-${data.personalInfo.designation.toLowerCase().replace(/[\s\/]+/g, "-")}`
      : "";
    const outputPath = path.join(outputDir, `${data.slug}${designation}.pdf`);
    const buffer = await renderToBuffer(
      React.createElement(MyDocument, { data })
    );
    fs.writeFileSync(outputPath, buffer);
    console.log(`Generated: ${outputPath}`);
    generated++;
  }

  if (nameArg && generated === 0) {
    console.log(`No resume found with slug "${nameArg}"`);
    process.exit(1);
  }

  console.log(`\nDone. ${generated} PDF(s) generated in output/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
