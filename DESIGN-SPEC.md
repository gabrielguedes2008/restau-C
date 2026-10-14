# BRAVO — Parrilla & Bar | Spec de design

## Objetivo e referências

Criar um site de restaurante inspirado nas referências locais, com composição reconhecível e execução própria. Este documento é uma especificação; o site ainda não foi implementado.

- `ref/branding.jpg`: identidade, atmosfera de fogo, vermelho profundo, marca branca, desenho artesanal e aplicações impressas.
- `ref/website-design.jpg`: arquitetura visual do site, hero fotográfico, apresentação do menu, ambiente, localização, contato e rodapé.

As medidas e cores abaixo são propostas para o novo projeto, não valores extraídos com precisão dos arquivos. As referências são imagens estáticas: não permitem confirmar fontes, interações, medidas CSS ou versões mobile.

## Nova marca

**Nome de trabalho:** BRAVO. **Assinatura:** Parrilla & Bar. **Frase:** Fogo, sabor e bons encontros.

Usar BRAVO em todos os textos e aplicações. O nome é uma proposta criativa; disponibilidade comercial e domínio ainda não foram verificados. Não reutilizar BRASAL, STEAKOUT, datas de fundação, endereços, telefones ou slogans das referências.

Personalidade: calorosa, artesanal, confiante e contemporânea. Comunicação em português brasileiro. Evitar alegações de tradição, origem ou tempo de operação sem dados reais.

### Leitura de branding.jpg

1. Foto superior: carne na grelha, fogo alto, ferramentas e braço do cozinheiro; logotipo claro sobreposto à fotografia.
2. Bloco central esquerdo: fundo vermelho escuro, título simples, linha fina e texto institucional.
3. Bloco central direito: cabeça bovina em traço vermelho sobre fundo claro.
4. Foto inferior esquerda: corte com osso apresentado em uma travessa retangular por uma pessoa.
5. Bloco inferior direito: mockup de cartões vermelhos e claros, tipografia branca/vermelha, símbolo bovino e grade fina.

Transferir para BRAVO o contraste vermelho/creme, a fotografia quente e a linguagem artesanal. Criar uma marca própria: wordmark robusto com leve abertura entre letras e símbolo original de três brasas curvas. Não traçar o boi nem reproduzir o desenho ou a diagramação dos cartões existentes. Gravuras bovinas podem aparecer como elemento secundário original.

### Paleta proposta

| Token | Cor | Uso |
|---|---|---|
| `--color-brand` | `#851F26` | Faixas institucionais, botões, destaques |
| `--color-brand-dark` | `#54171C` | Hover e superfícies profundas |
| `--color-cream` | `#F5F0E7` | Fundo principal e texto sobre vermelho |
| `--color-paper` | `#FFFCF6` | Cards e superfícies claras |
| `--color-ink` | `#211C19` | Títulos e corpo em fundo claro |
| `--color-muted` | `#6D6258` | Texto secundário |
| `--color-brass` | `#B59A70` | Linhas, pequenos detalhes decorativos |
| `--color-ember` | `#D76A32` | Acentos mínimos, sem texto pequeno |

Validar contraste na implementação: 4,5:1 para texto comum e 3:1 para texto grande. Não usar brass ou ember como texto pequeno sobre creme sem verificar o contraste.

### Tipografia e elementos

- Títulos: serifada de presença editorial, como Georgia Bold; opção posterior de fonte: Fraunces em peso alto. Evitar copiar a fonte condensada desgastada do site de referência.
- Corpo e navegação: sans-serif limpa, como Arial; opção posterior: Manrope. Carregamento de fontes externas é uma decisão de implementação.
- Wordmark: desenho próprio em SVG, separado das fotografias. Não depender de texto gerado por IA.
- Títulos desktop: 48–64 px; hero: 72–96 px; mobile: 36–48 px e hero 48–60 px.
- Corpo: 17–18 px, entrelinha 1,6; navegação: 14 px, peso 600; labels: 12 px.
- Linhas de 1 px; cantos de 4–8 px; sombras discretas. Evitar textura desgastada em todos os títulos.

## Estrutura e medidas

Base desktop: viewport de 1440 px, conteúdo máximo de 1200 px, margens mínimas de 32 px, grade de 12 colunas e gap de 24 px. Escala de espaçamento: 8, 16, 24, 32, 48, 64, 96 e 120 px.

### 1. Cabeçalho

Altura de 88 px, sobre o hero, fundo escuro translúcido. Marca à esquerda, links ao centro/direita e CTA “Reservar mesa”. Links: Início, Nossa casa, Cardápio, Ambiente, Localização e Contato. Separador inferior fino. A referência usa marca central e menus dos dois lados; esta versão redistribui o conteúdo para uma navegação própria.

### 2. Hero

Altura desktop de 720 px, mínimo de 620 px; no mobile, mínimo de 640 px com altura ajustada ao conteúdo. Foto de carne grelhada em tábua, com área livre à esquerda para texto. Overlay em gradiente escuro, aproximadamente 65% à esquerda e 15% à direita, ajustável conforme a foto.

Conteúdo com largura máxima de 580 px: assinatura pequena “BRAVO · PARRILLA & BAR”, título “O encontro começa na brasa.”, descrição “Cortes na parrilla, bons drinques e uma mesa para ficar.”, botão preenchido “Reservar mesa” e botão de contorno “Ver cardápio”. CTAs com altura de 48–52 px. Texto e logo em HTML/SVG, nunca incorporados à foto.

### 3. Nossa casa

Nova seção que conecta o site ao branding: fundo brand, texto creme, duas colunas em proporção 7/5, padding vertical de 88 px. Título “Feito no fogo. Servido com cuidado.” e parágrafo curto sobre a proposta da casa. Gravura original de corte e brasas na coluna menor. Não inventar história factual da empresa.

### 4. Cardápio

Fundo creme, padding vertical de 96 px. Título e texto introdutório acima de três cards iguais: “Da parrilla”, “Entre pães” e “Do bar”. Fotos 4:5, altura visual aproximada de 360 px no desktop, gaps de 24 px, textos fora das imagens. CTA “Explorar cardápio”. A referência apresenta três fotos quadradas lado a lado e título à direita; aqui a orientação, ordem e hierarquia mudam.

### 5. Ambiente

Fotografia panorâmica do salão, seção de 520 px no desktop e 440 px no mobile. Painel creme no canto inferior esquerdo, largura máxima de 440 px, padding de 32 px, sem ocupar o centro inteiro da foto. Título “Seu próximo encontro tem lugar.” e texto curto. Usar uma imagem estática inicialmente; caso existam outras fotos reais, permitir galeria com controles acessíveis, sem avanço automático obrigatório.

### 6. Localização

Fundo paper, padding vertical de 96 px; duas colunas 5/7. Informações à esquerda, mapa à direita com aproximadamente 580 × 380 px. Título “Venha para a BRAVO”, endereço, horários e botão “Como chegar”. Sem abas de cidades enquanto não houver unidades reais confirmadas.

No protótipo, exibir “[endereço a definir]” e “[horários a definir]”. O mapa deve usar dados reais quando fornecidos; não apresentar mapa de Londres da referência ou mapa gerado por IA como localização verdadeira.

### 7. Contato e reserva

Foto de mesa posta à esquerda e bloco de conteúdo à direita em proporção 1/1; altura mínima de 380 px. Título “A mesa está esperando.”, CTA “Reservar mesa” e canais reais quando disponíveis. A reserva pode abrir modal ou direcionar para serviço externo definido posteriormente. No protótipo, indicar claramente que a integração está pendente; não fingir confirmação de reserva.

### 8. Rodapé

Fundo brand-dark, padding de 56 px, wordmark creme, links essenciais e canais de contato. Detalhe de brasas em baixa opacidade pode compor o fundo. Evitar duplicar a foto de ambiente ou o desenho exato do rodapé da referência.

## Responsividade e comportamento

- A partir de 1024 px: composição desktop.
- Entre 768 e 1023 px: margens de 24 px, títulos menores e cards em três colunas quando houver largura suficiente.
- Até 767 px: margens de 20 px, menu recolhido, seções com padding de 56–64 px, colunas empilhadas, cards em uma coluna, fotos com recorte próprio e botões de largura confortável. Evitar carrossel obrigatório para acessar o cardápio.
- Menu mobile com botão nomeado, estado expandido, fechamento por Escape e foco adequado. Alvos interativos de pelo menos 44 × 44 px.
- Estados hover, foco e ativo coerentes com a paleta. Respeitar preferência por movimento reduzido.
- Imagens com dimensões reservadas; carregamento prioritário apenas no hero e lazy loading nas demais. Entregar WebP/AVIF com fallback, versões responsivas e recortes conferidos.
- Texto alternativo descritivo nas fotos relevantes; elementos puramente decorativos com alt vazio. Não inserir textos essenciais em bitmaps.

## Critérios de aceite

- Marca BRAVO consistente e ausência dos nomes e dados das referências.
- Identidade de parrilla com vermelho profundo, creme e fotografia quente, sem replicar o símbolo original.
- Sequência visual inspirada na referência com proporções, tipografia e composição próprias.
- Verificação em larguras de 1440, 1024, 768 e 390 px, sem rolagem horizontal.
- Fotos com alimentos plausíveis, mesma direção de cor e áreas de texto preservadas.
- Navegação, foco, contraste e CTAs verificáveis; dados e integrações pendentes explicitamente sinalizados.
- Prompts e inventário de assets disponíveis em `IMAGE-PROMPTS.md`.
