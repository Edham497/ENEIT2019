module.exports = {
    color: [
        '#b71c1ca5',
        '#2962ffa5',
        '#ffd600a5',
        '#00bfa5a5',
        '#6200eaa5',
        '#ff6d00a5',
        '#00c853a5'
    ],
    borderC:[
        '#b71c1c05',
        '#2962ff05',
        '#ffd60005',
        '#00bfa505',
        '#6200ea05',
        '#ff6d0005',
        '#00c85305'
    ],
    borderW: 1,
    label: 'Reactivos',
    options:{
        title: {
            display: true,
            text: 'Calculo de Reactivos'
        },
        animation:{
            duration: 1000,
            onProgress: function(animation) {
                progress.value = animation.currentStep / animation.numSteps;
            },
            onComplete: function() {
                window.setTimeout(function() {
                    progress.value = 0;
                }, 1000);
            }
        }
    }
}

