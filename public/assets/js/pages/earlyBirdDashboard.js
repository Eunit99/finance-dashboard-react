/* eslint-disable no-undef */
// Include numeral.js library
// Ensure you have numeral.js installed or included in your project
// If using a CDN, add the following script in your HTML file:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>

//Bundle usage summary
var walletOptions = {
    series: [76, 67, 61],
    chart: { height: 362, type: "radialBar" },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: "35%",
                background: "transparent",
                image: void 0
            },
            track: {
                show: !0,
                startAngle: void 0,
                endAngle: void 0,
                background: "#f2f2f2",
                strokeWidth: "97%",
                opacity: 1,
                margin: 12,
                dropShadow: {
                    enabled: !1,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: .5
                }
            },
            dataLabels: {
                name: {
                    show: !0,
                    fontSize: "16px",
                    fontWeight: 600,
                    offsetY: -10
                },
                value: { show: !0, fontSize: "14px", offsetY: 4, formatter: function(e) { return e + "%" } },
                total: {
                    show: !0,
                    label: "Total",
                    color: "#373d3f",
                    fontSize: "16px",
                    fontFamily: void 0,
                    fontWeight: 600,
                    formatter: function(e) {
                        return e.globals.seriesTotals.reduce(function(e, t) {
                            return e + t
                        }, 0) + "%"
                    }
                }
            }
        }
    },
    stroke: { lineCap: "round" },
    colors: ["#556ee6", "#e83e8c", "#00a884"],
    labels: ["SMSs", "Emails", "WhatsApp"],
    legend: { show: !1 }
};
(chart = new ApexCharts(document.querySelector("#sent-bundles"), walletOptions)).render();

//Bunndle usage monthly summary
var options = {
        chart: {
            height: 420,
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
                columnWidth: "45%",
                // endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1,
        },
        stroke: { show: !0, width: 10, colors: ["transparent"] },

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
                text: "Amount Used in NGN",
            }
        },
        series: [{
                name: "Alex Wanjala",
                data: [4023658, 5123456, 41458975, 67123654, 22123654, 43789654, 36789623, 52320365, 24023147, 18012586, 36036985, 48025820]
            }, {
                name: "Emmanuel Uchenna",
                data: [13025856, 23025632, 20032145, 8021457, 13032568, 27456987, 18235897, 22235789, 10213214, 16365478, 24456987, 22123568]
            },
            {
                name: "Brian Mutinda",
                data: [1325856, 2325632, 2032145, 802147, 1303268, 27456987, 1823897, 2223789, 1013214, 1636478, 2445987, 2213568]
            }
        ],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        colors: ["#556ee6", "#e83e8c", "#00a884"],
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
            followCursor: true,
            shared: false,
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                let currentTotal = 0
                series.forEach((s) => {
                    currentTotal += s[dataPointIndex]
                })
                return '<div class="custom-tooltip">' +
                    '<span><b>Total: </b>' + currentTotal + '</span>' +
                    '</div>'
            }
        },
        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: true,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            fillColor:'white',
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
                    return "<span class='text-right' >NGN " + numeral(value).format('0,0') + "</span> "

                }
            }
        }


    },
    chart = new ApexCharts(document.querySelector("#member-salary-chart"), options);
chart.render();