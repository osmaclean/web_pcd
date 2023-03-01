

// Array de Objetos
const jobsData = [
    {
        id: 0,
        titulo: "Web Developer Back-end",
        empresa: "DNC S/A",
        localizacao: "Fortaleza",
        descricao:
            "Gerar um guia de implementação em FHIR a partir desse modelo lógico e construir um repositório FHIR que receba esses dados e se mantenha em conformidade com a especificação que será produzida",
        modo: ["Remote", "Hybrid"],
    },
    {
        id: 1,
        titulo: "Web Developer FullStack",
        empresa: "Escola DNC",
        localizacao: "São Paulo",
        descricao:
            "Esta é uma oportunidade de trabalho totalmente remoto em tempo integral, na qual você trabalhará como parte de uma equipe Scrum, que exige trabalhar em estreita colaboração com outros engenheiros de software, partes interessadas e colaboradores do projeto.",
        modo: ["Presencial", "Remote"],
    },
    {
        id: 2,
        titulo: "Web Developer Front-end",
        empresa: "Tech LTDA",
        localizacao: "Mato Grosso",
        descricao:
            "Você já é um profissional junior ou pleno no desenvolvimento em React, dificilmente fica trancado para escopos simples, escreve testes automatizados, faz pushes diários e sabe balancear avanço com a refatoração do código.",
        modo: ["Hybrid", "Remote"],
    },
];

const vagasAplicadas = [];

let more = 0;

let ulContainer = document.querySelector("ul")

// Função que vai analisar o localStore

function vacanciesDataAnalysis() {
    const vacanciesLocalJSON = localStorage.getItem("keyVagasApp");

    if (vacanciesLocalJSON) {

        const vacanciesLocal = JSON.parse(vacanciesLocalJSON);

    

        return renderVacancies(vacanciesLocal)

    }

}
vacanciesDataAnalysis();

// Função que renderiza os cards das vagas

function renderizaVagas(objeto) {

    objeto.forEach(element => {

        let liContainer = document.createElement('li');

        let titleCard = document.createElement('h2');

        let divCard = document.createElement('div');
        divCard.setAttribute('class', 'divCard');

        let empresaCard = document.createElement('p');
        empresaCard.setAttribute('class', 'empresaCard');

        let localizacaoCard = document.createElement('p');
        localizacaoCard.setAttribute('class', 'locationCard');

        let descricaoCard = document.createElement('p')
        descricaoCard.setAttribute('class', 'descriptionCard')

        let divModos = document.createElement('div');
        divModos.setAttribute('class', 'divModos');


        let modos = document.createElement('span');
        let modos_1 = document.createElement('span');

        let buttonCard = document.createElement('button');
        buttonCard.setAttribute('class', 'buttonCard');

        titleCard.innerText = element.titulo;
        empresaCard.innerText = element.empresa;
        localizacaoCard.innerText = element.localizacao;
        descricaoCard.innerText = element.descricao;
        modos.innerText = element.modo[0];
        modos_1.innerText = element.modo[1];
        buttonCard.innerText = 'Candidatar';
        buttonCard.id = element.id;

        liContainer.classList = 'jobs'

        liContainer.append(titleCard, divCard, descricaoCard, divModos, buttonCard);
        divCard.append(empresaCard, localizacaoCard);
        divModos.append(modos, modos_1);


        ulContainer.appendChild(liContainer)


    });

}
renderizaVagas(jobsData)


// Função para adicionar/remover vagas no aside

function addRemoveVagas() {

    let cardButton = document.querySelectorAll(".buttonCard");



    cardButton.forEach((botao) => {

        botao.addEventListener('click', function (event) {

            const targetEvent = event.target;

            if (targetEvent.innerText === 'Candidatar') {

                targetEvent.innerText = 'Remover Candidatura';

                const finding = jobsData.find((element) => {


                    return element.id === Number(targetEvent.id);

                });

                const vagaAplicada = { ...finding, id_new: vagasAplicadas.length + 1 }
                vagasAplicadas.push(vagaAplicada);

                const dataJSON = JSON.stringify(vagasAplicadas);

                localStorage.setItem('keyVagasApp', dataJSON);

                
               
                renderVacancies(vagasAplicadas);
                // renderAside(vacancy);
            } else {
                targetEvent.innerText = 'Candidatar';

                const finding__remove = vagasAplicadas.find((element) => {

                    return element.id === Number(targetEvent.id);
                })

                const indiceVagas = vagasAplicadas.indexOf(finding__remove)

                vagasAplicadas.splice(indiceVagas, 1)
                renderVacancies(vagasAplicadas)

                const dataJSONReturn = JSON.stringify(vagasAplicadas);

                localStorage.setItem('keyVagasApp', dataJSONReturn);
            }
        })
    });
}
addRemoveVagas()

// Função que cria os elementos das vagas no aside

function createAsideElement(arr) {

    let produtosUlAside = document.querySelector('.test');

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

    let asideTypeButton = document.createElement('div');
    asideTypeButton.classList.add('asideTypeButton');

    let modos = document.createElement('span');
    modos.setAttribute('class', 'asideSpan');

    let modos_1 = document.createElement('span');
    modos_1.setAttribute('class', 'asideSpan_1');

    let asideButton = document.createElement('img')
    asideButton.setAttribute('class', 'asideButton');
    asideButton.setAttribute('id', arr.id);

    // let img = document.createElement('img');
    // img.setAttribute('class', 'botaoLixeira');

    li.id = arr.id;
    title.innerText = arr.titulo;
    enterprise.innerText = arr.empresa;
    location.innerText = arr.localizacao;
    modos.innerText = arr.modo[0];
    modos_1.innerText = arr.modo[1];
    asideButton.innerText = '';
    asideButton.src = '../../assets/img/sorrindo.png';


    li.append(title, asideCompanyLocation, asideTypeButton)
    asideTypeButton.append(modos, modos_1, asideButton)
    asideCompanyLocation.append(enterprise, location)
    // asideButton.append(img)

    return li
}

// Função que renderiza no Aside

function renderVacancies(arr) {



    const ulSectionAside = document.querySelector('.test');
    ulSectionAside.innerHTML = '';

    const funcaoMessage = emptyMessage()

    if (vagasAplicadas.length <= 0) {

        ulSectionAside.append(funcaoMessage)

    } else {
        arr.forEach(vaga => {
            const funcao = createAsideElement(vaga)

            ulSectionAside.append(funcao);
        });

        removeButton()
    }
}



// Função que remove no botão do aside

function removeButton() {
    const buttonCandidatura = document.querySelectorAll('.buttonCard');
    const buttonsAside = document.querySelectorAll('.asideButton');


    buttonCandidatura.forEach(element => {
        buttonsAside.forEach(button => button.addEventListener('click', (event) => {
            if (element.id === event.target.id) {

                element.innerText = 'Candidatar'

                const finding__remove = vagasAplicadas.find((vaga) => {

                    return vaga.id === Number(element.id);
                })

                const indiceVagas = vagasAplicadas.indexOf(finding__remove)

                vagasAplicadas.splice(indiceVagas, 1)
                renderVacancies(vagasAplicadas);
            }
        }))
    })

}


// Função para criar Empty Message

function emptyMessage() {
    let pAside = document.createElement('p');
    pAside.setAttribute('id', 'removeCard');
    pAside.setAttribute('class', 'text-job removerCard');
    pAside.innerText = 'Você ainda não aplicou para nenhuma vaga'

    return pAside


}

// Função de Scroll da page

function pageScroll() {
    const main__button = document.querySelector('#espiarBotao')
    main__button.addEventListener('click', () => {

        window.scroll({ top: 500, behavior: "smooth" })


    })
}
pageScroll()