window.onload = function () {
        
        //initial value of dataPoints 
        var dps = [
        {label: "Approved", y: 100},
        {label: "Rejected", y: 163}
        ];  

        var chart = new CanvasJS.Chart("edulevelapproved",{ 
        animationEnabled: true, 
        backgroundColor: 'transparent',         
            title: {
                text: "Credit Applications PredictoMeter" ,

            },
            axisY: {                
                suffix: " "
            },      
            legend :{
                verticalAlign: "top",
                horizontalAlign: "centre",
                fontSize: 18

            },
            data: [
            {
                type: "column", 
                bevelEnabled: true,             
                indexLabel: "{y}",
                dataPoints: dps 
              
            
            }
            ]
        });

        
        var updateInterval = 1000;    
        var approved;
        var notapproved;

        var elevel1=0;
        var elevel1val=0;
        var elevel2=0;
        var elevel2val=0;
        var elevel3=0;
        var elevel3val=0;
        var elevel4=0;
        var elevel4val=0;
        var elevel5=0;
        var elevel5val=0;

        var updateChart = function () {

            for (var i = 0; i < dps.length; i++) {
                
            
                $.ajax({
        type: 'GET',
        url: '/edulevelapprovedtop',
        dataType: "json",
        success: function(results) {
        console.log(results)
        // alert(results[0].value);
        // approved = results[0].value; 


        elevel1=results[0].EducationLevel
        elevel1val=results[0].count
        elevel2=results[1].EducationLevel
        elevel2val=results[1].count
        elevel3=results[2].EducationLevel
        elevel3val=results[2].count
        elevel4=results[3].EducationLevel
        elevel4val=results[3].count
        elevel5=results[4].EducationLevel
        elevel5val=results[4].count


        
    }
       
      
    })
             
      
             //sindhutest  
               // var deltaY = results[0].value;      
                //var yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
                var app = approved ;
                var rej = notapproved;
                var leg = dps[i].label;
                var statusColor;


                // color of dataPoint dependent upon y value. 

                boilerColor =
                app > 200 ? "#FF2500":
                app >= 170 ? "#FF6000":
                app < 170 ? "#6B8E23 ": 
                rej > 200 ? "#FF2500":
                rej >= 170 ? "#FF6000":
                rej < 170 ? "#6B8E23 ":                            
                null;


                // updating the dataPoint
                // dps[0] = {label: 'Approved', y: app, color: statusColor};
                // dps[1] = {label: 'Rejected', y: rej, color: statusColor};

                dps[0] = {label: elevel1, y: elevel1val, color: statusColor};
                dps[1] = {label: elevel2, y: elevel2val, color: statusColor};
                dps[2] = {label: elevel3, y: elevel3val, color: statusColor};
                dps[3] = {label: elevel4, y: elevel4val, color: statusColor};
                dps[4] = {label: elevel5, y: elevel5val, color: statusColor};
                 

            };

            chart.render();
        };
        
        updateChart();      

        // update chart after specified interval 
        setInterval(function(){updateChart()}, updateInterval);


    }