/**
 * Generate random chart data
 */
var BitcoinData = [];

function generateChartData() {
  var firstDate = new Date();
  firstDate.setDate( firstDate.getDate() - 200 );

  for ( var i = 0; i < 200; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setDate( newDate.getDate() + i );

	var open1 = Math.round( Math.random() * ( 100 ) + 100 );
	var close1 = open1 + Math.round( Math.random() * ( 50 ) - Math.random() * 30 );
	var low1 = (open1 < close1 ? open1 - Math.round( Math.random() * 15 ) : close1 - Math.round( Math.random() * 15 ));
	var high1 = (open1 < close1 ? close1 + Math.round( Math.random() * 15 ) : open1 + Math.round( Math.random() * 15 ));
	var volume1 = Math.round( Math.random() * ( 1000 + i ) ) + 100 + i;
    var value1 = Math.round( Math.random() * 50 );

    BitcoinData.push( {
      "date": newDate,
      "open": open1,
      "close": close1,
      "low": low1,
      "high": high1,
	  "volume": volume1,
	  "value": value1
    } );
  }
}

generateChartData();

/**
 * Create the chart
 */
var chart = AmCharts.makeChart( "liveChart", {
  "type": "stock",
  "theme": "none",

  // This will keep the selection at the end across data updates
  "glueToTheEnd": true,

  // Defining data sets
  "dataSets": [
	{
    "title": "ETH/USD",
	"fieldMappings": [ {
	  	"fromField": "open",
	  	"toField": "open"
	  }, {
	  	"fromField": "high",
	  	"toField": "high"
	  }, {
	  	"fromField": "low",
	  	"toField": "low"
	  }, {
	  	"fromField": "close",
	  	"toField": "close"
	  }, {
      	"fromField": "volume",
      	"toField": "volume"
      }, {
      	"fromField": "value",
      	"toField": "value"
      } ],
    "dataProvider": BitcoinData,
	"color": "#00f",
    "categoryField": "date"
  	}
  ],

  // Panels
  "panels": [ {
    "title": "Cryptocurrency",
    "percentHeight": 70,
	"showCategoryAxis": false,
	"valueAxes": [ {
      "id": "column1",
      "color": "#000",
      "dashLength": 5
    } ],
    "stockGraphs": [ {
		"type": "candlestick",
		"id": "graph1",
		"balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",

		"openField": "open",
		"closeField": "close",
		"highField": "high",
		"lowField": "low",
		"valueField": "close",

		"lineColor": "#fff",
        "fillColors": "#fff",
        "negativeLineColor": "#db4c3c",
        "negativeFillColors": "#db4c3c",
        "fillAlphas": 1,

		"columnWidth": 0.5,
		"useDataSetColors": false,
		"showBalloon": true,
		"proCandlesticks": true,
		"comparable": true,
      	"compareField": "value"
    } ],
    "stockLegend": {
		"switchable": false,
		"valueTextRegular": "Close: $[[close]]"
	},
	"chartCursor": {
		"color": "#fff",
		"cursorColor": "#fff",
		"cursorAlpha": 0.5,
		"categoryBalloonColor": "#f00",
		"valueLineEnabled": true,
		"valueLineBalloonEnabled": true
	}
  }, {
      "percentHeight": 30,
      "showCategoryAxis": true,
      "valueAxes": [ {
		"id": "column2",
      	"color": "#000",
        "dashLength": 5
      } ],
      "categoryAxis": {
		"id": "row2",
      	"parseDates": true,
	  	"minPeriod": "DD",
	  	"color": "#000",
        "dashLength": 5
      },
      "stockGraphs": [ {
        "valueField": "volume",
        "type": "column",
        "showBalloon": false,
		"lineColor": "#fff",
        "fillColors": "#fff",
        "negativeLineColor": "#db4c3c",
        "negativeFillColors": "#db4c3c",
		"lineAlpha": 0,
        "fillAlphas": 1,
		"useDataSetColors": false
	  } ],
	  "chartCursor": {
		"color": "#fff",
		"cursorColor": "#fff",
		"cursorAlpha": 0.5,
		"categoryBalloonColor": "#f00",
		"valueLineEnabled": true,
		"valueLineBalloonEnabled": true
	  }
    } ],

  // Panel settings
  "panelsSettings": {
	"color": "#333",
	"plotAreaFillColors": "#000",
	"plotAreaFillAlphas": 0.5,
	"marginLeft": 60,
	"marginTop": 5,
	"marginBottom": 5
  },
  "categoryAxesSettings": {
	"axisColor": "#fff",
	"color": "#fff",
	"fillAlpha": 0,
	"equalSpacing": true,
	"gridColor": "#fff",
	"gridAlpha": 0.5
  },
  "valueAxesSettings": {
	"axisColor": "#fff",
	"color": "#fff",
	"fillAlpha": 0,
	"gridColor": "#fff",
	"gridAlpha": 0.5,
	"inside": false,
	"showLastLabel": true,
	"usePrefixes": true,
	"unit": "$",
	"unitPosition": "left"
  },
  "chartCursorSettings": {
	"valueLineEnabled": true,
	"valueLineBalloonEnabled": true,
	"valueBalloonsEnabled": true,
    "fullWidth": true,
    "cursorAlpha": 0.1,
    "valueLineAlpha": 0.5
  },
  "legendSettings": {
	"color": "#fff"
  },
  "chartScrollbarSettings": {
      "enabled": false
  }
} );

/**
 * Set up interval to update the data periodically
 */
setInterval( function() {

  // remove datapoint from the beginning
  BitcoinData.shift();

  // add new datapoint at the end
  var i = BitcoinData.length;
  var newDate = new Date( BitcoinData[ i - 1 ].date );
  newDate.setDate( newDate.getDate() + 1 );

  var open1 = Math.round( Math.random() * ( 100 ) + 100 );
  var close1 = open1 + Math.round( Math.random() * ( 50 ) - Math.random() * 30 );
  var low1 = (open1 < close1 ? open1 - Math.round( Math.random() * 15 ) : close1 - Math.round( Math.random() * 15 ));
  var high1 = (open1 < close1 ? close1 + Math.round( Math.random() * 15 ) : open1 + Math.round( Math.random() * 15 ));
  var volume1 = Math.round( Math.random() * ( 1000 + i ) ) + 100 + i;
  var value1 = Math.round( Math.random() * 50 );

  BitcoinData.push( {
    date: newDate,
    open: open1,
    close: close1,
	low: low1,
	high: high1,
	volume: volume1,
	value: value1
  } );

  chart.validateData();
}, 1000 );
