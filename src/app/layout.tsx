import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Server Components",
  description: "Como funcionam os Server Components do React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Main content */}
          <main className="flex-grow bg-mint mx-6 sm:mx-16 md:mx-32 lg:mx-64 xl:mx-96 mt-16">
            {children}
          </main>

          {/* Fixed footer */}
          <footer className="text-center py-4 text-sm text-gray-400">
            Desenvolvido por{" "}
            <Link
              href={"https://felipepepe.dev"}
              target="_blank"
              className="underline"
            >
              Felipe Pêpe
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
