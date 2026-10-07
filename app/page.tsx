import Cabecalho from "@/components/Cabecalho";
import Topo from "@/components/Topo";
import Servicos from "@/components/Servicos";
import ComoFunciona from "@/components/ComoFunciona";
import Contato from "@/components/Contato";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main>
        <Topo />
        <Servicos />
        <ComoFunciona />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
