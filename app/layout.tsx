import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import QueryProvider from "./QueryProvider";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Ethnoes Wallet App",
  description: "Task By Ethnoes",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main className="flex justify-start items-start h-screen overflow-hidden bg-[white]">
          <QueryProvider>
            <Navbar />
            <main className="w-full overflow-y-scroll h-screen">
              <Header />
              {children}
            </main>
          </QueryProvider>
        </main>
      </body>
    </html>
  );
}
