import Image from "next/image";
import { WHATSAPP } from "@/lib/dados";

// SEGUNDA VERSAO. Antes era <img> cru: o navegador baixava o JPG
// inteiro, no formato antigo, logo no comeco do carregamento.
// O next/image serve WebP, corta no tamanho que a tela pede e so
// baixa quando a foto esta perto de aparecer.
export default function Frota() {
  return (
    <section className="faixa faixa-separada" id="frota">
      <div className="interno">
        <h2>A frota</h2>
        <p className="apoio">
          Seis veículos próprios e identificados. Carro executivo para o
          artista, van para a banda e os equipamentos, picape e utilitário
          para as encomendas.
        </p>

        <Image
          className="foto-frota"
          src="/frota.jpg"
          alt="Quatro veículos da TS Transportes enfileirados no pátio, com a van ao fundo"
          width={1200}
          height={580}
          sizes="(max-width: 760px) 100vw, 1160px"
        />

        <div className="dupla">
          <div className="item">
            <h3>Carro executivo</h3>
            <p>
              Leva o artista com conforto e privacidade, separado da equipe e
              dos equipamentos.
            </p>
          </div>
          <div className="item">
            <h3>Van</h3>
            <p>
              Banda, equipe e equipamentos no mesmo transporte, com espaço para
              a carga do show.
            </p>
          </div>
          <div className="item">
            <h3>Picape e utilitário</h3>
            <p>
              Coleta e entrega de encomendas nas cidades do raio de 250 km.
            </p>
          </div>
        </div>

        <div className="acoes">
          <a className="botao" href={WHATSAPP} target="_blank" rel="noreferrer">
            Pedir orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
