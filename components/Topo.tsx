import Arco from "./Arco";
import { WHATSAPP } from "@/lib/dados";

// Tres fatos que resumem o negocio antes da pessoa rolar a pagina.
const etiquetas = [
  "Todo o Brasil",
  "Depósito próprio em Salgueiro",
  "Direto com quem dirige",
];

export default function Topo() {
  return (
    <section className="topo" id="inicio">
      <div className="interno">
        {/* O h1 e frase de marca, nao lista de servicos. Quem carrega as
    palavras que as pessoas procuram e o paragrafo logo abaixo e o
    <title> da pagina. */}
        <h1>A estrada é nossa. O horário é seu.</h1>
        <p>
          Transporte de bandas, artistas e equipes de show para todo o Brasil,
          e coleta e entrega de encomendas em Salgueiro-PE e região.
          Atendimento direto com quem dirige, sem intermediário.
        </p>

        <ul className="etiquetas">
          {etiquetas.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>

        <div className="acoes">
          <a
            className="botao"
            href={`${WHATSAPP}?text=${encodeURIComponent(
              "Olá! Quero um orçamento para transporte de banda e artista."
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Banda e artista
          </a>
          <a
            className="botao-vazado"
            href={`${WHATSAPP}?text=${encodeURIComponent(
              "Olá! Quero fazer uma coleta ou um envio."
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Coleta e envio
          </a>
        </div>
      </div>

      {/* O arco e o elemento da marca: uma estrada cruzando o horizonte.
          Fecha o topo e separa da proxima secao. */}
      <Arco />
    </section>
  );
}
