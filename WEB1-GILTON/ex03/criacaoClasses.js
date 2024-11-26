
// construindo uma classe 

class Aviso{
    constructor(titulo, data , descricao, links, ){
        this.titulo = titulo;
        this.data = data;
        this.descricao = descricao;
        this.links = links;
    }
// Criando os métodos desse Objeto
    mostrarAviso(){
        return `Título do aviso ${this.titulo}\n
                Data de postagem ${this.data}\n
                Descrição do aviso ${this.descricao}`
    }
}
// Criando um Objeto a partir da classe anterior.

const aviso1 = new Aviso("Jogos escolares 2025", new Date(), 
"os jogos escolares de 2025 já tem data definida. Ocorrerão em abril de 2025",
 ["ifce.edu.br", 'google.com'] );


 console.log(aviso1.mostrarAviso());