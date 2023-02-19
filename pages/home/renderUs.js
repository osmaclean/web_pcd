
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