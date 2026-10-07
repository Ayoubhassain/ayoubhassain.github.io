export type Project = {
  id:          string;
  title:       string;
  description: string;   // one-liner shown at the top of the card
  problem:     string;   // what problem did you solve, and why did it matter?
  solution:    string;   // what did you build, and what are the key decisions?
  learned:     string;   // what did you take away — a pattern, a tool, an insight?
  stack:       string[]; // technologies used
  url?:        string;   // optional live demo
  github?:     string;   // optional source code
  privateNote?: string; // shown when source is not public
};
