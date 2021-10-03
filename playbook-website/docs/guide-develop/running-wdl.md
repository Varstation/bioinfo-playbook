---
sidebar_position: 3
---

# Executando seu pipeline


A construção de um pipeline pode seguir seguindo nosso template para construção de pipelines em https://github.com/Varstation/pipeline-template(https://github.com/Varstation/pipeline-template).  Nele adicionamos todos os arquivos auxiliares para executar seu pipeline.


## Validando seu pipeline

É uma boa prática validar todo os arquivos WDL antes de executá-lo. Esta etapa pode ser essencial para capturar quaisquer erros de sintaxe antes de executá-lo.


Utilizamos as ferramentas [Womtool](https://cromwell.readthedocs.io/en/stable/WOMtool/) e [Miniwdl](https://miniwdl.readthedocs.io/en/latest/) que verificam a estrutura e sintaxe de cada arquivo WDL. Abaixo um exemplo de snippet em bash para verificação automatizada em seu diretório para todos os arquivos indexados pelo git.

```bash
#!/usr/bin/env bash

# Validate every WDL file in the repository with womtool validate and miniwdl
# check.
set -e
for WDL_FILE in $(git ls-files *.wdl)
  do
    echo $WDL_FILE
    womtool validate $WDL_FILE
    miniwdl check $WDL_FILE
    grep Copyright $WDL_FILE || bash -c "echo No copyright header in $WDL_FILE && exit 1"
  done
```

Se você estiver usando o nosso repositório de template basta executar o seguinte comando:

```bash
$ bash tools/lint.sh
```

O output exibirá todo o log das verificações pelas respectivas ferramentas.

```
Success!
alignment.wdl
    task BwaMem
* Hint: install shellcheck (www.shellcheck.net) to check task commands. (--no-shellcheck suppresses this message)
# Copyright (c) 2021 Varsomics & Hospital Israelita Albert Einstein
germline-varcall-dna.wdl
Success!
germline-varcall-dna.wdl
    workflow GermlineVarcallDna
        call validate.ValidateInputs
        if
            call merge.Merge
            call alignment.BwaMem
            call varcall.FreeBayes
    alignment : alignment.wdl
        task BwaMem
    merge : merge.wdl
        task Merge
    structs : structs.wdl
    validate : validate-inputs.wdl
        workflow ValidateInputs
            if
                scatter pair
                    call fastq.ValidateFastq as ValidatePaired
            if
                scatter fastq1
                    call fastq.ValidateFastq as ValidateSingle
            if
                scatter bam
                    call sam.ValidateSam as ValidateUnmapped
            if
                call sam.ValidateSam as ValidateAligned
        fastq : validate-fastq.wdl
            task ValidateFastq
        sam : validate-sam.wdl
            task ValidateSam
    varcall : varcall.wdl
        task FreeBayes
* Hint: install shellcheck (www.shellcheck.net) to check task commands. (--no-shellcheck suppresses this message)
# Copyright (c) 2021 Varsomics & Hospital Israelita Albert Einstein
merge.wdl
Success!
merge.wdl
    task Merge
* Hint: install shellcheck (www.shellcheck.net) to check task commands. (--no-shellcheck suppresses this message)
# Copyright (c) 2021 Varsomics & Hospital Israelita Albert Einstein
varcall.wdl
Success!
varcall.wdl
    task FreeBayes
* Hint: install shellcheck (www.shellcheck.net) to check task commands. (--no-shellcheck suppresses this message)
# Copyright (c) 2021 Varsomics & Hospital Israelita Albert Einstein
```

## Construindo o seu inputs.json

O próximo passo é construir o arquivo de entradas. O arquivo deve ser em formato JSON. Um atalho para criar o esqueleto básico é utilizar a ferramenta WdlTool que permite a partir de um workflow WDL gerar automaticamente o esqueleto de entradas exigidas em JSON.

```bash
java -jar wdltool.jar inputs germline-dna-pipeline.wdl > inputs.json
```

Agora com o arquivo de entradas gerado ```inputs.json```, você pode abrir com seu editor favorito e ir alterando para cada entrada os parâmetros necessários para as tasks dos seu pipeline. Exemplo a seguir:

```
"workflow.task.variable" : "Type"
```

Substitua o valor de ```Type``` pelo respectivo valor desejado. No JSON completo abaixo, por exemplo  considerando a variável reference, substituímos com o caminho do arquivo fasta de genoma de referência.

```
    "GermlineVarcallDna.reference": "tests/data/reference/bwa/reference_example.fasta",
```

### Exemplo de um inputs.json válido:


```json
{
    "GermlineVarcallDna.sampleInputs": {
      "sampleName": "SAMPLE",
      "sampleId": 0,
      "fastqs1": [
        "tests/data/SAMPLE_S8_L001_R1_001.fastq.gz"
      ],
      "fastqs2": [
        "tests/data/SAMPLE_S8_L001_R2_001.fastq.gz"
      ]

    },
    "GermlineVarcallDna.bwaIndex":{
      "fastaFile": "tests/data/reference/bwa/reference_example.fasta",
      "indexFiles":[
        "tests/data/reference/bwa/reference_example.fasta.amb",
        "tests/data/reference/bwa/reference_example.fasta.ann",
        "tests/data/reference/bwa/reference_example.fasta.bwt",
        "tests/data/reference/bwa/reference_example.fasta.pac",
        "tests/data/reference/bwa/reference_example.fasta.sa"
      ]
    },
    "GermlineVarcallDna.bwaThreads": 1,
    "GermlineVarcallDna.reference": "tests/data/reference/bwa/reference_example.fasta",
    "GermlineVarcallDna.reference_idx": "tests/data/reference/bwa/reference_example.fasta.fai",
    "GermlineVarcallDna.intervals": "tests/data/BRCA.list"
  }
```


## Executando seu pipeline localmente

Tendo os arquivos inputs devidamente formatados e seu wdl pronto, você está pronto para executar seu pipeline localmente. Para executar o mesmo, utilizamos o orquestrador cromwell com o comando abaixo:


```bash
java -jar cromwell.jar run germline-dna-pipeline.wdl -i inputs.json
```

Logo que concluído com sucesso, o seu terminal deverá reproduzir esta linha abaixo, isto significa que seu pipeline foi executado com sucesso.

![](/img/terminal-cromwell.png)

Seu terminal também deverá informar o local do arquivo de saída VCF, deve ser algo similar a este:

```json

{
  "outputs": {
    "GermlineVarcallDna.fastqs2": ["tests/data/SAMPLE_S8_L001_R2_001.fastq.gz"],
    "GermlineVarcallDna.outputPrefix": "SAMPLE_S8",
    "GermlineVarcallDna.ValidateInputs.unmappedLogs": null,
    "GermlineVarcallDna.Merge.trimmedReadsFwd": "/Users/marcelcaraciolo/Projects/gnmk/bioinfo/wdl-demo-pipeline/cromwell-executions/GermlineVarcallDna/c9b9f680-ab5a-41ca-aa5c-9a3dbe2b6f50/call-Merge/execution/SAMPLE_S8.merged_R1.fastq.gz",
    "GermlineVarcallDna.ValidateInputs.validated": true,
    "GermlineVarcallDna.BwaMem.outputBam": "/Users/marcelcaraciolo/Projects/gnmk/bioinfo/wdl-demo-pipeline/cromwell-executions/GermlineVarcallDna/c9b9f680-ab5a-41ca-aa5c-9a3dbe2b6f50/call-BwaMem/execution/SAMPLE_S8.aln.bam",
    "GermlineVarcallDna.ValidateInputs.alignedLog": null,
    "GermlineVarcallDna.BwaMem.outputBai": "/Users/marcelcaraciolo/Projects/gnmk/bioinfo/wdl-demo-pipeline/cromwell-executions/GermlineVarcallDna/c9b9f680-ab5a-41ca-aa5c-9a3dbe2b6f50/call-BwaMem/execution/SAMPLE_S8.aln.bam.bai",
    "GermlineVarcallDna.Merge.trimmedReadsRev": "/Users/marcelcaraciolo/Projects/gnmk/bioinfo/wdl-demo-pipeline/cromwell-executions/GermlineVarcallDna/c9b9f680-ab5a-41ca-aa5c-9a3dbe2b6f50/call-Merge/execution/SAMPLE_S8.merged_R2.fastq.gz",
    "GermlineVarcallDna.FreeBayes.vcf_file": "/Users/marcelcaraciolo/Projects/gnmk/bioinfo/wdl-demo-pipeline/cromwell-executions/GermlineVarcallDna/c9b9f680-ab5a-41ca-aa5c-9a3dbe2b6f50/call-FreeBayes/execution/SAMPLE_S8.freebayes.vcf",
    "GermlineVarcallDna.ValidateInputs.fastqLogs": ["/Users/marcelcaraciolo/Projects/gnmk/bioinfo/wdl-demo-pipeline/cromwell-executions/GermlineVarcallDna/c9b9f680-ab5a-41ca-aa5c-9a3dbe2b6f50/call-ValidateInputs/ValidateInputs/e84fd08d-35f5-4fa1-a326-fa3d9717c64d/call-ValidatePaired/shard-0/execution/SAMPLE.SAMPLE_S8_L001_R1_001.fastq.gz.validation.log"],
    "GermlineVarcallDna.fastqs1": ["tests/data/SAMPLE_S8_L001_R1_001.fastq.gz"]
  },
  "id": "c9b9f680-ab5a-41ca-aa5c-9a3dbe2b6f50"
}

```

O arquivo que estamos interessados é o ```GermlineVarcallDna.FreeBayes.vcf_file```.  Vamos explorar ele em nossa próxima seção.