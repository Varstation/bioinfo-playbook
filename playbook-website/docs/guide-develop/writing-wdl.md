---
sidebar_position: 2
---

# Construindo seu primeiro pipeline

Nesta seção iremos apresentar como construir seu primeiro pipeline em WDL. Neste pipeline vamos passar pelas etapas básicas e comuns em um pipeline de detecção de variantes SNVs (de um único nucleotídeo) ou pequenas indels (inserções e deleções). Este exemplo permitirá que você consiga já familiridade com as ferramentas de bioinformática e a linguagem de criação de workflows WDL. Esta ferramenta aqui executa a descoberta de variantes em dados de sequenciamento de nova geração (NGS).



:::caution
Este tutorial assume que você tenha o conhecimento básico de ferramentas como BWA (alinhamento) e Freebayes (chamador de variantes) e ter lido já nosso guia de início de desenvolvimento. Você deve ter também todas as ferramentas necessárias para instalação e ter acesso aos dados que este tutorial irá utilizar. Para fins de exemplo, iremos usar uma amostra humana sintética com regiões dos cromossomos 13 e 17, cujas sequências pertencem  a alguns genes como BRCA1 e BRCA2.
:::


![](/img/pipeline-germline-dna.png)

Como podemos visualizar no diagrama acima, nós teremos quatro tarefas principais, a task ValidateInputs, responsável por validar os arquivos FASTQs ,  a task Merge, que irá realizar a operação de combinação (merge) dos fastqs seguindo o padrão R1 ou R2,  a task BwaMem que irá receber um par de arquivos Fastqs (Files) e irá produzir como saída um arquivo BAM com os alinhamentos. Na última task  Freebayes, irá receber o arquivo BAM do saída da etapa anterior e irá produzir o arquivo de saída rawVCF. Será um pipeline com apenas quatro tasks: validação, merge alinhamento e chamada de variantes. O foco aqui será em detecção de variantes germinativas.


:::tip

Geralmente mutações somáticas e mutações germinativas necessitam de tratamento e análise de dados específicos, o que resulta em diferentes pipelines de bioinformática. As mutações germinativas são aquelas que conferem predisposição, em alguns casos elevada, de desenvolver tumores e esses tumores no geral têm uma agregação familiar. A presença de uma mutação germinativa pode ter implicação no tratamento, mas isso não é frequente. Um exemplo são os tumores de mama e ovário com mutações nos genes BRCA 1 e 2. Já as mutações somáticas estão casualmente associadas com a transformação maligna e progressão da doença e a detecção dessas mutações pode guiar a escolha terapêutica.

:::


### Construindo o Workflow

Primeiro passo é construir o workflow. O workflow é a linha principal onde todas as tarefas são chamadas na ordem sequencial. Neste caso temos quatro tasks, Validate, Merge, Alignment e Varcall. No trecho de código abaixo declaramos o workflow e invocamos as respectivas tasks:


```
import "wdl-tasks/validate-inputs.wdl" as validate
import "wdl-structs/structs.wdl"
import "merge.wdl"
import "alignment.wdl"
import "varcall.wdl"

workflow GermlineVarcallDna {

  input {
        SampleInputs sampleInputs
        BwaIndex  bwaIndex
        Int bwaThreads = 1
        File reference
        File reference_idx
        File ? intervals

  }

    call validate.ValidateInputs {
        input:
            sampleName = sampleInputs.sampleName,
            fastqs1 = sampleInputs.fastqs1,
            fastqs2 = sampleInputs.fastqs2,

    }


    if (defined(sampleInputs.fastqs1) && defined(sampleInputs.fastqs2)) {
        Array[File] fastqs1 = select_first([sampleInputs.fastqs1])
        Array[File] fastqs2 = select_first([sampleInputs.fastqs2])
        String outputPrefix = sub(basename(fastqs1[0]), "_L001_R1_001.fastq.gz", "")

        call merge.Merge {
            input:
                readsToMergeFwd = fastqs1,
                readsToMergeRev = fastqs2,
                outputPrefix = outputPrefix
        }

        call alignment.BwaMem {
            input:
                read1 = Merge.trimmedReadsFwd,
                read2 = Merge.trimmedReadsRev,
                bwaIndex  = bwaIndex,
                outputPrefix = outputPrefix,
                threads = bwaThreads,
                memoryGb = 4
        }
        call varcall.FreeBayes {
            input:
                reference = reference,
                reference_idx = reference_idx,
                intervals  = intervals,
                outputPrefix = outputPrefix,
                bam_file = BwaMem.outputBam,
                bam_idx_file = BwaMem.outputBai
        }

    }
}

```

Para cada task invocada do workflow definimos os inputs que são as entradas exigidas para cada chamada da task, como um pipeline de blocos em que a saída de um bloco serve como entrada do próximo bloco , e assim sucessivamente.


![](/img/linear-chaining.png)


Agora, vamos construir as respectivas tasks.

### Construindo as tasks

A task é essencialmente um componente que inclui um ou mais comandos necessários para execução da tarefa. Esta é interpretada pelo orquestrador e executada como se estivéssemos executando em linha de comando pelo terminal. Para entendermos como escrever em WDL, geralmente construímos toda a invocação do comando fora do WDL, testamos e depois literalmente copiamos o comando para a nossa task e mapeamos os inputs (entradas) e saídas (outputs).

Como são várias tasks, vamos pegar uma de exemplo para vermos a sintaxe e arquitetura. Vamos utilizar como referência a Freebayes, responsável pela chamada de variantes.


#### FreeBayes

![](/img/task-wdl.png)


Começamos sempre pelo comando que irá ser executado pela task, no nosso exemplo a seguir, vemos que o comando freebayes solicita alguns arquivos de entrada como o reference.fasta, o input bam_file, o arquivo de saída output_filename e finalmente o comando freebayes. Para cada entrada desta nós declaramos uma variável de entrada. Algumas delas irão vir a partir de inputs externos e outras serão declaradas internamente.

```
task FreeBayes {

  command {
    set -Eeuxo pipefail;
    test -f ~{bam_idx_file}
    freebayes \
      -f ~{reference} \
      ~{"-t " + intervals} \
      ~{bam_file} \
      ~{userString} \
      -v ~{output_filename};
  }
}
```

Abaixo algumas variáveis declaradas em nosso arquivo de tasks, cada uma delas tem um tipo String, File , Float e Int e determinam como o interpretador irá avaliar cada uma delas no momento da execução. O mesmo é válido para o output de saída, que em nostro exemplo é um arquivo vcf, que será o arquivo o qual o comando irá escrever após sua conclusão. Para plugar as variáveis ao comando , basta usar a sintaxe ```~{variablename}```.

```
task FreeBayes {
  input {

    File reference
    File reference_idx

    File ? intervals

    String outputPrefix
    File bam_file
    File bam_idx_file

    String userString = "-4 -q 15 -F 0.03"

    Float memory = 12
    Int cpu = 1

    String output_filename = outputPrefix + '.freebayes.vcf'

    String dockerImage = "quay.io/biocontainers/freebayes:1.3.2--py37hc088bd4_0"

  }

  command {
    set -Eeuxo pipefail;
    test -f ~{bam_idx_file}
    freebayes \
      -f ~{reference} \
      ~{"-t " + intervals} \
      ~{bam_file} \
      ~{userString} \
      -v ~{output_filename};
  }

  output {
    File vcf_file = "~{output_filename}"
  }

}

```

Estamos quase lá, agora definimos algumas configurações de como o pipeline irá executar com as configurações de runtime e para a documentação definimos os metadados das variáveis de entrada e saída pelo componente ```parameters_meta```, um JSOn contendo uma breve descrição das variáveis e se as mesmsas são obrigatórias ou opcionais.

```
task FreeBayes {
  input {
    ...
  }

  command {
    ...
  }

  output {
    ...
  }

  runtime {
    memory: memory + " GB"
    cpu: cpu
    docker: dockerImage

  }

  parameter_meta {
        reference: {description:"Reference sequence file.", category: "required"}
        reference_idx: {description: "Reference sequence index (.fai).", category: "required"}
        intervals: {description: "One or more genomic intervals over which to operate.", category: "required"}
        bam_file: {description: "Sorted BAM file.", category: "required"}
        bam_idx_file: {description: "Sorted BAM index file.", category: "required"}
        output_filename: {description: "VCF output file name Default is prefix + vcf.", category: "common"}
        userString: {description: "An optional parameter which allows the user to specify additions to the command line at run time.", category: "common"}
        memory: {description: "GB of RAM to use at runtime.", category: "advanced"}
        cpu: {description: "Number of CPUs to use at runtime.", category: "advanced"}
        dockerImage: {description: "Docker image for running the varcaller.", category: "advanced"}
  }

}

```
O Cromwell permite a utilização de imagens [Docker](https://cromwell.readthedocs.io/en/stable/tutorials/Containers/) para instanciação das suas ferramentas no momento da execução, isto facilita muito a velocidade do pipeline, já que o Docker provê ferramentas que abstraem todo o processo de instalação e setup de cada ferramenta. No exemplo acima já utilizamos uma imagem prévia armazenada em um repositório de imagens Docker contendo a imagem do Freebayes.

![](/img/docker-wdl.png)


Na próxima seção vamos aprender como executar o nosso primeiro pipeline em WDL e verificar os resultados.
