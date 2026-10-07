// A button for click actions (form submit, toggles, etc.).
// For navigation, use LinkButton instead.
//
// variant="primary" — filled, for the main action on a surface
// variant="ghost"   — outlined, for secondary actions
type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // allows onClick, disabled, type, etc.

// Styles are stored in an object — adding a new variant is one line here.
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-neutral-100 text-neutral-900 hover:bg-white",
  ghost:   "border border-border text-neutral-300 hover:border-accent hover:text-accent",
};

export default function Button({
  variant = "ghost",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-medium transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
