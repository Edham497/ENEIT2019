const elementos = require('./elementos.json')

class reactivo{
    constructor(nombre, formula, pm, costo, grs){
        this.nombre = nombre
        this.formula = formula
        this.pm = pm
        this.cpg = Math.round((costo/grs)*100)/100
        this.costo = costo
        this.grs =  grs
    }
    print(){
        return `${this.nombre}\n${this.formula}\n${this.pm}\n${this.cpg}\n${this.costo}\n${this.grs}`
    }
    create(){
        let e = createElement('div',{
            className: 'reactivo',
        })

        e.appendChild(createElement('div',{
            className: 'info',
            id: 'formula',
            innerHTML: this.formula
        }))
        e.appendChild(createElement('div',{
            className: 'info',
            id: 'nombre',
            innerHTML: this.nombre
        }))
        e.appendChild(createElement('div',{
            className: 'info',
            id: 'pm',
            innerHTML: this.pm
        }))
        e.appendChild(createElement('div',{
            className: 'info',
            id: 'costo',
            innerHTML: this.costo
        }))

        return e
    }
}

module.exports = {
    elementos,
    reactivos:
    {
        FeO2:       new reactivo('Peroxido de Hierro II',               'FeO2',     87.843,     899,    2270),
        FeSO4:      new reactivo('Sulfato Ferroso',                     'FeSO4',    151.906,    49,     1000),
        CaC2O4:     new reactivo('Oxalato de Calcio',                   'CaC2O4',   128.096,    3000,   5000),
        Na2C2O4:    new reactivo('Oxalato de Sodio',                    'Na2C2O4',  133.998,    157,    100),
        C2H8N2O4:   new reactivo('Oxalato de Amonio',                   'C2H8N2O4', 124.0952,   140,    1000),
        H2O2:       new reactivo('Peroxido de Hidrogeno 35%',           'H2O2',     34.0138,    550,    5000),
        C3H8NO5P:   new reactivo('Glifosato (N-fosfonometil glicina)',  'Glifosato(C3H8NO5P)', 169.0722,   165,    1000)
    }
}

// Object.keys(reactivos).forEach(e =>{
//     console.log(reactivos[e])
// })

// Object.keys(elementos).forEach(e =>{
//     console.log(`${e}: ${elementos[e]}`)
// })