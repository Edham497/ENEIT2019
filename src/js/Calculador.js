// let VAC =0;
// let GG = 0;
// let MG = 0;
// let PMG = 0;

let VAC, GG, MG, PMG, MOC, POC, GOC, CGOC, MPF
VAC = GG = MG = PMG = MOC = POC = GOC = MPF = 0

function calcularMG(){
    let moles = []
    let costos = []

    VAC = $id('VAC').value
    GG = $id('GG').value
    PMG = reactivos.C3H8NO5P.pm

    MG = 0

    //Moles de Glifosato
    if(VAC != undefined && GG != undefined){
        MG = redondeo((GG * VAC) / PMG, 6)
        moles.push(MG)
        $id('MG').value = MG
    }

    //Moles de CaC2O4
    MOC = redondeo(MG / 10, 6)
    moles.push(MOC)
    $id('MOC').value = MOC
    POC = reactivos.CaC2O4.pm
    GOC = MOC * POC
    CGOC = .6

    //costo del CaC2O4
    COCT = redondeo(GOC * CGOC, 3)
    costos.push(COCT)
    $id('COCT').value = `$${COCT}` 

    //Moles Fe02
    MPF = MG
    moles.push(MPF)
    PMF = reactivos.FeO2.pm
    GOF = MPF * PMF

    //Costo del FeO2
    COFT = redondeo(GOF * .4, 3)
    costos.push(COFT)
    $id('COFT').value = `$${COFT}`
    
    //Moles H2O2
    MPH = MG
    moles.push(MPH)
    GPH = MPH * reactivos.H2O2.pm

    //Costo de H2O2
    COCT2 = redondeo(GPH * .11, 3)
    costos.push(COCT2)
    $id('COCT2').value = `$${COCT2}`


    TOTAL = COCT + COFT + COCT2
    $id('CR').value = `$${TOTAL}`

    //refresh de las graficas
    chartContaminante.setData(moles)
    chartReactivos.setData(costos)
}



function redondeo(numero, decimales)
{
    var flotante = parseFloat(numero);
    var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
    return resultado;
}