/*

objetivo 1 - Ao clicar para enviar o formulário, se caso algum campo não estiver preenchido, a borda do input deve ficar vermelha e uma mensagem de "campo obrigatório" deve aparecer embaixo do campo que não foi preenchido, conforme o figma.

passo 1 - pegar o clique no botão enviar

passo 2 - pegar os inputs

passo 3 - verificar se os inputs estão preenchidos

passo 4 - se estiverem preenchidos, inserir a classe valido no input preenchido

passo 5 - se estiverem vazios, inserir a classe invalido no input e a classe ativo no span com a mensagem campo obrigatorio.


*/

const form = document.getElementById('formulario');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputs = document.querySelectorAll('.input');
    const spans = document.querySelectorAll('span')

    inputs.forEach((input, index) => {
        if (input.value === "") {
            if (input.classList.contains('valido')){
                input.classList.remove('valido')
            }
            input.classList.add('invalido');
            spans[index].classList.add('ativo');
        } else {
            if (input.classList.contains('invalido')) {
                input.classList.remove('invalido');
                spans[index].classList.remove('ativo');
                input.classList.add('valido');
            }
            input.classList.add('valido');
        }
    })

})

