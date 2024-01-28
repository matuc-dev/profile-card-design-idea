import type { Metadata } from "next";
import { Poppins, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const poppins = Poppins({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ["latin"] , variable: "--poppins" });
const notosans = Noto_Sans_JP({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ["latin"] , variable: "--notojp" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${notosans.variable}`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}