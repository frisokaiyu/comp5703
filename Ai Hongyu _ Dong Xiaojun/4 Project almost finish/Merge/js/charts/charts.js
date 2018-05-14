/* --------------------------------------------------------
 Flot Charts
 -----------------------------------------------------------*/



/* --------------------------------------------------------
 Sparkline
 -----------------------------------------------------------*/
(function(){
    //Line

    var BTC = new Array(4,6,3,9,7,4,5,3,9);
    var ETH = new Array(1,2,5,3,7,8,10);
    var LTC = new Array(3,2,7,2,3,6,8,2,1,3,4);

    $("#stats-line-2").sparkline(BTC, {
        type: 'line',
        width: '100%',
        height: '65',
        lineColor: 'rgba(255,255,255,0.4)',
        fillColor: 'rgba(0,0,0,0.2)',
        lineWidth: 1.25,
    });

    $("#stats-line-3").sparkline(ETH, {
        type: 'line',
        height: '65',
        width: '100%',
        lineColor: 'rgba(255,255,255,0.4)',
        lineWidth: 1.25,
        fillColor: 'rgba(0,0,0,0.2)',


    });

    $("#stats-line-4").sparkline(LTC, {
        type: 'line',
        height: '65',
        width: '100%',
        lineColor: 'rgba(255,255,255,0.4)',
        lineWidth: 1.25,
        fillColor: 'rgba(0,0,0,0.2)',


    });

    $("#stats-line-5").sparkline([10,9,12,10,9,13,11,12,11,10,12], {
        type: 'line',
        height: '65',
        width: '80',
        lineColor: 'rgba(255,255,255,0.4)',
        fillColor: 'rgba(0,0,0,0.2)',
        lineWidth: 1.25,
        barWidth: 5,
        barColor: '#C5CED6',

    });

    $("#stats-line-6").sparkline([7,2,7,5,7,6,5,6,3,5,9,8,6,7,4], {
        type: 'line',
        height: '65',
        width: '80',
        lineColor: 'rgba(255,255,255,0.85)',
        fillColor: 'rgba(0,0,0,0.2)',
        barWidth: 5,
        barColor: '#C5CED6',
        lineWidth: 1.25,
    });

    //Tristate
    $("#stats-tristate").sparkline([2,2,-2,2,-2,-2,2,2,2,2,2], {
        type: 'tristate',
        width: '100%',
        height: '52',
        barWidth: 4,
        barSpacing: 3,
        zeroAxis: false,
        posBarColor: '#fff',
        negBarColor: '#fff',
        zeroBarColor: '#fff',
        lineWidth: 0,
        lineColor: 'rgba(0,0,0,0)',
    });
})();



/* --------------------------------------------------------
 Map
 -----------------------------------------------------------*/
$(function(){
    //USA Map
    if($('#usa-map')[0]) {
	$('#usa-map').vectorMap({
            map: 'us_aea_en',
            backgroundColor: 'rgba(0,0,0,0.25)',
            regionStyle: {
                initial: {
                    fill: 'rgba(255,2552,255,0.7)'
                },
                hover: {
                    fill: '#fff'
                },
            },

            zoomMin:0.88,
            focusOn:{
                x: 5,
                y: 1,
                scale: 1.8
            },
            markerStyle: {
                initial: {
                    fill: '#e80000',
                    stroke: 'rgba(0,0,0,0.4)',
                    "fill-opacity": 2,
                    "stroke-width": 7,
                    "stroke-opacity": 0.5,
                    r: 4
                },
                hover: {
                    stroke: 'black',
                    "stroke-width": 2,
                },
                selected: {
                    fill: 'blue'
                },
                selectedHover: {
                }
            },
            zoomOnScroll: false,

            markers :[
                {latLng: [33, -86], name: 'Sample Name 1'},
                {latLng: [33.7, -93], name: 'Sample Name 2'},
                {latLng: [36, -79], name: 'Sample Name 3'},
                {latLng: [29, -99], name: 'Sample Name 4'},
                {latLng: [33, -95], name: 'Sample Name 4'},
                {latLng: [31, -92], name: 'Liechtenstein'},
            ],
        });
    }

    //World Map
    if($('#world-map')[0]) {
	$('#world-map').vectorMap({
            map: 'world_mill_en',
            backgroundColor: 'rgba(0,0,0,0)',
            series: {
                regions: [{
                    scale: ['#C8EEFF', '#0071A4'],
                    normalizeFunction: 'polynomial'
                }]
            },
            regionStyle: {
                initial: {
                    fill: 'rgba(255,2552,255,0.7)'
                },
                hover: {
                    fill: '#fff'
                },
            },
        });
    }
});
