var chart = AmCharts.makeChart( "candle_chart", {
	"type": "stock",
	"theme": "none",

	// Defining datasets
	"dataSets": [ {
		"title": "BITCOIN",

		// Mapping file entry names with graph field names
		"fieldMappings": [ {
			"fromField": "Open",
			"toField": "Bit_open"
		}, {
			"fromField": "High",
			"toField": "Bit_high"
		}, {
			"fromField": "Low",
			"toField": "Bit_low"
		}, {
			"fromField": "Close",
			"toField": "Bit_close"
		}, {
	      	"fromField": "Volume",
	      	"toField": "Bit_volume"
	    } ],
		"compared": false,
		"categoryField": "Date",

		// Using "dataLoader" to feed data
		"dataLoader": {
			"url": "https://www.amcharts.com/wp-content/uploads/assets/stock/TXN.csv",
			"format": "csv",
			"showCurtain": true,
			"showErrors": true,
			"async": true,
			"reverse": true,
			"delimiter": ",",
			"useColumnNames": true
		}
	} ],
	"dataDateFormat": "YYYY-MM-DD",

	"panels": [ {
		"percentHeight": 70,
		"showCategoryAxis": false,
		"stockGraphs": [ {
			"type": "candlestick",
			"id": "g1",

			"openField": "Bit_open",
			"closeField": "Bit_close",
			"highField": "Bit_high",
			"lowField": "Bit_low",
			"valueField": "Bit_close",
			"proCandlesticks": true,

			"balloonText": "Open: $<b>[[open]]</b><br>Low: $<b>[[low]]</b><br>High: $<b>[[high]]</b><br>Close: $<b>[[close]]</b><br>",
			"showBalloon": true,

			"columnWidth": 0.7,
			"useDataSetColors": false,
			"lineColor": "#7f8da9",
        	"fillColors": "#7f8da9",
        	"negativeLineColor": "#db4c3c",
        	"negativeFillColors": "#db4c3c",
        	"fillAlphas": 1
		} ],
		"valueAxes": [ {
			"id": "column1",
			"dashLength": 5,
			"color": "#fff",
			"axisColor": "#fff",
			"titleColor": "#fff"
		} ],
		"categoryAxis": {
			"id": "row1",
			"parseDates": true,
			"minPeriod": "DD",
			"dashLength": 5,
			"color": "#fff",
			"axisColor": "#fff",
			"titleColor": "#fff"
		},
		"stockLegend": {
			"switchable": false,
			"valueTextRegular": "$[[close]]"
		},
		"chartCursor": {
			"color": "#000",
			"cursorColor": "#fff",
			"valueLineEnabled": true,
			"valueLineBalloonEnabled": true
		}
	}, {
      	"percentHeight": 30,
      	"showCategoryAxis": true,
      	"valueAxes": [ {
			"id": "column2",
        	"dashLength": 5,
			"color": "#fff",
			"axisColor": "#fff",
			"titleColor": "#fff"
     	 } ],
      	"categoryAxis": {
			"id": "row2",
      		"parseDates": true,
	  		"minPeriod": "DD",
        	"dashLength": 5,
			"color": "#fff",
			"axisColor": "#fff",
			"titleColor": "#fff"
      	},
      	"stockGraphs": [ {
        	"valueField": "Bit_close",
        	"type": "column",
        	"showBalloon": false,
			"lineColor": "#7f8da9",
        	"fillColors": "#7f8da9",
			"lineAlpha": 0,
        	"fillAlphas": 0.7,
			"useDataSetColors": false
	  	} ],
	  	"chartCursor": {
			"color": "#000",
			"cursorColor": "#fff",
			"valueLineEnabled": true,
			"valueLineBalloonEnabled": true
	  	}
    } ],
	"panelsSettings": {
		"color": "#333",
		"plotAreaFillColors": "#fff",
		"plotAreaFillAlphas": 0,
		"marginLeft": 60,
		"marginTop": 5,
		"marginBottom": 5
	},
	"categoryAxesSettings": {
		"equalSpacing": true,
		"gridColor": "#fff",
		"gridAlpha": 0.2
	},
	"valueAxesSettings": {
		"gridColor": "#fff",
		"gridAlpha": 0.2,
		"inside": false,
		"showLastLabel": true,
		"usePrefixes": true,
		"unit": "$",
		"unitPosition": "left"
	},
	"legendSettings": {
		"color": "#fff"
	},
	"chartCursorSettings": {
		"valueLineEnabled": true,
		"valueLineBalloonEnabled": true,
		"valueBalloonsEnabled": true,
	    "fullWidth": true,
	    "cursorAlpha": 0.1,
	    "valueLineAlpha": 0.5
	},
	"chartScrollbarSettings": {
		"graph": "g1",
		"usePeriod": "WW",
		"graphType": "line",
		"dragIconHeight": "0",
		"dragIconWidth": "0",
		"backgroundColor": "#333",
		"graphFillColor": "#666",
		"graphFillAlpha": 0.5,
		"gridColor": "#555",
		"gridAlpha": 0.6,
		"selectedBackgroundColor": "#ccccff",
		"selectedGraphFillAlpha": 0.5
	},
	"periodSelector": {
		"position": "bottom",
		"periods": [ {
			"period": "DD",
			"count": 10,
			"label": "10 Days"
		}, {
			"period": "MM",
			"count": 1,
			"label": "1 Month"
		}, {
			"period": "MM",
			"count": 6,
			"label": "6 Months"
		}, {
			"period": "YYYY",
			"count": 1,
			"label": "1 Year"
		}, {
			"period": "YYYY",
			"count": 5,
			"selected": true,
			"label": "5 Years"
		}, {
			"period": "YYYY",
			"count": 10,
			"label": "10 Years"
		} ]
	}
} );
