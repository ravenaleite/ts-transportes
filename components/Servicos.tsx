import { WHATSAPP } from "@/lib/dados";

export default function Servicos() {
  return (
    <>
      {/* Preto: a estrada de madrugada, o show. */}
      <section className="faixa" id="bandas">
        <div className="interno">
          <h2>Transporte para bandas</h2>
          <p className="apoio">
            Levamos a banda, a equipe e os equipamentos até o palco, em qualquer
            cidade do Brasil. Motorista experiente em estrada longa e agenda
            combinada com a produção.
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
              <h3>Banda e equipe juntas</h3>
              <p>
                Músicos, técnicos e equipamento no mesmo transporte, sem precisar
                dividir em dois veículos.
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
      <section className="faixa faixa-clara" id="encomendas">
        <div className="interno">
          <h2>Encomendas</h2>
          <p className="apoio">
            Ponto de coleta e entrega em Salgueiro, atendendo um raio de 250 km.
            Recebemos a carga, separamos por rota e entregamos no endereço.
          </p>

          <div className="dupla">
            <div className="item">
              <h3>Raio de 250 km</h3>
              <p>
                Salgueiro e as cidades do sertão de Pernambuco dentro desse
                alcance.
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
              Falar sobre entregas
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
