---
sidebar_position: 1
---

# Construindo ou melhorando seu pipeline em WDL

Nesta seção iremos apresentar como você poderá desenvolver seu primeiro pipeline de bioinformática em WDL ou editar um já existente. Antes de seguirmos o tutorial de como construir um pipeline do zero, é importante apresentarmos o fluxo de desenvolvimento de um pipeline em WDL dentro de nosso ecosistema no Varstation. Nesta seção, apresentamos todos as boas práticas para desenvolvimento de um pipeline de bioinformática. Abaixo, deixamos um checklist para você verificar se você está preparado para construir seu primeiro pipeline.

## Checklist para Desenvolvimento de Pipeline

### 1.Design e Requisitos

  * [ ] Você já realizou o Pipeline Canvas?  (Leia mais aqui  <**@JMB: qual link?? :)**> sobre o Pipeline Canvas)
  * [ ] Você já definiu os requisitos do problema biológico a resolver? (espécie, genomas, etc.)
  * [ ] Já definiu as entradas e saídas esperadas em alto nível?
  * [ ] Há *papers* e materiais auxiliares para definição das ferramentas a utilizar?
  * [ ] Há amostras prévias ou resultados prévios para comparação?
  * [ ] Quais tipos de variantes que você precisa detectar? (SNVs, SVs, CNVs, quantificações, etc.)

### 2. Implementação

  * [ ] Há um pipeline prévio que já atenda os requisitos?
  * [ ] Se pipeline prévio, clonar o pipeline anterior com ajustes em parâmetros e arquivos auxiliares.
  * [ ] Se pipeline novo, criar um repositório novo seguindo o template da bioinformatica.
  * [ ] Setup do desenvolvimento de Git e GitFlow  <**@JMB: Se tiver algum guia para essa criação seria interessante demonstrar ou linkar, demonstrando políticas de branches e regras de integração com a mainline :)**>
  * [ ] Setup do desenvolvimento de Docker e WDL local  <**@JMB: se tiver algum guia para essa criação seria interessante demonstrar ou linkar, demonstrando parte da IaC :)**>
  * [ ] Setup do desenvolvimento do Ambiente Remoto  <**@JMB: se tiver algum guia para essa criação seria interessante demonstrar ou linkar, demonstrando parte da IaC :)**>
  * [ ] Definir Sprint Backlog e Cronograma alinhado com Product Owner e Scrum Master
  * [ ] Definição de fluxo de Pull Request e Aprovação  <**@JMB: se tiver algum guia para essa criação seria interessante demonstrar ou linkar, demonstrando políticas de integração com a mainline :)**>

### 3. Monitoramento e Testes em Homologação

  * [ ] Execução de set de amostras em homologação e validação de outputs de saída
  * [ ] Validação de desempenho com uma rotina de amostras (recomendado n > 5)
  * [ ] Ajustes e otimizações para lançamento

 ### 4. Documentação Técnica

  * [ ] Construção da Documentação Técnica sobre o fluxo do pipeline e versionamento dos softwares de bioinformática  <**@JMB: se tiver algum guia para esse versionamento seria interessante demonstrar ou linkar, demonstrando políticas de versionamento no maturity branch de release ou mesmo na mainline :)**>
  * [ ] Construção do POP de bioinformática sobre execução do Pipeline

### 5. Validação

  * [ ] Validação contra set de amostras benchmark bioinformática (NA12878 gold standard, entre outras)
  * [ ] Validação contra set de amostras prévias laboratoriais caso haja mudança de kits de sequenciamento
  * [ ] Apresentação de Resultados das planilhas de controle aos interessados para confirmação de validação

### 6. Deploy no Varstation

  * [ ] Congelamento do *release candidate* do pipeline de bioinformática
  * [ ] Criação do deployment release zip para deploy no varstation  <**@JMB: aqui existe alguma regra de continuous delivery? Se sim, vale a pena demonstrar ou linkar :)**>
  * [ ] Criação da tag no github (versionamento semântico)
  * [ ] Build do Release Candidate no Varstation Produção
  * [ ] Comitê de GM para definição da data de lançamento
  * [ ] Deploy da Release para ambiente produtivo  <**@JMB: aqui existe alguma regra de continuous deployment? Se sim, vale a pena demonstrar ou linkar :)**>
  * [ ] Testes no ambiente de validação produtivo com 1 amostra de benchmark de bioinformática  <**@JMB: aqui existe alguma regra de continuous testing? Se sim, vale a pena demonstrar ou linkar :)**>

### 7. Documentação de Validação 

  * [ ] Conclusão da Documentação de Validação Bioinformática
  * [ ] Assinatura e de acordo dos Gerentes de Bioinformática e NGS
  * [ ] Armazenamento do documento versionado no drive da instituição <**@JMB: aqui existe alguma automação para garantir ou facilitar que o entregável está na versão correta e armazenado no lugar correto? Se sim, vale a pena demonstrar ou linkar :)**>
  
### 8. Referências
 * [ ] Registro no github e documentação oficial do varstation do pipeline liberado.  <**@JMB: Existe alguma automação aqui para garantir a publicação oficial do entregável? Se sim, vale a pena demonstrar ou linkar :)**>


## Você está pronto para desenvolver ?

Se todo o checklist acima foi revisado, você poderá já seguir para o desenvolvimento do pipeline de bioinformática no Varstation. O objetivo é que os itens 1 e 2 estejam de acordo para construção ou melhoria de seu pipeline de bioinformática. Na seção Ciclo de Desenvolvimento e boas práticas detalharemos cada um destes itens acima para que você possa iniciar o seu desenvolvimento.

## Tutorial de Desenvolvimento de um pipeline WDL

Na próxima seção descrevemos como você poderá construir seu pipeline WDL passo a passo em ambiente de desenvolvimento com instruções para construção e execução.
