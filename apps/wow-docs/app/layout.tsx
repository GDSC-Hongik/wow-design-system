import "@/globals.css";

import Sidebar from "@components/Sidebar";
import { styled } from "@styled-system/jsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "와우 디자인 시스템",
  description: "GDSC Hongik 디자인 시스템",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <styled.main
          height="100vh"
          left="250px"
          padding="70px 102px 0 101px"
          position="relative"
          width="calc(100vw - 250px)"
        >
          {children}
        </styled.main>
      </body>
    </html>
  );
};

export default RootLayout;
