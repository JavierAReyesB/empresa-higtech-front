import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Dancing_Script } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-dancing",
});
export const metadata: Metadata = {
  title: "Omar Somoza - Project Director & Technical Leader",
  description:
    "Project director and technical leader with a passion for transforming business challenges into successful digital solutions.",
};

// Split into client component and server layout
import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pacifico.variable} ${dancingScript.variable}`}
      suppressHydrationWarning
    >
      <body className="geo-bg antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <ClientLayout>
            <Header />
            {children}
            <Footer />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}