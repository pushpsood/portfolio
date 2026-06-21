import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pushp Sood Portfolio",
  description: "Pushp Sood Software Development Portfolio",
  metadataBase: new URL("https://www.pushpsood.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://www.pushpsood.com",
    siteName: "Pushp Sood Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
