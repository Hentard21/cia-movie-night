import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "@/contexts/UserContext";
import { AuthGuard } from "@/components/AuthGuard";

export const metadata: Metadata = {
  title: "Movie Night — Wednesday Session",
  description: "Vote for the next movie. Student community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#F5F5F7] text-[#1d1d1f] font-sans">
        <UserProvider>
          <AuthGuard>{children}</AuthGuard>
        </UserProvider>
      </body>
    </html>
  );
}
