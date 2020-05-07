const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas');


btnTarefa.addEventListener('click',  function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)

})


inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        criaTarefa(inputTarefa.value)
        limpaInput()
    }
})

document.addEventListener('click', function(e){
    const tarefa = e.target
    
    if (tarefa.className == 'apagar'){
        tarefa.parentElement.remove()
    }
})


function criaBotao(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar sua tarefa')
    li.appendChild(botaoApagar)
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus()
}

function criaTarefa(texto){
    const li = document.createElement('li')
    li.innerText += texto
    tarefas.appendChild(li)
    criaBotao(li)
    limpaInput()
}