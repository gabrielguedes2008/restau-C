# BRAVO — Parrilla & Bar

Site estático responsivo criado a partir de `../DESIGN-SPEC.md`, com imagens geradas em `../assets/images`.

## Executar

Com Node.js instalado, execute nesta pasta:

```sh
npm run dev
```

Abra `http://127.0.0.1:4173`. Os arquivos finais estão em `dist/` e podem ser servidos por qualquer hospedagem estática.

## Imagens e validação

As imagens de `dist/assets` já estão exportadas em WebP responsivo e JPEG de fallback. Para refazer as exportações a partir dos originais:

```sh
npm install
npm run images
npm run check
```

O site não depende de bibliotecas ou fontes externas em tempo de execução. A ferramenta sharp é usada somente na preparação das imagens.

## Comportamentos

- Menu mobile, navegação por âncoras, fechamento por Escape e foco visível.
- Cardápio conceitual em modal com filtros por categoria.
- Formulário que prepara e copia uma solicitação local; não envia dados e não confirma reserva.
- Localização e horários sinalizados como pendentes.
- Marca SVG, imagens responsivas, carregamento diferido e respeito a movimento reduzido.

Para lançamento comercial: fornecer endereço, horários, cardápio final, preços e canal real de reservas; substituir as informações pendentes e conectar os CTAs à operação da casa.
