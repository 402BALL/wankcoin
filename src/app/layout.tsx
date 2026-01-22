import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WankCoin - Private Adult Payments",
  description: "Pay for premium adult content anonymously. No trace on your bank statement. Powered by WankCard virtual cards.",
  keywords: ["wankcoin", "crypto", "adult", "payments", "anonymous", "privacy", "wankcard"],
  openGraph: {
    title: "WankCoin - Private Adult Payments",
    description: "Pay for premium adult content anonymously. No trace on your bank statement.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
