var chart = AmCharts.makeChart("depth_chart", {
	"titles": [{
		"text": "Depth Chart",
		"size": 15,
		"color": "#fff"
	}],
	"type": "serial",
	"theme": "none",
	"dataLoader": {
    	"url": "https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=50",
    	"format": "json",
    	"reload": 1, // update data every second
		"showCurtain": false,
    	"postProcess": function(data) {
			// process data here
			var result = [];
			var isBid = true;

			function processData(dataList, typeIsBid) {
        	  	// Convert to data points
        	  	for(var i = 0; i < dataList.length; i++) {
				  	dataList[i] = {
            		  	value: Number(dataList[i][0]),
            		  	volume: Number(dataList[i][1]),
				  	}
			  	}
        	  	dataList.sort(function(a, b) { return a - b; });

        	  	// Calculate the volume from data
        	  	if (typeIsBid) {
				  	for(var i = dataList.length - 1; i >= 0; i--) {
						dataList[i].totalvolume =
							(i < (dataList.length - 1)) ? dataList[i + 1].totalvolume + dataList[i].volume : dataList[i].volume;

						var data = {};
            			data["value"] = dataList[i].value;
            			data["bidsVolume"] = dataList[i].volume;
            			data["bidsTotalVolume"] = dataList[i].totalvolume;
            			result.unshift(data);
					}
				}
				else {
					for(var i = 0; i < dataList.length; i++) {
						dataList[i].totalvolume =
							(i > 0) ? dataList[i - 1].totalvolume + dataList[i].volume : dataList[i].volume;

						var data = {};
            			data["value"] = dataList[i].value;
            			data["asksVolume"] = dataList[i].volume;
            			data["asksTotalVolume"] = dataList[i].totalvolume;
            			result.push(data);
					}
				}
			}

      	  	processData(data.bids, isBid);
      	  	processData(data.asks, !isBid);

      	  	return result;
		}
	}, // close dataLoader

  	"graphs": [ {
    	"id": "bids",
    	"fillAlphas": 0.1,
    	"lineAlpha": 1,
    	"lineThickness": 2,
    	"lineColor": "#0f0", // green for bids
    	"type": "step",
    	"valueField": "bidsTotalVolume",
    	"balloonFunction": balloonText
	}, {
    	"id": "asks",
    	"fillAlphas": 0.1,
    	"lineAlpha": 1,
    	"lineThickness": 2,
    	"lineColor": "#f00", // red for asks
    	"type": "step",
    	"valueField": "asksTotalVolume",
    	"balloonFunction": balloonText
  	}, {
    	"lineAlpha": 0,
    	"fillAlphas": 0.2,
    	"lineColor": "#000",
    	"type": "column",
    	"clustered": false,
    	"valueField": "bidsVolume",
    	"showBalloon": false
  	}, {
    	"lineAlpha": 0,
    	"fillAlphas": 0.2,
    	"lineColor": "#000",
    	"type": "column",
    	"clustered": false,
    	"valueField": "asksVolume",
    	"showBalloon": false
  	}],
  	"categoryField": "value",
  	"categoryAxis": {
    	"title": "Price (BTC/GBP)",
    	"minHorizontalGap": 100,
    	"startOnAxis": true,
    	"showFirstLabel": false,
    	"showLastLabel": false,
		"gridAlpha": 0,
		"color": "#fff",
		"axisColor": "#fff",
		"titleColor": "#fff"
  	},
  	"valueAxes": [{
    	"title": "Volume",
		"gridAlpha": 0,
		"color": "#fff",
		"axisColor": "#fff",
		"titleColor": "#fff"
  	}],
  	"chartCursor": {
		"cursorColor": "#fff",
		"color": "#000",
		"bulletsEnabled": true
	},
  	"balloon": {
    	"textAlign": "left",
		"adjustBorderColor": true,
		"fillColor": "#fff",
		"fillAlpha": 0.9,
		"borderAlpha": 0.7,
		"borderThickness": 1,
		"shadowAlpha": 0.1,
		"verticalPadding": 10,
		"horizontalPadding": 10
	}
});

function balloonText(item, graph) {
	var txt;
  	if (graph.id == "asks") {
    	txt = "Asks: <strong>" + item.dataContext.value + "</strong><br />"
      		+ "Total volume: <strong>" + item.dataContext.asksTotalVolume + "</strong><br />"
      		+ "Volume: <strong>" + item.dataContext.asksVolume + "</strong>";
	}
  	else {
    	txt = "Bids: <strong>" + item.dataContext.value + "</strong><br />"
      		+ "Total volume: <strong>" + item.dataContext.bidsTotalVolume + "</strong><br />"
      		+ "Volume: <strong>" + item.dataContext.bidsVolume + "</strong>";
	}
  	return txt;
}
