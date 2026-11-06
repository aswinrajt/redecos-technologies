import React from "react";

export const strikingKeywords: string[] = [
  // Tool Types & Mechanisms
  "single cavity, multi-cavity, cam action, unscrewing, lifter, stripper plate, 3-plate, dual ejection, hot sprue or hot runner system",
  "multi-cavity, unscrewing, and hot-runner",
  "Flow analysis simulates the filling and packing phases",
  "reliable and predictable results",
  "Moldflow simulation",

  // Core Identity & Experience
  "precision tooling and mould design",
  "over a decade of experience",
  "complete solution provider",
  "Manufacturability & the Real design",
  "Manufacturability & the Real Design",
  "flexible end-to-end solutions",
  "quality and delivery expectations",
  "practical tooling expertise",

  // Engineering Mindset & Approach
  "simultaneous engineering approach",
  "Simultaneous engineering approach",
  "synchronized design approach",
  "Synchronized engineering",
  "designed for manufacturing",
  "trim weeks off your lead times",
  "build friendly",
  "first time right part",
  "first-time-right part",
  "first-time-right mould qualification",

  // Technical Tooling & Standards
  "solid CAD environment",
  "Solid CAD environment",
  "3D solid environment",
  "3D Solid CAD",
  "3D solid assemblies",
  "Class-A surfaces",
  "A-class surfaces",
  "Class-A surfacing",
  "parametric and associative",
  "steel safe condition",
  "steel-safe condition",
  "inspect the design for interference",
  "precise 3D CAD models",

  // Core Disciplines
  "Complex machining planning",
  "Plastic Material Flow analysis",
  "3D mechanical Modelling",
];

// Sort descending by length so longer phrases take precedence over shorter substrings
const sortedKeywords = [...strikingKeywords].sort((a, b) => b.length - a.length);

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const keywordRegex = new RegExp(`(${sortedKeywords.map(escapeRegex).join("|")})`, "gi");

export function HighlightKeywords({ text }: { text: string }): React.ReactElement {
  if (!text) return <></>;

  const parts = text.split(keywordRegex);
  if (parts.length <= 1) {
    return <span className="highlight-text-content">{text}</span>;
  }

  return (
    <span className="highlight-text-content">
      {parts.map((part, index) => {
        const isMatch = sortedKeywords.some(
          (k) => k.toLowerCase() === part.toLowerCase(),
        );
        if (isMatch) {
          return (
            <strong key={index} className="highlight-kw">
              {part}
            </strong>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
}

