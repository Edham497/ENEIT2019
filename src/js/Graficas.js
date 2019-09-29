const Chart = require('chart.js')

module.exports = class Grafica{
    constructor(canvas, conf){
        this.grafica
        this.conf = conf
        this.data = [1,1,1,1,1,1,1]
        this.ctx = canvas.getContext('2d')
        this.initGrafica()
    }
    
    initGrafica(){
        this.grafica = new Chart(this.ctx, this.conf)
    }

    updateUI(v){
        this.alterData(v)
        this.updateGraphData()
    }

    updateGraphData() {
        let i=0;
        this.grafica.data.datasets.forEach(dataset => {
            dataset.data = dataset.data.map(() => {
                return this.data[i++];
            });
        });
        this.grafica.update();
    }

    //Genera un valor aleatorio en funcion al parametro
    randomScalingFactor(factor){
        return Math.floor(Math.random() * factor+factor)
    }

    //asigna valores al arreglo de la grafica
    alterData(v){
        this.data[0] = v
        for(let i = 1; i < this.data.length; i++)
            this.data[i] = this.randomScalingFactor(v)
    }
    
}