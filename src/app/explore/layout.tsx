import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Explore | cr#x",
  description: "Explore different engineering colleges | cr#x",
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
