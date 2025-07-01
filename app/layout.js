import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Restaurant",
  description: "Restaurant website demo - Assesment task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased box-border`}>
        {children}
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{
            className: "border border-gray-200",
            duration: 3500,
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
