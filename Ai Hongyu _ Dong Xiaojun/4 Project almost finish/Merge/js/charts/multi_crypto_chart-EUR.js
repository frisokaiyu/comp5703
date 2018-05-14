var bitData = [];
var ethData = [];
var litData = [];

generateCryptoData();

function generateCryptoData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 500);

    for (var i = 0; i < 500; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        var bitValue  = Math.round( Math.random() * ( 100 + i ) ) + 100 + i;
        var ethValue = Math.round( Math.random() * ( 100 + i ) ) + 100 + i;
        var litValue = Math.round( Math.random() * ( 100 + i ) ) + 100 + i;

        bitData.push({
            "date": newDate,
            "value": bitValue
        });
        ethData.push({
            "date": newDate,
            "value": ethValue
        });
        litData.push({
            "date": newDate,
            "value": litValue
        });
    }
}

var chart = AmCharts.makeChart("multi_crypto_chart", {
    "type": "stock",
    "theme": "dark",
	"dataSets": [ {
	      "title": "Bitcoin",
	      "fieldMappings": [ {
	        "fromField": "value",
	        "toField": "value"
	      } ],
	      "dataProvider": bitData,
	      "categoryField": "date"
	    }, {
	      "title": "Etheurum",
	      "fieldMappings": [ {
	        "fromField": "value",
	        "toField": "value"
	      } ],
	      "dataProvider": ethData,
	      "categoryField": "date"
	    }, {
	      "title": "Litecoin",
	      "fieldMappings": [ {
	        "fromField": "value",
	        "toField": "value"
	      } ],
	      "dataProvider": litData,
	      "categoryField": "date"
	    }
	],
	"panels": [ {
	    "showCategoryAxis": true,
	    "percentHeight": 100,
	    "stockGraphs": [ {
	      	"id": "g1",
	      	"valueField": "value",
	      	"comparable": true,
	      	"compareField": "value",
	      	"balloonText": "[[title]]:<b> €[[value]]</b>",
	      	"compareGraphBalloonText": "[[title]]:<b> €[[value]]</b>"
	    } ],
	    "stockLegend": {
	      	"periodValueTextComparing": "[[percents.value.close]]%",
	      	"periodValueTextRegular": "€[[value.close]]"
	    },
  	  	"chartCursor": {
  			"color": "#fff",
  			"cursorColor": "#fff",
  			"cursorAlpha": 0.5,
  			"categoryBalloonColor": "#f00",
  			"valueLineEnabled": true,
  			"valueLineBalloonEnabled": true
  	  	}
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
	    "graph": "g1",
		"backgroundColor": "#555",
		"graphFillColor": "#fff",
		"graphFillAlpha": 0.5,
		"selectedBackgroundColor": "#f00",
		"selectedBackgroundAlpha": 0.5,
    "dragIconHeight": 0,
    "dragIconWidth": 0
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

	  "periodSelector": {
	    "position": "left",
	    "periods": [ {
	      "period": "MM",
	      "selected": true,
	      "count": 1,
	      "label": "1 month"
	    }, {
	      "period": "MM",
	      "count": 3,
	      "label": "3 months"
	    }, {
	      "period": "YYYY",
	      "count": 1,
	      "label": "1 year"
	    }]
	  },

	  "dataSetSelector": {
	    "position": "left",
		  "selectText": "Choose a cryptocurrency"
	  },

});
