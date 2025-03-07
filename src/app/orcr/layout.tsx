import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orcr",
  description:
    "Check previous years opening and closing rank for JOSSA and CSAB",
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
