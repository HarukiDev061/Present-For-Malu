function verificarSenha() {
  const senha = document.getElementById("senha").value.toLowerCase().trim();
  const erro = document.getElementById("erro");
  if (senha === "parabens") {
    window.location.href = "parabens.html";
  } else {
    erro.textContent = "❌ Ops! Código mágico errado. Tenta outra vez.";
  }
}