type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      {children}
    </div>
  );
}
