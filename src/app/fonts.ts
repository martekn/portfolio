import { Source_Code_Pro, Roboto } from "next/font/google";

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-source-code-pro",
  fallback: ["Courier New", "monospace"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  display: "swap",
  variable: "--font-roboto",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
