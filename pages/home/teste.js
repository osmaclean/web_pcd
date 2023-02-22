
// Criação da session Vagas sem poluir o escopo global

// (function () {


const body = document.body;
const section = document.createElement('section');
const section__h1 = document.createElement('h1');


body.appendChild(section).appendChild(section__h1);

section__h1.innerText = 'Vagas';


//     // Array de Objetos para ser renderizado em tela


const vacancy = [];

//     console.log(vacancy)

let contId = 0;
let more = 0;


function adicionarVagas() {
    section__div__button.addEventListener('click', (button) => {

        let event = button.target;
        let eventId = event.id;

        let searchProduct = searchingId(event.id);

        more++

        renderAside(searchProduct);

        let id2 = document.getElementById('removeCard')

        id2.remove()

        localStorage.setItem('CartJob', jobsData)

    });
}
adicionarVagas(jobsData)

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
        const section__div__div__3 = document.createElement('div');
        const section__div__button = document.createElement('button');

        section__div__div.setAttribute("id", "divloc");
        section__div__div__2.setAttribute("id", "segundaDiv");

        sectionCriada.appendChild(section__div)
        section__div.append(section__div__h1, section__div__div, section__div__p, section__div__div__2, section__div__div__3, section__div__button);
        section__div__div.append(section__div__div__h4, section__div__div__h4_2);

        section__div__h1.innerText = vagaAtual.titulo;
        section__div__div__h4.innerText = vagaAtual.empresa;
        section__div__div__h4_2.innerText = vagaAtual.localizacao;
        section__div__p.innerText = vagaAtual.descricao;
        section__div__div__2.innerText = vagaAtual.modo[0];
        section__div__div__3.innerText = vagaAtual.modo[1];
        section__div__button.innerText = 'Candidatar';
        section__div__button.id = contId;
        section__div__button.setAttribute('class', 'botaoCandidatar')

        contId++;


        // Evento de adicionar as vagas
      

        section__div__button.addEventListener('click', () => {

            if (section__div__button.innerText === 'Candidatar') {
                section__div__button.innerText = 'Remover Candidatura'
                const finding = jobsData.find((element) => {
                    
                    return element.id === Number(section__div__button.dataset.id)
                    
                });
                
                const vagaAplicada = { ...finding, id_new: vacancy.length + 1 }
                vacancy.push(vagaAplicada)
                
                // renderAside(vacancy);
                
                
            } else {
                section__div__button.innerText = 'Candidatar'
                
                const finding__remove = vacancy.find((element) => {
                    
                    return element.id === Number(section__div__button.dataset.id);
                })
                
                
                const indiceVagas = vacancy.indexOf(finding__remove)
                
                more--

               vacancy.splice(indiceVagas, 1)
                // renderAside(vacancy);
            }

        });

    });
}

criarVagas(jobsData)




//     // Criação do Aside
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

//     // Função que renderiza as vagas no aside
function renderAside(vacancy) {

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



    let asideTypeButton = document.createElement('div');
    asideTypeButton.classList.add('asideTypeButton');

    let modos = document.createElement('span');
    modos.setAttribute('class', 'asideSpan');

    let asideButton = document.createElement('button')
    asideButton.setAttribute('class', 'asideButton');

    li.id = vacancy.id;
    title.innerText = vacancy.titulo;
    enterprise.innerText = vacancy.empresa;
    location.innerText = vacancy.localizacao;
    asideButton.innerText = 'Remover';
    modos.innerText = vacancy.modo[0]

    li.append(title, enterprise, location, modos, asideButton);

    asideButton.addEventListener('click', function (e) {

        more--

        li.remove()
    });

    produtosAside.append(li)


    const botaoRemoverCandidatura = document.querySelector('.botaoCandidatar')
    botaoRemoverCandidatura.addEventListener('click', function (){
        if (botaoRemoverCandidatura.innerText === 'Remover Candidatura') {
            more--
            li.remove()
        }
    })

}






//     // Função para procurar o ID

function searchingId(id) {

    for (let i = 0; i < jobsData.length; i++) {

        let box = jobsData[i]
        if (jobsData[i].id == id) {
            return jobsData[i]
        }
    }
}


// })();
