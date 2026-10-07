// Numeros aqui porque isto e de fato uma sequencia: a encomenda
// passa por essas quatro etapas, nessa ordem.
const etapas = [
  {
    titulo: "Você fala com a gente",
    texto:
      "Conte o que precisa enviar, de onde e para onde. Respondemos com o prazo e o valor.",
  },
  {
    titulo: "Coleta ou entrega no ponto",
    texto:
      "A gente busca onde você estiver, ou você deixa a encomenda no ponto em Salgueiro.",
  },
  {
    titulo: "Separação por rota",
    texto:
      "A carga é organizada por destino antes de sair, para não rodar à toa.",
  },
  {
    titulo: "Entrega e confirmação",
    texto:
      "Entregamos no endereço e avisamos você assim que a encomenda chega.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="faixa faixa-separada" id="como-funciona">
      <div className="interno">
        <h2>Como funciona</h2>
        <ol className="passos">
          {etapas.map((etapa) => (
            <li className="passo" key={etapa.titulo}>
              <div>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
