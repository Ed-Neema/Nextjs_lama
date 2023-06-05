import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Varela_Round } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "../../context/ThemeContext";

const valera = Varela_Round({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "MyBlog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={valera.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
