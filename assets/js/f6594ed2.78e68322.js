"use strict";(self.webpackChunkplaybook_website=self.webpackChunkplaybook_website||[]).push([[8631],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,u=p["".concat(s,".").concat(g)]||p[g]||h[g]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8506:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={sidebar_position:10},s="Guia para Cria\xe7\xe3o de Release Notes",c={unversionedId:"guide-best-practices/changelog",id:"guide-best-practices/changelog",isDocsHomePage:!1,title:"Guia para Cria\xe7\xe3o de Release Notes",description:"The style guide provides formatting guidelines and language suggestions for pipeline changelogs. It is divided into four sections: 1) Changelog Information, which details the types of changes listed in a changelog, 2) Language Usage, which describes language style and syntax for changelog information, 3) Changelog Format, which provides sample formatting for changelog information, and 4) Sample Changelog Entries, which displays two examples of changelog entries taken from the pipeline-template.RELEASENOTES.md file.",source:"@site/docs/guide-best-practices/changelog.md",sourceDirName:"guide-best-practices",slug:"/guide-best-practices/changelog",permalink:"/bioinfo-playbook/docs/guide-best-practices/changelog",editUrl:"https://github.com/varstation/bioinfo-playbook/edit/master/website/docs/guide-best-practices/changelog.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Versionamento Sem\xe2ntico",permalink:"/bioinfo-playbook/docs/guide-best-practices/version"},next:{title:"Seja bem vindo ao Varstation Bioinformatics Playbook",permalink:"/bioinfo-playbook/docs/contribution/README"}},d=[{value:"Changelog Information",id:"changelog-information",children:[{value:"1) The changelog.md file name",id:"1-the-changelogmd-file-name",children:[]},{value:"2) The pipeline release version name",id:"2-the-pipeline-release-version-name",children:[]},{value:"3) The date of last commit (YYYY-MM-DD)",id:"3-the-date-of-last-commit-yyyy-mm-dd",children:[]},{value:"4) Details of the version changes",id:"4-details-of-the-version-changes",children:[]}]},{value:"Language Usage",id:"language-usage",children:[]},{value:"Changelog Format",id:"changelog-format",children:[]},{value:"Changes",id:"changes",children:[{value:"List the changes",id:"list-the-changes",children:[]}]},{value:"Sample Changelog Entries",id:"sample-changelog-entries",children:[]},{value:"0.1.0 - 2021-10-08",id:"010---2021-10-08",children:[{value:"Added",id:"added",children:[]}]},{value:"0.1.0-rc - 2021-10-06",id:"010-rc---2021-10-06",children:[{value:"Added",id:"added-1",children:[]}]}],h={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"guia-para-cria\xe7\xe3o-de-release-notes"},"Guia para Cria\xe7\xe3o de Release Notes"),(0,o.kt)("p",null,"The style guide provides formatting guidelines and language suggestions for pipeline changelogs. It is divided into four sections: 1) Changelog Information, which details the types of changes listed in a changelog, 2) Language Usage, which describes language style and syntax for changelog information, 3) Changelog Format, which provides sample formatting for changelog information, and 4) Sample Changelog Entries, which displays two examples of changelog entries taken from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Varstation/pipeline-template/blob/main/RELEASENOTES.md"},"pipeline-template.RELEASENOTES.md file"),"."),(0,o.kt)("h2",{id:"changelog-information"},"Changelog Information"),(0,o.kt)("p",null,"Pipeline changelogs have four informational parts:"),(0,o.kt)("h3",{id:"1-the-changelogmd-file-name"},"1) The changelog.md file name"),(0,o.kt)("p",null,"The changelog file name should be consistent across pipelines. The format is ",(0,o.kt)("inlineCode",{parentName:"p"},"RELASENOTES.md"),"."),(0,o.kt)("p",null,"The file name is not included in the actual changelog- it is just the file name."),(0,o.kt)("h3",{id:"2-the-pipeline-release-version-name"},"2) The pipeline release version name"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ex: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Varstation/pipeline-template/blob/main/RELEASENOTES.md"},"RELEASE NOTES"),' version name is a number (i.e. "1.0.0")')),(0,o.kt)("p",null,"The version name is listed at the top of each changelog entry section. It should follow ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic versioning (SemVer)")," which uses the major.minor.patch version number."),(0,o.kt)("h3",{id:"3-the-date-of-last-commit-yyyy-mm-dd"},"3) The date of last commit (YYYY-MM-DD)"),(0,o.kt)("p",null,"The purpose of the date of last commit is to inform users of the relative timing of changes to the pipeline. This is ",(0,o.kt)("strong",{parentName:"p"},"not a release date"),", which would have to be added to the changelog post-release. This date is updated as each change is created. For each pipeline release in the changelog, there will only be one final commit date (as opposed to a commit date for every change in that particular release)."),(0,o.kt)("h3",{id:"4-details-of-the-version-changes"},"4) Details of the version changes"),(0,o.kt)("p",null,"This section describes (in bullet point format) every type of change made to the pipeline for the current pipeline version. Types of changes include: additions, updates, changes, deprecations, removals, fixes, and security updates. The type of change should be used as the first word of the bullet point (see examples below). These changes should be updated as pipeline changes are made even if the updated pipeline version has not been released. This will enable end-users to see what changes are coming when the new release is published."),(0,o.kt)("p",null,'If changes are breaking changes to the pipeline (a major version update), this changelog section will be divided into two subsections: "Breaking changes" and "Additional changes". An example of these headers is shown in the ',(0,o.kt)("a",{parentName:"p",href:"#sample-changelog-entries"},"Sample Changelog Entries")," section."),(0,o.kt)("h2",{id:"language-usage"},"Language Usage"),(0,o.kt)("p",null,"All changelog notes should be bulleted (no period at the end of the final sentence of any one bullet point). Each bullet should include one type of change, but more than one sentence can be used to describe the individual change. Bullets should be written in complete sentences, but with the caveat that personal pronouns (\u201cI\u201d, \u201cWe\u201d, \u201cThey\u201d) are omitted. The first word of each bullet should be capitalized and describe the type of change made (in past tense)."),(0,o.kt)("p",null,"Examples of bullet points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"Updated the WDL with the latest docker image\u201d'),(0,o.kt)("li",{parentName:"ul"},'"Added an output to the WDL. Users will now see this output after running the WDL"')),(0,o.kt)("p",null,"For all bullet points, use active voice instead of passive voice. Examples are shown below."),(0,o.kt)("p",null,"Examples of passive voice:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"Broken link in the StarAlign task ',(0,o.kt)("strong",{parentName:"li"},"was fixed"),'"')),(0,o.kt)("p",null,"Example of active voice:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"',(0,o.kt)("strong",{parentName:"li"},"Fixed"),' the broken link in the StarAlign task"')),(0,o.kt)("p",null,"You can find more examples of active voice from the ",(0,o.kt)("a",{parentName:"p",href:"https://writing.wisc.edu/handbook/style/ccs_activevoice/"},"University of Wisconsin-Madison's Writing Center"),"."),(0,o.kt)("h2",{id:"changelog-format"},"Changelog Format"),(0,o.kt)("p",null,"The following is the markdown format required for all major changelog version updates which have breaking changes:"),(0,o.kt)("h2",{id:"changes"},"Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Added")," for new features."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Changed")," for changes in existing functionality."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deprecated")," for soon-to-be removed features."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Removed")," for now removed features."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fixed")," for any bug fixes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security")," in case of vulnerabilities.")),(0,o.kt)("h3",{id:"list-the-changes"},"List the changes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'**ADDED**\n* "insert description of first breaking pipeline change here"\n* "insert description of additional breaking changes here- add more bullets as necessary for additional changes"\n\n')),(0,o.kt)("p",null,"The following is the markdown format required for non-major changelog version updates with non-breaking changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},'# "insert Release Version Name here"\n\n"insert date of last commit in YYYY-MM-DD here" (Date of Last Commit)\n\n* "insert description of first pipeline change here"\n* "insert description of additional change here- add more bullets as necessary for additional changes"\n')),(0,o.kt)("h2",{id:"sample-changelog-entries"},"Sample Changelog Entries"),(0,o.kt)("h1",{id:"changelog"},"Changelog"),(0,o.kt)("h2",{id:"010---2021-10-08"},"[0.1.0]"," - 2021-10-08"),(0,o.kt)("h3",{id:"added"},"Added"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hello-World Pipeline WDL"),(0,o.kt)("li",{parentName:"ul"},"CIs (Publish Docs, Release, Build Test)"),(0,o.kt)("li",{parentName:"ul"},"BumpVersion integrated"),(0,o.kt)("li",{parentName:"ul"},"Tests suites integrated"),(0,o.kt)("li",{parentName:"ul"},"Docs integrated")),(0,o.kt)("h2",{id:"010-rc---2021-10-06"},"[0.1.0-rc]"," - 2021-10-06"),(0,o.kt)("h3",{id:"added-1"},"Added"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First draft of the wdl pipeline architecture.")))}p.isMDXComponent=!0}}]);