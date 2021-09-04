---
sidebar_position: 3
---

# Executando seu pipeline remotamente

Neste tutorial iremos apresentar como executamos o pipeline em WDL em Cromwell hospedados em ambientes remotos ou cloud. Ao fim desta seção, você terá a capacidade de poder executar seus pipelines wdl utilizando de recursos de infra-estrutura mais sofisticados em nuvem como AWS, Azure , ou até em outro ambiente-cloud privado.

## Visão do Oliver em execução

Para executar um pipeline em um orquestrador Cromwell hospedado remotamente, utilizamos de um gerenciador de orquestramento open-source desenvolvido pela grupo do hospital Saint Jude Cloud Team: oliver.  Baseado na sua página principal, esta ferramenta pode auxiliar no processo de submissão, inspeção, interrupção e reexecução de workflows em ambiente Cromwell.
Ele também permite a possibilidade de rastrear os jobs de execução para facilitar o reporting. Permite também enviar parâmetros
via command-line ou via JSON files. E finalmente, a sua integração com ambientes em nuvem como aws e azure, facilitando o interfaceamento com estes ambientes nativos em cloud.

![Docusaurus logo](/img/oliver.gif)
Figura 2: Utilitário de orquestramento Oliver em execução no terminal. Ferramenta open-source desenvolvida pelo time do Hospital Saint Jude.

## Executando seu pipeline no ambiente Cromwell servidor

O servidor Cromwell pode está rodando em um ambiente nuvem remoto e este oferece um set de APIs que permitem a submissão e monitoramento dos jobs para processamento. Este cenário é o ideal para os pipelines que exigem maior poder de processamento e memória, que pode ser um limitante quando rodar na máquina do bioinformata.  No Varstation possuímos um servidor de produção que roda o ambiente Cromwell hospedado na cloud AWS. Este se aproveita de todos os recursos computacionais da AWS permitindo executar múltiplos jobs em paralelo. 

Na figura 3 ilustramos de forma simplificada o fluxo de submissão de um job em um Servidor Cromwell. A documentação completa de toda a API de interfaceamento com o Cromwell pode ser encontrada neste link.

![Docusaurus logo](/img/cromwell.jpeg)
Figura 3: Fluxo do Pipeline para processamento de pipelines com Cromwell Modo Servidor


A maneira mais rápida de executar o nosso pipeline, é instalar o bioconda e rodar os seguintes comandos:

```
conda create -n workflows-dev python=3.7 -y
conda activate workflows-dev
conda install -c conda-forge  oliver cromwell -y
git clone git@github.com:stjudecloud/workflows.git
cd workflows
```

Quaisquer um dos workflows na pasta workflow são bons exemplos para começar. Vamos precisar configurar o oliver antes de executarmos pela primeira vez:

```
$ oliver configure
```

Já temos uma configuração padrão para executar em nossos servidores AWS de homologação e uma para executar em nossos servidores locais da Genomika.

Abaixo os comandos necessários para submeter um de nossos workflows.


```
oliver submit workflow.wdl inputs.json input_key=input_value
```

Assim que executar o comando acima, o utilitário oliver irá submeter o job para o orquestrador Cromwell. Para inspecionar o status do job, você pode interrogar o servidor sobre o seu status.


```
oliver inspect workflow-id
```

Se você não tem certeza qual é o id do seu workflow submetido, você pode rastrear o mesmo por meio do comando status.

```
# detailed view, which shows individual workflow statuses
oliver status -d
```


Assim que executar o comando acima, o orquestrador Cromwell irá apresentar mensagens no terminal sobre o andamento do pipeline
até que o workflow seja executado por completo com sucesso.

Para avaliar um dos outputs de saídas utilize o comando abaixo:

```
oliver outputs workflow-id
```

 Neste pipeline acima pegamos um bam file pré-processado e chamamos variantes com o haplotypeCaller. O arquivo final é um arquivo de variantes VCF em que separamos em SNPs e indels. Vamos olhar um dos outputs (saídas). A maneira mais fácil é abrir o vcf como um editor de texto simples, usando o seu terminal ou abrindo via o editor de textos.

```
#CHROM  POS ID  REF ALT QUAL  FILTER  INFO  FORMAT  NA12878
20  9999996 . A ACT 534.73  . AC=2;AF=1.00;AN=2;DP=12;FS=0.000;MLEAC=2;MLEAF=1.00;MQ=60.00;QD=25.82;SOR=5.136 GT:AD:DP:GQ:PL  1/1:0,12:12:39:572,39,0
20  10001436  . A AAGGCT  1222.73 . AC=2;AF=1.00;AN=2;DP=29;FS=0.000;MLEAC=2;MLEAF=1.00;MQ=60.00;QD=32.17;SOR=0.836 GT:AD:DP:GQ:PL  1/1:0,28:28:84:1260,84,0
```


Agora que você aprendeu a como rodar seu pipeline em um de nossos orquestradores Cromwell em modo servidor utilizando o utilitário de interfaceamento oliver. Existe também a opção de executar o mesmo localmente.