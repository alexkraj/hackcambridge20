function start_up(val){
    TESTER = document.getElementById('tester');
    console.log(val.previous.TV);
    var x_a = [...Array(168).keys()];
    var x_b = [...Array(168).keys()];
    for (var i=0; i<168; i++){
        x_b[i] = 168+i; 
    }
    var trace = {
        x: x_a,
        y: val.previous.fridge,
        name: "Fridge (history)"
    };
    var trace2 = {
        x: x_a,
        y: val.previous.heating,
        name: "Heating (history)"
    };
    var trace3 = {
        x: x_a,
        y: val.previous.TV ,
        name: "Television (history)"
    };
    var fridge_previous = [trace];
    var heating_previous = [trace2];
    var TV_previous = [trace3];
    
    var trace = {
        x: x_b,
        y: val.future.fridge,
        name: "Fridge (future)"
    };
    var trace2 = {
        x: x_b,
        y: val.future.heating,
        name: "Heating (future)"
    };
    var trace3 = {
        x: x_b,
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

    Plotly.plot( TESTER, fridge_future, layout, {responsive: true} );
    Plotly.plot( TESTER, heating_future, layout, {responsive: true} );
    Plotly.plot( TESTER, TV_future, layout, {responsive: true} );
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