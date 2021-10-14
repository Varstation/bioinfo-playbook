"use strict";(self.webpackChunkplaybook_website=self.webpackChunkplaybook_website||[]).push([[7687],{3905:function(e,n,r){r.d(n,{Zo:function(){return P},kt:function(){return p}});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=o.createContext({}),c=function(e){var n=o.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},P=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},R=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,P=s(e,["components","mdxType","originalType","parentName"]),R=c(r),p=t,A=R["".concat(l,".").concat(p)]||R[p]||u[p]||a;return r?o.createElement(A,i(i({ref:n},P),{},{components:r})):o.createElement(A,i({ref:n},P))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=R;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}R.displayName="MDXCreateElement"},3421:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return P},default:function(){return R}});var o=r(7462),t=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:4},l="Verificando os resultados",c={unversionedId:"guide-develop/results-wdl",id:"guide-develop/results-wdl",isDocsHomePage:!1,title:"Verificando os resultados",description:"Agora que voc\xea est\xe1 de posse do arquivo final de sa\xedda VCF contendo as variantes, conforme exemplo a seguir:",source:"@site/docs/guide-develop/results-wdl.md",sourceDirName:"guide-develop",slug:"/guide-develop/results-wdl",permalink:"/bioinfo-playbook/docs/guide-develop/results-wdl",editUrl:"https://github.com/varstation/bioinfo-playbook/edit/master/website/docs/guide-develop/results-wdl.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Executando seu pipeline",permalink:"/bioinfo-playbook/docs/guide-develop/running-wdl"},next:{title:"Preparando para deploy",permalink:"/bioinfo-playbook/docs/guide-develop/deploy-wdl"}},P=[],u={toc:P};function R(e){var n=e.components,r=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"verificando-os-resultados"},"Verificando os resultados"),(0,a.kt)("p",null,"Agora que voc\xea est\xe1 de posse do arquivo final de sa\xedda VCF contendo as variantes, conforme exemplo a seguir:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "GermlineVarcallDna.FreeBayes.vcf_file": "/Users/marcelcaraciolo/Projects/gnmk/bioinfo/wdl-demo-pipeline/cromwell-executions/GermlineVarcallDna/c9b9f680-ab5a-41ca-aa5c-9a3dbe2b6f50/call-FreeBayes/execution/SAMPLE_S8.freebayes.vcf",\n}\n')),(0,a.kt)("p",null,"Voc\xea poder\xe1 abrir este arquivo em qualquer editor de textos ou utilizar o seu terminal para exibir algumas linhas do mesmo. Este arquivo cont\xe9m as variantes detectadas no DNA de uma amostra que foi enviada para executar o pipeline de dete\xe7\xe3o de chamada de variantes germinativas. Utilizando o comando ",(0,a.kt)("inlineCode",{parentName:"p"},"more")," voc\xea ir\xe1 visualizar algumas linhas do arquivo VCF. Elas devem ser algo assim:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO    FORMAT  unknown\nchr13   32890562        .       T       C       8.74137e-12     .       AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=30;DPB=30;DPRA=0;EPP=3.0103;EPPR=\n4.25114;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=26.9327;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=73;QR=1023;RO=28;RPL=0;RPP=7.3\n5324;RPPR=63.8115;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=16;SRP=4.25114;SRR=12;TYPE=snp GT:DP:AD:RO:QR:AO:QA:GL 0/0:30:28,2:28:1023:2:73:0,-2.1002,-\n85.4476\nchr13   32890572        .       G       A       678.735 .       AB=0.608696;ABP=7.73089;AC=1;AF=0.5;AN=2;AO=28;CIGAR=1X;DP=46;DPB=46;DPRA=0;EPP=3.32\n051;EPPR=3.49285;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=85.5046;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=1055;QR=678;RO=18;RPL\n=0;RPP=63.8115;RPPR=42.0968;RPR=28;RUN=1;SAF=15;SAP=3.32051;SAR=13;SRF=10;SRP=3.49285;SRR=8;TYPE=snp    GT:DP:AD:RO:QR:AO:QA:GL 0/1:46:18,28:18:678:\n28:1055:-81.4105,0,-47.505\nchr13   32890593        .       T       C       0       .       AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=61;DPB=61;DPRA=0;EPP=3.0103;EPPR=3.93042;\nGTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=67.5997;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=77;QR=2268;RO=59;RPL=0;RPP=7.35324;RPP\nR=98.7391;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=32;SRP=3.93042;SRR=27;TYPE=snp GT:DP:AD:RO:QR:AO:QA:GL 0/0:61:59,2:59:2268:2:77:0,-11.0537,-197.03\nchr13   32890667        .       A       G       6.01221e-15     .       AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=63;DPB=63;DPRA=0;EPP=3.0103;EPPR=\n7.31765;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=70.5248;PAIRED=1;PAIREDR=0.983607;PAO=0;PQA=0;PQR=0;PRO=0;QA=76;QR=2313;RO=61;RPL=2;\nRPP=7.35324;RPPR=51.7438;RPR=0;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=30;SRP=3.0459;SRR=31;TYPE=snp   GT:DP:AD:RO:QR:AO:QA:GL 0/0:63:61,2:61:2313:2:76:0,-\n11.7502,-201.174\nchr13   32890711        .       T       G       6.40777e-05     .       AB=0.111111;ABP=26.6552;AC=1;AF=0.5;AN=2;AO=2;CIGAR=1X;DP=18;DPB=18;DPRA=0;E\nPP=3.0103;EPPR=5.18177;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=11.124;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=74;QR=618;RO=16;\nRPL=2;RPP=7.35324;RPPR=22.5536;RPR=0;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=6;SRP=5.18177;SRR=10;TYPE=snp     GT:DP:AD:RO:QR:AO:QA:GL 0/1:18:16,2:16:618:2\n:74:-1.60689,0,-50.5415\n\n...\n")),(0,a.kt)("p",null,"Voc\xea conseguiu concluir com sucesso a execu\xe7\xe3o do seu primeiro pipeline de bioinform\xe1tica utilizando WDL. Nas pr\xf3ximas se\xe7\xf5ess a seguir vamos explorar como voc\xea pode utilizar do ambiente de testes para validar seu pipeline antes de construir um release e lan\xe7ar a mesma."))}R.isMDXComponent=!0}}]);