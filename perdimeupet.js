const formulario = document.getElementById("formulario");

const modal = document.getElementById("modalConfirmacao");

const btnSim = document.getElementById("btnSim");

const btnNao = document.getElementById("btnNao");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    modal.style.display = "flex";

});

btnSim.addEventListener("click", function(){

    modal.style.display = "none";

    alert("Enviado com sucesso!");

    formulario.submit();

});

btnNao.addEventListener("click", function(){

    modal.style.display = "none";

});