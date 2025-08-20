import type { Metadata } from "next";
import "../styles/globals.css";
import ClientNavbar from "@/components/ClientNavbar";

export const metadata: Metadata = {
  title: "Sheham Mohammed — Software Developer",
  description: "Portfolio site showcasing projects and experience."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <ClientNavbar />
        <main className="min-h-dvh w-full">{children}</main>

      </body>
    </html>
  );
}
