---
sidebar_position: 1
---

# Configurando o ambiente

Para executar um de nossos pipelines, é necessário ter o ambiente preparado para rodar workflows WDL. Alguns exemplos de workflows que suportam WDL são [Cromwell](https://cromwell.readthedocs.io/en/stable/), [miniWDL](https://github.com/chanzuckerberg/miniwdl), e [dxWDL](https://github.com/dnanexus/dxWDL) (veja [openwdl docs](https://github.com/openwdl/wdl#execution-engines)).

## Instalando o Docker

Se você não é familiar com Docker, esta é uma tecnologia de container que permite usar um sistema
completo de forma embarcada. Você pode configurar e instalar o Docker a partir deste [link](https://docs.docker.com/install/). Veja se
você executar o "Hello-world" exemplo sem a necessidade de privilégios de superusuário antes de você
seguir este tutorial.

## Cromwell

[Cromwell](http://cromwell.readthedocs.io/en/stable/tutorials/FiveMinuteIntro/) é um sistema de gerenciamento de workflows desenvolvido pelo Instituto Broad que utilizamos no Varstation para orquestrar nossos pipelines. É um programa escrito em Java, portanto o executável do mesmo que você irá interagir é um arquivo ".jar" . O Instituto Broad provê um container Docker [https://hub.docker.com/r/broadinstitute/cromwell/](https://hub.docker.com/r/broadinstitute/cromwell/) que você poderá utilizar sem ter a necessidade de você instalar a aplicação Java em seu computador. Cromwell pode ser executado localmente, mas também interage com nossos serviços na nuvem para rodar pipelines. Para começar, veja o exemplo abaixo de como rodar o executável localmente:


```bash
$ docker run broadinstitute/cromwell:prod

cromwell 33-88e1a73-SNAP
Usage: java -jar /path/to/cromwell.jar [server|run|submit] [options] <args>...

  --help                   Cromwell - Workflow Execution Engine
  --version                
Command: server
Starts a web server on port 8000.  See the web server documentation for more details about the API endpoints.
Command: run [options] workflow-source
Run the workflow and print out the outputs in JSON format.
  workflow-source          Workflow source file.
  --workflow-root <value>  Workflow root.
  -i, --inputs <value>     Workflow inputs file.
  -o, --options <value>    Workflow options file.
  -t, --type <value>       Workflow type.
  -v, --type-version <value>
                           Workflow type version.
  -l, --labels <value>     Workflow labels file.
  -p, --imports <value>    A directory or zipfile to search for workflow imports.
  -m, --metadata-output <value>
                           An optional directory path to output metadata.
Command: submit [options] workflow-source
Submit the workflow to a Cromwell server.
  workflow-source          Workflow source file.
  --workflow-root <value>  Workflow root.
  -i, --inputs <value>     Workflow inputs file.
  -o, --options <value>    Workflow options file.
  -t, --type <value>       Workflow type.
  -v, --type-version <value>
                           Workflow type version.
  -l, --labels <value>     Workflow labels file.
  -p, --imports <value>    A directory or zipfile to search for workflow imports.
  -h, --host <value>       Cromwell server URL.
```

Se seu ambiente Docker estiver configurado corretamente e você baixar e rodar a imagem, você deveria o output do console exibido acima.  Parabéns! Você percebeu que o comando tem a tag "prod" no final ?

"Prod" referencia a tag de imagem mais atual oficial em produção. Se quiser ver outras tags, dê uma olhada [aqui](https://hub.docker.com/r/broadinstitute/cromwell/tags/).

Isto tudo que você precisa para começar! Vamos agora voltar para a seção de Pipelines para você escolher um Pipeline que deseja executar.