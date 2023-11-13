import { Inter } from "next/font/google";
import "../globals.css";
import Header from "./(layout)/Header";
import Footer from "./(layout)/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <div className="header-sps"></div>
          {children}
          <Footer />
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
