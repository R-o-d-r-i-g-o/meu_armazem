import type { Metadata } from "next";
import localFont from "next/font/local";
import AdSense from "@/components/common/AdSense";

import "./globals.css";

export const metadata: Metadata = {
  title: "Meus Utiliários",
  description: "Generated by create next app",
};

const ageo = localFont({
  src: [
    {
      path: "../public/font/AgeoPersonalUse.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/AgeoPersonalUse-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/font/AgeoPersonalUse-ExtraBold.otf",
      weight: "850",
      style: "extra-bold",
    },
    {
      path: "../public/font/AgeoPersonalUse-Medium.otf",
      weight: "500",
      style: "medium",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <AdSense pId="ca-pub-5994634934941500" />
      </head>
      <body className={ageo.className}>{children}</body>
    </html>
  );
}
