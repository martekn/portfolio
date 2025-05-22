import "./globals.css";
import React from "react";
import { sourceCodePro, roboto } from "./fonts";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";
import Container from "@/components/ui/container";
import BlurredBackground from "@/components/ui/blurred-background";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} ${roboto.variable} min-h-screen antialiased `}>
        <BlurredBackground>
          <div className="min-h-screen">
            <SiteHeader />
            <Container>
              <main>{children}</main>
            </Container>
          </div>
          <SiteFooter />
        </BlurredBackground>
      </body>
    </html>
  );
};

export default RootLayout;
