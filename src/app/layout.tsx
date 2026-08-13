import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/context/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const displayFont = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Clipzo Media | Vinay - Cinematographer & Video Editor Portfolio",
  description:
    "Creative Cinematographer and video editor portfolio of Vinay (Clipzo Media). Hand-on experience in automotive shoots, gym edits, and commercial brand videos.",
  keywords: [
    "Clipzo Media",
    "Vinay Editor",
    "Cinematographer Jaipur",
    "Video Editor Portfolio",
    "Gym Video Editor",
    "Automotive Shoot Videographer",
    "Jaipur Video Editor",
  ],
  authors: [{ name: "Vinay" }],
  openGraph: {
    title: "Clipzo Media | Vinay - Cinematographer & Video Editor Portfolio",
    description:
      "Creative cinematography, gym edits, and commercial brand showcases by Vinay.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clipzo Media | Vinay - Cinematographer & Video Editor",
    description: "Creative cinematography and video editing portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sansFont.variable} ${displayFont.variable} antialiased bg-primary text-textWhite relative min-h-screen`}
      >
        {/* Custom cursor overlay */}
        <CustomCursor />

        {/* Cinematic noise overlay applied globally */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Smooth scroll context wrapping children */}
        <SmoothScrollProvider>
          <div className="relative z-10">{children}</div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
