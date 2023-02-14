require.config({
    paths: {
        plotly: 'https://cdn.plot.ly/plotly-latest.min'
    }
});

require(['plotly'], function(Plotly) {
    var myData = window.Spotfire.DataView.data().toRows();

    // Transforma os dados do Spotfire em um objeto que o Plotly.js possa usar, e armazena o objeto em plotlyData
    var plotlyData = {
        x: [],
        y: [],
        type: 'scatter'
    };

    for (var i = 0; i < myData.length; i++) {
        plotlyData.x.push(myData[i].formattedValue("Column X"));
        plotlyData.y.push(myData[i].value("Column Y"));
    }

    var layout = {
        title: 'Plotly Scatter Plot'
    };

    // Cria o gráfico Plotly
    Plotly.newPlot('plotlyDiv', [plotlyData], layout);

    // Define uma função para lidar com eventos de clique no gráfico
    function handleClick(data) {
        // Encontra o índice da linha de dados correspondente ao ponto clicado
        var index = data.points[0].pointNumber;

        // Obtém o valor do campo de ID da linha de dados
        var id = myData[index].value("ID");

        // Chama o método de marcação do Spotfire para marcar a linha correspondente
        window.Spotfire.Markings.set("My Marking", [id]);
    }

    // Registra a função de clique para o gráfico Plotly
    Plotly.newPlot('plotlyDiv', [plotlyData], layout).on('plotly_click', handleClick);
});
