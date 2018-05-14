
$(function () {
    if ($('#line-chart')[0]) {
		var chart = AmCharts.makeChart( "line-chart", {
		  "type": "stock",
		  "theme": "dark",

			"dataSets": [ {
		    "title": "LTC/EUR",
		    "fieldMappings": [ {
		      "fromField": "Open",
		      "toField": "open"
		    }, {
		      "fromField": "High",
		      "toField": "high"
		    }, {
		      "fromField": "Low",
		      "toField": "low"
		    }, {
		      "fromField": "Close",
		      "toField": "close"
		    }, {
		      "fromField": "Volume",
		      "toField": "volume"
		    } ],
		    "compared": false,
		    "categoryField": "Date",

		    /**
		     * data loader for data set data
		     */
		    "dataLoader": {
		      "url": "https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT.csv",
		      "format": "csv",
		      "showCurtain": true,
		      "showErrors": true,
		      "async": true,
		      "reverse": true,
		      "delimiter": ",",
		      "useColumnNames": true
		    }

		  }],

		  "dataDateFormat": "YYYY-MM-DD",

		  "panels": [ {
		     // "title": "Value",
		      "percentHeight": 70,

		      "stockGraphs": [ {
		        "type": "candlestick",
		        "id": "g1",
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
		        "comparedGraphLineThickness": 2,
		        "columnWidth": 0.7,
		        "useDataSetColors": false,
		        "comparable": true,
		        "compareField": "close",
		        "showBalloon": true,
		        "proCandlesticks": true
		      } ],

		      "stockLegend": {
		        "valueTextRegular": undefined,
		        "periodValueTextComparing": "[[percents.value.close]]%"
		      },

			  "chartCursor": {
				  "color": "#fff",
				  "cursorColor": "#ff0000",
				  "valueLineEnabled": true,
				  "valueLineBalloonEnabled": true
			  }

		  } ],

		  "panelsSettings": {
		    "color": "#fff",
		    "plotAreaFillColors": "#333",
		    "plotAreaFillAlphas": 0.6,
		    "marginLeft": 60,
		    "marginTop": 5,
		    "marginBottom": 5
		  },

		  "chartScrollbarSettings": {
		    "graph": "g1",
		    "graphType": "line",
			  "dragIconHeight": "0",
        "dragIconWidth": "0",
		    "backgroundColor": "#333",
		    "graphFillColor": "#666",
		    "graphFillAlpha": 0.5,
		    "gridColor": "#555",
		    "gridAlpha": 0.6,
		    "selectedBackgroundColor": "#444",
			"selectedGraphFillAlpha": 0.6
		  },

		  "categoryAxesSettings": {
		    "equalSpacing": true,
		    "gridColor": "#555",
		    "gridAlpha": 1
		  },

		  "valueAxesSettings": {
		    "gridColor": "#555",
		    "gridAlpha": 1,
		    "inside": false,
		    "showLastLabel": true
		  },

		  "chartCursorSettings": {
		    "pan": true,
		    "valueLineEnabled": true,
		    "valueLineBalloonEnabled": true
		  },

		  "legendSettings": {
		    "color": "#fff"
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
		        "selected": true,
		        "label": "10 Years"
		      }
		    ]
		  }

		} );

        $("#line-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $("#linechart-tooltip").html(item.series.label + " of " + x + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
            }
            else {
                $("#linechart-tooltip").hide();
            }
        });

        $("<div id='linechart-tooltip' class='chart-tooltip'></div>").appendTo("body");
    }

});
