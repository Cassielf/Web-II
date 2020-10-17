    //frases

    var frase = $("#frase").text();
    var qntPalavras = frase.split(" ").length - 47;
    $("#tamanho-frase").text(qntPalavras);

    // controlando o tempo ao jogo
    $(document).ready(function(){

    var tempoInicial = 20;
  
    var tempoJogo = $("#tempo-jogo");
    tempoJogo.text(tempoInicial);
  
    var campo = $('textarea');
    campo.on("focus", function(){
    var cronometro = setInterval(function(){
      var tempoRestante = tempoJogo.text();
      
      if(tempoRestante <= 0){
        campo.attr("disabled", true);
        clearInterval(cronometro);
        salvarProgresso();
      } else {
        tempoRestante--;
        console.log(tempoRestante);
        tempoJogo.text(tempoRestante);
      }
    }, 1000);
  });
})

// Contador de Caracteres e Palavras Digitadas
$(document).on("input", ".texto", function() {
    // Caracteres
    var caracteresDigitados = $(".texto").val().length;
    $(".caracteres").text(caracteresDigitados);
    // Palavras 
    var palavrasDigitadas = $(this).val();
    var QntPalavrasDigitadas = palavrasDigitadas.split(" ").length;
    $(".palavras").text(QntPalavrasDigitadas);
  });

  // Salvando Progresso
  $(document).ready(function() {

    salvarProgresso = ()  => {
      var nome = prompt("Digite seu nome:");

      var palavrasDigitadas = $("textarea").val();
      var QntPalavrasDigitadas = palavrasDigitadas.split(" ").length;
      
      let ppm = QntPalavrasDigitadas * 3 + " ppm";
      
      $(".pontos > tbody")
        .append(`
          <tr class="jogador">
            <td><div> ${nome} </div><hr></td>
            <td><div> ${ppm} </div><hr></td>
            <td>
              <div>
                <button class="delete-row">
                  <img src="./img/lixeira.png" alt="">
                </button>
              </div>
              <hr>
            </td>
          </tr>
      `);
      }
      
     // Procura o remove a linha selecionada da tabela
    $(".pontos").on("click", ".delete-row", function(){
      $(this).closest("tr").remove();
    })
}
)
// Restart 
var texto = $(".texto");
$(".restart").on("click", function() {

  texto.attr("disabled", false);
  texto.val("");

  $(".caracteres").text("0");
  $(".palavras").text("0");
  $("#tempo-jogo").text(20);
});