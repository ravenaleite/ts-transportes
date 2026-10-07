import type { NextConfig } from "next";

// Quando EXPORTAR=1, o Next gera arquivos .html de verdade numa
// pasta out/ — dá para abrir com dois cliques, igual a um site
// em HTML puro. Sem a variável, o build é o normal, que é o
// que a Vercel usa.
const exportando = process.env.EXPORTAR === "1";

const nextConfig: NextConfig = {
  output: exportando ? "export" : undefined,
  images: {
    // A otimização de imagem do Next precisa de servidor.
    // Na exportação estática ela não existe, então desligamos.
    unoptimized: exportando,
  },
};

export default nextConfig;
