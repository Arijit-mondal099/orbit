import localFont from "next/font/local";
import { Playfair_Display } from "next/font/google";

export const normalFont = localFont({
  src: "../public/fonts/normal.ttf",
  weight: "400",
  variable: "--font-normal",
  display: "swap",
});

export const pixelFont = localFont({
  src: "../public/fonts/pixel.ttf",
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
