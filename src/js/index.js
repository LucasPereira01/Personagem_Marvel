/* 
caso de usos 
1- quando passar o mouse em cima do personagem temos que:
 --colocar a classe selecionado no personagem  que passamos o mouse em cima para adicionar a animação nele---- ok 
 --retirar a classe selecionado do personagem que esta selecionado---ok 


2- quando passar o mouse em cima do personagem ,trocar a imagem e node do personagem grande
 --alterar imagem do jogador 1 
 --alterar o nome do jogador 1

*/

/* const homenDeFerro = document.getElementById('homem-de-ferro')

homenDeFerro.addEventListener('mouseenter', () => {
    homenDeFerro.classList.add('selecionado')
}) */

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value
        
        if (idSelecionado === 'ultron') return


        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')


        personagem.classList.add('selecionado')


        const imagemJogaodor1 = document.getElementById('personagem-jogador-1')
        imagemJogaodor1.src = `./src/image/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById("nomeJogador1")
        const nomeselecionado = personagem.getAttribute('data-name')
        nomeJogador1.innerHTML = nomeselecionado


    })

})



