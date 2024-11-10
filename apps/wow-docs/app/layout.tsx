import "@/globals.css";

import Sidebar from "components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="kr">
      <Sidebar />
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
