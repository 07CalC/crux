import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orcr | cr#x",
  description:
    "Check previous years opening and closing rank for JOSSA, CSAB and BITSAT | cr#x",
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
