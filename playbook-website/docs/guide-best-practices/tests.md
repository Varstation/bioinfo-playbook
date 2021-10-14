---
sidebar_position: 8
---


# Testes Automáticos

É recomendado que todos os pipelines de bioinformática do grupo Varstation tenham testes automáticos com o objetivo de garantir a consistência e corretude durante novas atualizações. Os testes são implementados usando o framework [pytest-workflow](https://pytest-workflow.readthedocs.io/en/stable/).

Todos os testes definidos na configuração do pytest-workflow devem ter as tags  `integration`  ou `functional` para indicar quand os testes devem ser executados em todos os PRs ou arbitrariamente.


## Estrutura de arquivos de teste

Dentro do repositório do pipeline, contém uma pasta "teste" .  Esta pasta contem todos os arquivos de teste, incluindo arquivos de entrada JSON, os arquivos de configuração YAML, os arquivos de dados obrigatórios e arquivos de configuração cromwell.

A maior parte destes diretórios e arquivos são opcionais.

```
.
├── cromwell_config
│   └── docker.conf
├── cromwell_options.json
├── data
│   └── <test data>
├── functional
│   └── <input JSON files for any potential functional (large data) tests>
├── integration
│   └── <input JSON files for any potential integration (small data) tests>
├── samplesheets
│   └── <sample sheets for the test samples>
├── <custom pytest scripts for more complex testing>
└── <pytest-workflow YAML files>
```

## Arquivos de dados

Os arquivos de dados podem ser quaisquer arquivos desde VCF a arquivos de genoma de referência FASTA. Estes arquivos são referenciados nos arquivos de entrada JSON ou em samplesheets. Importante lembrar que os arquivos devem estar com os paths
relativos para que possam ser usados para testes em sistemas.

Preferencialmente estes arquivos devem ser pequenos (< 1MB), para não tornar as operações de download mais lentas.

## Testes funcionais

Os testes funcionais significam os testes com dados de maior escala. Estes arquivos geralmente não devem estar dentro do repositório e sim armazenado em buckets AWS ou storages externos. Estes testes são geralmente executados em nossos clusters na AWS ou localmente de forma arbirtrária.

## Testes de integração
Estes testes devem ser executados para todo PR que é realizado. Estes devem usar apenas pequenas amostras de dados que são inclusas no repositório.

## Arquivos de integração contínua (configuração)

Para executar os testes em nossos ambientes de CI , utilizamos o [Github Actions](https://github.com/features/actions).

Exemplos podem ser encontrados em nosso repositório:

- [ci](https://github.com/Varstation/pipeline-template/blob/main/.github/workflows/ci.yml)
- [publish.yml](https://github.com/Varstation/pipeline-template/blob/main/.github/workflows/publish.yml)