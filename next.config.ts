import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. OBLIGATORIO: Genera HTML/CSS/JS estático en la carpeta 'out'
  output: 'export',

  // 2. OBLIGATORIO: Desactiva el servidor de optimización de imágenes
  // (Sin esto, la app crasheará al intentar cargar una imagen)
  images: {
    unoptimized: true,
  },

  // 3. PREVENCIÓN: Desactiva el trailing slash para evitar problemas de rutas
  trailingSlash: false,
};

export default nextConfig;