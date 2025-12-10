export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-950 to-zinc-950 ">
      {children}
    </div>
  );
}
