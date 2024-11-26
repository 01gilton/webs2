/* 
destruturing: usado para desestruturar dados agregados em variaveis independentes.
*/  

// criando objeto 
 const aviso = {
     titulo : "Jogos escolares 2025",
     data : new Date(),
     descricao : "Os jogos escolares de 2025 já tem data definida. Ocorrerão em abril de 2025",
     links : ["ifce.edu.br", 'google.com'],
     mostrarAviso : function(){
         return `Título do aviso ${this.titulo}\n
                 Data de postagem ${this.data}\n
                 Descrição do aviso ${this.descricao}`

                 }
    
}

console.log(aviso.mostrarAviso());

// usando destruturing em objetos  (uso mais comum).

//let titulo = aviso.titulo;
//let descricao = aviso.descricao;
let { descricao, titulo} = aviso

console.log(titulo, descricao);

