//capturando os elementos da pagina html
const form = document.querySelector('#formLista')
const input = document.querySelector('#produto')
const contador = document.querySelector('#contador')
const mensagemErro = document.querySelector('#mensagemErro')
const lista = document.querySelector('#lista')
//docment.querySelector = selecionar um elemento html

let totalItens= 0

form.addEventListener('submit', function(event){
     event.preventDefault(); //impede o carregamento da página
     //só vai carregar a página depois que o campo for preenchido

     const valorInput = input.value.trim() //pegando o valor do input
     //trim() retira os espaços extras do que foi digitado

     //validando se o campo foi preenchido
     if (valorInput === ''){
        mensagemErro.innerText = "Digite um produto."
        return; //acaba a validação aqui aqui
     } 
     mensagemErro.innerText = ''; //volta a definir a mensagem como vazia
    
     //criando novo item para adicionar na lista de compras
     const novoItem = document.createElement('li')
     
     //adicionando o valor digitado no campo dentro da nossa lista
     novoItem.innerText = valorInput

     //adicionar esse novo item no HTML (novo item na lista)
     lista.appendChild(novoItem)

     //atualizar o contador
     totalItens++
     //mudar o texto do paragrafo
     contador.innerText = `Total: ${totalItens} itens.` //template string
     //valor da string dentro do `` vai mudar de acordo com o codigo
     //podemos colocar texto e variavel junto

     //resetar o input 
     input.value = ''
}
);