import type { Metadata } from "next";
import "@fontsource/inter/latin.css";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: {
    default: "Pushp Sood Portfolio",
    template: "%s | Pushp Sood Portfolio",
  },
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
      <body>
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
