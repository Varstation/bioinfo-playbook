"use strict";(self.webpackChunkplaybook_website=self.webpackChunkplaybook_website||[]).push([[458],{3905:function(e,o,n){n.d(o,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),u=function(e){var o=r.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},p=function(e){var o=u(e.components);return r.createElement(s.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var n=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=t,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:o},p),{},{components:n})):r.createElement(f,i({ref:o},p))}));function d(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1552:function(e,o,n){n.r(o),n.d(o,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),t=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Executando um pipeline localmente",u={unversionedId:"guide-running/running-local-deployed-pipeline",id:"guide-running/running-local-deployed-pipeline",isDocsHomePage:!1,title:"Executando um pipeline localmente",description:"Os pipelines executados pelo nosso time no Varstation, s\xe3o todos escritos na linguagem WDL e s\xe3o testados usando Cromwell. Podemos rodar localmente usando o cliente cromwell.jar ou utilizamos o programa Oliver que interfaceia diretamente com o servidor Web Cromwell para execu\xe7\xe3o remota das tarefas. Embora n\xe3o testemos nossos pipelines fora do Cromwell, n\xf3s esperamos",source:"@site/docs/guide-running/running-local-deployed-pipeline.md",sourceDirName:"guide-running",slug:"/guide-running/running-local-deployed-pipeline",permalink:"/bioinfo-playbook/docs/guide-running/running-local-deployed-pipeline",editUrl:"https://github.com/varstation/bioinfo-playbook/edit/master/website/docs/guide-running/running-local-deployed-pipeline.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configurando o ambiente",permalink:"/bioinfo-playbook/docs/guide-running/setup-docker"},next:{title:"Executando seu pipeline remotamente",permalink:"/bioinfo-playbook/docs/guide-running/running-remote-deployed-pipeline"}},p=[],c={toc:p};function m(e){var o=e.components,n=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"executando-um-pipeline-localmente"},"Executando um pipeline localmente"),(0,a.kt)("p",null,"Os pipelines executados pelo nosso time no Varstation, s\xe3o todos escritos na linguagem WDL e s\xe3o testados usando Cromwell. Podemos rodar localmente usando o cliente cromwell.jar ou utilizamos o programa Oliver que interfaceia diretamente com o servidor Web Cromwell para execu\xe7\xe3o remota das tarefas. Embora n\xe3o testemos nossos pipelines fora do Cromwell, n\xf3s esperamos\nque os os pipelines rodem da mesma maneira com outros orquestradores."),(0,a.kt)("p",null,"A maneira mais r\xe1pida de executar o nosso pipeline, \xe9 instalar o bioconda e rodar os seguintes comandos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"conda create -n workflows-dev -c conda-forge cromwell -y\nconda activate workflows-dev\ngit clone git@github.com:stjudecloud/workflows.git\ncd workflows\n")),(0,a.kt)("p",null,"Quaisquer um dos workflows na pasta workflow s\xe3o bons exemplos para come\xe7ar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cromwell run workflows/germline-pipeline/simple-germline-variantcalling.wdl --inputs workflows/germline-pipeline/inputs.json\n")),(0,a.kt)("p",null,"Assim que executar o comando acima, o orquestrador Cromwell ir\xe1 apresentar mensagens no terminal sobre o andamento do pipeline\nat\xe9 que o workflow seja executado por completo com sucesso.  Neste pipeline acima pegamos um bam file pr\xe9-processado e chamamos\nvariantes com o haplotypeCaller. O arquivo final \xe9 um arquivo de variantes VCF em que separamos em SNPs e indels. "),(0,a.kt)("p",null,"Vamos olhar um dos outputs (sa\xeddas). A maneira mais f\xe1cil \xe9 abrir o vcf como um editor de texto simples, usando o seu terminal ou abrindo via o editor de textos."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#CHROM  POS ID  REF ALT QUAL  FILTER  INFO  FORMAT  NA12878\n20  9999996 . A ACT 534.73  . AC=2;AF=1.00;AN=2;DP=12;FS=0.000;MLEAC=2;MLEAF=1.00;MQ=60.00;QD=25.82;SOR=5.136 GT:AD:DP:GQ:PL  1/1:0,12:12:39:572,39,0\n20  10001436  . A AAGGCT  1222.73 . AC=2;AF=1.00;AN=2;DP=29;FS=0.000;MLEAC=2;MLEAF=1.00;MQ=60.00;QD=32.17;SOR=0.836 GT:AD:DP:GQ:PL  1/1:0,28:28:84:1260,84,0\n")),(0,a.kt)("p",null,"Agora que voc\xea aprendeu a como rodar seu primeiro pipeline localmente, vamos te ensinar a como rodar o seu pipeline no modo servidor remoto, este se aplica para execu\xe7\xe3o em nossos servidores de homologa\xe7\xe3o ou produ\xe7\xe3o."))}m.isMDXComponent=!0}}]);