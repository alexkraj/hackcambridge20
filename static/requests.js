function start_up(val){
    TESTER = document.getElementById('tester');
    console.log(val.previous.TV);
    var trace = {
        x: [...Array(336).keys()],
        y: val.previous.fridge,
        name: "Fridge (history)"
    };
    var trace2 = {
        x: [...Array(336).keys()],
        y: val.previous.heating,
        name: "Heating (history)"
    };
    var trace3 = {
        x: [...Array(336).keys()],
        y: val.previous.TV ,
        name: "Television (history)"
    };
    var fridge_previous = [trace];
    var heating_previous = [trace2];
    var TV_previous = [trace3];

    var layout = {
        font: {
            family: 'Amatic SC',
            size: 18,
            color: '#000000'
        },
        autosize: true,
        plot_bgcolor:"#d9d9d9",
        paper_bgcolor:"#d9d9d9",
        xaxis: {
            title: {
                text: 'Days'
            },
            tick0: 0,
            dtick: 10, 
            ticklen: 8,
            showline: true,
            gridcolor: '#454545',
            linecolor: '#000000'
        },
        yaxis: {
            title: {
                text: 'Usage'
            },
            tick0: 0,
            ticklen: 8,
            showline: true,
            gridcolor: '#454545',
            linecolor: '#000000'
        },
        margin : { 
            t: 0 
        }
    }

    Plotly.plot( TESTER, fridge_previous, layout, {responsive: true} );
    Plotly.plot( TESTER, heating_previous, layout, {responsive: true} );
    Plotly.plot( TESTER, TV_previous, layout, {responsive: true} );
}


function populateGraph(){
    event.preventDefault()
}

function getData(){
    event.preventDefault()
}

function sendPrediction(item, value_decrease){
    event.preventDefault()
}

function updateGraph(){
    event.preventDefault();
    console.log("clicked update");
}