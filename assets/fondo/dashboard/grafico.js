let canvasUno=document.getElementById("grafico_1");
canvasUno.getContext("2d");
let chart= new Chart(canvasUno,{
    type:"line",
    data:{
        labels:["1-4","6-4","11-4","16-4","21-4","26-4","31-4"], //Valores en el eje x
        datasets:[
            {
                label:"",
                backgroundColor: "rgb(88,181,251)",
                borderColor:"",
                data:[150,200,750,500,250,700,170],
                fill: {
                    target: 'origin',
                },
                cubicInterpolationMode:'monotone'
            }
        ]
    },
    options: {
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            }
          }],
          y: {
            suggestedMin: 100,
            suggestedMax: 1200,
            grid: {
              drawBorder: false
            }
          }
        }
    }    
})