# BRAVO — Leitura visual e prompts para GPT

## Como usar

Este documento cobre todos os elementos visuais identificáveis em `ref/website-design.jpg`, além dos assets adicionais necessários para aplicar a identidade de `ref/branding.jpg`. As referências são capturas estáticas; onde o detalhe é incerto, isso está indicado. As 15 imagens foram geradas e estão em `assets/images` em PNG; veja [o inventário e notas de uso](assets/images/README.md). Os prompts efetivamente usados estão em [GENERATION-PROMPTS.md](assets/images/GENERATION-PROMPTS.md).

Para cada imagem, cole no GPT o **prompt base de imagens**, seguido do **prompt específico** correspondente. Gere cada asset separadamente. A proporção indicada orienta o enquadramento; caso o gerador não permita a resolução exata, escolha a proporção mais próxima e recorte depois. Solicite variações desktop/mobile quando indicado. Todos os textos do site serão adicionados na implementação.

## Prompt base para criar o site

```text
Crie o site responsivo em português brasileiro de BRAVO — Parrilla & Bar, usando DESIGN-SPEC.md como fonte de especificação e IMAGE-PROMPTS.md como inventário de assets. Considere ref/branding.jpg como referência de atmosfera e identidade e ref/website-design.jpg como referência da organização visual. Crie uma interpretação própria, com medidas, cores, tipografia, símbolo e composição diferentes dos originais.

Use vermelho #851F26, vermelho profundo #54171C, creme #F5F0E7, papel #FFFCF6 e texto #211C19. Combine títulos serifados robustos com corpo sans-serif limpo. Conteúdo máximo de 1200 px, espaçamento generoso, fotografias quentes e hierarquia acessível. A marca é BRAVO; assinatura Parrilla & Bar; frase Fogo, sabor e bons encontros.

Estruture: cabeçalho sobre o hero; hero com título O encontro começa na brasa. e CTAs Reservar mesa/Ver cardápio; seção Nossa casa vermelha; três cards de cardápio; foto panorâmica do ambiente; localização com mapa; contato e reserva com foto de mesa; rodapé vermelho escuro. Adicione texto e marca por HTML/SVG, sem embutir letras nas fotografias.

Adapte o layout para desktop, tablet e mobile. Garanta navegação por teclado, foco visível, contraste, imagens responsivas, alt adequado e respeito a movimento reduzido. Use os nomes de assets deste documento. Não invente endereço, telefone, horários, histórico de fundação ou unidades. Marque dados ausentes como pendentes e não simule reserva confirmada sem integração. Não reutilize BRASAL, STEAKOUT ou os dados das referências. Entregue a implementação com instruções para executar e indique as integrações ainda pendentes.
```

## Leitura de todas as imagens do site de referência

| ID | Elemento observado | Leitura e destino |
|---|---|---|
| W01 | Foto de fundo do hero | Tábua rústica com steak grelhado e fatias, tomates no ramo, alho assado, sal e utensílio. Vista superior/oblíqua e overlay escuro. Gerar nova composição. |
| W02 | Foto do hambúrguer | Close de pão dourado, carne, queijo e cebola; pequeno acompanhamento visível. Primeiro card do menu. Gerar foto própria. |
| W03 | Foto do corte fatiado | Carne com crosta escura e interior rosado, apresentada em tábua com ervas. Segundo card. Gerar foto própria. |
| W04 | Foto do coquetel | Mãos servindo bebida em taças, líquido coral e fundo de bar desfocado. Terceiro card. Gerar foto própria. |
| W05 | Foto do lounge | Salão com bancos, cadeiras e mesas de madeira, luminárias quentes e detalhes escuros. Fundo de seção ampla. Só uma foto está visível; setas sugerem galeria, mas outros slides não foram fornecidos. |
| W06 | Mapa | Captura de mapa urbano com marcador vermelho, controles e nomes de lugares. Implementar com serviço cartográfico e endereço real; não gerar como foto de localização. |
| W07 | Foto de contato | Mesa com taças, prato, garrafa escura e vegetais/ervas em primeiro plano; profundidade de campo curta. Gerar nova cena. |
| W08 | Gravura no hero | Contorno claro de um corte bovino com pequenos acompanhamentos. Elemento decorativo separado. Gerar desenho original opcional. |
| W09 | Marca repetida | Wordmark STEAKOUT com assinatura, no cabeçalho, hero e rodapé. É um único sistema de marca em tamanhos diferentes. Substituir por SVG original BRAVO. |
| W10 | Fundo do rodapé | Fundo castanho translúcido com formas de luminárias aparentemente fotográficas. Não é possível confirmar se reaproveita o lounge. Proposta: fundo sólido e textura original discreta. |

Linhas, botões, abas, setas e títulos são componentes de interface, não fotografias adicionais. O texto desgastado da referência é um tratamento tipográfico; não precisa ser gerado como imagem.

## Prompt base de imagens

```text
Produza um asset original para BRAVO — Parrilla & Bar, restaurante contemporâneo com cozinha na brasa. Direção visual: fotografia gastronômica editorial realista, textura natural, luz quente de restaurante, sombras profundas com detalhes preservados, madeira escura, cerâmica artesanal, metais discretos, acentos de vermelho vinho e creme. Alimentos apetitosos e fisicamente plausíveis, porções naturais, cor realista da carne, sem saturação excessiva. Consistência entre todas as fotos: calor suave nas altas luzes, sombras neutras, contraste moderado e acabamento premium acolhedor.

Use a referência apenas para atmosfera e tema; crie nova composição, novos objetos e novo enquadramento. Não reproduza o arranjo exato. Não inclua letras, nomes, logotipos, marcas d'água, molduras, botões ou interfaces. Evite anatomia incorreta, dedos extras, utensílios duplicados, alimentos deformados, fumaça artificial excessiva, aparência plástica ou render 3D. Siga a composição e a proporção do prompt específico. Entregue somente o asset, sem mockup do site.
```

## Prompts individuais — fotografias do site

### W01 — Hero | `hero-parrilla-desktop.webp`

Destino: hero. Proporção 2:1; resolução alvo 2400 × 1200 px. Área segura para texto: 40% esquerdo; assunto principal nos 55% direitos.

```text
Fotografia horizontal de um steak de contrafilé preparado na parrilla, com parte do corte fatiada revelando interior rosado natural, sobre tábua escura no lado direito da composição. Acrescente três pequenos tomates assados, meio alho tostado e poucos cristais de sal, organizados de maneira própria e assimétrica. Vista a aproximadamente 40 graus, lente editorial natural. Luz quente lateral vindo da direita, realçando crosta e sucos, fundo escuro de bancada de restaurante. Mantenha o lado esquerdo escuro, simples e pouco ocupado para sobrepor título e botões. Sem fogo encobrindo a comida e sem letras. Proporção 2:1.
```

Variante `hero-parrilla-mobile.webp`, 4:5, alvo 1200 × 1500 px:

```text
Reinterprete a mesma cena em enquadramento vertical 4:5. Preserve alimento, iluminação e materiais. Posicione o steak e a tábua no terço inferior, mantendo a metade superior escura e livre para texto. Não apenas corte a foto horizontal: recomponha os objetos para a orientação vertical. Sem texto ou marca.
```

### W02 — Hambúrguer | `menu-burger.webp`

Destino: card Entre pães. Proporção 4:5; alvo 1200 × 1500 px.

```text
Close editorial de um único hambúrguer artesanal em prato de cerâmica creme: pão brioche dourado de textura natural, burger alto grelhado na brasa, queijo derretido e cebola caramelizada. Poucas batatas rústicas discretas ao lado. Câmera na altura do sanduíche em ângulo de três quartos, alimento inteiro com folga nas bordas, fundo de mesa escura e restaurante desfocado. Luz lateral quente suave; queijo, pão e carne com detalhes reais, sem excesso de brilho. Composição vertical 4:5, sem texto.
```

### W03 — Carne fatiada | `menu-parrilla.webp`

Destino: card Da parrilla. Proporção 4:5; alvo 1200 × 1500 px.

```text
Fotografia editorial vertical de um corte bovino grelhado na parrilla, com quatro fatias espessas sobrepostas de maneira natural em travessa de cerâmica escura. Crosta tostada, interior rosado plausível e sucos discretos. Uma pequena porção de chimichurri em recipiente creme e um ramo curto de erva ao lado. Vista oblíqua de cima, composição central com margens para recorte, luz quente vindo da esquerda, fundo de madeira escura levemente desfocado. Aparência gastronômica real, sem texto, proporção 4:5.
```

### W04 — Coquetel | `menu-cocktail.webp`

Destino: card Do bar. Proporção 4:5; alvo 1200 × 1500 px.

```text
Fotografia vertical de um bartender finalizando um coquetel âmbar avermelhado em uma única taça coupe sobre balcão escuro. Mostrar somente as mãos com anatomia correta e parte dos antebraços; uma mão segura um pequeno utensílio metálico de bar acima da taça. Guarnição delicada de casca de laranja. Fundo com garrafas sem rótulos legíveis e pontos suaves de luz quente. Foco no líquido e na borda da taça, reflexos naturais, clima sofisticado e acolhedor. Sem rosto, marcas ou texto, proporção 4:5.
```

### W05 — Ambiente | `ambiente-desktop.webp`

Destino: seção Ambiente. Proporção 5:2; alvo 2500 × 1000 px.

```text
Fotografia arquitetônica panorâmica de um restaurante de parrilla contemporâneo ao anoitecer, sem pessoas. Mesas de madeira escura, cadeiras confortáveis, banco estofado vermelho vinho, paredes claras com detalhes em metal preto, luminárias pendentes com luz âmbar e poucos elementos vegetais. Espaço realista, perspectiva e linhas arquitetônicas corretas, ambiente intimista mas legível. Composição diferente de uma steakhouse tradicional: um corredor ligeiramente à direita revela profundidade e uma mesa ocupa o primeiro plano direito. Deixe o canto inferior esquerdo visualmente simples para sobrepor um painel de texto. Sem letreiros ou logos, proporção 5:2.
```

Variante `ambiente-mobile.webp`, 4:5, alvo 1200 × 1500 px:

```text
Crie a versão vertical 4:5 do mesmo restaurante, preservando móveis e materiais. Enquadre uma mesa e o banco vinho no terço inferior direito, com luminárias e profundidade do salão na metade superior. Reserve área discreta na parte inferior esquerda para um pequeno painel de interface. Sem texto ou marca.
```

### W06 — Mapa | componente, sem geração de localização

Não existe prompt de geração para o mapa final: mapa e marcador devem corresponder ao endereço real. Usar integração cartográfica ou mapa estático autorizado com atribuição e link “Como chegar”. Enquanto faltar endereço, usar painel com “Localização a definir”. Não gerar ruas e pontos geográficos fictícios que pareçam reais.

### W07 — Mesa e contato | `contato-mesa.webp`

Destino: seção Contato. Proporção 3:2; alvo 1800 × 1200 px.

```text
Fotografia editorial horizontal de uma mesa posta para duas pessoas em restaurante de parrilla. Primeiro plano com prato de cerâmica creme contendo uma pequena entrada com vegetais assados, duas taças vazias de vidro fino, guardanapo de tecido vinho e talheres discretos. Ao fundo, garrafa escura sem rótulo legível e luzes quentes desfocadas. Câmera próxima à altura da mesa, profundidade de campo suave, ambiente acolhedor e realista. Organize os elementos de modo original, preserve margens e não corte as taças de maneira desconfortável. Sem pessoas, letras ou marcas, proporção 3:2.
```

## Prompts individuais — elementos gráficos

Os prompts desta seção substituem a orientação fotográfica do prompt base. Usar fundo transparente para W08 e B01. Os resultados raster são referências; marca final deve ser redesenhada em vetor e tipografia composta manualmente.

### W08 — Gravura decorativa | `gravura-parrilla.png`

Proporção 3:2; alvo 1500 × 1000 px; fundo transparente.

```text
Ilustração original em traço de gravura artesanal de um corte bovino sem osso, acompanhado por duas pequenas folhas de ervas e três brasas abstratas. Composição horizontal arejada, linhas finas de espessura consistente em creme #F5F0E7, hachuras econômicas, sem preenchimento fotográfico, sem moldura, sem letras e sem símbolos comerciais. Desenho legível em tamanho pequeno, com silhueta própria; não reproduzir gravuras existentes. Fundo transparente, proporção 3:2.
```

### W09 — Conceito da marca | `bravo-marca-conceito.png`

Proporção 1:1; alvo 1600 × 1600 px. Asset conceitual opcional; SVG final é necessário.

```text
Apresente um único conceito original de identidade para BRAVO, assinatura PARRILLA & BAR. Wordmark robusto, simples e legível, com letras maiúsculas e espaçamento moderado. Símbolo abstrato próprio com três brasas curvas acima do nome, sem cabeça de boi. Paleta vermelho vinho #851F26 e creme #F5F0E7. Composição central sobre fundo creme, apresentação frontal plana sem mockup, sombras, efeitos 3D ou ornamentos extras. Escreva somente BRAVO e PARRILLA & BAR. Não imite logotipos de referência. Proporção 1:1.
```

Conferir a grafia manualmente; usar o conceito como direção, não como logotipo final. Uma única marca é reutilizada no cabeçalho e rodapé.

### W10 — Textura opcional do rodapé | `textura-brasas.webp`

Proporção 4:1; alvo 2400 × 600 px.

```text
Textura abstrata horizontal minimalista de brasas, em vermelho profundo #54171C, com poucas linhas orgânicas vinho #851F26 e pontos discretos de cobre apagado. Contraste baixo, aspecto artesanal elegante, detalhes distribuídos principalmente nas bordas; centro tranquilo para acomodar navegação clara. Sem fogo literal, fotografia, letras ou marca. Proporção 4:1. A imagem deve funcionar como fundo decorativo discreto, não competir com conteúdo.
```

## Assets adicionais derivados da identidade

Estes elementos vêm de branding.jpg, não são fotos adicionais observadas no site. São opcionais para apresentar a marca; a gravura pode compor a seção Nossa casa.

### B01 — Gravura da identidade | `gravura-brasas.png`

Proporção 1:1; alvo 1600 × 1600 px; fundo transparente.

```text
Ilustração original de três brasas orgânicas sob um pequeno ramo de alecrim, feita com linhas e hachuras de gravura artesanal em creme #F5F0E7. Silhueta simples, traços confiantes, amplo espaço negativo, legível sobre vermelho vinho. Sem texto, molduras, sombras, cabeça bovina ou elementos fotográficos. Fundo transparente, proporção 1:1.
```

### B02 — Parrilla em ação | `branding-fogo.webp`

Proporção 16:9; alvo 2400 × 1350 px.

```text
Fotografia documental gastronômica de um cozinheiro manipulando um steak na parrilla com pinça metálica, mostrando apenas um antebraço e a ferramenta. Chamas pequenas e controladas ao fundo, grelha e carne em foco, fumaça leve, luz quente de fogo com sombras profundas. Enquadramento horizontal ao nível da grelha, composição original com o corte à direita e espaço escuro à esquerda para futura aplicação de marca. Não reproduzir pose nem enquadramento de fotografia existente. Sem texto ou logo, proporção 16:9.
```

### B03 — Apresentação do corte | `branding-corte.webp`

Proporção 4:5; alvo 1200 × 1500 px.

```text
Fotografia vertical de um corte bovino cru com osso curto e marmoreio natural, apresentado por duas mãos corretas em uma travessa oval de cerâmica escura. Apenas mãos, parte do avental vinho e a travessa aparecem. Fundo de cozinha escuro e desfocado, luz lateral suave, tons naturais sem vermelho exagerado. Composição editorial limpa, alimento totalmente contido na travessa, sem texto ou marcas. Proporção 4:5.
```

### B04 — Mockup de cartões | `branding-cartoes.webp`

Proporção 4:5; alvo 1200 × 1500 px. Gerar somente depois de aprovar o logo.

```text
Crie um mockup fotográfico de três cartões de visita da marca BRAVO — Parrilla & Bar sobre superfície de pedra clara. Dois cartões em vermelho vinho #851F26 com marca creme; um em creme #F5F0E7 com marca vinho. Use a arte aprovada anexada sem redesenhá-la. Layout próprio e simples, margens amplas, detalhe de três brasas, sem grade quadriculada. Não invente telefone, endereço, site ou redes sociais; mantenha o verso com áreas em branco. Cartões em ângulos discretos, papel fosco e sombras suaves, proporção 4:5.
```

Se o GPT não preservar a arte anexada ou escrever corretamente, gerar o mockup com cartões sem impressão e aplicar a arte manualmente.

## Ordem de produção e revisão

1. Aprovar nome, paleta e conceito de marca; produzir o SVG final.
2. Gerar W01–W05 e W07 com a mesma direção visual; gerar variantes mobile de W01/W05.
3. Gerar gravuras e textura apenas quando necessárias. W06 depende do endereço real.
4. Comparar as imagens em conjunto: temperatura, exposição, cores, escala e materiais devem parecer da mesma casa.
5. Conferir mãos, utensílios, taças, arquitetura e carne em tamanho real. Regenerar defeitos visíveis.
6. Testar os recortes no layout, aplicar overlays pelo CSS e exportar arquivos otimizados sem letras incorporadas.

Os nomes `.webp` indicam os arquivos finais para o site, não garantem o formato entregue pelo GPT. Preservar os originais de geração e exportar as versões web posteriormente.
