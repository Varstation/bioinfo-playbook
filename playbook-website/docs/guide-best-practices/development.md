---
sidebar_position: 4
---


# Desenvolvimento do Pipeline

Nesta etapa descrevemos o fluxo para implementação dos pipelines de bioinformática. Todo o processo de implementação envolve desde a criação do sprint backlog com as tarefas a serem implementadas, setup do ambiente de desenvolvimento, testes e check de código e a gerência de configuração para definição de branches, envio de commits e pull requests.

## Metodologia de desenvolvimento

No Varstation utilizamos a metodologia ágil de [Scrum](https://pt.wikipedia.org/wiki/Scrum_(desenvolvimento_de_software)) . Nossas sprints tem um ciclo de 15 dias com reuniões diárias (Daily meetings para acompanhamento e verificação de bloqueios), retrospectivas e reviews (após as sprints) e a planning (3 dias antes de início de cada sprint).

Todas estas definições são formuladas perante o coordenador de produtos do Varstation e o gerente de bioinformática e revisam o fluxo trimestralmente. A cada sprint é definido os objetivos, as tarefas a serem trabalhadas e os scrum masters (SMs). 

Os scrum masters são definidos em um rodízio dando oportunidade a todos do time de assumirem o papel de SM (pré-requisito: ter realizado o treinamento interno de scrum master). Nossos times são divididos em squads contendo 1 ou mais bioinformatas e em algumas spritns podem incluir desenvolvedores, designers e analistas de produto.


![](/img/Scrum-Varstation.png)
Figura 8: Processo para desenvolvimento dos pipelines de bioinformática do Varstation.

## Gerenciamento de Atividades

Todas as histórias de usuário são armazenadas em nosso board do [Trello](http://trello.com/). Usamos esta ferramenta para ser o repositório de atividades e gestão do progresso de atividades para o time de desenvolvimento e para os product owners. Para definir a qual board as atividades de um pipeline devem ser catalogadas, converse com o Product Owner e o gerente de bioinformática. Eles serão organizados em forma de épicos (uma história com os macro-objetivos que precisam ser quebrados para detalhes) e histórias (unidades com tarefas específicas que guiam o progresso do épico) que serão adicionadas ao sprint backlog em conjunto com o time de desenvolvimento seguindo as práticas da metodologia Scrum.

Abaixo um resumo das etapas de uma sprint tradicional de nossos times de construção de pipelines:

| Etapa | Descrição |
| --- | --- |
| Épicos |  História com macro-objetivos que precisam ser detalhados a cada planejamento de sprint. Geralmente aqui são os épicos que saem direto do Bioinformatics Pipeline Canvas.|
| Backlog | Lista de histórias que já foram detalhadas e aguardam na fila para desenvolvimento, nesta etapa o Product Owner já inicia a priorização das atividades. |
| Sprint X.X | A Sprint Backlog contendo as atividades da sprint corrente. O time de desenvolvimento já inicia a alocação de recursos e pessoas para cada atividade. |
| In Progress | Estórias em desenvolvimento no momento pelo time de desenvolvimento. |
| On Hold | Estórias com algum bloqueio ou impedimento que precisam ser avaliadas em conjunto com o Product Owner ou Scrum Master. |
| Done Sprint X.X | Estórias validadas e que já foram entregues seguindo os critérios de aceitação. |

![](/img/Squad-OMICS-Trello.png)
Figura 9: Exemplo de um board de um dos nossos times que trabalham nos projetos de bioinformática.

## Fluxo de desenvolvimento

Nossos repositórios trabalham com três branches principais que são usadas para diferentes estágios de pipeline e três branches locais para criação de funcionalidades e hotfixes.

| Branch | Propósito |
| --- | --- |
| develop |  Código que passou pelos testes de desenvolvimento; pre-release para testes |
| staging | Código de release candidate para testes científicos de homologação |
| master | Código onde passou todos testes de validação; os candidatos de release publicados |
| feature| Código local para novas implementações |
| release|  Código para finalizar o release tags |
| hotfix | Código para resolver problemas críticos em produção que não podem esperar novo release |

Utilizamos o fluxo de git flow que nos permite controlar nossas branch separadas por responsabilidades, não impactando na branch master que é o onde nosso código estável se mantém fiel, utilizamos tag para versionar nossas releases e ter um controle bem mais flexível.

![](/img/gitflow.png)
Figura 7: Fluxo de desenvolvimento de branches utilizando gitflow.

Todos detalhes do gitflow podem ser encontrados [aqui](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html).

### Repositório template para construção de pipelines

No Varstation construímos um [repositório template](https://github.com/Varstation/pipeline-template) com todas as configurações preparadas para construção de um pipeline do início. O repositório template segue a seguinte estrutura de diretórios e arquivos:

![](/img/pipeline_template.png)
Figura 8: Repositório com template para construção de pipelines seguindo as boas práticas de desenvolvimento.


| Pasta/Arquivo | Descrição |
| --- | --- |
| .github | Pasta que contém todos os arquivos de configuração do Continuous Integration com Github |
| tests | Pasta que contém todos os arquivos de configuração e suite de testes do pipeline |
| tools | Pasta que contém scripts utilitários utilizados pelas ferramentas de build e deploy |
| docs |  Pasta contendo toda a documentação do pipeline |
| .gitignore| Código contendo todos arquivos e diretórios que devem ser ignorados pelo git em commits |
| .gitmodules | Código que estrutura as sub-módulos para uso comum como tasks, wd-metrics, wd-merge-vcfs, wdl-structs e outros criados|
| CHANGELOG.md| Código que rastreia as mudanças a cada release lançada |
| README.md |  Código contendo uma breve descrição sobre o pipeline e links de acesso rápido |
| codigo.wdl | Códigos-fontes escritos em WDL dos respectivos pipelines |
| requirements-test.txt | Arquivo de configuração com as bibliotecas necessárias para instalação para execução local e testes do pipeline |
| test.sh | Script para execução de testes do pipeline |


:::caution

Antes de iniciar a construção de um pipeline, verificar se o pipeline a ser desenvolvido é apenas uma melhoria de um pipeline anterior em produção ou de fato é um pipeline totalmente novo. Definimos alguns critérios para esta verificação, como se há apenas melhorias ou hotfixes (consertos) ou o ajustes em parâmetros ou arquivos de configuração. Recomendamos sempre antes conversar com o time nas reuniões de planning para estas definições.

Construir pipelines é uma tarefa árdua, portanto sempre prezamos pelo reuso, desde que de fato se adeque às necessidades da pesquisa ou novo exame a ser construído.

:::

Trazemos um pequeno fluxograma para avaliação de construção de um pipeline do zero ou apenas uma melhoria de um pipeline anterior. Realize ajustes conforme sua necessidade.

![](/img/Fluxograma_pipeline_.png)
Figura 9: Fluxo para avaliação de construção de um pipeline a partir do zero ou criação de uma nova versão de um pipeline existente.
### Setup do ambiente de desenvolvimento local

Para desenvolvimento local é necessário que você tenha o git instalado e um repositório válido para o pipeline. Nós recomendamos que o pipeline seja derivado de nosso template construído para pipeline de bioinformática. A operação de fork (templating) é feito a partir de um botão localizado na parte superior à direita. Uma vez realizado você irá construir um clone do repositório original contendo todos os arquivos e pastas neste novo repositório.

![](/img/pipeline_template_2.png)  ![](/img/pipeline_template_3.png)
Figura 10: Fluxo para criação do pipeline usando o pipeline template.

  * [ ] Setup do desenvolvimento de Git e GitFlow
  * [ ] Setup do desenvolvimento de Docker e WDL local
  * [ ] Setup do desenvolvimento do Ambiente Remoto
  * [ ] Definir Sprint Backlog e Cronograma alinhado com Product Owner e Scrum Master
  * [ ] Definição de fluxo de Pull Request e Aprovação

### Fluxo do Desenvolvimento local

O nosso desenvolvimento local segue o seguinte fluxo ilustrado abaixo:

![](/img/Localflow.png)
Figura 11: Fluxo do desenvolvimento local

  * [ ] Toda introdução de mudanças segue uma rotina de testes locais usando [suíte de testes automatizados]((./tests.md));
  * [ ] É realizado uma [avaliação de estilo](./style.md) de código-fonte e validação de sintaxe da linguagem WDL;
  * [ ] Caso passos anteriores tenham sucesso, o código recebe sinal verde para realizar um commit;


### Fluxo do Desenvolvimento para lançamento de release

Todos os pipelines de bioinformática acompanham testes automáticos que serão executados a cada Pull Request (PR). Estes testes envolvem testes de validação que comparam os outputs esperados com os outputs do pipeline versionado na PR. Códigos compartilhados entre pipelines, os testes também validam se alterações em código podem afetar outros pipelines e garantem que o PR não realize nenhuma mudança não desejada.

O nosso fluxo de integração contínua para Pull Requests (PR) segue o seguinte fluxo ilustrado abaixo:


![](/img/BuildWorkflow.png)
Figura 12: Fluxo da construção do build após PR

  * [ ] Logo que um Pull request (PR) for submetido e houver alterações em código de pipeline (WDL e arquivos de configuração) a suíte de CI do Github entra em ação e cria uma instância de testes;
  * [ ] É realizado uma [avaliação de estilo](./style.md) de código-fonte e validação de sintaxe da linguagem WDL;
  * [ ] São realizados testes de integração e funcionais a partir da [suíte de testes automatizados]((./tests.md));
  * [ ] Caso passos anteriores tenham sucesso, o código recebe sinal verde para que o PR seja aprovado;


## Branches relacionadas a testes

Nossa configuração de integração contínua utiliza as seguintes branches abaixo:


| Branch | Propósito |
| --- | --- |
| develop | Todo código que pretende ser lançado ; ambiente de homologação |
| master | Todo código que estável e que já passou por todos os testes; pipelines já com releases publicadas |

O PR irá iniciar o pipeline de CI se ele identificar mudanças em código WDL, dependências do WDL (tasks), arquivos de configuração JSON, arquivos de teste ou inputs. No nosso repositório utilizamos o github actions com continuous integration, logo que é submetido ao repositório uma solicitação de pull request (PR) os CIs entram automático para realizar as etapas de validação de estilo e sintaxe de código e em seguida os testes automatizados. Uma vez que as etapas concluam com sucesso, o CI envia uma notificação informando que os builds e testes foram realizados com sucesso:



![](/img/PR-success.png)
Figura 13: Tela de um PR com sucesso após build testada e aprovada.

### Exemplo de Pipeline

Abaixo disponibilizamos um pipeline de exemplo para chamada de deteção de variantes seguindo as práticas aqui estabelecidas. Nosso pipeline é de detecção de variantes germinativas para os genes BRCA1 e BRCA2 no genoma humano. Utilizamos como ferramentas o [BWA-MEM](http://bio-bwa.sourceforge.net/) para alinhamento das sequências de DNA a partir dos FASTQs e o [Freebayes](https://github.com/freebayes/freebayes) para detecção de variantes SNV e indels.

![](/img/wdl-demo-pipeline.png)
Figura 14: Tela do repositório do pipeline germinativo wdl-demo-pipeline


#### Link para o repositório:  [https://github.com/Varstation/wdl-demo-pipeline](https://github.com/Varstation/wdl-demo-pipeline)

Todo o pipeline seguiu o fluxo de desenvolvimento na branch DEVELOP com múltiplas solicitações de PR os quais foram revisadas e ajustadas para atender o nosso processo de build de testes. Possuímos dois workflows de CI , o [primeiro](https://github.com/Varstation/wdl-demo-pipeline/blob/main/.github/workflows/ci.yml) para realizar a avaliação de sintaxe e estilo de código seguindo as boas práticas do nosso grupo, e o [segundo](https://github.com/Varstation/wdl-demo-pipeline/blob/main/.github/workflows/ci.yml) para realizar sucessivos testes de integração para verificação das etapas do pipeline para garantir que os mesmos continuem gerando os resultados válidos.

![](/img/github-action-workflow.png)
Figura 15: Tela dos logs dos workflows a partir do Github Actions.


O build de documentação também é gerado a partir que é realizado a aprovação do PR, o qual é acionado uma [CI action](https://github.com/Varstation/wdl-demo-pipeline/blob/main/.github/workflows/publish.yml) específica para construção e publicação da documentação em ambiente de produção, releases são geradas a partir de um commmit no repositório de geração de tag (release).


![](/img/wdl-docs.png)
Figura 16: Tela da documentação do pipeline em WDL
