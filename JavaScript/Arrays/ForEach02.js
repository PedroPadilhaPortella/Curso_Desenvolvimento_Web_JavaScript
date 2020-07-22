//criando um método ForEach a partir de um prototype
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


const aprovados = ['agatha', 'pedro', 'joao', 'jihad']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})