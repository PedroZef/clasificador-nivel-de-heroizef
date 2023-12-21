// Pegar os elementos do HTML pelo id
const nome = document.getElementById("nome");
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

// Criar uma função para determinar o nível do herói
function getNivel(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp < 2000) {
    return "Bronze";
  } else if (xp < 5000) {
    return "Prata";
  } else if (xp < 7000) {
    return "Ouro";
  } else if (xp < 8000) {
    return "Platina";
  } else if (xp < 9000) {
    return "Ascendente";
  } else if (xp < 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

// Adicionar um evento de clique no botão
botao.addEventListener("click", function() {
    // Gerar um número aleatório entre 0 e 10000 para a XP
    let xp = Math.floor(Math.random() * 10001);
    // Chamar a função para obter o nível do herói
    let nivel = getNivel(xp);
    // Exibir a mensagem na tela usando o DOM e uma template string
    mensagem.innerHTML = `O herói de nome ${nome.value} está no nível de ${nivel}`;
});
