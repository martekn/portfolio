import "./globals.css";
import React from "react";
import { sourceCodePro, roboto } from "./fonts";
import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";
import Container from "@/components/ui/container";
import BlurredBackground from "@/components/ui/blurred-background";
import StarryBackground from "@/components/ui/starry-background";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} ${roboto.variable} min-h-screen antialiased `}>
        <BlurredBackground>
          <StarryBackground>
            <div className="min-h-screen mb-32">
              <SiteHeader />
              <Container>
                <main>{children}</main>
              </Container>
            </div>
            <SiteFooter />
          </StarryBackground>
        </BlurredBackground>
      </body>
    </html>
  );
};

export default RootLayout;
