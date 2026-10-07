import Arco from "./Arco";
import { WHATSAPP } from "@/lib/dados";

export default function Topo() {
  return (
    <section className="topo" id="inicio">
      <div className="interno">
        <h1>Sua carga e sua banda chegam na hora</h1>
        <p>
          Transporte para bandas e equipes de show em todo o Brasil, e entrega
          de encomendas em Salgueiro e região. Atendimento direto, sem
          intermediário.
        </p>

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
      <Arco />
    </section>
  );
}
