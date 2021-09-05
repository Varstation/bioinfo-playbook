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


## Testável


Um pipeline testável é um pipeline cujas etapas ou todo o pipeline pode ser verificado ou validado de acordo com características específicas sem modificar o código do pipeline.  Para ter testes é necessário que exista dados apropriados para executar o teste e um checklist de teste (o que será testado) que reflita de forma clara como os dados serão usados para avaliar o pipeline.

## Porque nos preocupamos com testes ?

Termos dados de teste permite a validação do pipeline se o mesmo produz o resultado desejado.  A construção do checklist de teste permite que o desenvolvedor possa definir de forma clara as capacidades do pipeline e quais paramêtros ele pode utilizar.

**Faça:** Tenha exemplos de teste dados disponíveis para seu pipeline.

**Faça:** Tenha os resultados esperados da sua massa de testes para comparar com os resultados do seu pipeline.

**Faça:** Tenha pelo menos uma massa de dados reais apropriada para seu pipeline com resultados esperados a partir da execução do seu pipeline.

**Faça:** Tenha uma ferramenta de check de sintaxe de código.

**Faça:** Inclua uma suite de testes automatizados para as tarefas do seu pipeline.

**Faça:** Inclua testes automáticos para o pipeline inteiro (benchmark de pipeline)

**Não Faça:**  Use ferramentas que não possuam orquestradores de testes automatizados.

**Não Faça:**  Escreva testes que assumam apenas uma única instância de dados.

## Portabilidade

Um pipeline portável refere-se a habilidade de o pipeline executar com sucesso em múltiplas arquiteturas distintas.

c
Ciência. Ciência significa que os resultados devem ser reproduzidos; o método científico não pode ocorrer sem ter um experimento repetível, consistente que pode ser modificado. Pipelines de bioinformática são ferramentas quando utilizados para aplicação clínica devem ter seus resultados consistentes e reproduzíveis para que outros laboratórios e institutos de pesquisa possa validar. Pipelines não portáveis dificultam o trabalho do bioinformata que precisa ter uma infra-estrutura específica para rodar o pipeline, tornando um trabalho mais árduo para utilizá-lo. Finalmente, a garantia que outros bioinformatas do time possam utilizar do seu pipeline, evitando assim desgastes em montar um ambiente (infra-estrutura) que não seja adequada ao pipeline que irá executar.


**Faça:** Separe o código das configurações de ambiente para que o pipeline possa executar em diferentes arquiteturas de sistemas, isto significa que toda a configuração do ambiente possa ser realizada sem alterações no código do pipeline.

**Faça:** Utilize tecnologias de container, como Docker, para executar o pipeline.

**Faça:** Incorpore testes de execução de pipelines em vários tipos de ambiente (quando aplicável).

**Não Faça:** Coloque a lógica de executar o pipeline com o mesmo código que executa a lógica que vai processar os dados.

**Não Faça:** Colocar os caminhos de diretórios hardcoded ou de ambiente dentro do WDL. Quando isto for necessário, eles devem ficar nos arquivos de configuração (se sereferem ao ambiente de execução) ou nas instruções da construção do container (ex: Dockefile).

## Escalabilidade

Escalabilidade descreve o desempenho do pipeline dado um certo volume de dados manipulados. Isto geralmente em algoritmos e estrutura de dados é  descrito como notação Big O. Isto significa que à medida que o tamanho do dado manipulado pelo pipeline aumenta, quanto mais recursos computacionais são necessários para processá-lo. Soluções envolvem desde evitar algoritmos ou ferramentas que não são construídos para escalar, ou melhorar este relacionamento para que seja linear (ou melhor). 

## Por que nos preocupamos com escalabilidade ?

Se você está tendo problemas de escalabilidade, certamente o tempo de processamento irá aumentar exponencialmente à medida que o volume de dados aumenta. Eventualmente isto irá requerer uma quantidade não planejada de de tempo (e dinheiro se você está executando em ambiente cloud) e geralmente reduz a aplicabilidade do pipeline (já que ele não conseguirá com grandes volumes de dados , especialmente em rotinas clínicas).

**Faça:**  Avalie a correlação entre o tamanho dos dados de entrada e os recursos computacionais necessários para executar todo o pipeline.

**Não Faça:** Incorpore ferramentas que tenham características não escaláveis a não ser que eles realmente sejam necessários para o pipeline (quando não há ferramentas substitutas ou alternativas).


## Manuteinbilidade

Um pipeline que permita ser facilmente operado e atualizado é considerado um pipeline de boa manuteinbilidade. Em qualquer ciclo de vida de desenvolvimento de código é comum o mesmo passar por manutenção e atualizações. Geralmente no início do desenvolvimento o tempo para escrever código é bem menor, e o desenvolvedor acaba negligenciando etapas importantes de engenharia de software para garantir um código fácil de entender, manter e operar.


## Por que nos preocupados com manuteinbilidade ?

Código fonte legível e facil de entender é fundamental para quem estar desenvolvendo, seja o próprio autor ou qualquer outro bioinformata que decida a utilizar o pipeline ou até atualizar/manter o mesmo. Códigos definidos em módulos também garantem que trechos de código possam se validados, atualizados e compartilhados de forma independente. Isto é uma característica fundamental em construção de software  e o mesmo se aplica a códigos de pipeline de bioinformática. Códigos escritos em módulos permitem maior rapidez na atualização e se tornam reusáveis por outros pipelines.
Nós recomendamos padrões bem definidos para escrita de código. Na área de bioinformática, o site GA4GH é uma grande fonte destes padrões de código. Sempre utilizar estilo de código permite que todos sigam um padrão para garantir a qualidade do código e evitar possíveis erros e bugs em operação.

**Faça:** Utilize um espaço onde código possa ser navegado, acessado e compartilhado (exemplo: Github)

**Faça:** Utilize estrutura de pacotes para facilitar a navigação de software.

**Faça:** Utilize documentação automatizada para todos os documentos técnicos se possível.

**Faça:** Salve o seu código em progresso criando saídas intermediárias entre os módulos à medida que eles vão executando com sucesso. Uma etapa de cada vez.

**Faça:** Quando utilizar tecnologias de containers, sigas as boas práticas para garantir que as imagens associadas ou dependências não se atualizem se não for de forma explícita.

**Faça:** Disponibilize as imagens es os arquivos de Build (Dockerfile) disponíveis para fins de documentação.

**Não Faça:**  Escreva documentação que não fique dentro do código em si (aos poucos por nossa experiência ficam desatualizados).

**Não Faça:**  Crie tasks monolíticas que desempenhem múltiplas  funcionalidades em função de velocidade. Geralmente isto significa códigos de lógica complexa e difícil manutenção.

**Não Faça:**  Quebre toda funcionalidade de um pipeline em módulos separados (Isto contraria um pouco em não fazer tasks monolíticas); mas o desenvolvedor com sua experiência poderá identificar quando melhor aplicar modularidade. Por isso recomendamos o uso de benchmarking para verificar a se o código e suas dependências ao executar a etapa se valem ser combinados ou separados.

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
