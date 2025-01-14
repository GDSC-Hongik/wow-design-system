import "@/globals.css";

import Navbar from "@components/Navbar/Navbar";
import { styled } from "@styled-system/jsx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "와우 디자인 시스템", template: "%s | 와우 디자인 시스템" },
  description: "GDSC Hongik 디자인 시스템",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_CONSOLE_KEY,
    other: {
      "naver-site-verification":
        process.env.NEXT_PUBLIC_NAVER_CONSOLE_KEY ?? "",
    },
  },
  openGraph: {
    title: "와우 디자인 시스템",
    description: "GDSC Hongik 디자인 시스템",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/images/og-image.png`],
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    siteName: "와우 디자인 시스템",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "와우 디자인 시스템",
    description: "GDSC Hongik 디자인 시스템",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/images/og-image.png`],
  },
  icons: {
    icon: "/images/logo.svg",
    apple: "/images/logo.svg",
    other: [
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/images/logo.svg",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <styled.main
          height="100vh"
          marginLeft="250px"
          padding="70px 102px 0 101px"
          position="relative"
          width="100vw"
        >
          {children}
        </styled.main>
      </body>
    </html>
  );
};

export default RootLayout;
