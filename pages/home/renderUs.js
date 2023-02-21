
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

    main__button.addEventListener('click', () => {

        window.scroll({ top: 500, behavior: "smooth" })


    })

})();


// Criação da session Vagas sem poluir o escopo global

(function () {


    const body = document.body;
    const section = document.createElement('section');
    const section__h1 = document.createElement('h1');


    body.appendChild(section).appendChild(section__h1);

    section__h1.innerText = 'Vagas';


    // Array de Objetos para ser renderizado em tela

    const jobsData = [
        {
            id: 0,
            titulo: "Desenvolvedor(a) Back-end - Python",
            empresa: "DNC S/A",
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
            modo: ["Presencial", "Remote"],
        },
        {
            id: 2,
            titulo: "Desenvolvedor Front-end Jr. - React.js | Tailwind",
            empresa: "Tech LTDA",
            localizacao: "Mato Grosso",
            descricao:
                "Você já é um profissional junior ou pleno no desenvolvimento em React, dificilmente fica trancado para escopos simples, escreve testes automatizados, faz pushes diários e sabe balancear avanço com a refatoração do código.",
            modo: ["Hybrid", "Remote"],
        },
    ];

    let contId = 0;
    let more = 0;

    // Função que renderiza as vagas + evento no botão

    function criarVagas(vagas) {

        vagas.forEach((vagaAtual) => {
            const body = document.body;
            const sectionCriada = document.querySelector('section');
            const section__div = document.createElement('div');
            const section__div__h1 = document.createElement('h1');
            const section__div__div = document.createElement('div');
            const section__div__div__h4 = document.createElement('h4');
            const section__div__div__h4_2 = document.createElement('h4');
            const section__div__p = document.createElement('p');
            const section__div__div__2 = document.createElement('div');
            const section__div__button = document.createElement('button');

            section__div__div.setAttribute("id", "divloc");
            section__div__div__2.setAttribute("id", "segundaDiv");

            sectionCriada.appendChild(section__div)
            section__div.append(section__div__h1, section__div__div, section__div__p, section__div__div__2, section__div__button);
            section__div__div.append(section__div__div__h4, section__div__div__h4_2);

            section__div__h1.innerText = vagaAtual.titulo;
            section__div__div__h4.innerText = vagaAtual.empresa;
            section__div__div__h4_2.innerText = vagaAtual.localizacao;
            section__div__p.innerText = vagaAtual.descricao;
            section__div__div__2.innerText = vagaAtual.modo[0];
            section__div__button.innerText = 'Candidatar';
            section__div__button.id = `id_${contId}`;

            contId++;

            // Evento de adicionar as vagas
            section__div__button.addEventListener('click', (button) => {
                
                let event = button.target;
                let eventId = event.id;

                let searchProduct = searchingId(eventId);
                
                more++

                renderAside(searchProduct);

                let select = document.querySelector("#removeCard")

                select.remove()

                localStorage.setItem('CartJob', jobsData)
            })
            
            section__div__button.addEventListener('click', () => {
                if (section__div__button.innerText === 'Candidatar') {
                    section__div__button.innerText = 'Remover Candidatura'
                }
            });

        });
    }

    criarVagas(jobsData)




    // Criação do Aside
    const aside = document.createElement('aside');
    const aside__h1 = document.createElement('h1');
    const aside__ul = document.createElement('ul')
    const aside__p = document.createElement('p');


    section.appendChild(aside).append(aside__h1, aside__ul)
    aside__ul.appendChild(aside__p)
    aside__ul.setAttribute('class', 'test')
    aside__p.setAttribute('id', 'removeCard')
    aside__p.setAttribute('class', 'text-job removerCard')

    aside__h1.innerText = 'Vagas Selecionadas'
    aside__p.innerText = 'Você ainda não aplicou para nenhuma vaga'

    // Função que renderiza as vagas no aside
    function renderAside(objeto) {

        let produtosAside = document.querySelector('.test');

        let li = document.createElement('li');
        li.classList.add('aside__li');

        let title = document.createElement('h2');
        title.setAttribute('class', 'nameJob');

        let asideCompanyLocation = document.createElement('div');
        asideCompanyLocation.classList.add('asideCompanyLocation');

        let enterprise = document.createElement('p')
        enterprise.setAttribute('class', 'asideCompany');

        let location = document.createElement('p')
        location.classList.add('asideLocation')

        let description = document.createElement('p');
        description.setAttribute('class', 'asideText');

        let asideTypeButton = document.createElement('div');
        asideTypeButton.classList.add('asideTypeButton');

        let modos = document.createElement('span');
        modos.setAttribute('class', 'asideSpan');

        let asideButton = document.createElement('button')
        asideButton.setAttribute('class', 'asideButton');

        li.id = objeto.id;
        title.innerText = objeto.titulo;
        enterprise.innerText = objeto.empresa;
        location.innerText = objeto.localizacao;
        description.innerText = objeto.descricao;
        asideButton.innerText = 'Remover';
        modos.innerText = objeto.modo[0]

        li.append(title, enterprise, location, description, modos, asideButton);

        asideButton.addEventListener('click', function (e) {

            more--

            li.remove()
        });

        produtosAside.append(li)



    }






    // Função para procurar o ID

    function searchingId(id) {

        for (let i = 0; i < jobsData.length; i++) {

            let box = jobsData[i]
            if (jobsData[i].id == id) {
                return jobsData[i]
            }
        }
    }


})();