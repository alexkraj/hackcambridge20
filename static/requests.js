// time, total energy of the house, total of each appliance,,,,

var arr = ['f_fridge','f_heating','f_television']

function start_up(val){
    TESTER = document.getElementById('tester');
    p_fridge = document.getElementById('tester');
    p_heating = document.getElementById('tester');
    p_television = document.getElementById('tester');
    f_fridge = document.getElementById('tester');
    f_heating = document.getElementById('tester');
    f_television = document.getElementById('tester');
    var trace1 = {
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
    var fridge_previous = [trace1];
    var heating_previous = [trace2];
    var TV_previous = [trace3];
    
    var trace4 = {
        x: val.future.time,
        y: val.future.fridge,
        name: "Fridge (future)"
    };
    var trace5 = {
        x: val.future.time,
        y: val.future.heating,
        name: "Heating (future)"
    };
    var trace6 = {
        x: val.future.time,
        y: val.future.TV ,
        name: "Television (future)"
    };
    var fridge_future = [trace4];
    var heating_future = [trace5];
    var TV_future = [trace6];

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
    // var data = [trace1,trace2,trace3,trace4,trace5,trace6];
    // Plotly.newPlot(TESTER,);

    var a = Plotly.plot( TESTER, fridge_previous, layout, {responsive: true} );
    var b = Plotly.plot( TESTER, heating_previous, layout, {responsive: true} );
    var c = Plotly.plot( TESTER, TV_previous, layout, {responsive: true} );
    var d = Plotly.plot( TESTER, fridge_future, layout, {responsive: true} );
    var e = Plotly.plot( TESTER, heating_future, layout, {responsive: true} );
    var f = Plotly.plot( TESTER, TV_future, layout, {responsive: true} );


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