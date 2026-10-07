import { ENDERECO } from "@/lib/dados";

// O ano fica fixo de proposito. Chamar new Date() aqui quebra a
// geracao da pagina no build: o Next precisa saber o HTML de
// antemao, e a hora atual muda a cada render.
const ANO = 2026;

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-interno">
        <span>TS Transportes · {ENDERECO}</span>
        <span>© {ANO}</span>
      </div>
    </footer>
  );
}
