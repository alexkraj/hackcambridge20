// time, total energy of the house, total of each appliance,,,,

var arr = ['f_fridge','f_heating','f_television']

function start_up(val){
    p_fridge = document.getElementById('tester');
    p_heating = document.getElementById('tester');
    p_television = document.getElementById('tester');
    f_fridge = document.getElementById('tester');
    f_heating = document.getElementById('tester');
    f_television = document.getElementById('tester');
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

    Plotly.plot( p_fridge, fridge_previous, layout, {responsive: true} );
    Plotly.plot( p_heating, heating_previous, layout, {responsive: true} );
    Plotly.plot( p_television, TV_previous, layout, {responsive: true} );
    Plotly.plot( f_fridge, fridge_future, layout, {responsive: true} );
    Plotly.plot( f_heating, heating_future, layout, {responsive: true} );
    Plotly.plot( f_television, TV_future, layout, {responsive: true} );

}

function populateGraph(){
    event.preventDefault()
}

function getData(){
    event.preventDefault()
}

function sendPrediction(){
    event.preventDefault();
    var network_link = document.getElementById("neural_ID").value;
    var time_decrese = document.getElementById("decrease_range").value;
    console.log(network_link,time_decrese);
    // deleteTrace(arr[network_link]);
   
}

function deleteTrace(divId){
    Plotly.deleteTraces(divId, 0);
};

function updateGraph(){
    event.preventDefault();
    sendPrediction(); 
    console.log("clicked update");
}