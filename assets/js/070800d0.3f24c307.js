"use strict";(self.webpackChunkplaybook_website=self.webpackChunkplaybook_website||[]).push([[563],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=c(a),u=o,k=m["".concat(l,".").concat(u)]||m[u]||p[u]||n;return a?i.createElement(k,s(s({ref:t},d),{},{components:a})):i.createElement(k,s({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<n;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3866:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var i=a(7462),o=a(3366),n=(a(7294),a(3905)),s=["components"],r={sidebar_position:1},l="Construindo ou melhorando seu pipeline em WDL",c={unversionedId:"guide-develop/checklist",id:"guide-develop/checklist",isDocsHomePage:!1,title:"Construindo ou melhorando seu pipeline em WDL",description:"Nesta se\xe7\xe3o iremos apresentar como voc\xea poder\xe1 desenvolver seu primeiro pipeline de bioinform\xe1tica em WDL ou editar um j\xe1 existente. Antes de seguirmos o tutorial de como construir um pipeline do zero, \xe9 importante apresentarmos o fluxo de desenvolvimento de um pipeline em WDL dentro de nosso ecosistema no Varstation. Nesta se\xe7\xe3o a seguir, apresentamos todos as boas pr\xe1ticas para desenvolvimento de um pipeline de bioinform\xe1tica. Abaixo, deixamos um checklist para voc\xea verificar se voc\xea est\xe1 preparado para construir seu primeiro pipeline.",source:"@site/docs/guide-develop/checklist.md",sourceDirName:"guide-develop",slug:"/guide-develop/checklist",permalink:"/bioinfo-playbook/docs/guide-develop/checklist",editUrl:"https://github.com/varstation/bioinfo-playbook/edit/master/website/docs/guide-develop/checklist.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Executando seu pipeline remotamente",permalink:"/bioinfo-playbook/docs/guide-running/running-remote-deployed-pipeline"},next:{title:"Markdown Features",permalink:"/bioinfo-playbook/docs/guide-develop/writing-wdl"}},d=[{value:"Checklist para Desenvolvimento de Pipeline",id:"checklist-para-desenvolvimento-de-pipeline",children:[{value:"1.Design e Requisitos",id:"1design-e-requisitos",children:[]},{value:"2. Implementa\xe7\xe3o",id:"2-implementa\xe7\xe3o",children:[]},{value:"3. Monitoramento e Testes em Homologa\xe7\xe3o",id:"3-monitoramento-e-testes-em-homologa\xe7\xe3o",children:[]},{value:"5. Valida\xe7\xe3o",id:"5-valida\xe7\xe3o",children:[]},{value:"6. Deploy no Varstation",id:"6-deploy-no-varstation",children:[]},{value:"7. Documenta\xe7\xe3o de Valida\xe7\xe3o",id:"7-documenta\xe7\xe3o-de-valida\xe7\xe3o",children:[]},{value:"8. Refer\xeancias",id:"8-refer\xeancias",children:[]}]},{value:"Voc\xea est\xe1 pronto para desenvolver ?",id:"voc\xea-est\xe1-pronto-para-desenvolver-",children:[]},{value:"Tutorial de Desenvolvimento de um pipeline WDL",id:"tutorial-de-desenvolvimento-de-um-pipeline-wdl",children:[]}],p={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"construindo-ou-melhorando-seu-pipeline-em-wdl"},"Construindo ou melhorando seu pipeline em WDL"),(0,n.kt)("p",null,"Nesta se\xe7\xe3o iremos apresentar como voc\xea poder\xe1 desenvolver seu primeiro pipeline de bioinform\xe1tica em WDL ou editar um j\xe1 existente. Antes de seguirmos o tutorial de como construir um pipeline do zero, \xe9 importante apresentarmos o fluxo de desenvolvimento de um pipeline em WDL dentro de nosso ecosistema no Varstation. Nesta se\xe7\xe3o a seguir, apresentamos todos as boas pr\xe1ticas para desenvolvimento de um pipeline de bioinform\xe1tica. Abaixo, deixamos um checklist para voc\xea verificar se voc\xea est\xe1 preparado para construir seu primeiro pipeline."),(0,n.kt)("h2",{id:"checklist-para-desenvolvimento-de-pipeline"},"Checklist para Desenvolvimento de Pipeline"),(0,n.kt)("h3",{id:"1design-e-requisitos"},"1.Design e Requisitos"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Voc\xea j\xe1 realizou o Pipeline Canvas ?  (Leia mais aqui sobre o Pipeline Canvas)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Voc\xea j\xe1 definiu os requisitos do problema biol\xf3gico a resolver ? (esp\xe9cie, genomas, etc.)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","J\xe1 definiu as entradas e sa\xeddas esperadas em alto n\xedvel ?"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","H\xe1 papers e materiais auxiliares para defini\xe7\xe3o das ferramentas a utilizar ?"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","H\xe1 amostras pr\xe9vias ou resultados pr\xe9vios para compara\xe7\xe3o ?"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Quais tipos de variantes que voc\xea precisa detectar ? (SNVs, SVs, CNVs, quantifica\xe7\xf5es, etc.)")),(0,n.kt)("h3",{id:"2-implementa\xe7\xe3o"},"2. Implementa\xe7\xe3o"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","H\xe1 um pipeline pr\xe9vio que atenda j\xe1 os requisitos ?"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Se pipeline pr\xe9vio, clonar o pipeline anterior com ajustes em par\xe2metros e arquivos auxiliares."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Se pipeline novo, criar um reposit\xf3rio novo seguindo o template da bioinformatica."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup do desenvolvimento de Git e GitFlow"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup do desenvolvimento de Docker e WDL local"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Setup do desenvolvimento do Ambiente Remoto"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Definir Sprint Backlog e Cronograma alinhado com Product Owner e Scrum Master"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Defini\xe7\xe3o de fluxo de Pull Request e Aprova\xe7\xe3o")),(0,n.kt)("h3",{id:"3-monitoramento-e-testes-em-homologa\xe7\xe3o"},"3. Monitoramento e Testes em Homologa\xe7\xe3o"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Execu\xe7\xe3o de set de amostras em homologa\xe7\xe3o e valida\xe7\xe3o de outputs de sa\xedda")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Valida\xe7\xe3o de desempenho com uma rotina de amostras (recomendado n > 5)")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Ajustes e otimiza\xe7\xf5es para lan\xe7amento"),(0,n.kt)("h3",{parentName:"li",id:"4-documenta\xe7\xe3o-t\xe9cnica"},"4. Documenta\xe7\xe3o T\xe9cnica")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Constru\xe7\xe3o da Documenta\xe7\xe3o T\xe9cnica sobre o fluxo do pipeline e versionamento dos softwares de bioinform\xe1tica")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Constru\xe7\xe3o do POP de bioinform\xe1tica sobre execu\xe7\xe3o do Pipeline"))),(0,n.kt)("h3",{id:"5-valida\xe7\xe3o"},"5. Valida\xe7\xe3o"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Valida\xe7\xe3o contra set de amostras benchmark bioinform\xe1tica (NA12878 gold standard, entre outras)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Valida\xe7\xe3o contra set de amostras pr\xe9vias laboratoriais caso haja mudan\xe7a de kits de sequenciamento"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Apresenta\xe7\xe3o de Resultados das planilhas de controle aos interessados para confirma\xe7\xe3o de valida\xe7\xe3o")),(0,n.kt)("h3",{id:"6-deploy-no-varstation"},"6. Deploy no Varstation"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Congelamento do release candidate do pipeline de bioinform\xe1tica"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Cria\xe7\xe3o do deployment release zip para deploy no varstation"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Cria\xe7\xe3o da tag no github (versionamento sem\xe2ntico)"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Build do Release Candidate no Varstation Producao"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Comit\xea de GM para defini\xe7\xe3o da data de lan\xe7amento"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deploy da Release para ambiente produtivo"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Testes no ambiente de valida\xe7\xe3o produtivo com 1 amostra de benchmark de bioinform\xe1tica")),(0,n.kt)("h3",{id:"7-documenta\xe7\xe3o-de-valida\xe7\xe3o"},"7. Documenta\xe7\xe3o de Valida\xe7\xe3o"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Conclus\xe3o da Documenta\xe7\xe3o de Valida\xe7\xe3o Bioinform\xe1tica"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Assinatura e de acordo dos Gerentes de Bioinform\xe1tica e NGS"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Armazenamento do documento versionado no drive da institui\xe7\xe3o")),(0,n.kt)("h3",{id:"8-refer\xeancias"},"8. Refer\xeancias"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Registro no github e documenta\xe7\xe3o oficial do varstation do pipeline liberado.")),(0,n.kt)("h2",{id:"voc\xea-est\xe1-pronto-para-desenvolver-"},"Voc\xea est\xe1 pronto para desenvolver ?"),(0,n.kt)("p",null,"Se todo o checklist acima foi revisado, voc\xea poder\xe1 j\xe1 seguir para o desenvolvimento do pipeline de bioinform\xe1tica no Varstation. O objetivo \xe9 que os itens 1 e 2 estejam de acordo para constru\xe7\xe3o ou melhoria de seu pipeline de bioinform\xe1tica. Na se\xe7\xe3o Ciclo de Desenvolvimento e boas pr\xe1ticas detalhamos cada um destes itens acima para que voc\xea possa iniciar o seu desenvolvimento."),(0,n.kt)("h2",{id:"tutorial-de-desenvolvimento-de-um-pipeline-wdl"},"Tutorial de Desenvolvimento de um pipeline WDL"),(0,n.kt)("p",null,"Na pr\xf3xima se\xe7\xe3o descrevemos como voc\xea poder\xe1 construir seu pipeline WDL passo a passo em ambiente de desenvolvimento com instru\xe7\xf5es para constru\xe7\xe3o e execu\xe7\xe3o."))}m.isMDXComponent=!0}}]);