// time, total energy of the house, total of each appliance,,,,

function start_up(val){
    TESTER = document.getElementById('tester');
    console.log(val.previous);
    var trace = {
        x: val.previous.time,
        y: val.previous.fridge,
        name: "Fridge (history)"
    };
    var trace2 = {
        x: val.previous.time,
        y: val.previous.heating,
        name: "Heating (history)"
    };
    var trace3 = {
        x: val.previous.time,
        y: val.previous.TV ,
        name: "Television (history)"
    };
    var fridge_previous = [trace];
    var heating_previous = [trace2];
    var TV_previous = [trace3];
    
    var trace = {
        x: val.future.time,
        y: val.future.fridge,
        name: "Fridge (future)"
    };
    var trace2 = {
        x: val.future.time,
        y: val.future.heating,
        name: "Heating (future)"
    };
    var trace3 = {
        x: val.future.time,
        y: val.future.TV ,
        name: "Television (future)"
    };
    var fridge_future = [trace];
    var heating_future = [trace2];
    var TV_future = [trace3];

    var layout = {
        font: {
            family: 'Amatic SC',
            size: 18,
            color: '#ffffff'
        },
        autosize: true,
        plot_bgcolor:"#000000",
        paper_bgcolor:"#000000",
        xaxis: {
            title: {
                text: 'Days'
            },
            tick0: 0,
            dtick: 1, 
            ticklen: 8,
            showline: true,
            gridcolor: '#404040',
            linecolor: '#404040'
        },
        yaxis: {
            title: {
                text: 'Usage'
            },
            tick0: 0,
            ticklen: 8,
            showline: true,
            gridcolor: '#404040',
            linecolor: '#404040'
        },
        margin : { 
            t: 0 
        }
    }

    Plotly.plot( TESTER, fridge_previous, layout, {responsive: true} );
    Plotly.plot( TESTER, heating_previous, layout, {responsive: true} );
    Plotly.plot( TESTER, TV_previous, layout, {responsive: true} );
    Plotly.plot( TESTER, fridge_future, layout, {responsive: true} );
    Plotly.plot( TESTER, heating_future, layout, {responsive: true} );
    Plotly.plot( TESTER, TV_future, layout, {responsive: true} );

    TOTALS = document.getElementById('totals-graph');

    var trace = {
        x: val.future.time,
        y: val.future.fridge,
        name: "Fridge (future)"
    };
    var fridge_future = [trace];

    var layout = {
        font: {
            family: 'Amatic SC',
            size: 18,
            color: '#ffffff'
        },
        autosize: true,
        plot_bgcolor:"#000000",
        paper_bgcolor:"#000000",
        xaxis: {
            title: {
                text: 'Days'
            },
            tick0: 0,
            dtick: 1, 
            ticklen: 8,
            showline: true,
            gridcolor: '#404040',
            linecolor: '#404040'
        },
        yaxis: {
            title: {
                text: 'Usage'
            },
            tick0: 0,
            ticklen: 8,
            showline: true,
            gridcolor: '#404040',
            linecolor: '#404040'
        },
        margin : { 
            t: 0 
        }
    }

    //Plotly.plot( TOTALS, fridge_future, layout, {responsive: true} );

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