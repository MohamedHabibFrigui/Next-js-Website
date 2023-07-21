import Navbar from "@/component/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/component/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/component/authProvider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Js Website",
  description: "First website created with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
