class Curso {
    constructor(id,titulo,descricao,imagem,nome_do_professor,lista_de_aulas) {
      this.id = id; 
      this.titulo = titulo;
      this.descricao = descricao;
      this.imagem = imagem;
      this.nome_do_professor = nome_do_professor;
      this.lista_de_aulas = lista_de_aulas;
      
    }
}

const todos_meus_cursos = [ ]
 
function deletarCurso (parameter_id) {

    const index = todos_meus_cursos.map(function(e) { return e.id; }).indexOf(parameter_id)

    todos_meus_cursos.splice(index,1)

}

function criarCurso (id,titulo,descricao,imagem,nome_do_professor,lista_de_aulas) {

    const novo_curso = new Curso (id,titulo,descricao,imagem,nome_do_professor,lista_de_aulas)

    todos_meus_cursos.push(novo_curso)
}


function listaCursos () {
    console.log (todos_meus_cursos)
}

function exibirCurso (parameter_id) {
    const id = todos_meus_cursos.map(function(e) { return e.id; }).indexOf(parameter_id);
    console.log(todos_meus_cursos[id])
}

function atualizarCurso (parameter_id,titulo,descricao,imagem,nome_do_professor,lista_de_aulas) {
    const id = todos_meus_cursos.map(function(e) { return e.id; }).indexOf(parameter_id);
    todos_meus_cursos[id].titulo = titulo
    todos_meus_cursos[id].descricao = descricao
    todos_meus_cursos[id].imagem = imagem
    todos_meus_cursos[id].nome_do_professor = nome_do_professor
    todos_meus_cursos[id].lista_de_aulas = lista_de_aulas
}

/*
=   Testando as funções de 
=   C reate     => criarCurso (id,titulo,descricao,imagem,nome_do_professor,lista_de_aulas)
=   R ead       => exibirCurso (id), listaCursos ()
=   U pdate     => atualizarCurso (parameter_id,titulo,descricao,imagem,nome_do_professor,lista_de_aulas)
=   D elete     => deletarCurso (parameter_id)
*/

// Primeiro criaremos dois novos cursos

criarCurso(33, "Como economizar", "Este curso vai te auxiliar a diminuir seus gastos e aproveitar bem seus recursos", "img", "Natalia Arcuri", "link")
criarCurso(64, "Como fazer renda extra", "Este curso ensina você a fazer uma renda extra", "img" , "Natalia Arcuri", "link")

// Agora vamos listar todos os cursos (até agora 2)
listaCursos ()
console.log("\n\n ========== \n\n") // Pular linha apenas para facilitar visualização.

// Vamos exibir apenas o curso do ID 33
exibirCurso (33)
console.log("\n\n ========== \n\n") // Pular linha apenas para facilitar visualização.

// Vamos excluir o curso de ID 33
deletarCurso (33)

// Vamos listar todos os cursos, mas só irá vir o 64, pois 33 foi deletado.
listaCursos ()
console.log("\n\n ========== \n\n") // Pular linha apenas para facilitar visualização.

// Vamos atualizar o curso 64
atualizarCurso(64, "Como investir na bolsa", "Aprenda a investir nas melhores ações", "img" , "Thiago Nigro", "Link")

// Vamos mostrar todos os cursos (no caso apenas o 64, mas atualizado).
listaCursos ()




