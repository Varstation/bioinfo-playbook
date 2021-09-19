---
sidebar_position: 2
---

# Executando um pipeline localmente

Os pipelines executados pelo nosso time no Varstation, são todos escritos na linguagem WDL e são testados usando Cromwell. Podemos rodar localmente usando o cliente cromwell.jar ou utilizarmos o programa Oliver que interfaceia diretamente com o servidor Web Cromwell para execução remota das tarefas. Embora não testemos nossos pipelines fora do Cromwell, nós esperamos que os os pipelines rodem da mesma maneira com outros orquestradores.

A maneira mais rápida de executar o nosso pipeline, é instalar o bioconda e rodar os seguintes comandos:

```
conda create -n workflows-dev -c conda-forge cromwell -y
conda activate workflows-dev
git clone git@github.com:stjudecloud/workflows.git
cd workflows
```

Quaisquer um dos workflows na pasta workflow são bons exemplos para começar:

```
cromwell run workflows/germline-pipeline/simple-germline-variantcalling.wdl --inputs workflows/germline-pipeline/inputs.json
```

Assim que executar o comando acima, o orquestrador Cromwell irá apresentar mensagens no terminal sobre o andamento do pipeline até que o workflow seja executado por completo com sucesso. Neste pipeline acima pegamos um *bam file* pré-processado e chamamos variantes com o *haplotypeCaller*. O arquivo final é um arquivo de variantes VCF que separamos em SNPs e indels. 

Vamos olhar um dos *outputs* (saídas). A maneira mais fácil é abrir o vcf como um editor de texto simples, usando o seu terminal ou abrindo via o editor de textos.

```
#CHROM  POS ID  REF ALT QUAL  FILTER  INFO  FORMAT  NA12878
20  9999996 . A ACT 534.73  . AC=2;AF=1.00;AN=2;DP=12;FS=0.000;MLEAC=2;MLEAF=1.00;MQ=60.00;QD=25.82;SOR=5.136 GT:AD:DP:GQ:PL  1/1:0,12:12:39:572,39,0
20  10001436  . A AAGGCT  1222.73 . AC=2;AF=1.00;AN=2;DP=29;FS=0.000;MLEAC=2;MLEAF=1.00;MQ=60.00;QD=32.17;SOR=0.836 GT:AD:DP:GQ:PL  1/1:0,28:28:84:1260,84,0
```

Agora que você aprendeu a como rodar seu primeiro pipeline localmente, vamos te ensinar a como rodar o seu pipeline no modo servidor remoto, este se aplica para execução em nossos servidores de homologação ou produção.
