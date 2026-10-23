import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@layout/NavBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zachary Sorenson | Full Stack Developer",
  description: "Portfolio and blog of Zachary Sorenson, full stack developer.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col flex-1 items-center justify-center font-sans text-[#F5ECEE]">
          <header className="flex flex-col justify-start w-full">
            <h1 className="text-3xl my-4 ml-8 w-full">
              Zachary Sorenson | Full Stack Developer
            </h1>
            <NavBar />
          </header>
          <main className="flex flex-1 w-full h-full p-2 flex-col items-start justify-between py-3 px-16 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
