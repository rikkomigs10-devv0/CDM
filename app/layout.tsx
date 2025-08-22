import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dancing-script",
})

export const metadata: Metadata = {
  title: "CDM Enterprise - Committed. Diligent. Meaningful.",
  description: "Delivering tailored-fit solutions with integrity and impact",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${dancingScript.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
