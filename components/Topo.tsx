import Image from "next/image";
import { WHATSAPP } from "@/lib/dados";

// Tres fatos que resumem o negocio antes da pessoa rolar a pagina.
const etiquetas = ["Todo o Brasil", "Raio de 250 km", "6 veículos próprios"];

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

      {/* A cena repete o desenho da marca em tamanho grande: a Pajero
          atras, a van na frente, as duas apoiadas no arco. O brilho
          por tras vem do CSS, nao da imagem. */}
      <div className="cena">
        <Image
          src="/cena-veiculos.svg"
          alt="Pajero e van da TS Transportes sobre a estrada"
          width={1400}
          height={640}
          priority
        />
      </div>
    </section>
  );
}
