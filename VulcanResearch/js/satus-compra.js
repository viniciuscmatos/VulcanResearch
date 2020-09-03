var fiis = document.querySelectorAll(".tabela-fii-linha");

for(var i = 0; i < fiis.length; i++){

    var fii = fiis[i];

    var tdValorAtual = fii.querySelector(".fii-valor-atual");
    var valorAtual = parseFloat(tdValorAtual.textContent);

    var tdValorTeto = fii.querySelector(".fii-teto");
    var valorTeto = parseFloat(tdValorTeto.textContent);

    var resultStatusCompra = statusCompra(valorAtual, valorTeto);

    var tdStatusCompra = fii.querySelector(".fii-status");
    tdStatusCompra.textContent = resultStatusCompra;

    if (resultStatusCompra == "Comprar") {
        tdStatusCompra.classList.add("green");
    }

    function statusCompra (vAtual, vTeto){
        if (vAtual > vTeto) {
            return "Aguardar";
        } else {
            return "Comprar";
        }
    }
}