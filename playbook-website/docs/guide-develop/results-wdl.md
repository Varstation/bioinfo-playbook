---
sidebar_position: 4
---

# Verificando os resultados

Agora que você está de posse do arquivo final de saída VCF contendo as variantes, conforme exemplo a seguir:

```json
{
    "GermlineVarcallDna.FreeBayes.vcf_file": "/Users/marcelcaraciolo/Projects/gnmk/bioinfo/wdl-demo-pipeline/cromwell-executions/GermlineVarcallDna/c9b9f680-ab5a-41ca-aa5c-9a3dbe2b6f50/call-FreeBayes/execution/SAMPLE_S8.freebayes.vcf",
}
```

Você poderá abrir este arquivo em qualquer editor de textos ou utilizar o seu terminal para exibir algumas linhas do mesmo. Este arquivo contém as variantes detectadas no DNA de uma amostra que foi enviada para executar o pipeline de deteção de chamada de variantes germinativas. Utilizando o comando ```more``` você irá visualizar algumas linhas do arquivo VCF. Elas devem ser algo assim:

```
#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO    FORMAT  unknown
chr13   32890562        .       T       C       8.74137e-12     .       AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=30;DPB=30;DPRA=0;EPP=3.0103;EPPR=
4.25114;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=26.9327;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=73;QR=1023;RO=28;RPL=0;RPP=7.3
5324;RPPR=63.8115;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=16;SRP=4.25114;SRR=12;TYPE=snp GT:DP:AD:RO:QR:AO:QA:GL 0/0:30:28,2:28:1023:2:73:0,-2.1002,-
85.4476
chr13   32890572        .       G       A       678.735 .       AB=0.608696;ABP=7.73089;AC=1;AF=0.5;AN=2;AO=28;CIGAR=1X;DP=46;DPB=46;DPRA=0;EPP=3.32
051;EPPR=3.49285;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=85.5046;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=1055;QR=678;RO=18;RPL
=0;RPP=63.8115;RPPR=42.0968;RPR=28;RUN=1;SAF=15;SAP=3.32051;SAR=13;SRF=10;SRP=3.49285;SRR=8;TYPE=snp    GT:DP:AD:RO:QR:AO:QA:GL 0/1:46:18,28:18:678:
28:1055:-81.4105,0,-47.505
chr13   32890593        .       T       C       0       .       AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=61;DPB=61;DPRA=0;EPP=3.0103;EPPR=3.93042;
GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=67.5997;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=77;QR=2268;RO=59;RPL=0;RPP=7.35324;RPP
R=98.7391;RPR=2;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=32;SRP=3.93042;SRR=27;TYPE=snp GT:DP:AD:RO:QR:AO:QA:GL 0/0:61:59,2:59:2268:2:77:0,-11.0537,-197.03
chr13   32890667        .       A       G       6.01221e-15     .       AB=0;ABP=0;AC=0;AF=0;AN=2;AO=2;CIGAR=1X;DP=63;DPB=63;DPRA=0;EPP=3.0103;EPPR=
7.31765;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=70.5248;PAIRED=1;PAIREDR=0.983607;PAO=0;PQA=0;PQR=0;PRO=0;QA=76;QR=2313;RO=61;RPL=2;
RPP=7.35324;RPPR=51.7438;RPR=0;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=30;SRP=3.0459;SRR=31;TYPE=snp   GT:DP:AD:RO:QR:AO:QA:GL 0/0:63:61,2:61:2313:2:76:0,-
11.7502,-201.174
chr13   32890711        .       T       G       6.40777e-05     .       AB=0.111111;ABP=26.6552;AC=1;AF=0.5;AN=2;AO=2;CIGAR=1X;DP=18;DPB=18;DPRA=0;E
PP=3.0103;EPPR=5.18177;GTI=0;LEN=1;MEANALT=1;MQM=60;MQMR=60;NS=1;NUMALT=1;ODDS=11.124;PAIRED=1;PAIREDR=1;PAO=0;PQA=0;PQR=0;PRO=0;QA=74;QR=618;RO=16;
RPL=2;RPP=7.35324;RPPR=22.5536;RPR=0;RUN=1;SAF=1;SAP=3.0103;SAR=1;SRF=6;SRP=5.18177;SRR=10;TYPE=snp     GT:DP:AD:RO:QR:AO:QA:GL 0/1:18:16,2:16:618:2
:74:-1.60689,0,-50.5415

...
```


Você conseguiu concluir com sucesso a execução do seu primeiro pipeline de bioinformática utilizando WDL. Nas próximas seçõess a seguir vamos explorar como você pode utilizar do ambiente de testes para validar seu pipeline antes de construir um release e lançar a mesma.