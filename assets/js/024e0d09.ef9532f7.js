"use strict";(self.webpackChunkplaybook_website=self.webpackChunkplaybook_website||[]).push([[4458],{3905:function(e,o,n){n.d(o,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function s(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=r.createContext({}),p=function(e){var o=r.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},c=function(e){var o=p(e.components);return r.createElement(l.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var n=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=t,P=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(P,i(i({ref:o},c),{},{components:n})):r.createElement(P,i({ref:o},c))}));function d(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1552:function(e,o,n){n.r(o),n.d(o,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),t=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},l="Executando um pipeline localmente",p={unversionedId:"guide-running/running-local-deployed-pipeline",id:"guide-running/running-local-deployed-pipeline",isDocsHomePage:!1,title:"Executando um pipeline localmente",description:"Os pipelines executados pelo nosso time no Varstation, s\xe3o todos escritos na linguagem WDL e s\xe3o testados usando Cromwell. Podemos rodar localmente usando o cliente cromwell.jar ou utilizarmos o programa Oliver que interfaceia diretamente com o servidor Web Cromwell para execu\xe7\xe3o remota das tarefas. Embora n\xe3o testemos nossos pipelines fora do Cromwell, n\xf3s esperamos que os os pipelines rodem da mesma maneira com outros orquestradores.",source:"@site/docs/guide-running/running-local-deployed-pipeline.md",sourceDirName:"guide-running",slug:"/guide-running/running-local-deployed-pipeline",permalink:"/bioinfo-playbook/docs/guide-running/running-local-deployed-pipeline",editUrl:"https://github.com/varstation/bioinfo-playbook/edit/master/website/docs/guide-running/running-local-deployed-pipeline.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configurando o ambiente",permalink:"/bioinfo-playbook/docs/guide-running/setup-docker"},next:{title:"Executando seu pipeline remotamente",permalink:"/bioinfo-playbook/docs/guide-running/running-remote-deployed-pipeline"}},c=[],u={toc:c};function m(e){var o=e.components,n=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"executando-um-pipeline-localmente"},"Executando um pipeline localmente"),(0,a.kt)("p",null,"Os pipelines executados pelo nosso time no Varstation, s\xe3o todos escritos na linguagem WDL e s\xe3o testados usando Cromwell. Podemos rodar localmente usando o cliente cromwell.jar ou utilizarmos o programa Oliver que interfaceia diretamente com o servidor Web Cromwell para execu\xe7\xe3o remota das tarefas. Embora n\xe3o testemos nossos pipelines fora do Cromwell, n\xf3s esperamos que os os pipelines rodem da mesma maneira com outros orquestradores."),(0,a.kt)("p",null,"A maneira mais r\xe1pida de executar o nosso pipeline, \xe9 instalar o bioconda e rodar os seguintes comandos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"conda create -n workflows-dev -c conda-forge cromwell -y\nconda activate workflows-dev\ngit clone git@github.com:Varstation/wdl-demo-pipeline.git\ncd wdl-demo-pipeline\naws s3 cp s3://wdl-poc-ci/ ./tests/data/   --recursive \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"O comando aws s3 exige que voc\xea tenha credenciais v\xe1lidas na AWS do Varstation. Procure o time de infra-estrutura para obter suas credenciais com uma conta v\xe1lida na AWS.")),(0,a.kt)("p",null,"Este \xe9 o nosso pipeline de ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Varstation/wdl-demo-pipeline"},"exemplo")," para quem est\xe1 iniciando, ele executa\no pipeline de detec\xe7\xe3o de variantes germinativas com as etapas de merge de fastqs, alinhamento com ",(0,a.kt)("a",{parentName:"p",href:"http://bio-bwa.sourceforge.net/"},"Bwa")," e chamada de variantes com ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/freebayes/freebayes"},"Freebayes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cromwell run -o tests/cromwell_options.json -i tests/functional/inputs.json germline-varcall-dna.wdl\n")),(0,a.kt)("p",null,"Assim que executar o comando acima, o orquestrador Cromwell ir\xe1 apresentar mensagens no terminal sobre o andamento do pipeline at\xe9 que o workflow seja executado por completo com sucesso. Neste pipeline acima pegamos um par de ",(0,a.kt)("em",{parentName:"p"},"fastq files")," , alinhamos com Bwa e chamamos variantes com o ",(0,a.kt)("em",{parentName:"p"},"Freebayes"),". O arquivo final \xe9 um arquivo de variantes VCF que separamos em SNPs e indels."),(0,a.kt)("p",null,"Vamos olhar um dos ",(0,a.kt)("em",{parentName:"p"},"outputs")," (sa\xeddas). A maneira mais f\xe1cil \xe9 abrir o vcf como um editor de texto simples, usando o seu terminal ou abrindo via o editor de textos."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#CHROM  POS ID  REF ALT QUAL    FILTER  INFO    FORMAT  unknown\nchr13   32890562    .   T   C   8.74137e-12 .   AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=30;DPB=30;DPRA=0;EPP=3.0103;EPPR=4.25114;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=26.9327;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=73;QR=1023;RO=28;RPL=0;RPP=7.35324;RPPR=63.8115;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=16;SRP=4.25114;SRR=12;TYPE=snp GT:DP:AD:RO:QR:AO:QA:GL 0/0:30:28,2:28:1023:2:73:0,-2.1002,-85.4476\nchr13   32890572    .   G   A   678.735 .   AB=0.608696;ABP=7.73089;AC=1;AF=0.5;AN=2;AO=28;CIGAR=1X;DP=46;DPB=46;DPRA=0;EPP=3.32051;EPPR=3.49285;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=85.5046;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=1055;QR=678;RO=18;RPL=0;RPP=63.8115;RPPR=42.0968;RPR=28;RUN=1;SAF=15;SAP=3.32051;SAR=13;SRF=10;SRP=3.49285;SRR=8;TYPE=snp    GT:DP:AD:RO:QR:AO:QA:GL 0/1:46:18,28:18:678:28:1055:-81.4105,0,-47.505\nchr13   32890593    .   T   C   0   .   AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=61;DPB=61;DPRA=0;EPP=3.0103;EPPR=3.93042;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=67.5997;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=77;QR=2268;RO=59;RPL=0;RPP=7.35324;RPPR=98.7391;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=32;SRP=3.93042;SRR=27;TYPE=snp GT:DP:AD:RO:QR:AO:QA:GL 0/0:61:59,2:59:2268:2:77:0,-11.0537,-197.03\n")),(0,a.kt)("p",null,"Agora que voc\xea aprendeu a como rodar seu primeiro pipeline localmente, vamos te ensinar a como rodar o seu pipeline no modo servidor remoto, este se aplica para execu\xe7\xe3o em nossos servidores de homologa\xe7\xe3o ou produ\xe7\xe3o."))}m.isMDXComponent=!0}}]);