import type { Metadata } from "next";
import { Raleway } from 'next/font/google';

//Toast Provider
import ToastProvider from "@/providers/Toast";
import Connector from "@/providers/Web3Provider";

//Styles
import "./styles/globals.css";

//Components
import DesktopBlockNotice from "@/Components/BlockNotice";

//Fonts
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

export const metadata: Metadata = {
  title: "Minereumswappool",
  description: "Minereumswappool Web3 App",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} text-sm md:text-base xl:text-lg min-w-min min-h-dvh font-raleway bg-white text-deepBlack antialiased`} suppressHydrationWarning>
        <Connector>
          <ToastProvider>
            <DesktopBlockNotice />
            {children}
          </ToastProvider>
        </Connector>
      </body>
    </html>
  );
}
