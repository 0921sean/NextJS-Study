import Link from "next/link"
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <p>현대카드 무이자이벤트중</p>
        {children}
        </body>
    </html>
  );
}
