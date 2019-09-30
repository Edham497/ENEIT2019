let VAC =0;
let GG = 0;
let MG = 0;
let PMG = 0;

function calcularMG(){
    VAC = $id('VAC').value
    GG = $id('GG').value

    MG = 0

    if(VAC != undefined && GG != undefined){
        MG = redondeo((GG * VAC) / reactivos.C3H8NO5P.pm, 6)
        $id('MG').value = MG
    }
}

function redondeo(numero, decimales)
{
    var flotante = parseFloat(numero);
    var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
    return resultado;
}