
// Criação da estrutura main sem poluir o escopo global
(function () {

    const body = document.body;
    const main = document.createElement('main');
    const main__h1 = document.createElement('h1');
    const main__h3 = document.createElement('h3');
    const main__p = document.createElement('p');
    const main__span = document.createElement('span');
    const main__button = document.createElement('button');

    body.appendChild(main).append(main__h1, main__h3, main__p, main__span, main__button)

    main__h1.innerText = "Web PCD";
    main__h3.innerText = "Resiliência é a chave para o sucesso.";
    main__p.innerText = "Está procurando oportunidades de trabalho, recolocação no mercado ou primeira experiência?";
    main__span.innerText = "Confere aqui embaixo o que temos para você!";
    main__button.innerText = "ESPIAR OPORTUNIDADES";


})();
  

// Criação da session Vagas

(function (objeto) {


    const body = document.body;
    const section = document.createElement('section');
    const section__h1 = document.createElement('h1');
    const section__div = document.createElement('div');
    const section__div__h1 = document.createElement('h1');
    const section__div__div = document.createElement('div');
    const section__div__div__h4 = document.createElement('h4');
    const section__div__div__h4_2 = document.createElement('h4');
    const section__div__p = document.createElement('p');
    const section__div__div__2 = document.createElement('div');
    const section__div__button = document.createElement('button');
    


    body.appendChild(section).append(section__h1, section__div);
    section__div.append(section__div__h1, section__div__div, section__div__p, section__div__div__2, section__div__button);
    section__div__div.append(section__div__div__h4, section__div__div__h4_2);

    section__div.setAttribute("id", "box");
    

    section__h1.innerText = 'Vagas';
    section__div__h1.innerText = objeto.titulo;

    // Renderização dos Dados do Array de Objetos em Tela

    const jobsData = [
        {
          id: 0,
          titulo: "Desenvolvedor(a) back-end - Python",
          empresa: "DNC",
          localizacao: "Fortaleza",
          descricao:
            "Gerar um guia de implementação em FHIR a partir desse modelo lógico e construir um repositório FHIR que receba esses dados e se mantenha em conformidade com a especificação que será produzida",
          modo: ["Remote", "Hybrid"],
        },
        {
          id: 1,
          titulo: "Desenvolvedor(a) FullStack - Node.js",
          empresa: "Escola DNC",
          localizacao: "São Paulo",
          descricao:
            "Esta é uma oportunidade de trabalho totalmente remoto em tempo integral, na qual você trabalhará como parte de uma equipe Scrum, que exige trabalhar em estreita colaboração com outros engenheiros de software, partes interessadas e colaboradores do projeto.",
          modo: ["Remote", "Presencial"],
        },
        {
          id: 2,
          titulo: "Desenvolvedor Front-end Jr. - React.js | Tailwind",
          empresa: "Imperium Tech",
          localizacao: "Mato Grosso",
          descricao:
            "Você já é um profissional junior ou pleno no desenvolvimento em React, dificilmente fica trancado para escopos simples, escreve testes automatizados, faz pushes diários e sabe balancear avanço com a refatoração do código.",
          modo: ["Remote", "Hybrid"],
        },
      ];


      jobsData.forEach((objeto) => {

        section__div__h1.innerHTML = objeto.empresa

      });

})();