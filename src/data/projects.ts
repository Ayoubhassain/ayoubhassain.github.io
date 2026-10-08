export type ProjectKind = "personal" | "team" | "course";
export type ProjectCategory = "dev" | "devops";

export type Project = {
  id:          string;
  title:       string;
  description: string;   // one-liner shown at the top of the card
  problem:     string;   // what problem did you solve, and why did it matter?
  solution:    string;   // what did you build, and what are the key decisions?
  learned:     string;   // what did you take away — a pattern, a tool, an insight?
  stack:       string[]; // technologies used
  kind:        ProjectKind;
  category:    ProjectCategory;
  metrics:     { value: string; label: string }[]; // 3 key facts shown on the card
  image?:      string;   // architecture diagram or screenshot, in /public
  url?:        string;   // optional live demo
  github?:     string;   // optional source code
  privateNote?: string; // shown when source is not public
};
