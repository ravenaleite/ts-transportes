import Cabecalho from "@/components/Cabecalho";
import Topo from "@/components/Topo";
import Servicos from "@/components/Servicos";
import Frota from "@/components/Frota";
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
        <Frota />
        <ComoFunciona />
        <Contato />
      </main>
      <Rodape />
    </>
  );
}
