---
sidebar_position: 5
---

# Homologacao e monitoramento de testes do pipeline

O pipeline de bioinformática precisa ser avaliado clinicamente antes de lançado oficialmente em produção. Uma das etapas exigidas é a seleção de amostras com resultados prévios e a validação de outputs de saída. Utilizamos um continuous integration (CI) para automação da execução da suíte de testes do pipeline. Utilizamos como ferramenta base o [pytest-worfklow](https://pytest-workflow.readthedocs.io/en/stable/), que permite o teste automatizado perante a ferramenta de orquestramento de workflows [Cromwell](https://cromwell.readthedocs.io/en/stable/) e a validação dos arquivos de saída perante um arquivo de configuração de testes que informam os inputs, os wdls e os arquivos esperados.

Abaixo um exemplo:

```yaml
- name: My pipeline
  command: cromwell run -i inputs.json -o options.json moo.wdl
  files:
    - path: test-output/moo.txt.gz
      md5sum: 173fd8023240a8016033b33f42db14a2
  stdout:
    contains:
      - "WorkflowSucceededState"
```

No exemplo a seguir validamos a partir de um pipeline de bioinformática Germinativo de exemplo, se os arquivos esperados foram criados e se o conteúdo do arquivo VCF contém os dados esperados. No nosso exemplo queremos que ele contenha apenas variantes no cromossomo 13 e 17, uma variante prévia na coordenada 32915410 com alteração de DNA na sequência CAATTA para CA . Por fim, definimos também que ele não deve conter variantes em cromossomos de 1 a 9 , já que limitamos a chamada em regiões específicas.

```yaml
- name: Germline
  tags:
    - integration
    - germline
  command: >-
    cromwell run -o tests/cromwell_options.json
    -i tests/functional/inputs.json germline-varcall-dna.wdl
  stdout:
    contains:
      - "SingleWorkflowRunnerActor workflow finished with status 'Succeeded'."
      - 'GermlineVarcallDna.ValidateInputs.validated": true'
  files:
    - path: "test-output/SAMPLE.SAMPLE_S8_L001_R1_001.fastq.gz.validation.log"
    - path: "test-output/SAMPLE_S8.aln.bam"
    - path: "test-output/SAMPLE_S8.freebayes.vcf"
      contains_regex:
        - 'chr13\t32915410\t\.\tCAATTA\tCA'
        - 'chr13\t'
        - 'chr17\t'
      must_not_contain_regex:
        - 'chr[1-9]\t'  #only to check that the varcall does not have any regions besides the regions
```


O CI segue o fluxo abaixo:

  - Instancia a máquina alvo de testes
  - Realiza o checkout do repositório na branch develop e respectivos submódulos se aplicável;
  - Realiza o setup do ambiente com instalação das ferramentas do anaconda e miniconda;
  - Realiza a instalação do ambiente de homologação e respectivas ferramentas de teste;
  - Realiza o download a partir do AWS os arquivos de teste que incluem genomas de referência, alinhamentos e arquivos auxiliares e armazena em tests/data
  - Invoca o pytest-workflow em ambiente de homologação executando o pipeline a partir do cromwell.
  - Cromwell retorna os arquivos de testes e os mesmos são validados perante o arquivo de configuração dos testes
  - Realizado com sucesso, deleta todos os arquivos temporários, de log e de saída
  - Se realizado com erro, Validação do arquivo log.out em busca de mensagens de erro e exibe no log do CI as mensagens de erro para auxiliar o desenvolvedor.
  - Máquina alvo de destes é desligada e terminada
  - Aviso ao github CI Actions (repositório) que o workflow foi executado com sucesso.


Ilustramos alguns exemplos a seguir do log de um CI realizado por completo em nosso ambiente de homologação:

![](/img/homolog-ci.png)
Figura 17: Tela da documentação do pipeline em WDL


## Construindo seu workflow de testes

Todos os arquivos necessários para construir seu primeiro workflow de testes se encontram [aqui](https://github.com/Varstation/wdl-demo-pipeline/tree/main/tests). Este [guia](./tests.md) já te auxiliará a montar de forma rápida uma primeira suíte de testes.


Na próxima seção, iremos aprender a como construir nosso primeiro candidato a release oficial de produção.