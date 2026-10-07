import Arco from "./Arco";
import { WHATSAPP, TELEFONE_EXIBIDO, ENDERECO, MAPS } from "@/lib/dados";

export default function Contato() {
  return (
    <section className="faixa" id="contato">
      <div className="interno">
        <h2>Fale com a TS</h2>
        <p className="apoio">
          Atendimento direto com quem organiza a operação. Chame no WhatsApp e
          já diga de onde para onde — assim a resposta vem com o valor.
        </p>

        <div className="contato-grade">
          <div>
            <div className="rotulo">WhatsApp</div>
            <a
              className="dado"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              {TELEFONE_EXIBIDO}
            </a>
          </div>

          <div>
            <div className="rotulo">Onde estamos</div>
            <a className="dado" href={MAPS} target="_blank" rel="noreferrer">
              {ENDERECO}
            </a>
          </div>

          <div>
            <div className="rotulo">Atendemos</div>
            <p className="apoio" style={{ marginTop: 0 }}>
              Bandas em todo o Brasil. Encomendas em Salgueiro e num raio de
              250 km.
            </p>
          </div>
        </div>

        <div className="acoes">
          <a className="botao" href={WHATSAPP} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
        </div>
      </div>
      <Arco />
    </section>
  );
}
