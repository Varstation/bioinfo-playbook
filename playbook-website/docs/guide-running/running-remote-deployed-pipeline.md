---
sidebar_position: 3
---

# Executando seu pipeline remotamente

Neste tutorial iremos apresentar como executamos o pipeline em WDL em Cromwell hospedados em ambientes remotos ou cloud/nuvem. Ao fim desta seção, você terá a capacidade de executar seus pipelines wdl utilizando de recursos de infra-estrutura mais sofisticados em nuvem como AWS, Azure, ou até em outro ambiente-nuvem privado.

## Visão do Weedle em execução

Para executar um pipeline em um orquestrador Cromwell hospedado remotamente, utilizamos de um gerenciador de orquestramento open-source desenvolvido pelo nosso grupo : [Weedle](https://github.com/Varstation/weedle). Baseado na sua página principal, esta ferramenta pode auxiliar no processo de submissão, inspeção, interrupção e reexecução de *workflows* em ambiente Cromwell.
Ele também permite a possibilidade de rastrear os jobs de execução para facilitar o reporting. Permite também enviar parâmetros via arquivos JSON. E finalmente, a sua integração com ambientes em nuvem como AWS, facilitando o interfaceamento com estes ambientes nativos em nuvem.

```bash
$ weedle submit --host https://IP_CROMWELL  --disable-ssl --options tests/cromwell_aws_options.json --inputs tests/sandbox/inputs.json --imports-zip germline-varcall-dna_0.1.1-rc.zip germline-varcall-dna_0.1.1-rc.wdl --wait
Workflow id e23f028f-5f84-41e6-b764-7589d0fbb31b
Workflow terminated: Succeeded
...
```


## Executando seu pipeline no ambiente Cromwell servidor

O servidor Cromwell pode está rodando em um ambiente nuvem remoto e este oferece um conjunto de APIs que permitem a submissão e monitoramento dos *jobs* para processamento. Este cenário é o ideal para os pipelines que exigem maior poder de processamento e memória, que pode ser um limitante ao rodar na máquina do bioinformata. No Varstation possuímos um servidor de produção que roda o ambiente Cromwell hospedado na nuvem AWS. Este se aproveita de todos os recursos computacionais da AWS permitindo executar múltiplos jobs em paralelo.  Os ambientes aqui construídos seguem as boas práticas da AWS na construção de instâncias Cromwell com a AWS, pelo tutorial nestes links [link1](https://aws.amazon.com/government-education/cromwell-on-aws/) [link2](https://docs.opendata.aws/genomics-workflows/orchestration/cromwell/cromwell-overview.html)

Na figura 3 ilustramos de forma simplificada o fluxo de submissão de um job em um Servidor Cromwell. A documentação completa de toda a API de interfaceamento com o Cromwell pode ser encontrada neste [link](https://cromwell.readthedocs.io/en/stable/api/RESTAPI/).

![Docusaurus logo](/img/cromwell.jpeg)
Figura 2: Fluxo do Pipeline para processamento de pipelines com Cromwell Modo Servidor

Na AWS utilizamos uma infra-estrutura escalonável por meio de instâncias spot que são orquestradas pelo AWS BATCH, que possui uma fila gerenciável que escuta as novas tasks que são invocadas pelo servidor Cromwell. Todas as tarefas e seus respectivos estados são armazenados em logs do AWS CloudWatch e também no banco de dados AWS Aurora MySQL. Logo que os dados são produzidos, são exportados para nossos buckets da AWS S3.

![AWS](https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2020/10/15/CromwellOrchestrator.png)
Figura 3: Fluxo do Pipeline com arquitetura similar na infra-estrutura AWS


A maneira mais rápida de executar o nosso pipeline, é instalar o weedle no ambiente virtual onde você executa o seu pipeline e rodar os seguintes comandos:
```
conda create -n workflows-dev python=3.7 -y
conda activate workflows-dev
conda install -c conda-forge pandas -y
git clone git@github.com:Varstation/weedle.git
python setup.py install
```

Quaisquer um dos *workflows* em seu repositório de pipelines ** são bons exemplos para começar. É necessário que você defina o arquivo de inputs para que ele possa encontrar os arquivos de entrada na AWS, para isto é necessário que você configure
um arquivo inputs.json, segue um exemplo abaixo

```json
{
    "GermlineVarcallDna.sampleInputs": {
      "sampleName": "SAMPLE",
      "sampleId": 0,
      "fastqs1": [
        "s3://wdl-poc-ci/SAMPLE_S8_L001_R1_001.fastq.gz"
      ],
      "fastqs2": [
        "s3://wdl-poc-ci/SAMPLE_S8_L001_R2_001.fastq.gz"
      ]

    },
    "GermlineVarcallDna.bwaIndex":{
      "fastaFile": "s3://wdl-poc-ci/reference/bwa/reference_example.fasta",
      "indexFiles":[
        "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.amb",
        "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.ann",
        "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.bwt",
        "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.pac",
        "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.sa"
      ]
    },
    "GermlineVarcallDna.bwaThreads": 1,
    "GermlineVarcallDna.reference": "s3://wdl-poc-ci/reference/bwa/reference_example.fasta",
    "GermlineVarcallDna.reference_idx": "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.fai",
    "GermlineVarcallDna.intervals": "s3://wdl-poc-ci/BRCA.list"
  }
```

O próximo passo é definir o arquivo onde os logs da execução deverão ser armazenados, para isto temos um arquivo de configurações para definição destes locais de saída. O arquivo deve ser armazenado em formato JSON, segue um exemplo abaixo
de nosso **cromwell_aws_options.json**

```json
{
    "final_workflow_log_dir": "s3://varstation-sandbox-cromwell/workflow-logs",
    "final_call_logs_dir": "s3://varstation-sandbox-cromwell/call-logs"
}
```

É necessário que você tenha um arquivo de input WDL e o pacote ZIP contendo os arquivos auxiliares WDL que serão importados pelo workflow principal.

Abaixo os comandos necessários para submeter um de nossos *workflows*.
```
 weedle submit --host https://34.204.182.29  --disable-ssl --options tests/cromwell_aws_options.json --inputs tests/sandbox/inputs.json --imports-zip germline-varcall-dna_0.1.1-rc.zip germline-varcall-dna_0.1.1-rc.wdl --wait```
```

Assim que executar o comando acima, o utilitário weedle irá submeter o job para o orquestrador Cromwell. Para inspecionar o status do *job*, você pode interrogar o servidor sobre o seu status.
```
weedle status --host ENDERECO_CROMWELL --disable-ssl workflow-id 
RUNNING
```

Para avaliar um dos *outputs* de saídas utilize o comando abaixo:
```
weedle outputs --host ENDERECO_CROMWELL --disable-ssl workflow-id 
# GermlineVarcallDna.BwaMem.outputBai
s3://dragen-sandbox-cromwell/cromwell-execution/GermlineVarcallDna/e23f028f-5f84-41e6-b764-7589d0fbb31b/call-BwaMem/SAMPLE_S8.aln.bam.bai
...
```

Neste pipeline acima pegamos um par de fastqs **fastq files** , realizamos a validação , merge e alinhamento dos mesmos. Com a **BAM Files**  chamamos variantes com o *FreeBayes*. O arquivo final é um arquivo de variantes VCFs. Vamos olhar um dos *outputs* (saídas). A maneira mais fácil é abrir o vcf como um editor de texto simples, usando o seu terminal ou abrindo via o editor de textos utilizando o aws-cli para copiar o arquivo para local

```bash
#Procure a linha do output no arquivo de log de outputs # GermlineVarcallDna.FreeBayes.vcf_file (path do VCF no bucket de saída do S3)
aws s3 cp s3://dragen-sandbox-cromwell/cromwell-execution/GermlineVarcallDna/e23f028f-5f84-41e6-b764-7589d0fbb31b/call-FreeBayes/SAMPLE_S8.freebayes.vcf .  --no-verify-ssl
more  SAMPLE_S8.freebayes.vcf
```

```
#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO    FORMAT  unknown
chr13   32890562        .       T       C       8.74137e-12     .       AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=30;DPB=30;DPRA=0;EPP=3.0103;EPPR=4.25114;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=26.9327;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=73;QR=1023;RO=28;RPL=0;RPP=7.35324;RPPR=63.8115;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=16;SRP=4.25114;SRR=12;TYPE=snp GT:DP:AD:RO:QR:AO:QA:GL 0/0:30:28,2:28:1023:2:73:0,-2.1002,-85.4476
chr13   32890572        .       G       A       678.735 .       AB=0.608696;ABP=7.73089;AC=1;AF=0.5;AN=2;AO=28;CIGAR=1X;DP=46;DPB=46;DPRA=0;EPP=3.32051;EPPR=3.49285;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=85.5046;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=1055;QR=678;RO=18;RPL=0;RPP=63.8115;RPPR=42.0968;RPR=28;RUN=1;SAF=15;SAP=3.32051;SAR=13;SRF=10;SRP=3.49285;SRR=8;TYPE=snp    GT:DP:AD:RO:QR:AO:QA:GL 0/1:46:18,28:18:678:28:1055:-81.4105,0,-47.505
chr13   32890593        .       T       C       0       .       AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=61;DPB=61;DPRA=0;EPP=3.0103;EPPR=3.93042;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=67.5997;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=77;QR=2268;RO=59;RPL=0;RPP=7.35324;RPPR=98.7391;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=32;SRP=3.93042;SRR=27;TYPE=snp GT:DP:AD:RO:QR:AO:QA:GL 0/0:61:59,2:59:2268:2:77:0,-11.0537,-197.03
```

Agora que você aprendeu a como rodar seu pipeline em um de nossos orquestradores Cromwell em modo servidor utilizando o utilitário de interfaceamento Oliver. Existe também a opção de executar o mesmo localmente.
