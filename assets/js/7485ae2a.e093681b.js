"use strict";(self.webpackChunkplaybook_website=self.webpackChunkplaybook_website||[]).push([[9852],{3905:function(e,a,o){o.d(a,{Zo:function(){return p},kt:function(){return u}});var t=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=t.createContext({}),l=function(e){var a=t.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},p=function(e){var a=l(e.components);return t.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(o),u=r,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||n;return o?t.createElement(g,i(i({ref:a},p),{},{components:o})):t.createElement(g,i({ref:a},p))}));function u(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=c;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3716:function(e,a,o){o.r(a),o.d(a,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var t=o(7462),r=o(3366),n=(o(7294),o(3905)),i=["components"],s={sidebar_position:1},d="Seja bem vindo ao Playboook de Bioinform\xe1tica do Varstation",l={unversionedId:"get-started",id:"get-started",isDocsHomePage:!1,title:"Seja bem vindo ao Playboook de Bioinform\xe1tica do Varstation",description:"O Varstation possui uma cole\xe7\xe3o de pipelines para chamada de variantes de amostras biol\xf3gicas gen\xf4micas para serem processados em nuvem ou local. Este guia foi constru\xeddo para ajudar a todos colaboradores",source:"@site/docs/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/bioinfo-playbook/docs/get-started",editUrl:"https://github.com/varstation/bioinfo-playbook/edit/master/website/docs/get-started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Configurando o ambiente",permalink:"/bioinfo-playbook/docs/guide-running/setup-docker"}},p=[{value:"Breve Introdu\xe7\xe3o sobre os Pipelines",id:"breve-introdu\xe7\xe3o-sobre-os-pipelines",children:[{value:"Sobre WDL",id:"sobre-wdl",children:[]},{value:"Pipelines do Varstation",id:"pipelines-do-varstation",children:[]}]},{value:"Por onde come\xe7ar ?",id:"por-onde-come\xe7ar-",children:[{value:"Quero executar meu primeiro pipeline",id:"quero-executar-meu-primeiro-pipeline",children:[]},{value:"Quero construir ou melhorar um pipeline.",id:"quero-construir-ou-melhorar-um-pipeline",children:[]},{value:"Quero conhecer sobre o ciclo de vida de desenvolvimento de um pipeline.",id:"quero-conhecer-sobre-o-ciclo-de-vida-de-desenvolvimento-de-um-pipeline",children:[]}]}],m={toc:p};function c(e){var a=e.components,s=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,t.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"seja-bem-vindo-ao-playboook-de-bioinform\xe1tica-do-varstation"},"Seja bem vindo ao Playboook de Bioinform\xe1tica do Varstation"),(0,n.kt)("p",null,"O Varstation possui uma cole\xe7\xe3o de pipelines para chamada de variantes de amostras biol\xf3gicas gen\xf4micas para serem processados em nuvem ou local. Este guia foi constru\xeddo para ajudar a todos colaboradores\na executar ou desenvolver os pipelines WDL do Varstation."),(0,n.kt)("p",null,"O conte\xfado deste reposit\xf3rio \xe9 open-source e apenas informa\xe7\xf5es consideradas p\xfablicas pelo nosso grupo s\xe3o publicadas aqui sobre a licen\xe7a  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Varstation/bioinfo-playbook"},"BSD 3-Clause license"),"."),(0,n.kt)("h2",{id:"breve-introdu\xe7\xe3o-sobre-os-pipelines"},"Breve Introdu\xe7\xe3o sobre os Pipelines"),(0,n.kt)("p",null,"Com o volume de dados gen\xf4micos exponencial a partir dos sequenciadores de nova gera\xe7\xe3o (NGS), aumentou exponencialmente os desafios de tratar estes dados e integrar todas estas informa\xe7\xf5es. In\xfameras ferramentas\nde software t\xeam sido criadas para lidar com estes tipos de dados, por\xe9m s\xe3o espec\xedficas para um determinado tipo de an\xe1lise e precisam se comunicar com outras para completar uma tarefa. Diante destas dificuldades,\npara os bioinformatas e biol\xf3gos, a an\xe1lise de dados gen\xf4micos se transforma em um processo, complexo, demorado e entendiante."),(0,n.kt)("p",null,"Os sistemas de pipeline para an\xe1lise de dados gen\xf4micos t\xeam o objetivo de contornar estes obst\xe1culos, criando integra\xe7\xf5es entre as diferentes ferramentas no intuito de reduzir os esfor\xe7os do pesquisador e bioinformata\nno processamento e an\xe1lise destes dados.  H\xe1 v\xe1rios tipos de pipelines de bioinform\xe1tica , e aqui no Varstation e Hospital Israelita Albert Einstein, trabalhamos com pipelines de sequenciamento cl\xednico para detec\xe7\xe3o,\nfiltragem e anota\xe7\xe3o de variantes que possam auxiliar no diagn\xf3stico cl\xednico do paciente."),(0,n.kt)("p",null,"Pipelines s\xe3o por defini\xe7\xe3o, sequenciais divididos em etapas. Os dados gerados em uma etapa servem de entrada para a pr\xf3xima etapa, formando uma corrente de elementos de processamento. O fluxo do pipeline \xe9 linear, e depois\nque o mesmo \xe9 configurado e parametrizado, n\xe3o \xe9 mais poss\xedvel tomar dire\xe7\xf5es quanto \xe0 dire\xe7\xe3o do fluxo de processamento."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docusaurus logo",src:o(8087).Z}),"\nFigura 1: Esquema demonstrativo de um pipeline de an\xe1lise de bioinform\xe1tica para sequenciamento de nova gera\xe7\xe3o (NGS). Adaptado de Roy et al., 2018."),(0,n.kt)("p",null,"Os pipelines de bioinform\xe1tica (Figura 1) geralmente s\xe3o plataformas espec\xedficas customizadas de acordo com as necessidades de cada laborat\xf3rio, mas que consistem basicamente em alguns passos principais: gera\xe7\xe3o da sequ\xeancia de interesse, alinhamento da sequ\xeancia com o genoma de refer\xeancia, chamada de variantes, anota\xe7\xe3o das variantes, sele\xe7\xe3o das variantes e elabora\xe7\xe3o do laudo cl\xednico. A seguir, entenderemos um pouco melhor como funcionam cada um desses passos."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Gera\xe7\xe3o da sequ\xeancia de interesse"),": \xc9 o processo que converte os sinais emitidos pelos sensores (informa\xe7\xf5es \xf3pticas ou qu\xedmicas) em informa\xe7\xe3o bin\xe1ria para identifica\xe7\xe3o da sequ\xeancia de nucleot\xeddeos de cada pequeno fragmento de DNA sequenciado. Para cada nucleot\xeddeo \xe9 atribu\xeddo o score de qualidade Phred, que \xe9 espec\xedfico para cada tipo de plataforma de sequenciamento. As sequ\xeancias juntamente com o score Phred s\xe3o armazenados em arquivos FASTQ.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Alinhamento da sequ\xeancia"),": Processo que determina onde cada pequeno fragmento de DNA sequenciado alinha com o genoma de refer\xeancia. Esse processo mapeia os scores de qualidade Phred para cada read, al\xe9m de mapear a localiza\xe7\xe3o (coordenada gen\xf4mica) de cada read alinhado, que pode ser utilizado para determinar a cobertura do sequenciamento. As informa\xe7\xf5es de alinhamento s\xe3o armazenadas em um arquivo BAM.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Chamada de variantes"),": Processo de identifica\xe7\xe3o das bases que diferem do genoma de refer\xeancia. O arquivo input geralmente \xe9 o BAM gerado no alinhamento dos reads. A chamada de variantes \xe9 um conjunto de algor\xedtimos utilizados estrategicamente para cada tipo de variantes, como por exemplo, SNVs ou Indels. A acur\xe1cia da chamada de variantes \xe9 muito dependente da qualidade das bases chamadas e dos reads alinhados. O produto final da chamada de variantes \xe9 um arquivo no formato VCF.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Anota\xe7\xe3o das variantes"),": Processo de consultas em bancos de dados de sequenciamento e variantes para caracterizar cada variante chamada utilizando in\xfameras informa\xe7\xf5es como, por exemplo, a localiza\xe7\xe3o da variante, sequencia prevista de amino\xe1cidos (nomenclatura HGVS), frequ\xeancia al\xe9lica populacional, preval\xeancia em diversos bancos de dados, entre outros. Esse processo \xe9 fundamental para selecionar ou filtrar variantes para classifica\xe7\xe3o e interpreta\xe7\xe3o.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Sele\xe7\xe3o de variantes e elabora\xe7\xe3o do laudo cl\xednico"),": A partir da anota\xe7\xe3o das variantes, s\xe3o identificadas as variantes clinicamente significantes para revis\xe3o e interpreta\xe7\xe3o. Para esse processo, \xe9 fundamental que os pipelines de bioinform\xe1tica estejam muito bem alinhados e validados, para que n\xe3o se perca nenhuma variante que possa ser importante para o paciente. As variantes selecionadas s\xe3o classificadas de acordo com as diretrizes da ACMG. Hoje, plataformas como o Varstation auxiliam fundamentalmente nesse processo de anota\xe7\xe3o, sele\xe7\xe3o e classifica\xe7\xe3o de variantes."))),(0,n.kt)("p",null,"A seguir, temos um gloss\xe1rio dos principais termo utilizados, fundamentais para compreens\xe3o de todo processo de pipelines de an\xe1lise:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(452).Z})),(0,n.kt)("p",null,"Tabela 1: Principais termos de bioinform\xe1tica utilizados para pipelines de an\xe1lise de NGS"),(0,n.kt)("h3",{id:"sobre-wdl"},"Sobre WDL"),(0,n.kt)("p",null,'Os pipelines desenvolvidos no Varstation s\xe3o utilizados por diversos laborat\xf3rios nacionais , incluindo o laborat\xf3rio cl\xednico do Hospital Israelita Albert Einstein.  Logo, os pipelines s\xe3o rigorosamente validado e testados para serem usados em larga escala e reprodut\xedveis.  Os pipelines s\xe3o escritos em linguagem de "workflow" utilizando a linguagem de marca\xe7\xe3o de Workflows WDL - Workflow Description Language, e processam um variado conjunto de dados \xf4micos desde gen\xf4mica, multigen\xf4mica, viroma e transcriptoma.'),(0,n.kt)("p",null,"WDL \xe9 uma linguagem de marca\xe7\xe3o desenvolvida pelo Instituto Broad para constru\xe7\xe3o dos seus pipelines de an\xe1lise gen\xf4mica. Desde sua concep\xe7\xe3o, tem sido largamente adotada e desenvolvida por uma comunidade global de pesquisadores, programadores, engenheiros e analistas."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(2778).Z}),"\nFigura 2: Esta imagem foi adaptada do Guia WDL da Broad."),(0,n.kt)("h3",{id:"pipelines-do-varstation"},"Pipelines do Varstation"),(0,n.kt)("p",null,"O time de desenvolvimento do Varstation desenvolve diversos tipos de pipelines para v\xe1rios tipos de dados e problemas. Abaixo um breve cat\xe1logo dos pipelines em produ\xe7\xe3o ou em desenvolvimento:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Nome"),(0,n.kt)("th",{parentName:"tr",align:null},"Vers\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Especifica\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Workflow"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"wdl-metagenomica"),(0,n.kt)("td",{parentName:"tr",align:null},"v0.2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Pipeline para identifica\xe7\xe3o de pat\xf3genos de DNA (V\xedrus, Bact\xe9rias, Fungos, Parasitas eucari\xf3ticos)"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./workflows/qc/quality-check-standard.wdl"},"Workflow")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/static/v1?label=Status&message=Production&color=green&style=flat-square",alt:"In Production"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"wdl-dragen-dna-germline"),(0,n.kt)("td",{parentName:"tr",align:null},"v0.1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Pipeline para processamento de dados germinativos com Dragen"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./workflows/rnaseq/rnaseq-star-db-build.wdl"},"Workflow")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/static/v1?label=Status&message=Development&color=red&style=flat-square",alt:"In Development"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"wdl-viroma"),(0,n.kt)("td",{parentName:"tr",align:null},"v0.4.3-beta"),(0,n.kt)("td",{parentName:"tr",align:null},"Pipeline para an\xe1lise metagen\xf4mica de v\xedrus, bact\xe9rias, fungos e parasitas eucariotos."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./workflows/rnaseq/rnaseq-star-db-build.wdl"},"Workflow")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/static/v1?label=Status&message=Production&color=green&style=flat-square",alt:"In Production"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"wdl-tasks"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"Tasks em WDL base para uso comum em pipelines."),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./workflows/rnaseq/rnaseq-star-db-build.wdl"},"Workflow")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/static/v1?label=Status&message=Development&color=red&style=flat-square",alt:"In Development"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"wdl-structs"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},"Estrutura de Dados comuns para os inputs em WDL"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"./workflows/rnaseq/rnaseq-star-db-build.wdl"},"Workflow")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://img.shields.io/static/v1?label=Status&message=Development&color=red&style=flat-square",alt:"In Development"}))))),(0,n.kt)("h2",{id:"por-onde-come\xe7ar-"},"Por onde come\xe7ar ?"),(0,n.kt)("p",null,"Este guia foi constru\xeddo por desenvolvedores e bioinformatas para outros bioinformatas, portanto h\xe1 v\xe1rios caminhos de explorar este guideline. Abaixo disponibilizamos as principais trilhas para quem quer come\xe7ar neste mundo da bioinform\xe1tica."),(0,n.kt)("h3",{id:"quero-executar-meu-primeiro-pipeline"},"Quero executar meu primeiro pipeline"),(0,n.kt)("p",null,"Neste link voc\xea aprender\xe1 como executar o seu primeiro pipeline."),(0,n.kt)("h3",{id:"quero-construir-ou-melhorar-um-pipeline"},"Quero construir ou melhorar um pipeline."),(0,n.kt)("p",null,"Neste link, apresentamos o passo-a-passo com pr\xe1ticas para voc\xea construir ou melhorar um pipeline."),(0,n.kt)("h3",{id:"quero-conhecer-sobre-o-ciclo-de-vida-de-desenvolvimento-de-um-pipeline"},"Quero conhecer sobre o ciclo de vida de desenvolvimento de um pipeline."),(0,n.kt)("p",null,"Neste link, voc\xea ir\xe1 entender melhor sobre o ciclo de vida de desenvolvimento de um pipeline e os respectivos est\xe1gios durante o seu ciclo de vida de concep\xe7\xe3o, produ\xe7\xe3o e encerramento."))}c.isMDXComponent=!0},452:function(e,a,o){a.Z=o.p+"assets/images/Glossario_bioinfo-6c2bcb112c81b08a9c611617ffdfba03.png"},2778:function(e,a,o){a.Z=o.p+"assets/images/WDL_example-1844f0803d40bd8bdb02fd93a94e6087.png"},8087:function(e,a,o){a.Z=o.p+"assets/images/pipeline_bioinfo-3cc62acfa9e9172b778b76c467bcca6c.png"}}]);