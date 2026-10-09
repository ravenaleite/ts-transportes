import Image from "next/image";
import { WHATSAPP, CIDADES, BASE } from "@/lib/dados";

export default function Servicos() {
  return (
    <>
      {/* Preto: a estrada de madrugada, o show. */}
      <section className="faixa" id="bandas">
        <div className="interno">
          <h2>Banda e artista</h2>

          <Image
            className="foto-secao"
            src="/van-sprinter.jpg"
            alt="Van Mercedes-Benz Sprinter preta da TS Transportes, vista de lado"
            width={720}
            height={520}
            sizes="(max-width: 760px) 100vw, 720px"
          />
          <p className="apoio">
            Levamos o artista, a banda, a equipe e os equipamentos até o palco,
            em qualquer cidade do Brasil. Motorista experiente em estrada longa
            e agenda combinada com a produção.
          </p>

          <div className="dupla">
            <div className="item">
              <h3>Todo o Brasil</h3>
              <p>
                Turnê, show isolado ou temporada. A rota é montada junto com a
                produção antes de fechar.
              </p>
            </div>
            <div className="item">
              <h3>Artista em carro próprio</h3>
              <p>
                O artista viaja na Pajero, com privacidade e descanso. A banda, a
                equipe e os equipamentos seguem na van.
              </p>
            </div>
            <div className="item">
              <h3>Combinado por escrito</h3>
              <p>
                Valor, horário de saída e de chegada acertados antes da viagem.
                Nada muda no meio do caminho.
              </p>
            </div>
          </div>

          <div className="acoes">
            <a
              className="botao"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              Pedir orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Branco: a operação de dia. Mesmas duas cores da marca,
          usadas para separar os dois serviços. */}
      <section className="faixa faixa-separada" id="encomendas">
        <div className="interno">
          <h2>Coleta e envio</h2>

          <Image
            className="foto-secao"
            src="/van-master.jpg"
            alt="Van Renault Master branca da TS Transportes, vista de frente"
            width={900}
            height={850}
            sizes="(max-width: 760px) 100vw, 900px"
          />
          <p className="apoio">
            Depósito próprio em {BASE}, atendendo um raio de 250 km. A carga
            da região se junta no depósito e sai separada por rota: o veículo
            que segue por uma BR entrega em todas as cidades daquele trecho.
          </p>

          <div className="dupla">
            <div className="item">
              <h3>Raio de 250 km</h3>
              <p>
                Coleta e entrega em {CIDADES.join(", ")} e nas demais
                cidades do sertão dentro desse alcance.
              </p>
            </div>
            <div className="item">
              <h3>Ponto de coleta</h3>
              <p>
                Deixe a encomenda na Rua 8, nº 66, Cohab, ou combine a retirada
                pelo WhatsApp.
              </p>
            </div>
            <div className="item">
              <h3>Para lojas e marketplaces</h3>
              <p>
                Volume recorrente, rota fixa e contato direto com quem organiza a
                operação.
              </p>
            </div>
          </div>

          <div className="acoes">
            <a
              className="botao"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              Falar sobre coleta
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
