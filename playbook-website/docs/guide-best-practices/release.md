---
sidebar_position: 6
---


# Criando a primeira release do pipeline

Os pipelines do Varstation são semanticamente versionados, permitindo que você defina quando o pipeline está pronto para uso em testes em produção. Versionamento garante compatibilidade e notifica aos usuários e sistemas que usam este pipeline quando eles devem atualizar devido a obter melhorias, ajustes ou consertos. Versionamento é muito comum na engenharia de software, e permite que usuários possam reproduzir o código na mesma versão quando o mesmo for considerado pelo time de desenvolvimento que o considere "pronto" para gerar uma versão.

Versionamento semântico utiliza a codificação (major.minor.patch) e são legíveis por pessoas e dão uma visão rápida aos desenvolvedores sobre compatibilidade, especialmente quando há melhorias após a primeira versão. Leia mais sobre o nosso tutorial de Versionamento semântico [aqui](./version.md).

Todas as versões geradas do pipelines são empacotadas em releases e publicadas na página de releases do repositório do pipeline no Github (veja um exemplo [aqui](https://github.com/Varstation/wdl-demo-pipeline/releases) do pipeline de WDL-Germline-Demo). Toda release de um pipeline liberado no Github já passou pelos testes de integração (leia mais em [Homologação](./homologation.md)) e está disponível para ser usado em sistemas em produção.


## Checklist para Geração de Release

  * [ ] Congelamento do release candidate do pipeline de bioinformática
  * [ ] Criação do deployment release zip para deploy no varstation
  * [ ] Criação da tag no github (versionamento semântico)
  * [ ] Build do Release Candidate no Varstation Producao
  * [ ] Comitê de GM para definição da data de lançamento
  * [ ] Deploy da Release para ambiente produtivo
  * [ ] Testes no ambiente de validação produtivo com 1 amostra de benchmark de bioinformática



![](/img/release_pipeline.png)
Figura 18: Fluxo para release de pipelines no Varstation

Em nosso pipeline de release construímos um [script](https://github.com/Varstation/pipeline-template/blob/main/.github/workflows/rc.yml) de continuous integration (CI) específico que permite a partir de uma versão publicada no github por meio de tags, uma instância de processamento é invocada o qual realiza os procedimentos de criação do deployment release zip para o release candidate e o release final quando aplicado e publica na área de release do repositório Github do pipeline.

## Criação do release candidate e deployment release para uso no Varstation

Todos os pipelines versionados devem ter:

* Um número de versionamento de release no workflow principal principal. Este número de versão deve estar no formato `major.minor.patch`.

* Um Release Notes em arquivo (ver exemplo em [RELEASENOTES.md](https://github.com/Varstation/pipeline-template/blob/main/RELEASENOTES.md)) informando todas as alterações que foram adicionadas, modificadas ou removidas. Utilizamos o Guia do [KeepChangeLog](https://keepachangelog.com/en/1.0.0/) com alguns ajustes adaptados para nossa realidade, isto incluir a versão, a data do lançamento da release e uma lista de bullets com as modificações desde a última release publicada.

### Guidelines

No Varstation, um pipeline muda de versão quando é realizada quaisquer modificações no workflow principal WDL ou em quaisquer dependências do workflow WDL. Se uma nova versão for publicada, todas as alterações incluindo o novo número da versão precisam ser descritos no release notes do pipeline.

O versionamento do pipeline é atualizado seguindo os seguintes critérios:

#### Alterações de alto impacto (Major)
* Quaisquer alterações que resultem na modificação da saída do pipeline, especialmente, as que indiquem que haverá necessidade a partir da saída deste pipeline reprocessar os dados.
* Quaisquer alterações que incluam refactoring nas entradas ou saídas ou modificações de formato de entrada e saída.

#### Alterações de menor impacto (Minor)
* Adição de novos arquivos de saída que não impactem ou alterem os arquivos de saída anteriores, por exemplo, adicionar um arquivo md5 checkum ou exportar as métricas de qualidade.
* Alterações no pipeline que não alterem qualitativamente as saídas, mas que podem gerar saídas com pequenas mudanças (visuais ou de menor impacto) que não exija um reprocessamento dos dados.

#### Alterações de conserto ou ajustes pontuais (Patch)
* Alteração nos arquivos de configuração (memória, CPU, etc), refactoring por troca de nome de variável ou refactoring de código, velocidade, otimização, comentários, metadata.
* Adição de saídas opcionais.


## Criação do deployment release zip para deploy no varstation

Quando um pipeline é promovido para release main e é submetido uma tag (e.g. 0.1.0 , 0.2.0-rc), uma release é publicada no modo rascunho contendo os seguintes componentes:

1. A release contendo a versão no formato Major.Minor.Patch-{rc} e release notes com as alterações realizadas nesta release.
2. Os artefatos incluindo o workflow principal em WDL, um zip contendo todas as dependências e quando aplicável, o arquivo de options.


Também é lançado antes de uma release final para cada versão, uma release candidata com a tag "rc" que indica uma pre-release para que os desenvolvedores possam testar a integração com futuras versões do pipeline e já validar de forma antecipada a nova versão que está para ser liberada.