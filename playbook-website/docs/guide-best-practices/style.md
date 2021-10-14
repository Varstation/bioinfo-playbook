---
sidebar_position: 7
---

# Guia de Estilo

Este documenta apresenta as recomendações para escrever pipelines de bioinformática em WDL (Workflow Description Language). O documento foi inicialmente baseado no [BioWDL Style Guidelines](https://biowdl.github.io/styleGuidelines.html), mas também apresenta sugestões fornecidas pelo time de Bioinformática do Varstation.

Os exemplos aqui apresentados foram escritos na versão 1.0 da linguagem.

As palavras-chaves da linguagem aparecem no texto como código incorporado e não foram traduzidas. Por exemplo, `task` e `workflow`.

## Recuo
A linguagem apresenta diferentes sessões que possuem escopo definidos em chaves (`{}`), dessa forma, todo conteúdo deve ser indentado. Atribuições de `input` na chamada da `task` também deve ser indentado. A indentação deve ser 4 caracteres de espaço por nível. Abertura das chaves deve ser na mesma linha da sessão, e fechamento das chaves deve estar no mesmo nível de indentação da sessão. Não utilize tabulações.

Correto:

```wdl
workflow Example {
    call SomeTask as DoStuff {
        input:
            number = 1,
            letter = "a"
    }
}
```

Incorreto:

```wdl
workflow Example {
  call SomeTask as DoStuff {
      input:
      number = 1,
      letter = "a"
  }
}
```

* Conteúdo do bloco de `workflow` recuado com 2 espaços, ao invés de 4.
* `input` não indentado.

## Linhas vazias
As linhas vazias separam as sessões de uma `task` e as chamadas de tarefas de um `workflow`. Grupos de `input` em comum podem ser separados por uma linha vazia para facilitar a leitura. Por exemplo, separar _inputs_ obrigatórios dos opcionais. Isso também vale para sessões de `output` e `parameter_meta`. Linhas vazias extras são desencorajadas.

Correto:

```wdl
task Echo {
    input {
        String message

        String? outputPath # Optional input(s) separated from mandatory input(s)
    }

    command <<<
        echo ~{message} ~{"> " + outputPath}
    >>>

    output {
        File? outputFile = outputPath
    }
}
```

Incorreto:

```wdl
task Echo {
    input {
        String message

        String? outputPath
    }


    command <<<
        echo ~{message} ~{"> " + outputPath}
    >>>
    output {
        File? outputFile = outputPath
    }

}
```

* Duas linhas vazias entre os blocos `input` e `command`.
* Nenhuma linha branca entre os blocos `command` e `output`.
* Linha vazia desnecessária entre as chaves de fechamento.

## Espaçamento em expressões
WDL suporta diferentes operadores binários. Os elementos de uma expressão devem estar separados por um caractere de espaço. A exceção é o operador unário de negação (`!`), esse deve estar junto com o parêntese que contém a expressão lógica. Também não deve haver espaços entre os parênteses do primeiro elemento interno.

Em chamadas de funções (da biblioteca padrão), não deve haver espaços entre o nome da função e o parêntese de abertura. Argumentos de funções devem ser separados por vírgula seguido de um caractere de espaço. Não deve haver espaços entre o parêntese de abertura e o primeiro argumento, nem espaço entre o último argumento da função e o parêntese de fechamento.

Existem diversos operadores que devem ser cercados por espaços:

* Less than (menor que): `<`
* Less then or equal (menor ou igual a): `<=`
* Greater than (maior que): `>`
* Greater than or equal (maior ou igual a): `>=`
* Equal (igual a): `==`
* Not Equal (diferente de): `!=`
* Logical AND (E lógico): `&&`
* Logical OR (OU lógico): `||`
* Assignment (atribuição): `=`

Também há operadores que devem sempre ser precedidos de um espaço, mas não seguido por um (mesmo quando preceder uma colchetes). Se esses operados são aplicados ao resultado de uma expressão, a expressão deve ser cercada por colchetes (`[]`).

* Logical NOT (NÃO lógico): `!`
* Unary plus (mais unário): `+`
* Unary negation (menos unário): `-`

Correto:

```wdl
1 + 1
1 + 1/2
(1 + 1) / 2
!(a == -1)
```

Incorreto:

```wdl
1+1
1 + 1 / 2

( 1+1 ) / 2 
(1 + 1)/2

!(a==-1) 
! (a == -1) or !a == -1
```

## Tamanho da linha e quebras de linha
As linhas não devem ultrapassar o comprimento de 100 caracteres. Se a linha exceder esse limite, ela deve ser quebrada em duas ou mais linhas. As linhas subsequentes devem ser indentadas em relação a primeira, em um nível (4 caracteres de espaço). Quebras de linha devem ocorrer em lugares lógicos da expressão, ao invés de apenas cumprir o tamanho limite, alguns exemplos:

* Depois de uma virgula.
* Antes de `then` ou `else` em uma expressão `if-then-else`.
* Depois de um parêntese de abertura (`(`).
* Depois de um operador que teria um espaço como separador do elemento seguinte.

Alguns lugares onde sempre deve haver quebra de linhas:

* Entre `input` de um bloco de chamada da task (`call`).
* Depois de `inputs:` de um bloco de chamada da task.
* Depois de uma chave de abertura (`{`).
* Depois de uma chave de fechamento (`}`).
* Depois de um _heredoc_ de abertura da sessão `command` (`<<<`).
* Depois de um _heredoc_ de fechamento da sessão `command` (`>>>`).

Correto:

```wdl
Int value = if defined(aVariableThatHasAWayTooLongName)
    then aVariableThatHasAWayTooLongName else 10

# or

Int value = if defined(aVariableThatHasAWayTooLongName)
    then aVariableThatHasAWayTooLongName
    else 10

# ----

call SomeTask as DoStuff {
    input:
        number = 1,
        letter = "a"
}
```

Incorreto:

```wdl
# too long
Int value = if defined(aVariableThatHasAWayTooLongName) then aVariableThatHasAWayTooLongName else 10

# or wrong line break
Int value = if defined(aVariableThatHasAWayTooLongName) then
    aVariableThatHasAWayTooLongName else 10

# ----

# multiple inputs on one line
call SomeTask as DoStuff {
    input:
        number = 1, letter = "a"
}

# missing line breaks
call SomeTask as DoStuff {input: number = 1, letter = "a"}
```

## Convenção de nomes
Todos os _imports_ e _calls_ devem ser nomeados utilizando a sintaxe de `as`. Os nomes de vários tipos e objetos devem ser formatados conforme listado abaixo. A lista abaixo apresenta o formato recomendado para cada tipo.

* `task`: UpperCamelCase
* `workflow`: UpperCamelCase
* `struct`: UpperCamelCase
* `call` `as`: UpperCamelCase
* `input`: see the notes below
* `import` `as`: lowerCamelCase
* Variáveis: lowerCamelCase

### Nomes de inputs

Nomes de `input` devem imitar a versão longa dos parâmetros da ferramenta principal da `task`. Normalmente, os parâmetros de linha de comando separam as palavras com traços (`-`), nesses casos o `input` da `task` será escrito usando `lowerCamelCase` de forma que se assemelhe com o parâmetro da ferramenta. Palavras capitalizadas (como VCF, CNV e BAM) devem ser escritos como lowerCamelCase (`vcfIndex`, `mappedBam`, `enableCnvCalling`). Quando um `input` representar um caminho para arquivo, que não está associado com um argumento do comando, o nome do `input` deve terminar com `Path`. Note que isso é apenas quando o `input` é do tipo `String` ou `String?`.

### Evitando conflitos de nomes

`Task` ou `Flow` pode ser adicionado no final das _tasks_ ou _workflows_ importados para evitar conflitos de nomes entre `call` e `import`.

Correto:

```wdl
task DoStuff {
    input {
        File inputFile
        String outputPath

        Int maxRAM
    }

    command <<<
        someScript \
        -i ~{inputFile} \
        --maxRAM ~{maxRAM} \
        -o outputPath
    >>>

    output {
        File outputFile = outputPath
    }
}
```

Incorreto:

```wdl
task doStuff {
    input {
        File input_file
        String OutputPath

        Int ram
    }

    command <<<
        someScript \
        -i ~{input} \
        --max-ram ~{ram} \
        -o outputPath
    >>>

    output {
        File outputFile = outputPath
    }
}
```

* Nome da `task` não está em UpperCamelCase.
* `input_file` não está em lowerCamelCase
* `OutputPath` não está em lowerCamelCase
* `ram` não combina com o parâmetro que ele representa (`--max-ram`).

## Modularização
_Tasks_ e _structs_ genéricas devem ser mantidas em arquivos separados dos _workflows_. Apenas se uma `task` é pequena e específica para um determinado `workflow`, ela pode ser mantida no mesmo arquivo que o `workflow`. As _tasks_ e _structs_ relacionadas com a mesma ferramenta ou coleção devem estar no mesmo arquivo. Se um arquivo contém múltiplas _tasks_ e/ou _structs_, as _structs_ devem ser mantidos abaixo das _tasks_ e ambas as _tasks_ e _structs_ devem estar ordenadas alfabeticamente. _Calls_ e atribuição de valores em um `workflow` devem ser colocados na ordem da execução.

Correto:

```wdl
task A {
    command <<<
        echo A
    >>>
}

task Z {
    command <<<
        echo Z
    >>>
}

struct B {
    String name
}
```

Incorreto:

```wdl
# Structs and tasks mixed
task A {
    command <<<
        echo A
    >>>
}

struct B {
    String name
}

task Z {
    command <<<
        echo Z
    >>>
}

# Not in alphabetical order
task Z {
    command <<<
        echo Z
    >>>
}

task A {
    command <<<
        echo A
    >>>
}

struct B {
    String name
}
```

## Tasks

### Sessão `command`

1. Cada opção em um comando bash deve estar em uma nova linha. A linha anterior deve terminar com uma barra invertida (`\`). Agrupamentos de opções em uma mesma linha pode ser aceitável. Por exemplo, vários parâmetros de memória do Java podem estar na mesma linha, desde que não ultrapasse o tamanho limite de linha.
2. Todos os comandos bash devem começar com `set -e -o pipefail` se mais de um comando bash é executado pela tarefa. 
3. Se (e apenas se) nenhuma imagem Docker é especificada na sessão runtime, comandos devem ter um `~{preCommand}` seguido do item 2 e antes do comando em si. Isso permitirá, por exemplo, que um ambiente conda seja carregado antes da execução da task. Esse pré-comando deve ser colocado diretamente antes do comando em si e deve ser configurável como um input.
4. A sintaxe de _heredoc_ `<<<>>>` para o bloco de comando e _placeholder_ `~{...}` para variáveis deve ser usada em todos os casos ao invés das chaves (`{}`) e `${...}`, para evitar conflitos com variáveis do bash.

### Sessão `runtime`

Uma imagem Docker deve ser fornecida para todas as tarefas. Essas imagens devem estar disponíveis publicamente (apenas quando o _pipeline_ também é publico). Biocontainers são geralmente preferíveis (o recomendado é utilizar imagens disponibilizadas no Amazon ECR). Apenas se uma tarefa realiza executa um comando altamente genérico (um simples ls) pode ter a imagem Docker omitida (todas as tarefas devem providenciar uma imagem, é recomendado executar comandos genéricos em tarefas anteriores após a execução do comando principal).

### Sessão `parameter_meta`

É altamente aconselhável que um parameter_meta seja definido, contendo a descrição tanto dos `input` quando dos outputs da `task`.

Correto:

```wdl
task DoStuff {
    input {
        File inputFile
        String outputPath
        Int maxRAM

        String? preCommand
    }

    command <<<
        set -e -o pipefail
        mkdir -p `dirname outputPath`
        someScript \
        -i ~{inputFile} \
        --maxRAM ~{maxRAM} \
        -o outputPath
    >>>

    output {
        File outputFile = outputPath
    }

    runtime {
      docker: "alpine"
    }

    parameter_meta {
        inputFile: "A file"
        outputPath: "A location to put the output"
        maxRam: "The maximum amount of RAM that can be used (in GB)"

        outputFile: "A file containing the output"
    }
}
```

Incorreto:

```wdl
task DoStuff {
    input {
        File inputFile
        String outputPath

        Int maxRAM
    }

    command <<<
        mkdir -p `dirname outputPath`
        someScript -i ${inputFile} --maxRAM ${maxRAM} -o outputPath
    >>>

    output {
        File outputFile = outputPath
    }
}
```

* Todas os parâmetros estão na mesma linha.
* Está faltando `set -e -o pipefail`.
* Está faltando `preCommand` pois a imagem Docker não foi definida.
* Está faltando a sessão `runtime`.
* Está faltando a sessão `parameter_meta`.

## Nome de arquivos

Arquivos WDL devem ter o mesmo nome do `workflow` ou `task` usando o formato `dashed-case`. Nomes genéricos como `tasks.wdl` e `structs.wdl` podem ser utilizados quando o arquivo possui mais de uma `task` ou `struct`. O mesmo não vale para `workflow` visto que pode haver apenas um por arquivo. O arquivo do `workflow` deve estar na raiz do repositório e os arquivos importados devem estar dentro do diretório `tasks/` para facilitar a criação do arquivo ZIP de dependências. Exemplos:

* Workflow `DragenDnaGermline`, arquivo `drage-dna-germline.wdl`
* Task `CompleteVariantCalling`, arquivo `complete-variant-calling.wdl`
* Struct `SampleInputs`, arquivo `structs.wdl`

## Imports
Os `import` devem ser colocados em ordem alfabética no topo do arquivo. Todas as importações devem ser nomeadas usando a sintaxe do `as`.

## Aplicação do estilo
Não existe (ainda) uma forma automatizada de formatar ou verificar estilos de arquivos WDL de acordo com este guia. Cabe aos autores e revisores assegurar que as diretrizes sejam cumpridas.

Todos estão convidados a melhorar o guia de estilo e propor alterações. Para tirar dúvidas utilize a sessão de Issues: <https://github.com/Varstation/bioinfo-playbook/issues>.
