// SkillBadge now delegates to Tag.
// Kept so existing imports don't break — prefer importing Tag directly in new code.
import Tag from "./Tag";

export default function SkillBadge({ label }: { label: string }) {
  return <Tag label={label} />;
}
