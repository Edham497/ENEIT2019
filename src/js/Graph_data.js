let _backgroundColor= [
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 99, 132, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)'
    // '#00bfa5dd'
]
let _borderColor = [
    'rgba(54, 162, 235, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
    // '#00bfa5'
]
let _options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}

let contaminantes = {
    type: 'radar',
    data: {
        labels: ['C3H8NO5P', 'CaC2O4', 'FeO2', 'H2O2'],
        datasets: [{
            label: '# de Moles',
            data: [0,0,0,0],
            backgroundColor: _backgroundColor,
            borderColor: _borderColor,
            borderWidth: 1
        }]
    }
    // options: _options
}

let catalizador = {
    type: 'pie',
    data: {
        labels: ['CaC2O4', 'FeO2', 'H2O2'],
        datasets: [{
            label: 'Costos de los Reactivos',
            data: [0,0,0],
            backgroundColor: _backgroundColor,
            borderColor: _borderColor,
            borderWidth: 1
        }]
    },
    options: _options
}

let reactivo1 = {
    type: 'pie',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
            label: 'numbers',
            data: [1,1,1,1,1,1,1],
            backgroundColor: _backgroundColor,
            borderColor: _borderColor,
            borderWidth: 1
        }]
    }
}

let reactivo2 = {
    type: 'radar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
            label: 'numbers',
            data: [1,1,1,1,1,1,1],
            backgroundColor: _backgroundColor,
            borderColor: _borderColor,
            borderWidth: 1
        }]
    }
}
module.exports = {
    contaminantes,
    catalizador,
    reactivo1,
    reactivo2
}