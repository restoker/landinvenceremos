import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const interFont = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Vlady Aranya - Candidato a alcalde Distrito San Sebastian",
  description: "Vlady Aranya - Candidato a alcalde Distrito San Sebastian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      className={`${interFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
