    
    $(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#highsplineavgincome').highcharts({
            chart: {
                backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2a002b'],
            [1, '#003e40']
         ]
      },
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                    load: function () {
                         
                        // console.log(yval);
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {

                            $.ajax({
                            type: 'GET',
                            url: '/incomemavg',
                            dataType: "json",
                            success: function(results) {
                             // yval=results[0].avg;
                            var x = (new Date()).getTime(), // current time
                            y = results[0].avg;
                            series.addPoint([x, y], true, true);
                               }
                            })
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Average Income for Approvals'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Income(Avg)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: 'red',
                    fill: 'red'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>Average Income(Currently)</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 5);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
  
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;

 

                }())
            }]
        });
    });
});
