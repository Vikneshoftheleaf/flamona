import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/067fc88846.js" crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Script id="next" async src="https://www.googletagmanager.com/gtag/js?id=G-WNKR8EHTC1"></Script>
        <Script id="next">
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WNKR8EHTC1');
        </Script>
        <main>
          {children}
        </main>
      </body>
      <GoogleAnalytics gaId="G-WNKR8EHTC1" />
    </html>
  );
}
