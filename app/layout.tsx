import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";
import ClientProvider from "@/components/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DALL-E-3 AI Art Gallery",
  description: "Created by Ankush",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <Header />

          <PromptInput />

          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
