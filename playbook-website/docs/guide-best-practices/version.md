---
sidebar_position: 9
---


# Versionamento Semântico

## Motivação

[Semantic Versioning (SemVer)](https://semver.org/lang/pt-BR/) é um manifesto com diretrizes sobre como criar versões de software. Tem como objetivo sinalizar como as alterações contidas em uma nova versão impactam as pessoas e os sistemas que utilizam o programa. O formato é definido por um caractere v (de versão), seguido por três números inteiros separados por pontos, cada número tem significados distintos (`vMAJOR.MINOR.PATCH`). MAJOR quando fazer mudanças incompatíveis na API; MINOR quando adicionar funcionalidades mantendo compatibilidade; e PATCH quando corrigir falhas mantendo compatibilidade. Opcionalmente, pré-lançamentos podem ser definidos adicionando a informação separada por traço (`vMAJOR.MINOR.PATCH-RC`).

## Proposta

Essa proposta é inspirada no guia de versionamento e changelog do [WDL Analysis Research Pipelines (WARP)](<https://broadinstitute.github.io/warp/docs/contribution/contribute_to_warp/changelog_style>) e na documentação do SemVer 2.0.0. Tem como objetivo padronizar o versionamento de pipelines e dar significados (ou convenções) que facilitam identificar qual versão é a mais recente e o grau de alterações feitas de uma versão para outra. Além disso, o versionamento ajuda na comunicação entre os times de bioinformática e de desenvolvimento, sinalizando que alterações feitas no pipeline podem ou não quebrar sistemas integrados. Dessa forma, damos novos significados para cada tipo de incremento de versão.

**MAJOR** - alterações nas entradas (`input`) ou saídas (`output`) do protocolos, ou seja, na “API” do pipeline. Serve também para sinalizar que o protocolo cumpre os novos requisitos de integração de sistemas (_breaking changes_) e as boas práticas. Exemplos que levam a uma nova versão MAJOR: 

* mudar o nome de uma entrada ou saída 
* adicionar ou remover entradas ou saídas
* tornar opcional ou obrigatório entradas ou saídas
* mudar estrutura de objetos (struct)
* adicionar ou remover parâmetros de runtime e metadados para integração
* alterar versão da especificação do WDL (1.0 para 1.1 por exemplo)
Uma nova versão MAJOR pode ter alterações adicionais (MINOR) e melhorias na documentação e correção de bugs (PATCH). Uma nova versão MAJOR zera MINOR e PATCH.

**MINOR** - não altera entradas e saídas do protocolo, ou seja, não quebra a “API” do _pipeline_. Serve para sinalizar que o fluxo do pipeline e programas utilizados podem ter sido modificados. O incremento MINOR sinaliza para o time de bioinformática que melhorias foram feitas para obter melhores resultados de análise ou de desempenho, ao mesmo tempo sinaliza para o time de desenvolvimento de que a nova versão pode substituir a versão anterior sem a necessidade de alterar o sistema integrado. Exemplos que levam a uma nova versão MINOR: 

* adicionar ou remover tarefas
* atualizar versão de tarefas ou de programas
* adicionar, remover ou atualizar parâmetros de tarefas
* alterar fluxos de _pipelines_ e otimizações (`scatter`)
* alterar linhas de comando (`command`)
* alterar parâmetros de runtime (CPU, memória, disco)
* adicionar bancos de dados (de anotação)

Uma nova versão MINOR por pode ter melhorias na documentação e correção de bugs (PATCH). Uma nova versão MINOR zera PATCH.

**PATCH** - não altera entradas e saídas do protocolo, tarefas e faz otimizações. Serve para corrigir pequenos problemas, como erros de digitação ou adicionar documentação faltante. Exemplos: 
adicionar comentários de código e adicionar documentações
reformatar arquivo
adicionar ou alterar metadados (​​meta, parameter_meta)
correções de bugs
atualizar versão de bancos de dados (de anotação)

**Desenvolvimento (`v0.MINOR.PATCH`)** - indica que o pipeline está em desenvolvimento. Isso possibilita testar os pipelines e executar manualmente enquanto não são integrados aos sistemas. Podem haver alterações nas entradas e saídas do protocolo sem criar uma nova versão MAJOR. A primeira versão de desenvolvimento é `v0.1.0`.

**Pré-lançamento (`vMAJOR.0.0-RC`)** - indica que uma nova versão MAJOR será lançada, que cumpre os requisitos de integração ou boas práticas, mas que precisa passar por testes de integração de sistemas. Uma versão de pré-lançamento tem precedência menor que a versão associada. Uma versão de desenvolvimento não pode ter pré-lançamentos.

## Quando lançar a primeira versão (`v1.0.0`)

* sistema integrado utilizar o pipeline
* pipeline fazer parte de uma rotina
* pipeline tornar-se público
* outro pipeline depender (`import`)

## Diferenças em relação ao SemVer

* Não há ponto entre o nome do pré-lançamento (RC) para separar o texto da versão. Por exemplo, `v1.0.0-rc1` ao invés de `1.0.0-rc.1`.
* Não é permitido pré-lançamentos de versões MINOR e PATCH

