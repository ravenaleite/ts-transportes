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
              "Olá! Quero um orçamento para transporte da minha banda."
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Fretar para minha banda
          </a>
          <a
            className="botao-vazado"
            href={`${WHATSAPP}?text=${encodeURIComponent(
              "Olá! Quero enviar uma encomenda."
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Enviar encomenda
          </a>
        </div>
      </div>
      <Arco />
    </section>
  );
}
