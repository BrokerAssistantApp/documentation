"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5965],{6681:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>E,default:()=>_,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"architecture/bg-schema","title":"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","description":"\u0421\u0432\u044f\u0437\u0438 \u0442\u0430\u0431\u043b\u0438\u0446","source":"@site/docs/02-architecture/bg-schema.md","sourceDirName":"02-architecture","slug":"/architecture/bg-schema","permalink":"/documentation/docs/architecture/bg-schema","draft":false,"unlisted":false,"editUrl":"https://github.com/BrokerAssistantApp/documentation/tree/main/docs/docs/02-architecture/bg-schema.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0442\u0435\u043a","permalink":"/documentation/docs/architecture/tech-stack"},"next":{"title":"\u0424\u043e\u0440\u043c\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043e\u0442 API","permalink":"/documentation/docs/architecture/backend-response"}}');var t=s(4848),o=s(8453);const i={sidebar_position:2},E="\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",a={},l=[{value:"\u0421\u0432\u044f\u0437\u0438 \u0442\u0430\u0431\u043b\u0438\u0446",id:"\u0441\u0432\u044f\u0437\u0438-\u0442\u0430\u0431\u043b\u0438\u0446",level:2},{value:"users",id:"users",level:2},{value:"sessions",id:"sessions",level:2},{value:"broker_members",id:"broker_members",level:2},{value:"lots",id:"lots",level:2},{value:"lot_sale_price_history",id:"lot_sale_price_history",level:2},{value:"lot_status_history",id:"lot_status_history",level:2},{value:"lot_members",id:"lot_members",level:2},{value:"lot_investments",id:"lot_investments",level:2},{value:"lot_expenses",id:"lot_expenses",level:2},{value:"lot_transactions",id:"lot_transactions",level:2},{value:"lot_financials",id:"lot_financials",level:2}];function d(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"})}),"\n",(0,t.jsx)(n.h2,{id:"\u0441\u0432\u044f\u0437\u0438-\u0442\u0430\u0431\u043b\u0438\u0446",children:"\u0421\u0432\u044f\u0437\u0438 \u0442\u0430\u0431\u043b\u0438\u0446"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\n    direction LR\n\n    %% --- \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 ---\n    users ||--o{ sessions : "\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0441\u0435\u0441\u0441\u0438\u0438"\n    users ||--o{ broker_members : "\u0431\u0440\u043e\u043a\u0435\u0440 \u2194 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a"\n    users ||--o{ lots : "\u0431\u0440\u043e\u043a\u0435\u0440 \u0441\u043e\u0437\u0434\u0430\u0451\u0442 \u043b\u043e\u0442\u044b"\n    users ||--o{ lot_members : "\u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043b\u043e\u0442\u0430\u0445"\n    users ||--o{ lot_transactions : "\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a \u0438\u043d\u0438\u0446\u0438\u0438\u0440\u0443\u0435\u0442 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"\n\n    %% --- \u0423\u0447\u0430\u0441\u0442\u0438\u0435 / \u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044b ---\n    lot_members }o--|| users : "\u043f\u0430\u0440\u0442\u043d\u0451\u0440 \u2192 \u0438\u043d\u0432\u0435\u0441\u0442\u043e\u0440 (referrer_member)"\n\n    %% --- \u041b\u043e\u0442\u044b ---\n    lots ||--o{ lot_status_history : "\u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u0432"\n    lots ||--o{ lot_sale_price_history : "\u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0446\u0435\u043d\u044b"\n    lots ||--o{ lot_members : "\u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0438 \u043b\u043e\u0442\u0430"\n    lots ||--o{ lot_transactions : "\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u043f\u043e \u043b\u043e\u0442\u0443"\n    lots ||--o{ lot_investments : "\u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438"\n    lots ||--o{ lot_expenses : "\u0440\u0430\u0441\u0445\u043e\u0434\u044b"\n    lots ||--|| lot_financials : "\u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u0435 \u0438\u0442\u043e\u0433\u0438"\n\n    %% --- \u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0438 \u0444\u0438\u043d\u0430\u043d\u0441\u044b ---\n    lot_transactions ||--|| lot_investments : "\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439"\n    lot_transactions ||--|| lot_expenses : "\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u043e\u0432"'}),"\n",(0,t.jsx)(n.h2,{id:"users",children:"users"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\n    users {\n        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"\n        VARCHAR yandex_id UK "DEFAULT NULL, (20)"\n        TEXT email UK "NOT NULL, CHECK (email <= 320)"\n        TEXT password_hash\n        TEXT auth_method "CHECK (auth_method IN (\'password\', \'yandex\'))"\n        TEXT name "NOT NULL, CHECK (name <= 255)"\n        BOOLEAN is_broker "DEFAULT true, NOT NULL"\n        BOOLEAN is_verified "DEFAULT false, NOT NULL"\n        TIMESTAMPTZ updated_at "DEFAULT (now() AT TIME ZONE \'utc\'::text), NOT NULL"\n        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE \'utc\'::text), NOT NULL"\n    }'}),"\n",(0,t.jsx)(n.h2,{id:"sessions",children:"sessions"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\n    sessions {\n        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"\n        UUID user_id FK "REFERENCES users(id) ON DELETE CASCADE"\n        TEXT refresh_token UK "NOT NULL"\n        TEXT user_agent "NOT NULL"\n        TEXT ip_address "NOT NULL"\n        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE \'utc\'::text), NOT NULL"\n    }'}),"\n",(0,t.jsx)(n.h2,{id:"broker_members",children:"broker_members"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\n    broker_members {\n        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"\n        UUID broker_id FK "REFERENCES users(id) ON DELETE CASCADE, INDEX"\n        UUID member_id FK "REFERENCES users(id) ON DELETE CASCADE, INDEX"\n        TEXT name "NOT NULL, CHECK (name <= 255)"\n        TIMESTAMPTZ deleted_at "DEFAULT NULL, INDEX"\n    }'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"}),": \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,t.jsx)(n.code,{children:"broker_members"})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u043e\u043a:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"broker_id"}),", ",(0,t.jsx)(n.code,{children:"member_id"})," \u0438 ",(0,t.jsx)(n.code,{children:"deleted_at"})," \u2014 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e \u0431\u0440\u043e\u043a\u0435\u0440\u0443, \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0443 \u0438 \u0443\u0447\u0451\u0442\u0430 \u043c\u044f\u0433\u043a\u043e\u0433\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"UNIQUE (broker_id, member_id)"})," \u2014 \u0434\u043b\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0433\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0438 \u0442\u043e\u0433\u043e \u0436\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430 \u043a \u0431\u0440\u043e\u043a\u0435\u0440\u0443."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lots",children:"lots"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\n    lots {\n        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"\n        UUID broker_id FK "REFERENCES users(id) ON DELETE CASCADE, INDEX"\n        TEXT deal_type "DEFAULT \'syndicated\', CHECK (deal_type IN (\'self_funded\', \'syndicated\', \'agency\'))"\n        TEXT share_input_mode "DEFAULT \'percent\', CHECK (share_input_mode IN (\'percent\', \'currency\'))"\n        TEXT name "NOT NULL, CHECK (name <= 255)"\n        TEXT trade_number "CHECK (trade_number <= 100)"\n        TEXT etp_url "CHECK: \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 https:// \u0438 \u0431\u044b\u0442\u044c \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u043c URL"\n        TEXT status "DEFAULT \'purchased\', CHECK (status IN (\'purchased\', \'renovation\', \'hold\', \'listed_for_sale\', \'sold\', \'hold\', \'closed\')), INDEX"\n        NUMERIC purchase_price "DEFAULT 0, CHECK (purchase_price >= 0), (18,2)"\n        NUMERIC sale_price "DEFAULT 0, CHECK (sale_price >= 0), (18,2)"\n        NUMERIC broker_commission "DEFAULT 0, CHECK (broker_commission >= 0), (18,2)"\n        NUMERIC broker_commission_percent "DEFAULT 0, CHECK (broker_commission_percent >= 0 AND broker_commission_percent <= 100), (6,4)"\n        NUMERIC broker_tax_percent "DEFAULT 0, CHECK (broker_tax_percent >= 0 AND broker_tax_percent <= 100), (6,4)"\n        DATE purchase_date "NOT NULL"\n        DATE sale_date "DEFAULT NULL"\n        BOOLEAN auto_share_by_investment "DEFAULT true, NOT NULL"\n        TIMESTAMPTZ updated_at "DEFAULT (now() AT TIME ZONE \'utc\'::text), NOT NULL"\n        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE \'utc\'::text), NOT NULL"\n    }'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"}),": \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,t.jsx)(n.code,{children:"lots"})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u043e\u043a:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"broker_id"})," \u2014 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u043b\u043e\u0442\u043e\u0432 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0431\u0440\u043e\u043a\u0435\u0440\u0430",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"status"})," \u2014 \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u043b\u043e\u0442\u043e\u0432 \u043f\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u043c\u0443 \u0441\u0442\u0430\u0442\u0443\u0441\u0443 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0438\u043b\u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0445 \u043b\u043e\u0442\u043e\u0432)"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lot_sale_price_history",children:"lot_sale_price_history"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\n    lot_sale_price_history {\n        UUID id PK "DEFAULT gen_random_uuid(), NOT NULL"\n        UUID lot_id FK "REFERENCES lots(id) ON DELETE CASCADE, INDEX"\n        TEXT reason "CHECK (char_length(reason) <= 255)"\n        NUMERIC old_price "DEFAULT 0, CHECK (old_price >= 0), (18,2)"\n        NUMERIC new_price "DEFAULT 0, CHECK (new_price >= 0), (18,2)"\n        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE \'utc\'::text), NOT NULL"\n    }'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"}),": \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,t.jsx)(n.code,{children:"lot_sale_price_history"})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u043e\u043a:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"lot_id"})," \u2014 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lot_status_history",children:"lot_status_history"}),"\n",(0,t.jsx)(n.mermaid,{value:"erDiagram\n    lot_status_history {\n        UUID id PK \"DEFAULT gen_random_uuid(), NOT NULL\"\n        UUID lot_id FK \"REFERENCES lots(id) ON DELETE CASCADE, INDEX\"\n        TEXT status \"CHECK (status IN ('purchased', 'renovation', 'hold', 'listed_for_sale', 'sold', 'closed'))\"\n        TIMESTAMPTZ created_at \"DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL\"\n    }"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"}),": \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,t.jsx)(n.code,{children:"lot_status_history"})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u043e\u043a:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"lot_id"})," \u2014 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lot_members",children:"lot_members"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\n    lot_members {\n        UUID lot_id PK, FK "REFERENCES lots(id) ON DELETE CASCADE"\n        UUID member_id PK, FK "REFERENCES users(id) ON DELETE SET NULL, INDEX"\n        UUID referrer_member_id FK "REFERENCES users(id) ON DELETE SET NULL, INDEX"\n        TEXT referral_fee_payer "CHECK (referral_fee_payer IN (\'member\', \'broker\'))"\n        NUMERIC share_percent "DEFAULT 0, CHECK (share_percent >= 0 AND share_percent <= 100), (6,4)"\n        NUMERIC share_amount "DEFAULT 0, CHECK (share_amount >= 0), (18,2)"\n        NUMERIC referral_fee_percent "DEFAULT 0, CHECK (referral_fee_percent >= 0 AND referral_fee_percent <= 100), (6,4)"\n        NUMERIC referral_fee_amount "DEFAULT 0, CHECK (referral_fee_amount >= 0), (18,2)"\n    }'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435: \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,t.jsx)(n.code,{children:"lot_members"})," \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u043e\u0439 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0438 \u0438\u043d\u0434\u0435\u043a\u0441\u044b:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"member_id"})," \u0438 ",(0,t.jsx)(n.code,{children:"referrer_member_id"})," \u2014 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432 \u0438 \u0438\u0445 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u043e\u0432.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"PRIMARY KEY (lot_id, member_id)"})," \u2014 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0438 \u0442\u043e\u0433\u043e \u0436\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430 \u0432 \u043e\u0434\u0438\u043d \u043b\u043e\u0442 \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0430."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lot_investments",children:"lot_investments"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\n    lot_investments {\n        UUID lot_id FK "REFERENCES lots(id) ON DELETE CASCADE, INDEX"\n        UUID transaction_id PK, FK "REFERENCES lot_transactions(id) ON DELETE CASCADE"\n        BOOLEAN include_in_share "DEFAULT true, NOT NULL"\n    }'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"}),": \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,t.jsx)(n.code,{children:"lot_investments"})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u043e\u043a:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"lot_id"})," \u2014 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lot_expenses",children:"lot_expenses"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\n    lot_expenses {\n        UUID lot_id FK "REFERENCES lots(id) ON DELETE CASCADE, INDEX"\n        UUID transaction_id PK, FK "REFERENCES lot_transactions(id) ON DELETE CASCADE"\n        UUID reimbursement_member_id "REFERENCES lot_members(member_id) ON DELETE CASCADE"\n        TEXT description "NOT NULL"\n    }'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"}),": \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,t.jsx)(n.code,{children:"lot_expenses"})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u043e\u043a:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"lot_id"})," \u2014 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lot_transactions",children:"lot_transactions"}),"\n",(0,t.jsx)(n.mermaid,{value:"erDiagram\n    lot_transactions {\n        UUID id PK \"DEFAULT gen_random_uuid(), NOT NULL\"\n        UUID lot_id FK \"REFERENCES lots(id) ON DELETE CASCADE, INDEX\"\n        UUID user_id FK \"REFERENCES users(id) ON DELETE SET NULL, INDEX\"\n        TEXT type \"CHECK (type IN ('investment', 'payout', 'broker_commission', 'broker_tax', 'referral_fee', 'expense'))\"\n        NUMERIC amount \"DEFAULT 0, CHECK (amount >= 0), (18,2)\"\n        TIMESTAMPTZ updated_at \"DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL\"\n        TIMESTAMPTZ created_at \"DEFAULT (now() AT TIME ZONE 'utc'::text), NOT NULL\"\n    }"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"}),": \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,t.jsx)(n.code,{children:"lot_transactions"})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u043e\u043a:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"lot_id"})," \u2014 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"lot_financials",children:"lot_financials"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\n    lot_financials {\n        UUID lot_id PK, FK "REFERENCES lots(id) ON DELETE CASCADE, INDEX"\n        NUMERIC purchase_price "DEFAULT 0, CHECK (purchase_price >= 0), (18,2)"\n        NUMERIC total_expenses_in_cost "DEFAULT 0, CHECK (total_expenses_in_cost >= 0), (18,2)"\n        NUMERIC total_cost "DEFAULT 0, CHECK (total_cost >= 0), (18,2)"\n        NUMERIC sale_price "DEFAULT 0, CHECK (sale_price >= 0), (18,2)"\n        NUMERIC gross_profit "DEFAULT 0, CHECK (gross_profit >= 0), (18,2)"\n        NUMERIC broker_commission "DEFAULT 0, CHECK (broker_commission >= 0), (18,2)"\n        NUMERIC broker_tax "DEFAULT 0, CHECK (broker_tax >= 0), (18,2)"\n        NUMERIC total_referral_fees "DEFAULT 0, CHECK (total_referral_fees >= 0), (18,2)"\n        NUMERIC net_profit "DEFAULT 0, CHECK (net_profit >= 0), (18,2)"\n        NUMERIC total_investments "DEFAULT 0, CHECK (total_investments >= 0), (18,2)"\n        NUMERIC total_investments_excluded "DEFAULT 0, CHECK (total_investments_excluded >= 0), (18,2)"\n        NUMERIC total_payouts "DEFAULT 0, CHECK (total_payouts >= 0), (18,2)"\n        NUMERIC net_payouts "DEFAULT 0, CHECK (net_payouts >= 0), (18,2)"\n        NUMERIC payouts_minus_investments "DEFAULT 0, CHECK (payouts_minus_investments >= 0), (18,2)"\n        TIMESTAMPTZ created_at "DEFAULT (now() AT TIME ZONE \'utc\'::text), NOT NULL"\n    }'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"}),": \u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 ",(0,t.jsx)(n.code,{children:"lot_transactions"})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u044b\u0431\u043e\u0440\u043e\u043a:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"lot_id"})," \u2014 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438."]}),"\n"]})]})}function _(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);