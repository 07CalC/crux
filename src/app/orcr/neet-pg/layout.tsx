
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEET PG Cutoffs | cr#x",
  description:
    "Check previous years opening and closing rank for NEET PG (Medical Postgraduate) admissions | cr#x",
};

export default async function NeetPgLayout({
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
