// A curva que existe embaixo do veiculo na marca: uma estrada
// cruzando o horizonte. Repetida aqui para separar as secoes.
export default function Arco({ cor = "#ffffff" }: { cor?: string }) {
  return (
    <svg
      className="arco"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill={cor}
        d="M0 112 C280 -14 920 -14 1200 112 C920 36 280 36 0 112 Z"
      />
    </svg>
  );
}
