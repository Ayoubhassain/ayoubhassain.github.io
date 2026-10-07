type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full border border-border bg-bg-subtle px-3 py-1 text-xs font-medium text-ink-muted">
      {label}
    </span>
  );
}
