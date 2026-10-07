type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-2xl border border-border bg-bg p-8 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
