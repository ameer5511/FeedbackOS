import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackOS",
  description: "Customer feedback analytics for product teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="app-html">
      <body className="app-body">
        {children}
      </body>
    </html>
  );
}
