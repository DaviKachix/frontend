import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PAKIA System",
  description: "Pastors Kids Association Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Tailwind Config */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: "#73b804",
                      secondary: "#053aad"
                    },
                    fontFamily: {
                      sans: ["Noto Sans", "sans-serif"]
                    }
                  }
                }
              }
            `,
          }}
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />

        {/* Noto Sans */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
            font-family: 'Noto Sans', sans-serif;
          }

          * {
            transition: all 0.2s ease-in-out;
          }
        `}</style>

      </head>

      <body className="min-h-screen flex flex-col bg-white text-black font-semibold">

        {/* MAIN FULL WIDTH (NO CONTAINER CUT) */}
        <main className="flex-1 w-full">
          {children}
        </main>

       

      </body>
    </html>
  );
}