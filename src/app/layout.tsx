import "./globals.css";

import React from "react";

import { sourceCodePro, roboto } from "./fonts";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} ${roboto.variable} min-h-screen antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
