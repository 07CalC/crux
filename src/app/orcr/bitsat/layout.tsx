

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BITSAT Cutoffs | cr#x",
  description:
    "Check previous years opening and closing rank for | cr#x",
};

export default async function OrcrLayout({
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
