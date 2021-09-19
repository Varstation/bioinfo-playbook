---
sidebar_position: 1
---

# Introdução

Os pipelines de bioinformática do Varstation são guiados por boas práticas definidas por todo o time de bioinformatas, desenvolvedores e testadores do Varstation. Este guia é um conjunto de práticas que continuam em constante atualização, e servirá de apoio para que você possa entender não apenas como proceder mas o porquê e sua respectiva importância. Daremos exemplos práticos para auxiliá-lo em cada etapa.

Geralmente os melhores pipelines devem seguir estas diretrizes:

- automatizados
- facilmente testados
- portáveis para multi-plataformas/ambientes
- escaláveis de acordo com os tipos de dados manipulados
- fáceis de manutenção

Vamos detalhar cada um destes itens abaixo:

## Automação

Automação se refere a habilidade do pipeline de executar do início até o fim, sem a necessidade de intervenção humana.
 <**@JMB: Aqui estamos falando de inicio de fim da execução do pipeline (ou seja, da "execução do programa")? Ou da fase de desenvolvimento/testes (Continuous integration), disponibilização para os usuários (continuous delivery) e/ou entrega em produção (continuous deployment)? Seria legal deixar isso bem claro para os leitores :)**>


### Porque nos preocupamos com automação ?

Pipelines não conseguem escalar com múltiplos dados, alto volume ou múltiplas repetições se houver etapas manuais sendo executadas dentro deles. Eles também não podem ser componentes de um sistema automatizado se - de fato - eles não puderem ser automatizados. Etapas manuais são potenciais gargalos para todo o seu sistema e por conseguinte vão exigir operações não gerenciáveis. Além disto, etapas manuais desempenhadas podem variar, e isto pode provocar a produção de resultados que não podem ser devidamente harmonizados.

**Faça:** Reduza a quantidade de parâmetros para o mínimo necessário que seu pipeline não fique muito complexo para tratamento de vários tipos de dado de entrada.

**Faça:** Remova necessidade de parâmetros manuais, substituindo-os por configurações via arquivos.

**Faça:** Promova valores padrões para variáveis de entrada que geralmente não podem ser definidas de maneira automatizada.

**Faça:** Faça com que seu pipeline seja auto-contido para que possa ser avaliado o estado do mesmo durante toda a execução.
 <**@JMB: aqui talvez valha um exemplo de como vocês criam e configuram esse tipo de elementos dentro dos pipelines de vocês, demonstrando arquivos de configurações, arquivos de paramêtros e outros arquivos que por ventura existirem. Podendo inclusive obfuscar os dados importantes para preservar a segurança :)**>

**Não Faça:** Assuma que qualquer arquivo produzido por qualquer etapa do pipeline está íntegro ou existente. Sempre cheque os status das ferramentas de bioinformática utilizados no código (Exemplo: cheque os códigos de retorno)  <**@JMB: existe alguma forma de automatizar essa checagem e que ainda não está sendo feita? Se existir e não estiver sendo feita, deixe uma nota dizendo que em um futuro isso será automatizado (ligando com a primeira parte dessa página). Se existe e está sendo feita, então talvez valha a pena citar e se possível demonstrar aqui no texto. :)**>

**Não Faça:** Mantenha os arquivos de saída produzidos pelas etapas do pipeline que deram erro; as pessoas acidentalmente irão utilizar ela se existir. (Tenha logs para debugging).  <**@JMB: Existe alguma automação possível para garantir que os arquivos indesejados foram realmente removidos e evitar a utilização indesejada/incorreta? Se existe e é possível, talvez valha a pena comentar que será implementada ou se já estiver implementada, então, demonstrar aqui no texto. :)**>

**Não Faça:** Apague os arquivos de saída de etapas que passaram quando o pipeline inteiro falhou, manter eles permite que você reinicie o pipeline de onde você parou.

**Não Faça:** Utilize ferramentas que estão com bug ou frágeis, procure alternativas ou melhore as ferramentas.  <**@JMB: existem meios para saber se uma ferramenta é frágil ou está com bug? Se sim, como? Existe alguma automação nesse caso para evitar que sejam utilizadas de maneira indesejada? :)**>


## Testável

Um pipeline testável é um pipeline cujas etapas ou todo o pipeline pode ser verificado ou validado de acordo com características específicas sem modificar o código do pipeline.  Para ter testes é necessário que exista dados apropriados para executar o teste e um checklist de teste (o que será testado) que reflita de forma clara como os dados serão usados para avaliar o pipeline.
 <**@JMB: Existe alguma automação que garanta que todas as etapas ou todo o pipeline foi testado? Se sim, vale a pena citar/demonstrar esse processo aqui no texto. Se não existe, vale a pena citar isso e deixar claro para o leitor que poderá ser um trabalho futuro. :)**>

## Porque nos preocupamos com testes ?

Termos dados de teste permite a validação do pipeline se o mesmo produz o resultado desejado. A construção do checklist de teste permite que o desenvolvedor possa definir de forma clara as capacidades do pipeline e quais paramêtros ele pode utilizar.

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
 <**@JMB: Existe algum processo automatizado que vocês utilizam? Se sim seria interessante demonstrar como é feito o IaC integrado nessa migração. Lembrando que em DevOps vimos que nem sempre essa é uma tarefa fácil de ser feita :)**>

## Ciência

Ciência significa que os resultados devem ser reproduzidos; o método científico não pode ocorrer sem ter um experimento repetível, consistente que pode ser modificado. Pipelines de bioinformática são ferramentas quando utilizados para aplicação clínica devem ter seus resultados consistentes e reproduzíveis para que outros laboratórios e institutos de pesquisa possam validar. Pipelines não portáveis dificultam o trabalho do bioinformata que precisa ter uma infra-estrutura específica para rodar o pipeline, tornando um trabalho mais árduo para utilizá-lo. Finalmente, a garantia que outros bioinformatas do time possam utilizar do seu pipeline, evitando assim desgastes em montar um ambiente (infra-estrutura) que não seja adequada ao pipeline que irá executar.

**Faça:** Separe o código das configurações de ambiente para que o pipeline possa executar em diferentes arquiteturas de sistemas, isto significa que toda a configuração do ambiente possa ser realizada sem alterações no código do pipeline.  <**@JMB: vocês armazemam os arquivos de configuração em branches separados? Como funciona essa política de branches nesse ponto? Talvez valha a pena citar como um exemplo de boa prática. :)**>

**Faça:** Utilize tecnologias de container, como Docker, para executar o pipeline.

**Faça:** Incorpore testes de execução de pipelines em vários tipos de ambiente (quando aplicável).  <**@JMB: Existem exemplos de testes automatizados que possam ser demonstrados aqui?? Se não, talvez valha a pena explicar ao leitor se será feito em algum momento futuro ou se é impossível e precisa obrigatoriamente ser uma validação manual :)**>

**Não Faça:** Coloque a lógica de executar o pipeline com o mesmo código que executa a lógica que vai processar os dados.

**Não Faça:** Colocar os caminhos de diretórios *hardcoded* ou de ambiente dentro do WDL. Quando isto for necessário, eles devem ficar nos arquivos de configuração (se sereferem ao ambiente de execução) ou nas instruções da construção do container (ex: Dockefile).

## Escalabilidade

Escalabilidade descreve o desempenho do pipeline dado um certo volume de dados manipulados. Isto geralmente em algoritmos e estrutura de dados é descrito como notação Big O. Isto significa que à medida que o tamanho do dado manipulado pelo pipeline aumenta, quanto mais recursos computacionais são necessários para processá-lo. Soluções envolvem desde evitar algoritmos ou ferramentas que não são construídos para escalar, ou melhorar este relacionamento para que seja linear (ou melhor). 
 <**@JMB: Esse trecho está estranho, parece estar faltando alguma coisa que está complicando a interpretação correta da ideia. Por favor, rever! :)**>

## Por que nos preocupamos com escalabilidade ?

Se você está tendo problemas de escalabilidade, certamente o tempo de processamento irá aumentar exponencialmente à medida que o volume de dados aumenta. Eventualmente isto irá requerer uma quantidade não planejada de tempo (e dinheiro se você está executando em ambiente cloud/nuvem) e geralmente reduz a aplicabilidade do pipeline (já que ele não conseguirá ser executado com grandes volumes de dados, especialmente em rotinas clínicas).

**Faça:** Avalie a correlação entre o tamanho dos dados de entrada e os recursos computacionais necessários para executar todo o pipeline.

**Não Faça:** Incorpore ferramentas que tenham características não escaláveis a não ser que eles realmente sejam necessários para o pipeline (quando não há ferramentas substitutas ou alternativas).

## Manutenibilidade 

Um pipeline que permita ser facilmente operado e atualizado é considerado um pipeline de boa manutenibilidade. Em qualquer ciclo de vida de desenvolvimento de código é comum o mesmo passar por manutenção e atualizações. Geralmente no início do desenvolvimento o tempo para escrever código é bem menor, e o desenvolvedor acaba negligenciando etapas importantes de engenharia de software para garantir um código fácil de entender, manter e operar.
<**@JMB: Vocês utilizam algum guia ou referência para ajudar os desenvolvedores a seguirem essa ideia de manutenção, clean code e afins além do site GA4GH? Se sim, talvez valha a pena citar/demonstrar aqui. Se não, não se preocupe ;)**>

## Por que nos preocupados com manutenibilidade ?

Código fonte legível e facil de entender é fundamental para quem estar desenvolvendo, seja o próprio autor ou qualquer outro bioinformata que decida a utilizar o pipeline ou até atualizar/manter o mesmo. Códigos definidos em módulos também garantem que trechos de código possam se validados, atualizados e compartilhados de forma independente. Isto é uma característica fundamental em construção de software e o mesmo se aplica a códigos de pipeline de bioinformática. Códigos escritos em módulos permitem maior rapidez na atualização e se tornam reusáveis por outros pipelines.

Nós recomendamos padrões bem definidos para escrita de código. Na área de bioinformática, o site [GA4GH](https://www.ga4gh.org/) é uma grande fonte destes padrões de código. Sempre utilizar estilo de código permite que todos sigam um padrão para garantir a qualidade do código e evitar possíveis erros e bugs em operação.

**Faça:** Utilize um espaço onde código possa ser navegado, acessado e compartilhado (exemplo: [Github](https://github.com/))

**Faça:** Utilize estrutura de pacotes para facilitar a navigação de software. <**@JMB: vocês tem alguma política de nomenclatura de pacotes? Se sim, talvez valha a pena citar aqui. :)**>

**Faça:** Utilize documentação automatizada para todos os documentos técnicos se possível. <**@JMB: vocês utilizam alguma política de continuous integration para garantir que toda classe/método possua alguma descrição de documentação automatizada? Se sim, talvez valha a pena citar/demonstrar aqui. :)**>

**Faça:** Salve o seu código em progresso criando saídas intermediárias entre os módulos à medida que eles vão executando com sucesso. Uma etapa de cada vez.

**Faça:** Quando utilizar tecnologias de containers, sigas as boas práticas para garantir que as imagens associadas ou dependências não se atualizem se não for de forma explícita.

**Faça:** Disponibilize as imagens e os arquivos de Build (Dockerfile) para fins de documentação. Leia mais em [Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/).

**Não Faça:** Escreva documentação que não fique dentro do código em si (aos poucos por nossa experiência ficam desatualizados).

**Não Faça:** Crie tasks monolíticas que desempenhem múltiplas funcionalidades em função de velocidade. Geralmente isto significa códigos de lógica complexa e de difícil manutenção.

**Não Faça:** Quebre toda funcionalidade de um pipeline em módulos separados (Isto contraria um pouco em não fazer tasks monolíticas); mas o desenvolvedor com sua experiência poderá identificar quando melhor aplicar a modularidade. // Por isso recomendamos o uso de benchmarking para verificar a se o código e suas dependências ao executar a etapa se valem ser combinados ou separados. <**@JMB:esse trecho entre as barras ficou estranho, parece estar faltando alguma coisa. Por favor, reveja! :)**>//

## Versionamento

Os pipelines devem ser versionados assim como as imagens Docker associadas. Isto permite a rastreabilidade e além de garantir a qualidade perante auditorias e inspeções laboratoriais que exigem que todos o pipelines clínicos devam ser versionados e rastreáveis de quaisquer mudanças. Assim que você realiza mudanças e melhorias no seu pipeline, é recomendado que você saiba qual versão do pipeline e softwares utilizados para criar os resultados, assim permitindo a reproducibilidade e garantia de resultados consistentes. Nós recomendamos utilizar o nosso guia de versionamento (sistema de versionamento semântico) e utilizar [changelogs](https://keepachangelog.com/en/1.0.0/) para registar mudanças de pipeline.
<**@JMB: Talvez valha a pena linkar/demonstrar esse guia de versionamento aqui no texto:)**>

## Licenciamento

Licenciamento é uma etapa no processo de desenvolvimento de código muito negligenciada, mas que é crítica especialmente quando o mesmo será disponibilizada ou utilizada para fins comerciais ou quando se deseja distribuir seu código de pipeline para outros grupos ou empresas fora do Varstation ou Hospital Israelita Albert Einstein. Nossos pipelines geralmente são privados, exceto quando discutidos com o gerente de bioinformática que irá avaliar o tipo de licença apropriado para o software e dados que serão produzidos.

**Faça:** Selecione ferramentas que são abertamente open-source para serem executados em seus pipelines a fim de evitar possíveis restrições legais. Quando utilizar softwares licenciados, verifica se podem ser publicados em domínio público ou até usados para fins de comerciais. Muitas vezes as licenças do pipeline desenvolvido podem estar em conflito com o do software, exigindo um trabalho adicional para adequação.

**Não Faça:** Crie ferramentas ou bibliotecas sem licença, um guia claro de quais termos de uso são importantes.

<**@JMB: Vocês utilizam alguma ferramenta para checagem de licenças como o Black Duck, por exemplo? Se sim, vale a pena citar isso inclusive onde e quando esse check acontece, se é na fase de integração continua para qualquer pipeline compilado ou na fase de uma compilação oficial para produção :)**>

Na próxima seção, vamos começar a navegar no clico de de vida do desenvolvimento dos pipelines de bioinformática e ilustrar com vários exemplos.
