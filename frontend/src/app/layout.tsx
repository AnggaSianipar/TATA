import type { Metadata } from "next";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const source = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TATA – TampahanTa",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${bricolage.variable} ${source.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
