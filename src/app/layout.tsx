import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graphics",
  description: "Приложение, позволяющее создавать доски планирования задач",
  authors: [{ name: 'Daniil Itsyxon', url: 'https://github.com/Itsyxon/' }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#101015]`}
      >
        <ModalProvider>{children}
        </ModalProvider>
      </body>
    </html>
  );
}
