"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6003],{1088:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>j,frontMatter:()=>i,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"architecture/backend-response","title":"\u0424\u043e\u0440\u043c\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043e\u0442 API","description":"\u041e\u0431\u0449\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u0430","source":"@site/docs/02-architecture/backend-response.md","sourceDirName":"02-architecture","slug":"/architecture/backend-response","permalink":"/documentation/docs/architecture/backend-response","draft":false,"unlisted":false,"editUrl":"https://github.com/BrokerAssistantApp/documentation/tree/main/docs/docs/02-architecture/backend-response.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","permalink":"/documentation/docs/architecture/bg-schema"},"next":{"title":"Swagger-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f","permalink":"/documentation/docs/architecture/swagger"}}');var l=s(4848),r=s(8453);const i={sidebar_position:3},c="\u0424\u043e\u0440\u043c\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043e\u0442 API",a={},t=[{value:"\u041e\u0431\u0449\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u0430",id:"\u043e\u0431\u0449\u0438\u0439-\u0444\u043e\u0440\u043c\u0430\u0442-\u043e\u0442\u0432\u0435\u0442\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e-\u043e\u0442\u0432\u0435\u0442\u0430",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0448\u0438\u0431\u043a\u0438:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0448\u0438\u0431\u043a\u0438",level:3},{value:"\ud83d\udccc \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 message \u0438 details",id:"-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-message-\u0438-details",level:2},{value:"1. message (\u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435)",id:"1-message-\u0433\u043b\u0430\u0432\u043d\u043e\u0435-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",level:3},{value:"2. error.message (\u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438)",id:"2-errormessage-\u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043e\u0448\u0438\u0431\u043a\u0438",level:3},{value:"3. error.details (\u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0448\u0438\u0431\u043e\u043a)",id:"3-errordetails-\u0441\u043f\u0438\u0441\u043e\u043a-\u043e\u0448\u0438\u0431\u043e\u043a",level:3},{value:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0448\u0438\u0431\u043e\u043a",id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438-\u043e\u0448\u0438\u0431\u043e\u043a",level:2},{value:"\u0418\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 API-\u043e\u0442\u0432\u0435\u0442\u043e\u0432",id:"\u0438\u0442\u043e\u0433\u043e\u0432\u0430\u044f-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-api-\u043e\u0442\u0432\u0435\u0442\u043e\u0432",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 API",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u043e\u0442\u0432\u0435\u0442\u043e\u0432-\u0434\u043b\u044f-\u0440\u0430\u0437\u043d\u044b\u0445-\u043c\u0435\u0442\u043e\u0434\u043e\u0432-api",level:2},{value:"1. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",id:"1-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",level:3},{value:"\u2705 \u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0432\u0445\u043e\u0434",id:"-\u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439-\u0432\u0445\u043e\u0434",level:4},{value:"\u274c \u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",id:"-\u043e\u0448\u0438\u0431\u043a\u0430-\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",level:4},{value:"2. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",id:"2-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",level:3},{value:"\u2705 \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",id:"-\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0444\u0438\u043b\u044f",level:4},{value:"\u2705 \u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",id:"-\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0444\u0438\u043b\u044f",level:4},{value:"\u274c \u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438",id:"-\u043e\u0448\u0438\u0431\u043a\u0430-\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438",level:4},{value:"3. \u041b\u043e\u0442\u044b",id:"3-\u043b\u043e\u0442\u044b",level:3},{value:"\u2705 \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u043b\u043e\u0442\u043e\u0432",id:"-\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0441\u043f\u0438\u0441\u043a\u0430-\u043b\u043e\u0442\u043e\u0432",level:4},{value:"\u274c \u041b\u043e\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",id:"-\u043b\u043e\u0442-\u043d\u0435-\u043d\u0430\u0439\u0434\u0435\u043d",level:4},{value:"4. \u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438",id:"4-\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438",level:3},{value:"\u2705 \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439",id:"-\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439",level:4},{value:"\u274c \u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430",id:"-\u043e\u0448\u0438\u0431\u043a\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430",level:4},{value:"\u041a\u0430\u043a \u044d\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u043e\u0434\u0435?",id:"\u043a\u0430\u043a-\u044d\u0442\u043e-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u0432-\u043a\u043e\u0434\u0435",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u0444\u043e\u0440\u043c\u0430\u0442-\u043e\u0442\u0432\u0435\u0442\u043e\u0432-\u043e\u0442-api",children:"\u0424\u043e\u0440\u043c\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043e\u0442 API"})}),"\n",(0,l.jsx)(n.h2,{id:"\u043e\u0431\u0449\u0438\u0439-\u0444\u043e\u0440\u043c\u0430\u0442-\u043e\u0442\u0432\u0435\u0442\u0430",children:"\u041e\u0431\u0449\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u0430"}),"\n",(0,l.jsx)(n.p,{children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u043e\u0442\u0432\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"success"})})," \u2013 \u0444\u043b\u0430\u0433 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"message"})})," \u2013 \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"data"})})," \u2013 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043e\u0442\u0432\u0435\u0442\u0430"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"error"})})," \u2013 \u043e\u0431\u044a\u0435\u043a\u0442 \u043e\u0448\u0438\u0431\u043a\u0438"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.code,{children:"meta"})})," \u2013 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044f)"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e-\u043e\u0442\u0432\u0435\u0442\u0430",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "message": "\u041b\u043e\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d",\n  "data": {\n    "id": "uuid",\n    "name": "\u041b\u043e\u0442 1",\n    "status": "purchased"\n  },\n  "error": null,\n  "meta": null\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u043e\u0448\u0438\u0431\u043a\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0448\u0438\u0431\u043a\u0438:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": false,\n  "message": "\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438",\n  "data": null,\n  "error": {\n    "code": 400,\n    "message": "\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",\n    "details": [\n      {\n        "field": "email",\n        "message": "\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"\n      },\n      {\n        "field": "password",\n        "message": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"\n      }\n    ]\n  },\n  "meta": null\n}\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-message-\u0438-details",children:"\ud83d\udccc \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 message \u0438 details"}),"\n",(0,l.jsx)(n.h3,{id:"1-message-\u0433\u043b\u0430\u0432\u043d\u043e\u0435-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",children:"1. message (\u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u0412\u0441\u0435\u0433\u0434\u0430 \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 ",(0,l.jsx)(n.strong,{children:"\u043b\u044e\u0431\u044b\u0445"})," \u043e\u0442\u0432\u0435\u0442\u0430\u0445."]}),"\n",(0,l.jsxs)(n.li,{children:["\u0412 \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u0430\u0445 \u0441\u043e\u043e\u0431\u0449\u0430\u0435\u0442, \u0447\u0442\u043e \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e (",(0,l.jsx)(n.code,{children:"\u041b\u043e\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d"}),")."]}),"\n",(0,l.jsxs)(n.li,{children:["\u0412 \u043e\u0448\u0438\u0431\u043a\u0430\u0445 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 ",(0,l.jsx)(n.strong,{children:"\u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0435"})," (",(0,l.jsx)(n.code,{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"}),", ",(0,l.jsx)(n.code,{children:"\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u043f\u0440\u0435\u0449\u0451\u043d"}),")."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"2-errormessage-\u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043e\u0448\u0438\u0431\u043a\u0438",children:"2. error.message (\u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u0414\u0430\u0451\u0442 ",(0,l.jsx)(n.strong,{children:"\u0431\u043e\u043b\u0435\u0435 \u0442\u043e\u0447\u043d\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: ",(0,l.jsx)(n.code,{children:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["\u041c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u0430 \u0434\u043b\u044f ",(0,l.jsx)(n.strong,{children:"\u043b\u043e\u0433\u043e\u0432 \u0438 \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0438"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"3-errordetails-\u0441\u043f\u0438\u0441\u043e\u043a-\u043e\u0448\u0438\u0431\u043e\u043a",children:"3. error.details (\u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0448\u0438\u0431\u043e\u043a)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,l.jsx)(n.strong,{children:"\u043f\u0440\u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0438 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043a\u0430\u0445"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 ",(0,l.jsx)(n.strong,{children:"\u0441\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"})," ",(0,l.jsx)(n.code,{children:"{ field, message }"}),", \u0433\u0434\u0435:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"field"})," \u2014 \u0438\u043c\u044f \u043f\u043e\u043b\u044f, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u0448\u0438\u0431\u043a\u0430."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"message"})," \u2014 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0434\u043b\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044f."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438-\u043e\u0448\u0438\u0431\u043e\u043a",children:"\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0448\u0438\u0431\u043e\u043a"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u041a\u043e\u0434"}),(0,l.jsx)(n.th,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"200 OK"})}),(0,l.jsx)(n.td,{children:"\u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"201 Created"})}),(0,l.jsx)(n.td,{children:"\u0423\u0441\u043f\u0435\u0448\u043d\u043e\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u0430"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"400 Bad Request"})}),(0,l.jsx)(n.td,{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"401 Unauthorized"})}),(0,l.jsx)(n.td,{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"403 Forbidden"})}),(0,l.jsx)(n.td,{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0430\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"404 Not Found"})}),(0,l.jsx)(n.td,{children:"\u041e\u0431\u044a\u0435\u043a\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"500 Internal Server Error"})}),(0,l.jsx)(n.td,{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"})]})]})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u0438\u0442\u043e\u0433\u043e\u0432\u0430\u044f-\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-api-\u043e\u0442\u0432\u0435\u0442\u043e\u0432",children:"\u0418\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 API-\u043e\u0442\u0432\u0435\u0442\u043e\u0432"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u041f\u043e\u043b\u0435"}),(0,l.jsx)(n.th,{children:"\u0422\u0438\u043f"}),(0,l.jsx)(n.th,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"success"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"boolean"})}),(0,l.jsx)(n.td,{children:"\u0424\u043b\u0430\u0433 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"message"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{children:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"data"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"object | array | null"})}),(0,l.jsx)(n.td,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u0430"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"error"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"object | null"})}),(0,l.jsx)(n.td,{children:"\u041e\u0431\u044a\u0435\u043a\u0442 \u043e\u0448\u0438\u0431\u043a\u0438"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"meta"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"object | null"})}),(0,l.jsx)(n.td,{children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044f)"})]})]})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u043e\u0442\u0432\u0435\u0442\u043e\u0432-\u0434\u043b\u044f-\u0440\u0430\u0437\u043d\u044b\u0445-\u043c\u0435\u0442\u043e\u0434\u043e\u0432-api",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 API"}),"\n",(0,l.jsx)(n.h3,{id:"1-\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",children:"1. \u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"}),"\n",(0,l.jsx)(n.h4,{id:"-\u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0439-\u0432\u0445\u043e\u0434",children:"\u2705 \u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0432\u0445\u043e\u0434"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "message": "\u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u0432\u0445\u043e\u0434",\n  "data": {\n    "token": "jwt-\u0442\u043e\u043a\u0435\u043d",\n    "user": {\n      "id": "uuid",\n      "email": "user@example.com",\n      "name": "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",\n      "is_broker": true\n    }\n  },\n  "error": null,\n  "meta": null\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"-\u043e\u0448\u0438\u0431\u043a\u0430-\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",children:"\u274c \u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": false,\n  "message": "\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",\n  "data": null,\n  "error": {\n    "code": 401,\n    "message": "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"\n  },\n  "meta": null\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"2-\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438",children:"2. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),"\n",(0,l.jsx)(n.h4,{id:"-\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0444\u0438\u043b\u044f",children:"\u2705 \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "message": "\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b",\n  "data": {\n    "id": "uuid",\n    "email": "user@example.com",\n    "name": "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",\n    "is_broker": true,\n    "created_at": "2024-03-24T12:00:00Z"\n  },\n  "error": null,\n  "meta": null\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"-\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435-\u043f\u0440\u043e\u0444\u0438\u043b\u044f",children:"\u2705 \u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "message": "\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d",\n  "data": {\n    "id": "uuid",\n    "name": "\u041d\u043e\u0432\u043e\u0435 \u0438\u043c\u044f"\n  },\n  "error": null,\n  "meta": null\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"-\u043e\u0448\u0438\u0431\u043a\u0430-\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438",children:"\u274c \u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": false,\n  "message": "\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438",\n  "data": null,\n  "error": {\n    "code": 400,\n    "message": "\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",\n    "details": [\n      {\n        "field": "name",\n        "message": "\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 2 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"\n      }\n    ]\n  },\n  "meta": null\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"3-\u043b\u043e\u0442\u044b",children:"3. \u041b\u043e\u0442\u044b"}),"\n",(0,l.jsx)(n.h4,{id:"-\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0441\u043f\u0438\u0441\u043a\u0430-\u043b\u043e\u0442\u043e\u0432",children:"\u2705 \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u043b\u043e\u0442\u043e\u0432"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "message": "\u0421\u043f\u0438\u0441\u043e\u043a \u043b\u043e\u0442\u043e\u0432 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d",\n  "data": [\n    {\n      "id": "uuid",\n      "name": "\u041b\u043e\u0442 1",\n      "status": "purchased",\n      "purchase_price": 150000.00,\n      "sale_price": 200000.00,\n      "created_at": "2024-03-23T12:00:00Z"\n    },\n    {\n      "id": "uuid2",\n      "name": "\u041b\u043e\u0442 2",\n      "status": "listed_for_sale",\n      "purchase_price": 250000.00,\n      "sale_price": 300000.00,\n      "created_at": "2024-03-24T12:00:00Z"\n    }\n  ],\n  "error": null,\n  "meta": {\n    "page": 1,\n    "total_pages": 10,\n    "total_items": 100\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"-\u043b\u043e\u0442-\u043d\u0435-\u043d\u0430\u0439\u0434\u0435\u043d",children:"\u274c \u041b\u043e\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": false,\n  "message": "\u041e\u0448\u0438\u0431\u043a\u0430",\n  "data": null,\n  "error": {\n    "code": 404,\n    "message": "\u041b\u043e\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"\n  },\n  "meta": null\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"4-\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438",children:"4. \u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"}),"\n",(0,l.jsx)(n.h4,{id:"-\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435-\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439",children:"\u2705 \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": true,\n  "message": "\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d",\n  "data": [\n    {\n      "id": "uuid",\n      "lot_id": "uuid",\n      "user_id": "uuid",\n      "type": "investment",\n      "amount": 50000.00,\n      "created_at": "2024-03-24T12:00:00Z"\n    }\n  ],\n  "error": null,\n  "meta": {\n    "page": 1,\n    "total_pages": 5,\n    "total_items": 50\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h4,{id:"-\u043e\u0448\u0438\u0431\u043a\u0430-\u0434\u043e\u0441\u0442\u0443\u043f\u0430",children:"\u274c \u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "success": false,\n  "message": "\u0414\u043e\u0441\u0442\u0443\u043f \u0437\u0430\u043f\u0440\u0435\u0449\u0451\u043d",\n  "data": null,\n  "error": {\n    "code": 403,\n    "message": "\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u044d\u0442\u043e\u0439 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"\n  },\n  "meta": null\n}\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u043a\u0430\u043a-\u044d\u0442\u043e-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u0432-\u043a\u043e\u0434\u0435",children:"\u041a\u0430\u043a \u044d\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u043e\u0434\u0435?"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:'function createResponse(success: boolean, message: string, data: any = null, error: any = null, meta: any = null) {\n  return { success, message, data, error, meta };\n}\n\n// \u2705 \u0423\u0441\u043f\u0435\u0448\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442\nres.status(201).json(createResponse(true, "\u041b\u043e\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d", { id: "uuid", name: "\u041b\u043e\u0442 1" }));\n\n// \u274c \u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438\nres.status(400).json(createResponse(false, "\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438", null, {\n  code: 400,\n  message: "\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",\n  details: [\n    { field: "email", message: "\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email" },\n    { field: "password", message: "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432" }\n  ]\n}));\n'})})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);