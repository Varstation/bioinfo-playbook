---
sidebar_position: 2
---

# Executando um pipeline localmente

Os pipelines executados pelo nosso time no Varstation, são todos escritos na linguagem WDL e são testados usando Cromwell. Podemos rodar localmente usando o cliente cromwell.jar ou utilizarmos o programa Oliver que interfaceia diretamente com o servidor Web Cromwell para execução remota das tarefas. Embora não testemos nossos pipelines fora do Cromwell, nós esperamos que os os pipelines rodem da mesma maneira com outros orquestradores.

A maneira mais rápida de executar o nosso pipeline, é instalar o bioconda e rodar os seguintes comandos:

```
conda create -n workflows-dev -c conda-forge cromwell -y
conda activate workflows-dev
git clone git@github.com:Varstation/wdl-demo-pipeline.git
cd wdl-demo-pipeline
aws s3 cp s3://wdl-poc-ci/ ./tests/data/   --recursive 
```
> O comando aws s3 exige que você tenha credenciais válidas na AWS do Varstation. Procure o time de infra-estrutura para obter suas credenciais com uma conta válida na AWS.


Este é o nosso pipeline de [exemplo](https://github.com/Varstation/wdl-demo-pipeline) para quem está iniciando, ele executa
o pipeline de detecção de variantes germinativas com as etapas de merge de fastqs, alinhamento com [Bwa](http://bio-bwa.sourceforge.net/) e chamada de variantes com [Freebayes](https://github.com/freebayes/freebayes).

```
cromwell run -o tests/cromwell_options.json -i tests/functional/inputs.json germline-varcall-dna.wdl
```

Assim que executar o comando acima, o orquestrador Cromwell irá apresentar mensagens no terminal sobre o andamento do pipeline até que o workflow seja executado por completo com sucesso. Neste pipeline acima pegamos um par de *fastq files* , alinhamos com Bwa e chamamos variantes com o *Freebayes*. O arquivo final é um arquivo de variantes VCF que separamos em SNPs e indels.

Vamos olhar um dos *outputs* (saídas). A maneira mais fácil é abrir o vcf como um editor de texto simples, usando o seu terminal ou abrindo via o editor de textos.

```
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO	FORMAT	unknown
chr13	32890562	.	T	C	8.74137e-12	.	AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=30;DPB=30;DPRA=0;EPP=3.0103;EPPR=4.25114;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=26.9327;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=73;QR=1023;RO=28;RPL=0;RPP=7.35324;RPPR=63.8115;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=16;SRP=4.25114;SRR=12;TYPE=snp	GT:DP:AD:RO:QR:AO:QA:GL	0/0:30:28,2:28:1023:2:73:0,-2.1002,-85.4476
chr13	32890572	.	G	A	678.735	.	AB=0.608696;ABP=7.73089;AC=1;AF=0.5;AN=2;AO=28;CIGAR=1X;DP=46;DPB=46;DPRA=0;EPP=3.32051;EPPR=3.49285;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=85.5046;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=1055;QR=678;RO=18;RPL=0;RPP=63.8115;RPPR=42.0968;RPR=28;RUN=1;SAF=15;SAP=3.32051;SAR=13;SRF=10;SRP=3.49285;SRR=8;TYPE=snp	GT:DP:AD:RO:QR:AO:QA:GL	0/1:46:18,28:18:678:28:1055:-81.4105,0,-47.505
chr13	32890593	.	T	C	0	.	AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=61;DPB=61;DPRA=0;EPP=3.0103;EPPR=3.93042;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=67.5997;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=77;QR=2268;RO=59;RPL=0;RPP=7.35324;RPPR=98.7391;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=32;SRP=3.93042;SRR=27;TYPE=snp	GT:DP:AD:RO:QR:AO:QA:GL	0/0:61:59,2:59:2268:2:77:0,-11.0537,-197.03
```

Agora que você aprendeu a como rodar seu primeiro pipeline localmente, vamos te ensinar a como rodar o seu pipeline no modo servidor remoto, este se aplica para execução em nossos servidores de homologação ou produção.
