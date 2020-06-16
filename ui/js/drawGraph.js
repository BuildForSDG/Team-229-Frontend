window.addEventListener('load', function (){
    if($('#graphs')[0]){
        drawGraphs();
    }
}, false);
function drawGraphs(){
    var labels = ["0-10","11-15","16-20","21-26","27-32","33-38","39-44","45-50","51-56","57-100"];
    var canvas = document.createElement('canvas');
    canvas.style.maxWidth = '100%';
    $('#graphs')[0].appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Literacy by age group',
                data: [0,0,0,0,0,0,0,0,0,0],
                backgroundColor: bg[0],
                borderColor: bd[0],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    // canvas.removeAttribute('width');
    // canvas.removeAttribute('height');
    window.setTimeout(function (){
        myChart.data.datasets[0].data = [360,560,1280,2210,2920,1040,920,2040,394,230];
        myChart.update();
    }, 1000);
}

var bg  = [
    'rgba(255, 71, 0,0.3)',
    'rgba(0, 190, 137,0.4)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
var bd = [
    'rgba(255, 71, 0,1)',
    'rgba(0, 190, 137,1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];
