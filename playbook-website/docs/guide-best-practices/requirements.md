---
sidebar_position: 3
---


# Planejamento, Design e Requisitos

Nosso time vem ao longo destes anos desenvolvendo pipelines de bioinformática clínicos para diversas ômicas: transcriptoma, genômica, metagenômica e entre outras. Para cada uma delas há um set comum e especializado de ferramentas para o desenvolvimento do pipeline. Cabe ao bioinformata avaliar para o tipo de problema biológico a ser solucionado quais ferramentas e algoritmos estão disponíveis para cada etapa necessária do processamento da amostra desde as suas sequências de DNA digitalizadas até as variantes genômicas detectadas e o mais importante anotadas com metadados clínicos que apoiem os analistas no processo de conclusão do resultado de sua pesquisa ou exame.

Para facilitar a construção do pipeline de bioinformática e o entendimento comum entre os nossos clientes (usuários) que aqui identificamos, utilizamos de uma ferramenta visual baseada no Product Canvas adaptado para nosso contexto,  o Bioinformatics Pipeline Canvas (BPC).




![](/img/bpc.png)
Figura 5: Nosso Bioinformatics Pipeline Canvas (BPC)

[Link para download no Miro](https://miro.com/app/board/o9J_lyF0HrA=/)


> "Uma simples mas poderosa ferramenta que ajudará o time de planejamento a definir os requisitos críticos do pipeline de acordo com as necessidades científicas, técnicas e finalmente do usuário. Nós combinamos aqui Agile e um pouco de UX para poder facilitar as discussões com nossos analistas, médicos e geneticistas".
> - Marcel Caraciolo, coordenador de produtos de bioinformática do Hospital Israelita Albert Einstein


O objetivo de utilizar o Bioinformatics Pipeline Canvas é de ser instrumento facilitador para dar o pontapé inicial sobre o problema biológico e os resultados esperados para este pipeline. Com ele preenchido, o bioinformata e o time poderá partir da concepção para modelagem do pipeline. O canvas não vai substituir a necessidade de verificar se já existe um pipeline que atende este problema biológico, ou seja construir um pipeline do zero. Portanto após ele completado, você terá uma visão global dos requisitos para avaliar junto aos demais bioinformatas a necessidade ou não de reusar um pipeline já existente, realizando poucas alterações, ou construir um do zero. 

Lembramos também que você irá depositar um tempo para preencher este canvas, em torno de workshops com os analistas de 4-8 horas. Este tempo é fundamental para que você possa discutir e aprofundar em cada ponto-chave do canvas.

## O que é necessário ?

### Ambiente
Utilizamos  nosso board do [miro.com](http://miro.com/), uma plataforma on-line para compartilhamento de fluxos visuais e mapas de trabalho. Inclusive o template de nosso canvas já se encontra disponível para [download como template](https://miro.com/app/board/o9J_lyF0HrA=/). Ele também já incluem ferramentas de interação on-line com post-its. Também utilizamos canais de comunicação on-line com câmera e vídeo como nosso [Microsoft Teams](https://www.microsoft.com/pt-br/microsoft-teams/group-chat-software) ou nosso [Google Meet](https://meet.google.com/) para agendarmos a reuniões com todos participantes com conferência em áudio e vídeo.


### Participantes
Você precisará dos analistas, geneticistas ou especialistas que irão analisar os resultados do pipeline. Estes são seus clientes finais e o pipeline é o meio para chegar a estes resultados. Portanto, acolha a todos, quebre o gelo e crie um senso de compartilhamento (ownership) com todos, isto alinha a todos quais são as expectativas e as decisões a tomar durante toda a sessão.

### Preparação
Gaste um tempo ouvindo as necessidades dos clientes e usuários finais, entenda que tipo de dados irão manipular, os respectivos prazos de entrega, a volumetria esperada de amostras e como os resultados serão apresentados (planilhas, interface no varstation , apenas dados brutos , etc). Este tempo é importante para ouvir o que eles precisam, qual é o tipo de pesquisa ou exame que eles estão pretendendo lançar/validar e  como eles pretendem analisar.


Com todas as etapas acimas vistas e com time reunido, podemos seguir para as etapas de preenchimento. 


> Este é um trabalho em andamento, portanto ainda está em processo de validação até termos um framework escalável e reproduzível para quaisquer tipos de pipelines de bioinformática. O uso do canvas é recomendado, mas não obrigatório. Se tiver sugestões ou adapações enviem para nós, a contribuição coletiva é fundamental para o estabelecimento de um padrão funcional e reproduzível.




![](/img/bpc-fluxo.png)
Figura 6: Ordem recomendada para preenchimento do canvas


## Passo 0: Nome e Objetivo
Um pipeline sem um nome e sem objetivo em nosso mundo de bioinformática, já podemos achar estranho. Nossos pipelines geralmente tem codinomes e já tem um objetivo específico a ser resolvido. Não precisa ser algo muito longo e científico, o foco é que logo que uma pessoa acesse o canvas entenda rapidamente qual pipeline e  problema biológico que está sendo resolvido.

## Passo 1: Dados de Entrada e Saída
Aqui definimos quais serão os dados de entrada e saída esperados pelo nosso pipeline. Entendemos aqui se são dados FASTQs, BAM, VCFs ou outro tipo de arquivo, quais são as espécies a serem estudadas (genoma humano, microbioma, viroma, etc). Quais papers e materiais auxiliares serão importantes para avaliar na construção deste pipeline?  A discussão sobre as amostras de validação, se haverão resultados prévios para benchmarking. Finalmente, entender quais variantes que precisam ser identificada (variantes pequenas de um ou mais nucleótideos, variantes de número de cópia, estruturais, quantificação de expressão, ou apenas uma avaliação em hotspots) ?  As saídas também aqui são discutidas para entender os arquivos resultantes esperados e a forma de exibição dos dados.


## Passo 2: Visão do Pipeline
Aquie vamos detalhar as etapas esperadas do pipeline de bioinformática: trimming, controle de qualidade, alinhamento, pós-alinhamento, chamada de variantes, anotação de variantes, priorização de variantes, classificação das variantes. Neste momento o bioinformata começa a montar o quebra-cabeça e identificar quais componentes serão necessários para a construção do pipeline, quais arquivos intermediários serão gerados, etc.


## Passo 3: Métricas
As métricas ajudam a definir a validação e conclusão do pipeline para ser posto em ambiente produtivo. Quais métricas esperadas ? Precisão, Sensibilidade, Acurácia, Q30, etc. Que amostras temos disponíveis para validação e benchmarking, ferramentas de comparação também são aqui discutidas e apresentadas.

## Passo 4: Ferramentas e implementações
Nesse estágio os bioinformatas já iniciam a construção das histórias para a construção da primeira sprint de desenvolvimento. Pode aqui já detalhar ilustrando ferramentas a testar, implementações a realizar ou até componentes a serem reusados. Tudo isto pode ser validado com seu time de desenvolvimento para avaliação de riscos e preocupações e ter assim um primeiro conjunto de funcionalidades para se ter o pipeline construído por completo. Estas etapas podem ser constantemente validadas com os analistas sprint a sprint, informando quais etapas foram concluídas com sucesso ou não. O Canvas se atualizado constantemente se torna uma ferramenta interessante para poder avaliar também o progresso e refinar as hipóteses e conclusões dos testes de ferramentas, um processo iterativo em que você junto ao seu time de bioinformatas vai capturando as informações aprendidas e consegue com maior abstração compartilhar com seu time de clientes e analistas, sempre melhorando.


## Conclusão

Para recapitular, o nosso Bioinformatices Pipeline Canvas (BPC) é uma ferramenta colaborativa que envolve Agile e  Metodologia Científica para construção de pipelines de bioinformática, inspirada no famoso Product Canvas. 

Ela ajuda a você validar os requisitos do seu pipeline e o que precisa para por o mesmo em desenvolvimento.  Ela necessita de uma sessão de 4-8 horas com o time de analistas, geneticistas ou especialistas (clientes) para entendimento do problema. 

Ela funciona por meio de respostas às três grandes perguntas: Quais são os dados de entrada e saída para definição das etapas dos pipeline, como estas serão construídas por quais ferramentas e implementações necessárias para construção das tasks e finalmente que critérios será avaliados para ser o pipeline ser considerado completo e válido para ser liberado em produção.


### Exemplo de um Canvas Preenchido



![](/img/BPC-BRCA.jpg)
Figura 7: Exemplo de um Canvas preenchido em um dos treinamentos de planejamento e design de pipelines de bioinformática. Fonte: Miro.com.

[Link para download](https://miro.com/app/board/o9J_lyFSWQc=/)

## Referências

- The Product Canvas,Medium blog. Acessível em [link](https://medium.com/qdivision/the-product-canvas-edf8df531).

- Original Product Canvas, por Roman Pichler. Acessível em [link](https://www.romanpichler.com/tools/the-product-canvas/).