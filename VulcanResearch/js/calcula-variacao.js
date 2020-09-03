var fiis = $(".tabela-fii-linha");

for(var i = 0; i < fiis.length; i++){

    var fii = fiis[i];

    var tdValorAtual = fii.querySelector(".fii-valor-atual");
    var valorAtual = parseFloat(tdValorAtual.textContent);

    var tdValorEntrada = fii.querySelector(".fii-valor-entrada");
    var valorEntrada = parseFloat(tdValorEntrada.textContent);

    var variacaoPercentual = calcularVariacao(valorEntrada, valorAtual);

    var tdFiiVaricao = fii.querySelector(".fii-varicao");
    tdFiiVaricao.textContent = variacaoPercentual+"%";

    if (variacaoPercentual >= 0) {
        tdFiiVaricao.classList.add("green");
    } else {
        tdFiiVaricao.classList.add("wine");
    }

    function calcularVariacao(vAtual, vEntrada) {
        var variacao = ((vEntrada - vAtual) / vAtual) * 100;
        return variacao.toFixed(2);
    }
}