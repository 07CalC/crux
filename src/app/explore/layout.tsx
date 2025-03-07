import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Explore",
    description: "Explore different engineering colleges",
}

export default async function ExploreLayout({
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