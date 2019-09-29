let _backgroundColor= [
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
]
let _borderColor = [
    'rgba(54, 162, 235, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
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
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [1,1,1,1,1,1,1],
            backgroundColor: _backgroundColor,
            borderColor: _borderColor,
            borderWidth: 1
        }]
    },
    options: _options
}

let catalizador = {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{
            label: 'numbers',
            data: [1,1,1,1,1,1,1],
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
    },
    options: _options
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
    },
    options: _options
}
module.exports = {
    contaminantes,
    catalizador,
    reactivo1,
    reactivo2
}