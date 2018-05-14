/**
 * Generate random chart data
 */
var chartData1 = [];
var chartData2 = [];
var chartData3 = [];

function generateChartData() {
  var firstDate = new Date();
  firstDate.setDate( firstDate.getDate() - 500 );
  firstDate.setHours( 0, 0, 0, 0 );

  for ( var i = 0; i < 500; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setDate( newDate.getDate() + i );

    var a1 = Math.round( Math.random() * ( 40 + i ) ) + 100 + i;
    var b1 = Math.round( Math.random() * ( 1000 + i ) ) + 500 + i * 2;

    var a2 = Math.round( Math.random() * ( 100 + i ) ) + 200 + i;
    var b2 = Math.round( Math.random() * ( 1000 + i ) ) + 600 + i * 2;

    var a3 = Math.round( Math.random() * ( 100 + i ) ) + 200;
    var b3 = Math.round( Math.random() * ( 1000 + i ) ) + 600 + i * 2;

    chartData1.push( {
      "date": newDate,
      "value": a1,
      "volume": b1
    } );
    chartData2.push( {
      "date": newDate,
      "value": a2,
      "volume": b2
    } );
    chartData3.push( {
      "date": newDate,
      "value": a3,
      "volume": b3
    } );
  }
}

generateChartData();

/**
 * Create the chart
 */
var chart = AmCharts.makeChart( "liveChartDiv", {
  "type": "stock",
  "theme": "dark",

  // This will keep the selection at the end across data updates
  "glueToTheEnd": true,

  // Defining data sets
  "dataSets": [ {
    "title": "Bitcoin",
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    }, {
      "fromField": "volume",
      "toField": "volume"
    } ],
    "dataProvider": chartData1,
    "categoryField": "date"
  }, {
    "title": "Ethereum",
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    }, {
      "fromField": "volume",
      "toField": "volume"
    } ],
    "dataProvider": chartData2,
    "categoryField": "date"
  }, {
    "title": "Litecoin",
    "fieldMappings": [ {
      "fromField": "value",
      "toField": "value"
    }, {
      "fromField": "volume",
      "toField": "volume"
    } ],
    "dataProvider": chartData3,
    "categoryField": "date"
  } ],

  // Panels
  "panels": [ {
    "showCategoryAxis": true,
    "title": "Value",
    "percentHeight": 60,
    "stockGraphs": [ {
      "id": "g1",
      "valueField": "value",
      "comparable": true,
      "compareField": "value",
	  "balloonText": "[[title]]:<b> €[[value]]</b>",
	  "compareGraphBalloonText": "[[title]]:<b> €[[value]]</b>"
    } ],
    "stockLegend": {
		"switchable": false,
		"valueTextRegular": "€[[value]]"
	},
  } ],

  "panelsSettings": {
	"color": "#333",
	"plotAreaFillColors": "#000",
	"plotAreaFillAlphas": 0.5,
	"marginLeft": 60,
	"marginTop": 5,
	"marginBottom": 5
  },

  "chartScrollbarSettings": {
	  "enabled": false
  },

  "categoryAxesSettings": {
	"dashLength": 5,
    "axisColor": "#fff",
    "color": "#fff",
    "fillAlpha": 0,
    "equalSpacing": true,
    "gridColor": "#fff",
    "gridAlpha": 0.5
  },

  "valueAxesSettings": {
	"dashLength": 5,
	"axisColor": "#fff",
    "color": "#fff",
    "fillAlpha": 0,
    "gridColor": "#fff",
    "gridAlpha": 0.5,
    "inside": false,
    "showLastLabel": true,
    "usePrefixes": true,
    "unit": "€",
    "unitPosition": "left"
  },

  "chartCursorSettings": {
    "valueBalloonsEnabled": true,
    "fullWidth": true,
    "cursorAlpha": 0.1,
    "valueLineBalloonEnabled": true,
    "valueLineEnabled": true,
    "valueLineAlpha": 0.5
  },

  "legendSettings": {
	"color": "#fff"
  },

  // Data Set Selector
  "dataSetSelector": {
    "position": "left",
	"selectText": "Choose a currency"
  },

  // Event listeners
  "listeners": [ {
    "event": "rendered",
    "method": function( event ) {
      chart.mouseDown = false;
      chart.containerDiv.onmousedown = function() {
        chart.mouseDown = true;
      }
      chart.containerDiv.onmouseup = function() {
        chart.mouseDown = false;
      }
    }
  } ]
} );

/**
 * Set up interval to update the data periodically
 */
setInterval( function() {

  // if mouse is down, stop all updates
  if ( chart.mouseDown )
    return;

  // add new datapoint at the end
  var newDate = new Date( chartData1[ chartData1.length - 1 ].date );
  newDate.setDate( newDate.getDate() + 1 );

  var i = chartData1.length;

  var a1 = Math.round( Math.random() * ( 40 + i ) ) + 100 + i;
  var b1 = Math.round( Math.random() * ( 1000 + i ) ) + 500 + i * 2;

  var a2 = Math.round( Math.random() * ( 100 + i ) ) + 200 + i;
  var b2 = Math.round( Math.random() * ( 1000 + i ) ) + 600 + i * 2;

  var a3 = Math.round( Math.random() * ( 100 + i ) ) + 200;
  var b3 = Math.round( Math.random() * ( 1000 + i ) ) + 600 + i * 2;

  chart.dataSets[ 0 ].dataProvider.push( {
    date: newDate,
    value: a1,
    volume: b1
  } );
  chart.dataSets[ 1 ].dataProvider.push( {
    date: newDate,
    value: a2,
    volume: b2
  } );
  chart.dataSets[ 2 ].dataProvider.push( {
    date: newDate,
    value: a3,
    volume: b3
  } );

  chart.validateData();
}, 5000 );
