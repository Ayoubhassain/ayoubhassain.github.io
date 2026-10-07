type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {children}
    </div>
  );
}
