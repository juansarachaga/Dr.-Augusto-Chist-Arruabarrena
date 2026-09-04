import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comunidad Malu | La Plata",
  description: "Acogimiento familiar, voluntariado y acompanamiento en La Plata.",
  colorScheme: "light",
  themeColor: "#f4f3ef",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}