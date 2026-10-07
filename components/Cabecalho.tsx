import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-interno">
        <Link href="/" className="marca" aria-label="TS Transportes, início">
          <Image
            src="/logo-ts-horizontal.svg"
            alt="TS Transportes"
            width={224}
            height={40}
            priority
          />
        </Link>

        <nav className="menu" aria-label="Navegação principal">
          <Link href="#bandas">Banda e artista</Link>
          <Link href="#encomendas">Coleta e envio</Link>
          <Link href="#como-funciona">Como funciona</Link>
          <Link href="#contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
