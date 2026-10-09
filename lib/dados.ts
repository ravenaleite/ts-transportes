// Um lugar so para os dados da empresa. Se o telefone mudar,
// muda aqui e muda na pagina inteira.
export const WHATSAPP = "https://wa.me/5587998100459";
export const TELEFONE_EXIBIDO = "(87) 99810-0459";
export const ENDERECO = "Rua 8, nº 66 — Cohab, Salgueiro-PE";
export const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Rua+8+66+Cohab+Salgueiro+PE";

// Salgueiro e a base: o deposito onde a carga da regiao se junta.
export const BASE = "Salgueiro";

// Cidades de onde sai a coleta que chega no deposito, confirmadas
// pelo dono. Alimentam o texto da secao, o areaServed do JSON-LD e
// a description. Mudou a area de atuacao, muda aqui.
export const CIDADES = [
  "Petrolina",
  "Serra Talhada",
  "Cabrobó",
  "Ouricuri",
  "Araripina",
] as const;
