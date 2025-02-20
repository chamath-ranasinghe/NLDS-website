import {MetaData} from "next"; // Will need for tsx
import "./App.css";

export const metadata = {
  title: "NLDS 2024",
  description: "Official Website of National Leadership Development Seminar 2024 by AIESEC in Sri Lanka",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap",
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
