import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ACA | Augusto Chisté Arruabarrena",
    short_name: "ACA",
    description: "Augusto Chisté Arruabarrena - Cirugía Plástica.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f4f3ef",
    theme_color: "#0b234b",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }]
  };
}