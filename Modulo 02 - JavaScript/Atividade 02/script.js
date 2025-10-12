const alunos = [];

const nomeInput = document.getElementById("nome");
const notaInput = document.getElementById("nota");
const lista = document.getElementById("listaAlunos");

document.getElementById("btnCadastrar").addEventListener("click", () => {
  const nome = nomeInput.value.trim();
  const nota = parseFloat(notaInput.value);

  if (!nome || isNaN(nota)) {
    alert("Preencha o nome e a nota corretamente!");
    return;
  }

  alunos.push({ nome, nota });
  nomeInput.value = "";
  notaInput.value = "";
  exibirAlunos(alunos);
});

function exibirAlunos(listaDeExibicao) {
  lista.innerHTML = "";
  listaDeExibicao.forEach(aluno => {
    const li = document.createElement("li");
    li.textContent = `${aluno.nome} - Nota: ${aluno.nota}`;
    li.classList.add(aluno.nota >= 7 ? "aprovado" : "reprovado");
    lista.appendChild(li);
  });
}

document.getElementById("mostrarTodos").addEventListener("click", () => {
  exibirAlunos(alunos);
});

document.getElementById("mostrarAprovados").addEventListener("click", () => {
  const aprovados = alunos.filter(a => a.nota >= 7);
  exibirAlunos(aprovados);
});
