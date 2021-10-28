"use strict";(self.webpackChunkplaybook_website=self.webpackChunkplaybook_website||[]).push([[6074],{3905:function(e,o,a){a.d(o,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function t(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?t(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,n,r=function(e,o){if(null==e)return{};var a,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var o=n.useContext(l),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},m=function(e){var o=p(e.components);return n.createElement(l.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var a=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,f=d["".concat(l,".").concat(c)]||d[c]||u[c]||t;return a?n.createElement(f,s(s({ref:o},m),{},{components:a})):n.createElement(f,s({ref:o},m))}));function c(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var t=a.length,s=new Array(t);s[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<t;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4773:function(e,o,a){a.r(o),a.d(o,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var n=a(7462),r=a(3366),t=(a(7294),a(3905)),s=["components"],i={sidebar_position:3},l="Executando seu pipeline remotamente",p={unversionedId:"guide-running/running-remote-deployed-pipeline",id:"guide-running/running-remote-deployed-pipeline",isDocsHomePage:!1,title:"Executando seu pipeline remotamente",description:"Neste tutorial iremos apresentar como executamos o pipeline em WDL em Cromwell hospedados em ambientes remotos ou cloud/nuvem. Ao fim desta se\xe7\xe3o, voc\xea ter\xe1 a capacidade de executar seus pipelines wdl utilizando de recursos de infra-estrutura mais sofisticados em nuvem como AWS, Azure, ou at\xe9 em outro ambiente-nuvem privado.",source:"@site/docs/guide-running/running-remote-deployed-pipeline.md",sourceDirName:"guide-running",slug:"/guide-running/running-remote-deployed-pipeline",permalink:"/bioinfo-playbook/docs/guide-running/running-remote-deployed-pipeline",editUrl:"https://github.com/varstation/bioinfo-playbook/edit/master/website/docs/guide-running/running-remote-deployed-pipeline.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Executando um pipeline localmente",permalink:"/bioinfo-playbook/docs/guide-running/running-local-deployed-pipeline"},next:{title:"Construindo ou melhorando seu pipeline em WDL",permalink:"/bioinfo-playbook/docs/guide-develop/checklist"}},m=[{value:"Vis\xe3o do Weedle em execu\xe7\xe3o",id:"vis\xe3o-do-weedle-em-execu\xe7\xe3o",children:[]},{value:"Executando seu pipeline no ambiente Cromwell servidor",id:"executando-seu-pipeline-no-ambiente-cromwell-servidor",children:[]}],u={toc:m};function d(e){var o=e.components,i=(0,r.Z)(e,s);return(0,t.kt)("wrapper",(0,n.Z)({},u,i,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"executando-seu-pipeline-remotamente"},"Executando seu pipeline remotamente"),(0,t.kt)("p",null,"Neste tutorial iremos apresentar como executamos o pipeline em WDL em Cromwell hospedados em ambientes remotos ou cloud/nuvem. Ao fim desta se\xe7\xe3o, voc\xea ter\xe1 a capacidade de executar seus pipelines wdl utilizando de recursos de infra-estrutura mais sofisticados em nuvem como AWS, Azure, ou at\xe9 em outro ambiente-nuvem privado."),(0,t.kt)("h2",{id:"vis\xe3o-do-weedle-em-execu\xe7\xe3o"},"Vis\xe3o do Weedle em execu\xe7\xe3o"),(0,t.kt)("p",null,"Para executar um pipeline em um orquestrador Cromwell hospedado remotamente, utilizamos de um gerenciador de orquestramento open-source desenvolvido pelo nosso grupo : ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/Varstation/weedle"},"Weedle"),". Baseado na sua p\xe1gina principal, esta ferramenta pode auxiliar no processo de submiss\xe3o, inspe\xe7\xe3o, interrup\xe7\xe3o e reexecu\xe7\xe3o de ",(0,t.kt)("em",{parentName:"p"},"workflows")," em ambiente Cromwell.\nEle tamb\xe9m permite a possibilidade de rastrear os jobs de execu\xe7\xe3o para facilitar o reporting. Permite tamb\xe9m enviar par\xe2metros via arquivos JSON. E finalmente, a sua integra\xe7\xe3o com ambientes em nuvem como AWS, facilitando o interfaceamento com estes ambientes nativos em nuvem."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"$ weedle submit --host https://IP_CROMWELL  --disable-ssl --options tests/cromwell_aws_options.json --inputs tests/sandbox/inputs.json --imports-zip germline-varcall-dna_0.1.1-rc.zip germline-varcall-dna_0.1.1-rc.wdl --wait\nWorkflow id e23f028f-5f84-41e6-b764-7589d0fbb31b\nWorkflow terminated: Succeeded\n...\n")),(0,t.kt)("h2",{id:"executando-seu-pipeline-no-ambiente-cromwell-servidor"},"Executando seu pipeline no ambiente Cromwell servidor"),(0,t.kt)("p",null,"O servidor Cromwell pode est\xe1 rodando em um ambiente nuvem remoto e este oferece um conjunto de APIs que permitem a submiss\xe3o e monitoramento dos ",(0,t.kt)("em",{parentName:"p"},"jobs")," para processamento. Este cen\xe1rio \xe9 o ideal para os pipelines que exigem maior poder de processamento e mem\xf3ria, que pode ser um limitante ao rodar na m\xe1quina do bioinformata. No Varstation possu\xedmos um servidor de produ\xe7\xe3o que roda o ambiente Cromwell hospedado na nuvem AWS. Este se aproveita de todos os recursos computacionais da AWS permitindo executar m\xfaltiplos jobs em paralelo.  Os ambientes aqui constru\xeddos seguem as boas pr\xe1ticas da AWS na constru\xe7\xe3o de inst\xe2ncias Cromwell com a AWS, pelo tutorial nestes links ",(0,t.kt)("a",{parentName:"p",href:"https://aws.amazon.com/government-education/cromwell-on-aws/"},"link1")," ",(0,t.kt)("a",{parentName:"p",href:"https://docs.opendata.aws/genomics-workflows/orchestration/cromwell/cromwell-overview.html"},"link2")),(0,t.kt)("p",null,"Na figura 3 ilustramos de forma simplificada o fluxo de submiss\xe3o de um job em um Servidor Cromwell. A documenta\xe7\xe3o completa de toda a API de interfaceamento com o Cromwell pode ser encontrada neste ",(0,t.kt)("a",{parentName:"p",href:"https://cromwell.readthedocs.io/en/stable/api/RESTAPI/"},"link"),"."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Docusaurus logo",src:a(1010).Z}),"\nFigura 2: Fluxo do Pipeline para processamento de pipelines com Cromwell Modo Servidor"),(0,t.kt)("p",null,"Na AWS utilizamos uma infra-estrutura escalon\xe1vel por meio de inst\xe2ncias spot que s\xe3o orquestradas pelo AWS BATCH, que possui uma fila gerenci\xe1vel que escuta as novas tasks que s\xe3o invocadas pelo servidor Cromwell. Todas as tarefas e seus respectivos estados s\xe3o armazenados em logs do AWS CloudWatch e tamb\xe9m no banco de dados AWS Aurora MySQL. Logo que os dados s\xe3o produzidos, s\xe3o exportados para nossos buckets da AWS S3."),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2020/10/15/CromwellOrchestrator.png",alt:"AWS"}),"\nFigura 3: Fluxo do Pipeline com arquitetura similar na infra-estrutura AWS"),(0,t.kt)("p",null,"A maneira mais r\xe1pida de executar o nosso pipeline, \xe9 instalar o weedle no ambiente virtual onde voc\xea executa o seu pipeline e rodar os seguintes comandos:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"conda create -n workflows-dev python=3.7 -y\nconda activate workflows-dev\nconda install -c conda-forge pandas -y\ngit clone git@github.com:Varstation/weedle.git\npython setup.py install\n")),(0,t.kt)("p",null,"Quaisquer um dos ",(0,t.kt)("em",{parentName:"p"},"workflows")," em seu reposit\xf3rio de pipelines ** s\xe3o bons exemplos para come\xe7ar. \xc9 necess\xe1rio que voc\xea defina o arquivo de inputs para que ele possa encontrar os arquivos de entrada na AWS, para isto \xe9 necess\xe1rio que voc\xea configure\num arquivo inputs.json, segue um exemplo abaixo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "GermlineVarcallDna.sampleInputs": {\n      "sampleName": "SAMPLE",\n      "sampleId": 0,\n      "fastqs1": [\n        "s3://wdl-poc-ci/SAMPLE_S8_L001_R1_001.fastq.gz"\n      ],\n      "fastqs2": [\n        "s3://wdl-poc-ci/SAMPLE_S8_L001_R2_001.fastq.gz"\n      ]\n\n    },\n    "GermlineVarcallDna.bwaIndex":{\n      "fastaFile": "s3://wdl-poc-ci/reference/bwa/reference_example.fasta",\n      "indexFiles":[\n        "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.amb",\n        "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.ann",\n        "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.bwt",\n        "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.pac",\n        "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.sa"\n      ]\n    },\n    "GermlineVarcallDna.bwaThreads": 1,\n    "GermlineVarcallDna.reference": "s3://wdl-poc-ci/reference/bwa/reference_example.fasta",\n    "GermlineVarcallDna.reference_idx": "s3://wdl-poc-ci/reference/bwa/reference_example.fasta.fai",\n    "GermlineVarcallDna.intervals": "s3://wdl-poc-ci/BRCA.list"\n  }\n')),(0,t.kt)("p",null,"O pr\xf3ximo passo \xe9 definir o arquivo onde os logs da execu\xe7\xe3o dever\xe3o ser armazenados, para isto temos um arquivo de configura\xe7\xf5es para defini\xe7\xe3o destes locais de sa\xedda. O arquivo deve ser armazenado em formato JSON, segue um exemplo abaixo\nde nosso ",(0,t.kt)("strong",{parentName:"p"},"cromwell_aws_options.json")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "final_workflow_log_dir": "s3://varstation-sandbox-cromwell/workflow-logs",\n    "final_call_logs_dir": "s3://varstation-sandbox-cromwell/call-logs"\n}\n')),(0,t.kt)("p",null,"\xc9 necess\xe1rio que voc\xea tenha um arquivo de input WDL e o pacote ZIP contendo os arquivos auxiliares WDL que ser\xe3o importados pelo workflow principal."),(0,t.kt)("p",null,"Abaixo os comandos necess\xe1rios para submeter um de nossos ",(0,t.kt)("em",{parentName:"p"},"workflows"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"}," weedle submit --host https://34.204.182.29  --disable-ssl --options tests/cromwell_aws_options.json --inputs tests/sandbox/inputs.json --imports-zip germline-varcall-dna_0.1.1-rc.zip germline-varcall-dna_0.1.1-rc.wdl --wait```\n")),(0,t.kt)("p",null,"Assim que executar o comando acima, o utilit\xe1rio weedle ir\xe1 submeter o job para o orquestrador Cromwell. Para inspecionar o status do ",(0,t.kt)("em",{parentName:"p"},"job"),", voc\xea pode interrogar o servidor sobre o seu status."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"weedle status --host ENDERECO_CROMWELL --disable-ssl workflow-id \nRUNNING\n")),(0,t.kt)("p",null,"Para avaliar um dos ",(0,t.kt)("em",{parentName:"p"},"outputs")," de sa\xeddas utilize o comando abaixo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"weedle outputs --host ENDERECO_CROMWELL --disable-ssl workflow-id \n# GermlineVarcallDna.BwaMem.outputBai\ns3://dragen-sandbox-cromwell/cromwell-execution/GermlineVarcallDna/e23f028f-5f84-41e6-b764-7589d0fbb31b/call-BwaMem/SAMPLE_S8.aln.bam.bai\n...\n")),(0,t.kt)("p",null,"Neste pipeline acima pegamos um par de fastqs ",(0,t.kt)("strong",{parentName:"p"},"fastq files")," , realizamos a valida\xe7\xe3o , merge e alinhamento dos mesmos. Com a ",(0,t.kt)("strong",{parentName:"p"},"BAM Files"),"  chamamos variantes com o ",(0,t.kt)("em",{parentName:"p"},"FreeBayes"),". O arquivo final \xe9 um arquivo de variantes VCFs. Vamos olhar um dos ",(0,t.kt)("em",{parentName:"p"},"outputs")," (sa\xeddas). A maneira mais f\xe1cil \xe9 abrir o vcf como um editor de texto simples, usando o seu terminal ou abrindo via o editor de textos utilizando o aws-cli para copiar o arquivo para local"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"#Procure a linha do output no arquivo de log de outputs # GermlineVarcallDna.FreeBayes.vcf_file (path do VCF no bucket de sa\xedda do S3)\naws s3 cp s3://dragen-sandbox-cromwell/cromwell-execution/GermlineVarcallDna/e23f028f-5f84-41e6-b764-7589d0fbb31b/call-FreeBayes/SAMPLE_S8.freebayes.vcf .  --no-verify-ssl\nmore  SAMPLE_S8.freebayes.vcf\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO    FORMAT  unknown\nchr13   32890562        .       T       C       8.74137e-12     .       AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=30;DPB=30;DPRA=0;EPP=3.0103;EPPR=4.25114;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=26.9327;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=73;QR=1023;RO=28;RPL=0;RPP=7.35324;RPPR=63.8115;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=16;SRP=4.25114;SRR=12;TYPE=snp GT:DP:AD:RO:QR:AO:QA:GL 0/0:30:28,2:28:1023:2:73:0,-2.1002,-85.4476\nchr13   32890572        .       G       A       678.735 .       AB=0.608696;ABP=7.73089;AC=1;AF=0.5;AN=2;AO=28;CIGAR=1X;DP=46;DPB=46;DPRA=0;EPP=3.32051;EPPR=3.49285;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=85.5046;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=1055;QR=678;RO=18;RPL=0;RPP=63.8115;RPPR=42.0968;RPR=28;RUN=1;SAF=15;SAP=3.32051;SAR=13;SRF=10;SRP=3.49285;SRR=8;TYPE=snp    GT:DP:AD:RO:QR:AO:QA:GL 0/1:46:18,28:18:678:28:1055:-81.4105,0,-47.505\nchr13   32890593        .       T       C       0       .       AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=61;DPB=61;DPRA=0;EPP=3.0103;EPPR=3.93042;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=67.5997;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=77;QR=2268;RO=59;RPL=0;RPP=7.35324;RPPR=98.7391;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=32;SRP=3.93042;SRR=27;TYPE=snp GT:DP:AD:RO:QR:AO:QA:GL 0/0:61:59,2:59:2268:2:77:0,-11.0537,-197.03\n")),(0,t.kt)("p",null,"Agora que voc\xea aprendeu a como rodar seu pipeline em um de nossos orquestradores Cromwell em modo servidor utilizando o utilit\xe1rio de interfaceamento Oliver. Existe tamb\xe9m a op\xe7\xe3o de executar o mesmo localmente."))}d.isMDXComponent=!0},1010:function(e,o,a){o.Z=a.p+"assets/images/cromwell-73b80931a50445d184f7cfc104f61374.jpeg"}}]);