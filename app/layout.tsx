import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACA | Augusto Chisté Arruabarrena",
  description: "Augusto Chisté Arruabarrena - Cirugía Plástica.",
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f3ef"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}