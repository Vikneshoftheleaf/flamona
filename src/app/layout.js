import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/067fc88846.js" crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
      <GoogleAnalytics gaId="G-WNKR8EHTC1" />
    </html>
  );
}
