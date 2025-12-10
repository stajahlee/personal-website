import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christmas Trivia Quiz",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎄</text></svg>",
  },
};

export default function ChristmasLayout({
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
