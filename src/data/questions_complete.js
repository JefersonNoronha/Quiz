const data = [
    {
      category: "Curso o que é sustentabilidade",
      questions: [
        {
          question: " A sustentabilidade está frequentemente associada apenas ao meio ambiente?",
          options: ["Sim", "Não", "Sim, mas não com freguencia", "Depende das condições climaticas"],
          answer: "Não",
        },
        {
          question: " Qual é a principal ideia por trás do conceito de sustentabilidade no aspecto ambiental?",
          options: ["Preservação de recursos naturais ilimitados", " Lidar com possíveis ameaças", " Uso abusivo de recursos naturais","Concientizar e economizar recursos"],
          answer: " Lidar com possíveis ameaças",
          //tip: "DICA",
        },
        {
          question: "Como a sustentabilidade passou a ser utilizada em relação ao desenvolvimento?",
          options: ["Como um adjetivo de retrocesso", " Como um adjetivo de desenvolvimento", "Como um adjetivo de restrição","Com Objetivo de estudo"],
          answer: " Como um adjetivo de desenvolvimento",
        },
        {
          question: " Qual foi a importância das conferências promovidas pela ONU em Estocolmo e no Rio?",
          options: ["Introduzir a ideia de consumo ilimitado", "Promover a economia global", "Incluir a dimensão social na visão de sustentabilidade","Promover novas ideias e aquecer o mercado"],
          answer: "Promover a economia global",
        },
      ],
    },
    {
      category: "O aspecto econômico da sustentabilidade",
      questions: [
        {
          question: "Qual é a importância do aspecto econômico da sustentabilidade nos dias atuais?",
          options: ["Pouca importância", "Extrema importância","Media importância","Não há importância"],
          answer: "Extrema importância",
        },
        {
          question: "O que é necessário para que a sustentabilidade econômica seja alcançada de maneira efetiva?",
          options: ["Apenas esforços individuais", "Colaboração entre governos, empresas e sociedade civil", "Apenas esforços empresariais","Colaboração individual e proliferação da cultura"],
          answer: "Colaboração entre governos, empresas e sociedade civil",
        },
        {
          question: " Quais são os benefícios de investir em fontes de energia limpa e renovável?:",
          options: ["Aumento dos custos de energia", "Aumento da dependência de recursos não renováveis", " Redução dos custos de energia, diminuição da dependência de recursos não renováveis e mitigação dos impactos ambientais"],
          answer: " Redução dos custos de energia, diminuição da dependência de recursos não renováveis e mitigação dos impactos ambientais",
        },
        {
          question: " Como a crescente conscientização ambiental da sociedade afeta as empresas?:",
          options: ["Não afeta as empresas", "Torna as empresas mais propensas a conquistar a confiança dos consumidores e se destacar no mercado"],
          answer: " Torna as empresas mais propensas a conquistar a confiança dos consumidores e se destacar no mercado",
        },
        {
          question: " Qual é o papel dos empregos verdes no desenvolvimento sustentável?:",
          options: ["Não têm importância", "Torna as empresas mais propensas a conquistar a confiança dos consumidores e se destacar no mercado"],
          answer: " Torna as empresas mais propensas a conquistar a confiança dos consumidores e se destacar no mercado",
        },
      ],
    },
    {
      category: "O aspecto ambiental da sustentabilidade",
      questions: [
        {
          question: "Qual é o papel do aspecto ambiental da sustentabilidade na busca por um futuro equilibrado e saudável para o planeta e para as gerações futuras?",
          options: [
            " Não desempenha papel relevanteo",
            "Desempenha um papel crucial",
            "Desempenha um papel relativo",
          ],
          answer: "Desempenha um papel crucial",
        },
        {
          question: "O que envolve a sustentabilidade ambiental?",
          options: ["Aumentar os impactos negativos sobre o ecossistema ", "Reduzir a biodiversidade", "Conservar os recursos naturais, a biodiversidade e a qualidade do meio ambiente"],
          answer: "Conservar os recursos naturais, a biodiversidade e a qualidade do meio ambiente",
        },
        {
          question: "O que é um dos principais desafios da sustentabilidade ambiental?",
          options: ["Promoção da poluição", "Enfrentamento das mudanças climáticas", "Exploração desenfreada dos recursos naturais"],
          answer: "Enfrentamento das mudanças climáticas",
        },
        {
          question: "Por que é fundamental adotar práticas sustentáveis em relação ao uso de recursos naturais como água, solo e ar?",
          options: ["Para economizar recursos", "Para acelerar a degradação dos ecossistema", "Para garantir disponibilidade no longo prazo e evitar a degradação dos ecossistemas"],
          answer: "Para garantir disponibilidade no longo prazo e evitar a degradação dos ecossistemas",
        },
        {
          question:
            "Como a conscientização sobre a importância do aspecto ambiental da sustentabilidade tem impactado as ações das partes envolvidas?",
          options: ["Diminuindo a conscientização ambiental", " Levando a um aumento na adoção de práticas sustentáveis", "Não tem impacto nas ações"],
          answer: " Levando a um aumento na adoção de práticas sustentáveis",
        },
      ],
    },
    {
      category: "Sustentabilidade no dia a dia",
      questions: [
        {
          question: " Qual é uma das maneiras fundamentais de ser sustentável no dia a dia?",
          options: ["Reduzir, reutilizar e reciclar", " Ignorar o consumo consciente","Concientizar e reduzir o consumo"],
          answer: "Reduzir, reutilizar e reciclar",
        },
        {
          question: " Como podemos economizar energia em nosso dia a dia?",
          options: ["Deixar aparelhos eletrônicos ligados o tempo todo", " Desligar aparelhos eletrônicos quando não estão em uso ", " Utilizar lâmpadas de alto consumo"],
          answer: " Desligar aparelhos eletrônicos quando não estão em uso ",
          //tip: "DICA",
        },
        {
          question: " De que forma a escolha de meios de transporte sustentáveis contribui para a sustentabilidade?",
          options: [" Reduzindo a emissão de gases poluentes", "  Aumentando a pegada de carbono", "Causando sobrecarga nos aterros sanitários"],
          answer: " Reduzindo a emissão de gases poluentes",
        },
      ],
    },
    {
      category: "Aspectos da reciclagem",
      questions: [
        {
          question: "Qual é o objetivo principal da reciclagem? ",
          options: ["Descartar resíduos de forma prejudicial ao meio ambiente", "Poluir rios e oceanos com resíduos","Evitar que resíduos acabem em aterros sanitários e transformá-los em novos produtos"],
          answer: "Evitar que resíduos acabem em aterros sanitários e transformá-los em novos produtos",
        },
        {
          question: " Quais são os benefícios ambientais da reciclagem?",
          options: ["Redução da extração de recursos naturais, economia de energia e redução da emissão de gases de efeito estufa", "Aumento da poluição do solo, da água e do ar", "Aumento da emissão de gases de efeito estufa e economia de energia"],
          answer: "Redução da extração de recursos naturais, economia de energia e redução da emissão de gases de efeito estufa",
        },
        {
          question: " O que é necessário para que a reciclagem seja efetiva?:",
          options: ["Descarte indiscriminado dos resíduos", "Uso de uma única lixeira para todos os tipos de materiais", " Engajamento de toda a sociedade, separação correta dos resíduos e políticas públicas que incentivem a prática da reciclagem"],
          answer: " Engajamento de toda a sociedade, separação correta dos resíduos e políticas públicas que incentivem a prática da reciclagem",
        },
        {
          question: " Qual é a função principal da diferenciação de cores das lixeiras? ",
          options: ["Identificar a marca das lixeiras", "Promover a concorrência entre os materiais", "Facilitar e incentivar a reciclagem de resíduos", "Indicar a quantidade de lixo em cada lixeira"],
          answer: " Facilitar e incentivar a reciclagem de resíduos",
        },
        {
          question: " O que a lixeira de cor marrom costuma ser designada para?",
          options: ["Vidro", "Papel", "Plástico e metal", "Resíduos orgânicos"],
          answer: " Resíduos orgânicos",
        },
      ],
    },
    {
      category: "O que é ESG?",
      questions: [
        {
          question: "O que a sigla ESG representa e quais são os três aspectos que ela abrange?",
          options: [
            " Estratégia, Segurança e Gestão",
            " Economia, Sociedade e Governo",
            "Ambiental, Social e Governança",
            "Energia, Sustentabilidade e Gestão"
          ],
          answer: "Ambiental, Social e Governança",
        },
        {
          question: "Qual é o foco do aspecto social (Social) na abordagem ESG?",
          options: ["Redução das emissões de gases de efeito estufa", "Uso sustentável de recursos naturais", "Ações e políticas que consideram o impacto da empresa na sociedade", " Práticas de gestão e controle interno da empresa"],
          answer: "Ações e políticas que consideram o impacto da empresa na sociedade",
        },
        {
          question: "Qual é a importância do aspecto de governança corporativa (Governance) na abordagem ESG? ",
          options: ["Redução dos impactos ambientais", " Promoção de condições de trabalho justas e seguras", "Práticas de gestão e controle interno da empresa", " Conservação da biodiversidade"],
          answer: "Práticas de gestão e controle interno da empresa",
        },
      ],
    },
  ];
  
  export default data;