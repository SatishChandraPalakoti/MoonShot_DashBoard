window.onload = function () {

		// dataPoints
		var dataPoints1 = [];
		var dataPoints2 = [];

		var chart3 = new CanvasJS.Chart("chartContainerforavgage",{ 
			animationEnabled: true,
        backgroundColor: "transparent",
			zoomEnabled: true,
			title: {
				text: "Predicting Average Customer Ages for credit approval"		
			},
			toolTip: {
				shared: true
				
			},
			legend: {
				verticalAlign: "top",
				horizontalAlign: "center",
                                fontSize: 14,
				fontWeight: "bold",
				fontFamily: "calibri",
				fontColor: "white"
			},
			axisX: {
				title: "Last Updated : A second ago"
			},
			axisY:{
				suffix: ' Yrs.',
				includeZero: false
			}, 
			data: [{ 
				// dataSeries1
				type: "line",
				xValueType: "dateTime",
				showInLegend: true,
				name: "MALE",
				dataPoints: dataPoints1
			},
			{				
				// dataSeries2
				type: "line",
				xValueType: "dateTime",
				showInLegend: true,
				name: "FEMALE" ,
				dataPoints: dataPoints2
			}],
          legend:{
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              chart3.render();
            }
          }
		});



		var updateInterval = 3000;
		// initial value
		var yValue1 = 640; 
		var yValue2 = 604;

		var time = new Date;
		time.setHours(9);
		time.setMinutes(30);
		time.setSeconds(00);
		time.setMilliseconds(00);
		var maleage;
		var femaleage;
		// starting at 9.30 am

		var updateChart3 = function (count) {
			count = count || 1;

			// count is number of times loop runs to generate random dataPoints. 

			 $.ajax({
        type: 'GET',
        url: '/agemavg',
        dataType: "json",
        success: function(results) {
        
         maleage = results[0].avg; 
        
    }
       
      
    })

			  $.ajax({
        type: 'GET',
        url: '/agefemavg',
        dataType: "json",
        success: function(results) {
        
         femaleage = results[0].avg; 
        
    }
       
      
    })

			for (var i = 0; i < count; i++) {
				
				// add interval duration to time				
				time.setTime(time.getTime()+ updateInterval);


				// generating random values
				// var deltaY1 = .5 + Math.random() *(-.5-.5);
				// var deltaY2 = .5 + Math.random() *(-.5-.5);

				// adding random value and rounding it to two digits. 
				// yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
				// yValue2 = Math.round((yValue2 + deltaY2)*100)/100;
				yValue1=maleage;	
				yValue2=femaleage;			
				// pushing the new values
				dataPoints1.push({
					x: time.getTime(),
					y: yValue1
				});
				dataPoints2.push({
					x: time.getTime(),
					y: yValue2
				});


			};

			// updating legend text with  updated with y Value 
			chart3.options.data[0].legendText = " Average Male Age :" + yValue1;
			chart3.options.data[1].legendText = "  Average Female Age :" + yValue2; 

			chart3.render();

		};

		// generates first set of dataPoints 
		updateChart3(10);	
		 
		// update chart3 after specified interval 
		setInterval(function(){updateChart3()}, updateInterval);
	}