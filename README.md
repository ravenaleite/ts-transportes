# TS Transportes

Site institucional da **TS Transportes**, transportadora de Salgueiro-PE que
faz translado de bandas e artistas para shows em todo o Brasil e coleta e
entrega de encomendas num raio de 250 km.

**No ar:** https://ts-transportes.vercel.app

---

## O que é

Empresa real, conteúdo real. Os textos, o telefone, o endereço, o número de
veículos e as fotos da frota vieram do dono da transportadora. Não há "lorem
ipsum" nem foto de banco de imagens em lugar nenhum.

Uma página só, com quatro seções e dois caminhos de contato separados — um
para produção de show, outro para quem quer mandar uma encomenda —, porque
são dois públicos que não se confundem.

## Stack

| | |
|---|---|
| Framework | Next.js 16.4 (App Router) |
| Linguagem | TypeScript |
| React | 19.3 |
| Estilo | CSS puro com custom properties, sem framework |
| Fontes | `next/font` (Anton + Archivo, auto-hospedadas) |
| Hospedagem | Vercel |

Sem biblioteca de componentes e sem Tailwind. Numa página dessas o CSS
próprio sai menor que o custo de carregar um framework inteiro, e o controle
sobre o resultado é total.

## Performance

Medições feitas com o Lighthouse do Chrome, modo **mobile**, em **janela
anônima e sem extensões** — extensão de navegador injeta JavaScript na
página e contamina o resultado.

| Métrica | Antes | Depois | |
|---|---|---|---|
| **Performance** | 81 | **97** | +16 |
| **Largest Contentful Paint** | 4,2 s | **2,3 s** | passa a meta de 2,5 s |
| Total Blocking Time | 250 ms | **150 ms** | passa a meta de 200 ms |
| Cumulative Layout Shift | 0,031 | **0** | |
| First Contentful Paint | 0,8 s | 0,8 s | sem mudança |
| Speed Index | 0,8 s | 1,2 s | piorou 0,4 s |
| Acessibilidade | 100 | 100 | |
| Boas Práticas | 100 | 100 | |
| SEO | 100 | 100 | |

Os relatórios completos estão versionados neste repositório:
[`lighthouse-antes.html`](./lighthouse-antes.html) e
[`lighthouse-depois.html`](./lighthouse-depois.html). Baixe e abra no
navegador para conferir.

### O que mudou

As três fotos eram `<img>` cru: JPG inteiro, formato antigo, as três baixadas
logo no início do carregamento (476 KiB somados). Elas disputavam banda com a
fonte e o JavaScript de que o topo da página precisava para terminar de
desenhar.

Troquei por `next/image`, que resolve três coisas de uma vez:

- serve **WebP** no lugar do JPG
- gera **vários tamanhos** e entrega o que couber na tela, em vez de mandar a
  imagem de 1200px para um celular
- aplica **lazy loading**: a foto só é baixada quando está perto de aparecer

O atributo `sizes` em cada imagem informa quanto espaço ela ocupa em cada
largura de tela, para o navegador saber qual arquivo pedir.

### O custo da escolha

O Speed Index piorou 0,4 s. Isso é o lazy loading: as fotos entram depois,
então a tela leva um pouco mais para ficar visualmente completa.

A troca foi deliberada. O LCP é um dos três **Core Web Vitals** e pesa no
ranqueamento do Google; o Speed Index não é. Perder 0,4 s num indicador
secundário para ganhar 1,9 s no principal compensa.

### O que ficou de fora

O relatório ainda aponta `Render-blocking requests` (~120 ms) e sobra de
JavaScript não usado do próprio framework. Com 97 de performance, mexer nisso
teria retorno pequeno diante do risco de quebrar algo. Fica registrado.

## Acessibilidade

100 no Lighthouse, mas o número é consequência, não objetivo:

- estrutura semântica — `<header>`, `<nav aria-label>`, `<main>`, `<footer>`,
  um único `<h1>`, listas que são `<ul>` de verdade
- `lang="pt-BR"` no `<html>`
- contraste verificado contra o critério WCAG AA (4,5:1 em texto normal,
  3:1 em texto grande)
- `:focus-visible` em todos os elementos navegáveis por teclado
- `prefers-reduced-motion` respeitado
- `width` e `height` em toda imagem, o que reserva o espaço antes de a foto
  chegar e é o motivo de o CLS ser zero
- toda imagem com `alt` que descreve o conteúdo, não o arquivo

Teste rápido de estrutura: desative o CSS da página. O conteúdo continua
legível e na ordem correta, de cima para baixo — que é exatamente como um
leitor de tela a percorre.

## SEO local

- `<title>` e `description` com o serviço e a cidade
- dados estruturados **JSON-LD** do tipo `MovingCompany`, com endereço,
  telefone, cidade e área atendida
- Open Graph e Twitter Card com imagem própria de 1200×630
- `canonical` apontando para o endereço de produção

O `<h1>` é frase de marca e não carrega palavra-chave. Isso foi decisão
consciente: os termos de busca ficaram no `<title>` e no parágrafo de apoio,
que é onde fazem mais efeito sem engessar o texto.

## Decisões que valem explicação

**Ano fixo no rodapé.** Chamar `new Date()` durante a renderização obriga o
Next a montar a página a cada acesso e derruba a geração estática. O build
gera um `index.html` pronto, e é isso que dá o tempo de resposta e a
indexação. O ano ficou constante de propósito.

**Fonte de dados única.** Telefone, WhatsApp, endereço e link do mapa moram
só em `lib/dados.ts`. Mudou o telefone, muda num lugar.

**CSS por tokens.** As cores e a largura máxima do conteúdo são custom
properties no `:root`. A paleta inteira é preto, branco e três cinzas.

## Rodando o projeto

```bash
npm install
npm run dev          # desenvolvimento, em localhost:3000
npm run build        # build de produção
npm start            # sobe o build — é nele que se mede o Lighthouse
```

Medir Lighthouse em `npm run dev` não vale: o modo de desenvolvimento serve
código sem compressão e com ferramentas de recarregamento ligadas.

Há também `npm run exportar`, que gera arquivos `.html` estáticos em `out/`
para abrir sem servidor. A otimização de imagem do Next não funciona nesse
modo, então ele serve para inspeção, não para publicar.

## Estrutura

```
app/
  layout.tsx        fontes, metadata, JSON-LD
  page.tsx          monta as seções
  globals.css       tokens e todo o estilo
components/
  Cabecalho.tsx     logo e navegação
  Topo.tsx          título, etiquetas e os dois botões
  Servicos.tsx      "Banda e artista" e "Coleta e envio"
  Frota.tsx         os seis veículos
  ComoFunciona.tsx  as etapas do atendimento
  Contato.tsx       telefone, endereço e mapa
  Rodape.tsx
  Arco.tsx          o arco da marca, em SVG
lib/
  dados.ts          telefone, endereço e links, num lugar só
public/             logos, fotos e imagem social
```

---

Projeto desenvolvido por **Ravena Leite** como entrega da mentoria DevVagas.

[GitHub](https://github.com/ravenaleite)
