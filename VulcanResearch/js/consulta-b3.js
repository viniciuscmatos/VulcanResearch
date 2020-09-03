$('#botao').click(function(){
    var ticker = capturarTicker()
    mostrarAnalitica(ticker)
})

$('.ativos-card').click(function(){
    var ticker = $(this).find('span').eq(0).text()
    mostrarAnalitica(ticker)
})

function mostrarAnalitica(ticker) {
    buscarJSON(ticker)
}

function capturarTicker() {
    var tickerBusca = $('#campo-busca').val()
    var ticker = tickerBusca.toUpperCase()
    return ticker
}

function buscarJSON (ticker) {
    $.get('b3.json', function(data) {
        let json = JSON.stringify(data)
        let jsonParsed = JSON.parse(json)
        let jsonAtivo = jsonParsed.find(p => p.ticker == ticker)
        if (jsonAtivo === undefined) {
            mensagemErro()
        } else {
            inserirDados (jsonAtivo)
            inserirLogo(ticker)
            alterarContainers()
        }       
    }); 
}

function inserirDados (jsonAtivo) {
    $('#indicadores-de').text('Indicadores de '+jsonAtivo.ticker)
    $('#nomeAtivo').text(jsonAtivo.nomeAtivo+' - '+jsonAtivo.ticker)    
    $('#valor-atual').text(jsonAtivo.vlAtual)
    $('#min52').text(jsonAtivo.min52)
    $('#max52').text(jsonAtivo.max52)
    $('#dy').text(jsonAtivo.dy)
    $('#vl12').text(jsonAtivo.vl12)
    $('#minM').text(jsonAtivo.minM)
    $('#maxM').text(jsonAtivo.maxM)
    $('#ul12').text(jsonAtivo.ul12)
    $('#mesA').text(jsonAtivo.mesA)

    $('#pL').text(jsonAtivo.pL)
    $('#evEbtda').text(jsonAtivo.evEbtda)
    $('#pVp').text(jsonAtivo.pVp)
    $('#evEbit').text(jsonAtivo.evEbit)
    $('#pEbitda').text(jsonAtivo.pEbitda)
    $('#pEbit').text(jsonAtivo.pEbit)
    $('#vPa').text(jsonAtivo.vPa)
    $('#pAtivo').text(jsonAtivo.pAtivo)
    $('#lPa').text(jsonAtivo.lPa)
    $('#pSr').text(jsonAtivo.pSr)
    $('#pCapGiro').text(jsonAtivo.pCapGiro)
    $('#pAtivoCircLiq').text(jsonAtivo.pAtivoCircLiq)

    $('#divLiqPL').text(jsonAtivo.divLiqPL)
    $('#divLiqEbitda').text(jsonAtivo.divLiqEbitda)
    $('#divLiqEbit').text(jsonAtivo.divLiqEbit)
    $('#plAtivos').text(jsonAtivo.plAtivos)
    $('#pasAtivos').text(jsonAtivo.pasAtivos)
    $('#liqCorrente').text(jsonAtivo.liqCorrente)

    $('#plAbs').text(jsonAtivo.plAbs)
    $('#ativoAbs').text(jsonAtivo.ativoAbs)
    $('#ativoCircAbs').text(jsonAtivo.ativoCircAbs)
    $('#divBrtAbs').text(jsonAtivo.divBrtAbs)
    $('#dispAbs').text(jsonAtivo.dispAbs)
    $('#divLiqAbs').text(jsonAtivo.divLiqAbs)
}

function mensagemErro() {
    $('#msg-erro').text('Ativo não encontrado. Use como exemplo um dos seguintes tickers: SUNO3, SQIA3, TAEE11, ENBR3, WEGE3, MGLU3, AZUL4 ou BIDI11.')
    setTimeout(function(){ 
        $('#msg-erro').text('')  }, 8000);
}

function alterarContainers() {
    $('.container-dados').fadeIn(500)
    $('.container-recursos').hide()
}

function inserirLogo (ticker) {
    var $img = $('#logo-ativo')
    $img.attr('src', "./img/"+ticker+".png")
}

