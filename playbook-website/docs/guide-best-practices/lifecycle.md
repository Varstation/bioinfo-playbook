---
sidebar_position: 2
---

# Ciclo de Desenvolvimento

Com o advento do sequenciamento genético de nova geração na aplicação clínica, os pipelines de bioinformática para detecção e anotação de variantes estão se tornando mais populares. Todavia, o processo de traduzir os requisitos dos analistas de biologia molecular, geneticistas e especialistas clínicos se tornam uma tarefa laboriosa, acrescentando isto ao processo de desenvolver, testar e lançar de forma contínua, após melhorias, os pipelines clínicos. 

Comparados aos softwares tradicionais, os pipelines de bioinformática lidam com dados, parâmetros e o código em si, e estes exigem acompanhamento contínuo à medida que novas versões de software de bioinformática surgem ou a necessidade de uma nova base de dados anotada ou até um tipo novo de variante a ser detectado e anotado. No nosso cenário em que trabalhamos com genoma humano, estamos ainda aprimorando o conhecimento sobre o mesmo, tanto que há versões lançadas continuamente, e estas exigem novos ajustes dos pipelines de bioinformática em produção ou até a construção do zero, tornando o anterior obsoleto. Isto significa que no nosso cenário de bioinformática e pipelines, estes precisam estar continuamente sendo monitorados e avaliados a cada nova versão do genoma ou novos dados/banco de dados estejam disponíveis.

## Nosso Processo de Desenvolvimento de Pipelines de Bioinformática

O desenvolvimento de pipelines de bioinformática passa por 5 macro-etapas desde sua concepção até a sua liberação em ambiente produtivo (go-live). Na figura abaixo ilustramos de forma resumida cada etapa e em seguida detalhamos mais sobre cada uma delas.

![](/img/lifecycle_bioinformatics.png)
Figura 4: Ciclo de Desenvolvimento do Pipeline de Bioinformática

- **Etapa de Planejamento e Design** Esta etapa tem como objetivo reunir o máximo de informações possíveis sobre o problema biológico que quer se resolver. Esta etapa  geralmente está ligada a um possível novo exame a ser lançado pelo laboratório ou um projeto de pesquisa e desenvolvimento para complementar os resultados de um exame de outro setor. Desta forma, são feitas várias entrevistas e pesquisas com os biológos, médicos, geneticistas e analistas para que possa entender os componentes de bioinformática a serem utilizados para o processamento de dados e o alinhamento dos arquivos de entrada e saída esperados no pipeline. Ao mesmo tempo, durante esta etapa, os membros da equipe fazem anotações no Bioinformatics Pipeline Canvas (BPC).

- **Construção** Nesta etapa inicia-se a construção do pipeline de bioinformática considerando todas as etapas a serem processadas em ordem. Geralmente estas etapas envolvem diferentes softwares de várias fontes executadas em linha de comando. Os bioinformatas automatizam todas etapas por meio da linguagem de descrição de workflows (WDL) que são orquestradas por meio do Cromwell, ferramenta da Broad Institute adotada pelo nosso grupo para ser o orquestrador de execução de nossos pipelines.

- **Teste e Otimização** Com as primeiras versões do pipeline funcionais, esta etapa serve para a realização de testes com exemplos de dados reais e artificiais com validações de resultados com os usuários finais (clientes) e otimizações para atender o volume de dados esperado.
<**@JMB: Existem testes automatizados? Se sim, vale a pena comentar e se possível demonstrar/linkar :)**>

- **Validação** Esta etapa foca em validar o pipeline de bioinformática perante benchmark de amostras com resultados prévios, coletando métricas de precisão, acurácia, sensibilidade para verificar as limitações de detecção de chamada de variantes e qualidade do pipeline para os tipos de dados a serem imputados de rotinas de sequenciamento reais. Aqui, é um ponto de decisão para verificação perante bioinformatas e analistas se o pipeline está preparado para seguir para ser lançado em ambiente produtivo.

- **Lançamento e Deploy** Por último, aqui todo o código-fonte, arquivos de configuração e demais dados auxiliares são empacotados e versionados para o processo de lançamento e deploy. Gera-se releases candidatas que são testadas em ambiente de homologação similar ao ambiente produtivo e uma vez que o build tenha êxito, o mesmo é liberado para o ambiente produtivo.
<**@JMB: existe alguma automação do tipo continuous delivery ou continuous deployment nesse ponto? Se sim, vale a pena demonstrar/linkar se possível :)**>

## Checklist para Desenvolvimento de Pipeline

<**@JMB: Se esse checklist for o mesmo da página https://varstation.github.io/bioinfo-playbook/docs/guide-develop/checklist, sugiro apenas linkar ao invés de repetir. Por favor, analisar o caso. :)**>

Nesta seção e nas próximas iremos apresentar como você poderá desenvolver seu primeiro pipeline de bioinformática em WDL ou editar um já existente. Agora que você está familiar com nosso ciclo de desenvolvimento de um pipeline, iremos detalhar o nosso checklist de desenvolvimento. Este é um guia apenas para referência, onde pode ser modificado de acordo com as necessidades e particularidades de cada pipeline a ser desenvolvido ou alterado. Fique à vontade para ajustar e trazer novas melhorias, este é um trabalho derivado de observações contínuas de alguns anos desenvolvendo e lançando pipelines em nossa plataforma Varstation.

### 1.Design e Requisitos

  * [ ] Você já realizou o Pipeline Canvas?  (Leia mais aqui sobre o Pipeline Canvas)
  * [ ] Você já definiu os requisitos do problema biológico a resolver? (espécie, genomas, etc.)
  * [ ] Já definiu as entradas e saídas esperadas em alto nível?
  * [ ] Há *papers* e materiais auxiliares para definição das ferramentas a utilizar?
  * [ ] Há amostras prévias ou resultados prévios para comparação?
  * [ ] Quais tipos de variantes que você precisa detectar? (SNVs, SVs, CNVs, quantificações, etc.)

### 2. Implementação

  * [ ] Há um pipeline prévio que atenda já os requisitos ?
  * [ ] Se pipeline prévio, clonar o pipeline anterior com ajustes em parâmetros e arquivos auxiliares.
  * [ ] Se pipeline novo, criar um repositório novo seguindo o template da bioinformatica.
  * [ ] Setup do desenvolvimento de Git e GitFlow
  * [ ] Setup do desenvolvimento de Docker e WDL local
  * [ ] Setup do desenvolvimento do Ambiente Remoto
  * [ ] Definir Sprint Backlog e Cronograma alinhado com Product Owner e Scrum Master
  * [ ] Definição de fluxo de Pull Request e Aprovação

### 3. Monitoramento e Testes em Homologação

  * [ ] Execução de set de amostras em homologação e validação de outputs de saída
  * [ ] Validação de desempenho com uma rotina de amostras (recomendado n > 5)
  * [ ] Ajustes e otimizações para lançamento

 ### 4. Documentação Técnica

  * [ ] Construção da Documentação Técnica sobre o fluxo do pipeline e versionamento dos softwares de bioinformática
  * [ ] Construção do POP de bioinformática sobre execução do Pipeline

### 5. Validação

  * [ ] Validação contra set de amostras benchmark bioinformática (NA12878 gold standard, entre outras)
  * [ ] Validação contra set de amostras prévias laboratoriais caso haja mudança de kits de sequenciamento
  * [ ] Apresentação de Resultados das planilhas de controle aos interessados para confirmação de validação

### 6. Deploy no Varstation

  * [ ] Congelamento do release candidate do pipeline de bioinformática
  * [ ] Criação do deployment release zip para deploy no varstation
  * [ ] Criação da tag no github (versionamento semântico)
  * [ ] Build do Release Candidate no Varstation Producao
  * [ ] Comitê de GM para definição da data de lançamento
  * [ ] Deploy da Release para ambiente produtivo
  * [ ] Testes no ambiente de validação produtivo com 1 amostra de benchmark de bioinformática

### 7. Documentação de Validação 

  * [ ] Conclusão da Documentação de Validação Bioinformática
  * [ ] Assinatura e de acordo dos Gerentes de Bioinformática e NGS
  * [ ] Armazenamento do documento versionado no drive da instituição

### 8. Referências
 * [ ] Registro no github e documentação oficial do varstation do pipeline liberado.


## Próximos passos

Vamos iniciar nossa jornada com exemplos começando com a etapa de design e requisitos. Apertem os cintos, nossa jornada está prestes a começar!
<**@JMB: Essa frase está certa? Parece que está meio perdida aqui!! :) **>
