---
sidebar_position: 1
---

# Seja bem vindo ao Playboook de Bioinformática do Varstation

O Varstation possui uma coleção de pipelines para chamada de variantes de amostras biológicas genômicas para serem processados em nuvem ou local. Este guia foi construído para ajudar a todos colaboradores
a executar ou desenvolver os pipelines WDL do Varstation.

O conteúdo deste repositório é open-source e apenas informações consideradas públicas pelo nosso grupo são publicadas aqui sobre a licença  [BSD 3-Clause license](https://github.com/Varstation/bioinfo-playbook).


## Breve Introdução sobre os Pipelines

Com o volume de dados genômicos exponencial a partir dos sequenciadores de nova geração (NGS), aumentou exponencialmente os desafios de tratar estes dados e integrar todas estas informações. Inúmeras ferramentas
de software têm sido criadas para lidar com estes tipos de dados, porém são específicas para um determinado tipo de análise e precisam se comunicar com outras para completar uma tarefa. Diante destas dificuldades,
para os bioinformatas e biológos, a análise de dados genômicos se transforma em um processo, complexo, demorado e entendiante.

Os sistemas de pipeline para análise de dados genômicos têm o objetivo de contornar estes obstáculos, criando integrações entre as diferentes ferramentas no intuito de reduzir os esforços do pesquisador e bioinformata
no processamento e análise destes dados.  Há vários tipos de pipelines de bioinformática , e aqui no Varstation e Hospital Israelita Albert Einstein, trabalhamos com pipelines de sequenciamento clínico para detecção,
filtragem e anotação de variantes que possam auxiliar no diagnóstico clínico do paciente.

Pipelines são por definição, sequenciais divididos em etapas. Os dados gerados em uma etapa servem de entrada para a próxima etapa, formando uma corrente de elementos de processamento. O fluxo do pipeline é linear, e depois
que o mesmo é configurado e parametrizado, não é mais possível tomar direções quanto à direção do fluxo de processamento.

![Docusaurus logo](/img/pipeline_bioinfo.png)
Figura 1: Esquema demonstrativo de um pipeline de análise de bioinformática para sequenciamento de nova geração (NGS). Adaptado de Roy et al., 2018.


Os pipelines de bioinformática (Figura 1) geralmente são plataformas específicas customizadas de acordo com as necessidades de cada laboratório, mas que consistem basicamente em alguns passos principais: geração da sequência de interesse, alinhamento da sequência com o genoma de referência, chamada de variantes, anotação das variantes, seleção das variantes e elaboração do laudo clínico. A seguir, entenderemos um pouco melhor como funcionam cada um desses passos.

- **Geração da sequência de interesse**: É o processo que converte os sinais emitidos pelos sensores (informações ópticas ou químicas) em informação binária para identificação da sequência de nucleotídeos de cada pequeno fragmento de DNA sequenciado. Para cada nucleotídeo é atribuído o score de qualidade Phred, que é específico para cada tipo de plataforma de sequenciamento. As sequências juntamente com o score Phred são armazenados em arquivos FASTQ.

- **Alinhamento da sequência**: Processo que determina onde cada pequeno fragmento de DNA sequenciado alinha com o genoma de referência. Esse processo mapeia os scores de qualidade Phred para cada read, além de mapear a localização (coordenada genômica) de cada read alinhado, que pode ser utilizado para determinar a cobertura do sequenciamento. As informações de alinhamento são armazenadas em um arquivo BAM.

- **Chamada de variantes**: Processo de identificação das bases que diferem do genoma de referência. O arquivo input geralmente é o BAM gerado no alinhamento dos reads. A chamada de variantes é um conjunto de algorítimos utilizados estrategicamente para cada tipo de variantes, como por exemplo, SNVs ou Indels. A acurácia da chamada de variantes é muito dependente da qualidade das bases chamadas e dos reads alinhados. O produto final da chamada de variantes é um arquivo no formato VCF.

- **Anotação das variantes**: Processo de consultas em bancos de dados de sequenciamento e variantes para caracterizar cada variante chamada utilizando inúmeras informações como, por exemplo, a localização da variante, sequencia prevista de aminoácidos (nomenclatura HGVS), frequência alélica populacional, prevalência em diversos bancos de dados, entre outros. Esse processo é fundamental para selecionar ou filtrar variantes para classificação e interpretação.

- **Seleção de variantes e elaboração do laudo clínico**: A partir da anotação das variantes, são identificadas as variantes clinicamente significantes para revisão e interpretação. Para esse processo, é fundamental que os pipelines de bioinformática estejam muito bem alinhados e validados, para que não se perca nenhuma variante que possa ser importante para o paciente. As variantes selecionadas são classificadas de acordo com as diretrizes da ACMG. Hoje, plataformas como o Varstation auxiliam fundamentalmente nesse processo de anotação, seleção e classificação de variantes.


A seguir, temos um glossário dos principais termo utilizados, fundamentais para compreensão de todo processo de pipelines de análise:

![](/img/Glossario_bioinfo.png)

Tabela 1: Principais termos de bioinformática utilizados para pipelines de análise de NGS



### Sobre WDL

Os pipelines desenvolvidos no Varstation são utilizados por diversos laboratórios nacionais , incluindo o laboratório clínico do Hospital Israelita Albert Einstein.  Logo, os pipelines são rigorosamente validado e testados para serem usados em larga escala e reprodutíveis.  Os pipelines são escritos em linguagem de "workflow" utilizando a linguagem de marcação de Workflows WDL - Workflow Description Language, e processam um variado conjunto de dados ômicos desde genômica, multigenômica, viroma e transcriptoma.


WDL é uma linguagem de marcação desenvolvida pelo Instituto Broad para construção dos seus pipelines de análise genômica. Desde sua concepção, tem sido largamente adotada e desenvolvida por uma comunidade global de pesquisadores, programadores, engenheiros e analistas.

![](/img/WDL_example.png)
Figura 2: Esta imagem foi adaptada do Guia WDL da Broad.

### Pipelines do Varstation

O time de desenvolvimento do Varstation desenvolve diversos tipos de pipelines para vários tipos de dados e problemas. Abaixo um breve catálogo dos pipelines em produção ou em desenvolvimento:

Nome                          | Versão         | Descrição                                                                                                                                           | Especificação                                                                                         | Workflow                                                                                                                       | Status                                                                                                              |
| ----------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| wdl-metagenomica              | v0.2.0         | Pipeline para identificação de patógenos de DNA (Vírus, Bactérias, Fungos, Parasitas eucarióticos)                                                                                                            | None             | [Workflow](./workflows/qc/quality-check-standard.wdl)    | ![In Production](https://img.shields.io/static/v1?label=Status&message=Production&color=green&style=flat-square)    |
| wdl-dragen-dna-germline         | N/A             | Pipeline para processamento de dados germinativos com Dragen                            | None                                                                                                  | [Workflow](./workflows/rnaseq/rnaseq-star-db-build.wdl)                                                                        | ![In Development](https://img.shields.io/static/v1?label=Status&message=Development&color=red&style=flat-square)    |
| wdl-viroma         | v0.2.0            | Pipeline para análise metagenômica de vírus, bactérias, fungos e parasitas eucariotos.   |None   |[Workflow](./workflows/rnaseq/rnaseq-star-db-build.wdl)                                                                        | ![In Production](https://img.shields.io/static/v1?label=Status&message=Production&color=green&style=flat-square)   |
| wdl-tasks         | N/A           | Tasks em WDL base para uso comum em pipelines.   |None   |[Workflow](./workflows/rnaseq/rnaseq-star-db-build.wdl)                                                                        |![In Development](https://img.shields.io/static/v1?label=Status&message=Development&color=red&style=flat-square)    |


## Por onde começar ?

Este guia foi construído por desenvolvedores e bioinformatas para outros bioinformatas, portanto há vários caminhos de explorar este guideline. Abaixo disponibilizamos as principais trilhas para quem quer começar neste mundo da bioinformática.
### Quero executar meu primeiro pipeline

Neste link você aprenderá como executar o seu primeiro pipeline.
### Quero construir ou melhorar um pipeline.

Neste link, apresentamos o passo-a-passo com práticas para você construir ou melhorar um pipeline.

### Quero conhecer sobre o ciclo de vida de desenvolvimento de um pipeline.

Neste link, você irá entender melhor sobre o ciclo de vida de desenvolvimento de um pipeline e os respectivos estágios durante o seu ciclo de vida de concepção, produção e encerramento.