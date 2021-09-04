---
sidebar_position: 1
---

# Introdução

Os pipelines de bioinformática do Varstation são guiados por boas práticas definidas por todo o time de bioinformatas, desenvolvedores e testadores do Varstation. Este guia é um conjunto de práticas que continuam em constante atualização, e servirá de apoio para que você possa entender não apenas como proceder mas o porquê e sua respectiva importância. Daremos exemplos práticos para auxiliá-lo em cada etapa.

Geralmente , os melhores pipelines devem seguir estas diretrizes:

- automatizados
- facilmente testados
- portáveis para multi-plataformas/ambientes
- escaláveis de acordo com os tipos de dados manipulados
- fáceis de manutenção

Vamos detalhar cada um destes itens abaixo:

## Automação

Automação se refere a habilidade do pipeline de executar do início até o fim , sem a necessidade de intervenção humana.


### Porque nos preocupamos com automação ?

Pipelines não conseguem escalar com múltiplos dados, alto volume ou múltiplas repetições, se houver etapas manuais sendo executadas dentro do pipeline. Eles também não podem ser componentes de um sistema automatizado se de fato eles não podem ser automatizados. Etapas manuais são potenciais gargalos para todo o seu sistema e porconseguinte vão exigir operações não gerenciáveis. Além disto, etapas manuais desempenhadas por humanos podem variar, e isto pode provocar a produção de resultados que não podem ser devidamente harmonizados.


**Faça:** Reduza a quantidade de parâmetros para o mínimo necessário que seu pipeline não fique muito complexo para tratamento de vários tipos de dado de entrada.

**Faça:** Remova necessidade de parâmetros manuais, substituindo-os por configurações via arquivos.

**Faça:** Promova valores padrões para variáveis de entrada que geralmente não podem ser definidas de maneira automatizada.

**Faça:** Faça com que seu pipeline seja auto-contido para que possa ser avaliado o estado do mesmo durante toda a execução.

**Não Faça:** Assuma que qualquer arquivo produzido por qualquer etapa do pipeline está íntegro ou existente. Sempre cheque os status das ferramentas de bioinformática utilizados no código (Exemplo: cheque os códigos de retorno)

**Não Faça:** Mantenha os arquivos de saída produzidos pelas etapas do pipeline que deram erro; as pessoas acidentalmente irão utilizar ela se existir. (Tenha logs para debugging).

**Não Faça:** Apague os arquivos de saída de etapas que passaram quando o pipeline inteiro falhou, manter eles permite que você reinicie o pipeline de onde você parou.

**Não Faça:** Utilize ferramentas que estão com bug ou fragéis, procure alternativas ou melhore as ferramentas.



Docusaurus can manage multiple versions of your docs.

## Create a docs version

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](/img/tutorial/docsVersionDropdown.png)

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
