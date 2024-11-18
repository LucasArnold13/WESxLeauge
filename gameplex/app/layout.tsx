import type { Metadata } from "next";
import { Chakra_Petch, Poppins } from "next/font/google";
import "../public/scss/style.scss";
import Bootstrap from "@/components/shared/Bootstrap";

export const metadata: Metadata = {
  title: "Gameplex - Esports and gaming NFT website",
  description: "Gameplex - Esports and gaming NFT website",
};
const ChakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--head-font",
});
const PoppinsFont = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--body-font",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Bootstrap>
        <body className={`${ChakraPetch.variable} ${PoppinsFont.variable}`}>
          {children}
        </body>
      </Bootstrap>
    </html>
  );
}
