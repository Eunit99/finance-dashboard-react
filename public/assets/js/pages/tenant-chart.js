// tenants invoices and payments chart
var options = {
        chart: {
            height: 360,
            type: "bar",
            stacked: !1,
            toolbar: {
                show: !1
            },
            zoom: {
                enabled: !0
            },

        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "40%",
                // endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1,
        },
        stroke: { show: !0, width: 2, colors: ["transparent"] },

        yaxis: {
            labels: {
                formatter: function(value) {
                    // return "NGN " + value;
                    return numeral(value).format('0,0 a')
                },
                // formatter: function(val, index) {

                //     return numeral(val).format('0,0')
                // },



            },
            title: {
                text: "Amount in NGN",
            }
        },
        series: [{
            name: "Amount Invoiced",
            data: [0, 0, 24500, 12500, 25000, 47500, 59500, 0, 0, 0, 0, 0]
        }, {
            name: "Amount Paid",
            data: [0, 0, 24500, 0, 0, 0, 71500]
        }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        colors: ["#f46a6a", "#556ee6"],
        legend: {
            position: "bottom"
        },
        fill: {
            opacity: 1
        },

        tooltip: {
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

                return '<ul>' +
                    '<li><b>Price</b>: ' + data.x + '</li>' +
                    '<li><b>Number</b>: ' + data.y + '</li>' +
                    '<li><b>Product</b>: \'' + data.product + '\'</li>' +
                    '<li><b>Info</b>: \'' + data.info + '\'</li>' +
                    '<li><b>Site</b>: \'' + data.site + '\'</li>' +
                    '</ul>';
            }
        },

        tooltip: {
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return "NGN " + numeral(value).format('0,0')

                }
            }
        },
        tooltip: {
            y: [{ title: { formatter: function(e) { return e + " (mins)" } } },
                { title: { formatter: function(e) { return e + " per session" } } },
                { title: { formatter: function(e) { return e } } }
            ]
        },
        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: false,
            style: {
                fontSize: '12px',
                fontFamily: undefined
            },
            // custom: function({ series, seriesIndex, dataPointIndex, w }) {
            //     let currentTotal = 0
            //     series.forEach((s) => {
            //         currentTotal += s[dataPointIndex]
            //     })
            //     return '<div class="custom-tooltip">' +
            //         '<span><b>Total: </b>' + currentTotal + '</span>' +
            //         '</div>'
            // },
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    let currentTotal = 0
                    series.forEach((s) => {
                        currentTotal += s[dataPointIndex]
                    })
                    return "<span class='text-right w-100 d-flex' > NGN " + numeral(value).format('0,0') + "</span> "

                }
            }
        }

    },
    chart = new ApexCharts(document.querySelector("#tenant-chart"), options);
chart.render();