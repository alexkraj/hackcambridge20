TESTER = document.getElementById('tester');
var trace = {
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] 
};
var data = [trace];
var layout = {
    autosize: true,
    plot_bgcolor:"#212121",
    paper_bgcolor:"#212121",
    xaxis: {
        title: {
            text: 'time', //orrrr ?????????
        },
        tick0: 0,
        // something to change --> 
        dtick: 1, // <--
        ticklen: 8,
        showline: true,
        gridcolor: '#454545',
        linecolor: '#f4c638'
    },
    yaxis: {
        title: {
            text: 'Usage', // % or watts ??????????????
        },
        tick0: 0,
        ticklen: 8,
        showline: true,
        gridcolor: '#454545',
        linecolor: 'white'
    },
    margin : { 
        t: 0 
    }
}

Plotly.plot( TESTER, data, layout, {responsive: true} );