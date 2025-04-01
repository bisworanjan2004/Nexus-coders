import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus Coders",
  description: "Professional portfolio of Nexus Coders, a full stack web solutions team specializing in modern web applications.",
  icons: {
    icon: "/favicon.ico",
    // You can add more icons here if you have them
    shortcut: "/fav.png",
    // apple: "/N.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark"
          enableSystem 
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            {/* WhatsApp Floating Button */}
            <a
              href="https://wa.me/9776887870"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
            >
              <FaWhatsapp className="h-8 w-8" />
            </a>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}