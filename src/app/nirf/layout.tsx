import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Nirf (coming soon) | cr#x",
  description: "Compare top Nirf colleges",
}

export default async function NirfLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
