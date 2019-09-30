let VAC =0;
let GG = 0;
let MG = 0;
let PMG = 0;

function calcularMG(){
    VAC = $id('VAC').value
    GG = $id('GG').value

    MG = 0

    if(VAC != undefined && GG != undefined){
        MG = (GG * VAC) / reactivos.C3H8NO5P.pm
        $id('MG').value = MG
    }
}