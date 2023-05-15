var armarioSelecionado;

function selecionar(elemento) {
  armarioSelecionado = elemento;
  document.getElementById("popup").style.display = "block";
  document.getElementById("fechar").style.display = "block";
}

function fechar() {
  document.getElementById("popup").style.display = "none";
}

function escolher(opcao) {
	var estado = opcao.innerText.toLowerCase();
  
	if (estado === "ocupar") {
	  armarioSelecionado.classList.remove("cor1", "cor2");
	  armarioSelecionado.classList.add("cor3");
	} else if (estado === "desocupar") {
	  armarioSelecionado.classList.remove("cor2", "cor3");
	  armarioSelecionado.classList.add("cor1");
	} else if (estado === "manuntenção") {
	  armarioSelecionado.classList.remove("cor1", "cor3");
	  armarioSelecionado.classList.add("cor2");
	}
  
	document.getElementById("popup").style.display = "none";
  }