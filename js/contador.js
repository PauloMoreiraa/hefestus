 // Definindo a data limite para o contador (formato: "ano/mês/dia")
 const dataLimite = new Date("2023-10-27");

 // Função para atualizar o contador
 function atualizarContador() {
   const agora = new Date();
   const diferenca = dataLimite - agora;

   if (diferenca <= 0) {
     // Caso a data limite seja alcançada ou ultrapassada, exibe uma mensagem
     document.getElementById("contador").innerText = "Tempo expirado!";
   } else {
     // Calcula os dias, horas, minutos e segundos restantes
     const segundos = Math.floor(diferenca / 1000) % 60;
     const minutos = Math.floor(diferenca / 1000 / 60) % 60;
     const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
     const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);

     // Atualiza o contador na página
     document.getElementById("contador").innerText = `${dias}d, ${horas}h, ${minutos}m e ${segundos}s`;
   }
 }

 // Atualiza o contador a cada segundo
 setInterval(atualizarContador, 1000);

 // Inicializa o contador ao carregar a página
 atualizarContador();
