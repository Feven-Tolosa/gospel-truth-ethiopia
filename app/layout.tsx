import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Serif_Ethiopic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const notoEthiopic = Noto_Serif_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-noto-ethiopic",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gospel Truth Church Ethiopia | የወንጌል እውነት ቤተ ክርስቲያን",
  description:
    "An evangelical church in Jimma, Ethiopia committed to expository teaching, sound doctrine, and the bold proclamation of the gospel across Southern, Southwestern, and Western Ethiopia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${notoEthiopic.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
