$("document").ready(function() {
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
    $(".tab-slider--body2").hide();
    $(".tab-slider--body2:first").show();
});

$(".tab-slider--nav li").click(function() {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    if ($(this).attr("rel") == "tab2") {
        $('.tab-slider--tabs').addClass('slide');
    } else {
        $('.tab-slider--tabs').removeClass('slide');
    }
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
});


$(".tab-slider--nav2 li").click(function() {
    $(".tab-slider--body2").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    if ($(this).attr("rel") == "tab4") {
        $('.tab-slider--tabs2').addClass('slide');
    } else {
        $('.tab-slider--tabs2').removeClass('slide');
    }
    $(".tab-slider--nav2 li").removeClass("active");
    $(this).addClass("active");
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$('.top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});



$(document).ready(function() {

    //우클릭 방지
    /*
    $(document).on("contextmenu",function(e){
        console.log("c"+e);
        return false;
    });
    //드래그 방지
    $(document).on("dragstart",function(e){
        console.log("d"+e);
        return false;
    });
        
    //선택 방지 
    $(document).on("selectstart",function(e){
        console.log("s"+e);
        return false;
    });        
    */

    //다음과 같이 이벤트를 한번에 등록가능
    $(document).on("contextmenu dragstart selectstart", function(e) {
        return false;
    });
    //참고. IE에서는 텍스트컨트롤박스의 내용을 드래그해서 선택할수없었음
    //      또한 파이어폭스에서는 selectstart 시 이벤트가 발생되지 않았음.


    //disableSelection($("body")[0])
});

//선택 방지. (파이어폭스도 적용됨)
function disableSelection(target) {
    //For IE This code will work
    if (typeof target.onselectstart != "undefined")
        target.onselectstart = function() { return false }

    //For Firefox This code will work
    else if (typeof target.style.MozUserSelect != "undefined")
        target.style.MozUserSelect = "none"

    //All other  (ie: Opera) This code will work
    else
        target.onmousedown = function() { return false }
    target.style.cursor = "default";
}




(function($) {
    // USE STRICT
    "use strict";

    try {
        //일별 신규 확진자
        var ctx = document.getElementById("widgetChart5");
        ctx.height = 300;
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['1.18', '1.19', '1.20', '1.21', '1.22', '1.23', '1.24'],
                datasets: [{
                    label: '국내 발생',
                    backgroundColor: "#778beb",
                    data: [351, 373, 380, 314, 403, 369, 405],
                }, {
                    label: '해외 유입',
                    backgroundColor: "#a9a9a9",
                    data: [35, 31, 21, 32, 28, 23, 32],
                }],
            },
            options: {
                tooltips: {
                    titleFontFamily: 'Open Sans',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    titleFontColor: 'white',
                    caretSize: 5,
                    cornerRadius: 15,
                    xPadding: 10,
                    yPadding: 10
                },
                scales: {
                    xAxes: [{
                        stacked: true,
                        gridLines: {
                            display: false,
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: false,
                        },
                        type: 'linear',
                    }]
                },
                responsive: true,
                maintainAspectRatio: true,
                legend: { position: 'bottom' },
            }
        });

    } catch (error) {
        console.log(error);
    }

    try {
        //bar chart
        var ctx = document.getElementById("barChart");
        if (ctx) {
            ctx.height = 300;
            var myChart = new Chart(ctx, {
                type: 'bar',
                defaultFontFamily: 'Poppins',
                data: {
                    labels: ['1.19', '1.20', '1.21', '1.22', '1.23', '1.24'],
                    datasets: [{
                            label: "확진",
                            data: [404, 401, 346, 431, 392, 437],
                            borderWidth: "0",
                            backgroundColor: "rgba(250, 66, 81,0.5)",
                            fontFamily: "Poppins"
                        },
                        {
                            label: "완치",
                            data: [712, 666, 569, 629, 486, 426],
                            borderWidth: "0",
                            backgroundColor: "rgba(0,173,95, 0.5)",
                            fontFamily: "Poppins"
                        },
                        {
                            label: "사망",
                            data: [17, 16, 12, 9, 12, 11],
                            borderWidth: "0",
                            backgroundColor: "rgba(0,0,0, 0.5)",
                            fontFamily: "Poppins"
                        },

                    ]
                },
                options: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            fontFamily: 'Poppins'
                        }

                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontFamily: "Poppins"

                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontFamily: "Poppins"
                            }
                        }]
                    },
                    tooltips: {
                        titleFontFamily: 'Open Sans',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        titleFontColor: 'white',
                        caretSize: 5,
                        cornerRadius: 15,
                        xPadding: 10,
                        yPadding: 10
                    }
                }
            });
        }


    } catch (error) {
        console.log(error);
    }

    try {

        //위중증 환자 현황
        var ctx = document.getElementById('barChart_seriousCases').getContext("2d");
        document.getElementById('barChart_seriousCases').height = 200;
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, '#f49080');

        var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
        gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1.19', '1.20', '1.21', '1.22', '1.23', '1.24'],
                datasets: [{
                    label: "위중증 환자",
                    borderColor: gradientStroke,
                    pointBorderColor: gradientStroke,
                    pointBackgroundColor: gradientStroke,
                    pointHoverBackgroundColor: gradientStroke,
                    pointHoverBorderColor: gradientStroke,
                    pointBorderWidth: 10,
                    pointHoverRadius: 10,
                    pointHoverBorderWidth: 1,
                    pointRadius: 3,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 4,
                    data: [323, 317, 299, 297, 282, 275]
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold",
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            padding: 20
                        },
                        gridLines: {
                            drawTicks: false,
                            display: false
                        }

                    }],
                    xAxes: [{
                        gridLines: {
                            zeroLineColor: "transparent"
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold"
                        }
                    }]
                },
                tooltips: {
                    titleFontFamily: 'Open Sans',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    titleFontColor: 'white',
                    caretSize: 5,
                    cornerRadius: 15,
                    xPadding: 10,
                    yPadding: 10
                }
            }
        });

    } catch (error) {
        console.log(error);
    }

    try {

        // Recent Report 2
        const bd_brandProduct2 = 'rgba(0,181,233,0.9)'
        const bd_brandService2 = 'rgba(255,0,0,0.9)'
        const brandProduct2 = 'rgba(0,181,233,0.2)'
        const brandService2 = 'rgba(0,173,95,0.2)'

        var data3 = [71747, 66100, 65649, 74184, 37627, 29362]

        var ctx = document.getElementById("recent-rep2-chart");
        if (ctx) {
            ctx.height = 250;
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["1.19", "1.20", "1.21", "1.22", "1.23", "1.24"],
                    datasets: [{
                        label: "일 검사자수",
                        data: data3,
                        borderColor: "#556ee6",
                        borderWidth: "0",
                        backgroundColor: "#778beb"
                    }]
                },
                options: {
                    legend: {
                        position: 'center',
                        labels: {
                            fontFamily: 'Poppins'
                        }

                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontFamily: "Poppins"

                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontFamily: "Poppins"
                            }
                        }]
                    },
                    tooltips: {
                        titleFontFamily: 'Open Sans',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        titleFontColor: 'white',
                        caretSize: 5,
                        cornerRadius: 15,
                        xPadding: 10,
                        yPadding: 10
                    }
                }
            });
        }

    } catch (error) {
        console.log(error);
    }

    try {

        // 검사대비 확진율
        const bd_brandProduct2 = 'rgba(0,181,233,0.9)'
        const bd_brandService2 = 'rgba(255,0,0,0.9)'
        const brandProduct2 = 'rgba(0,181,233,0.2)'
        const brandService2 = 'rgba(0,173,95,0.2)'

        var data3 = [0.56, 0.61, 0.53, 0.58, 1.04, 1.49] //  (확진수)/(검사수)*100

        var ctx = document.getElementById("tests-percent-chart");
        if (ctx) {
            ctx.height = 250;
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["1.19", "1.20", "1.21", "1.22", "1.23", "1.24"],
                    datasets: [{
                        label: "검사 대비 확진율",
                        data: data3,
                        borderColor: "#556ee6",
                        borderWidth: "0",
                        backgroundColor: "#778beb"
                    }]
                },
                options: {
                    legend: {
                        position: 'center',
                        labels: {
                            fontFamily: 'Poppins'
                        }

                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontFamily: "Poppins"

                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontFamily: "Poppins"
                            }
                        }]
                    },
                    tooltips: {
                        titleFontFamily: 'Open Sans',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        titleFontColor: 'white',
                        caretSize: 5,
                        cornerRadius: 15,
                        xPadding: 10,
                        yPadding: 10
                    }
                }
            });
        }

    } catch (error) {
        console.log(error);
    }

    //여기까지 사용하는 차트





























    try {
        // 일별 사망/격리해제 증가 추이
        const confirmedColor = 'rgba(250, 66, 81,0.8)'
        const cureStackColor = 'rgba(0,173,95, 0.4)'
        const cureColor = 'rgba(0, 173, 95,0.8)'

        var elements = 7
        var data1 = [1947, 2233, 2612, 2909, 3166, 3507, 3730]
        var data2 = [152, 87, 147, 98, 64, 76, 100]
        var data3 = [407, 286, 379, 297, 257, 341, 223]

        var ctx = document.getElementById("recent-rep-chart");
        if (ctx) {
            ctx.height = 250;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['3.19', '3.20', '3.21', '3.22', '3.23', '3.24', '3.25'],
                    datasets: [{
                            label: '확진',
                            backgroundColor: confirmedColor,
                            borderColor: 'transparent',
                            pointHoverBackgroundColor: confirmedColor,
                            borderWidth: 0,
                            data: data2

                        },
                        {
                            label: '완치',
                            backgroundColor: cureColor,
                            borderColor: 'transparent',
                            pointHoverBackgroundColor: cureColor,
                            borderWidth: 0,
                            data: data3

                        },

                        {
                            label: '누적 완치',
                            backgroundColor: cureStackColor,
                            borderColor: 'transparent',
                            pointHoverBackgroundColor: cureStackColor,
                            borderWidth: 0,
                            data: data1
                        }


                    ]
                },
                options: {
                    maintainAspectRatio: true,
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                drawOnChartArea: true,
                                color: '#f2f2f2'
                            },
                            ticks: {
                                fontFamily: "Poppins",
                                fontSize: 12
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                maxTicksLimit: 5000,
                                stepSize: 500,
                                max: 4000,
                                fontFamily: "Poppins",
                                fontSize: 12
                            },
                            gridLines: {
                                display: true,
                                color: '#f2f2f2'

                            }
                        }]
                    },
                    elements: {
                        point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                            hoverBorderWidth: 3
                        }
                    }


                }
            });
        }

        //WidgetChart 1
        var ctx = document.getElementById("widgetChart1");
        if (ctx) {
            ctx.height = 130;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    type: 'line',
                    datasets: [{
                        data: [78, 81, 80, 45, 34, 12, 40],
                        label: 'Dataset',
                        backgroundColor: 'rgba(255,255,255,.1)',
                        borderColor: 'rgba(255,255,255,.55)',
                    }, ]
                },
                options: {
                    maintainAspectRatio: true,
                    legend: {
                        display: false
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: 'transparent',
                                zeroLineColor: 'transparent'
                            },
                            ticks: {
                                fontSize: 2,
                                fontColor: 'transparent'
                            }
                        }],
                        yAxes: [{
                            display: false,
                            ticks: {
                                display: false,
                            }
                        }]
                    },
                    title: {
                        display: false,
                    },
                    elements: {
                        line: {
                            borderWidth: 0
                        },
                        point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4
                        }
                    }
                }
            });
        }


        //WidgetChart 2
        var ctx = document.getElementById("widgetChart2");
        if (ctx) {
            ctx.height = 130;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    type: 'line',
                    datasets: [{
                        data: [1, 18, 9, 17, 34, 22],
                        label: 'Dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                    }, ]
                },
                options: {

                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    responsive: true,
                    tooltips: {
                        mode: 'index',
                        titleFontSize: 12,
                        titleFontColor: '#000',
                        bodyFontColor: '#000',
                        backgroundColor: '#fff',
                        titleFontFamily: 'Montserrat',
                        bodyFontFamily: 'Montserrat',
                        cornerRadius: 3,
                        intersect: false,
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: 'transparent',
                                zeroLineColor: 'transparent'
                            },
                            ticks: {
                                fontSize: 2,
                                fontColor: 'transparent'
                            }
                        }],
                        yAxes: [{
                            display: false,
                            ticks: {
                                display: false,
                            }
                        }]
                    },
                    title: {
                        display: false,
                    },
                    elements: {
                        line: {
                            tension: 0.00001,
                            borderWidth: 1
                        },
                        point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4
                        }
                    }
                }
            });
        }


        //WidgetChart 3
        var ctx = document.getElementById("widgetChart3");
        if (ctx) {
            ctx.height = 130;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    type: 'line',
                    datasets: [{
                        data: [65, 59, 84, 84, 51, 55],
                        label: 'Dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                    }, ]
                },
                options: {

                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    responsive: true,
                    tooltips: {
                        mode: 'index',
                        titleFontSize: 12,
                        titleFontColor: '#000',
                        bodyFontColor: '#000',
                        backgroundColor: '#fff',
                        titleFontFamily: 'Montserrat',
                        bodyFontFamily: 'Montserrat',
                        cornerRadius: 3,
                        intersect: false,
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: 'transparent',
                                zeroLineColor: 'transparent'
                            },
                            ticks: {
                                fontSize: 2,
                                fontColor: 'transparent'
                            }
                        }],
                        yAxes: [{
                            display: false,
                            ticks: {
                                display: false,
                            }
                        }]
                    },
                    title: {
                        display: false,
                    },
                    elements: {
                        line: {
                            borderWidth: 1
                        },
                        point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4
                        }
                    }
                }
            });
        }


        //WidgetChart 4
        var ctx = document.getElementById("widgetChart4");
        if (ctx) {
            ctx.height = 115;
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [{
                        label: "My First dataset",
                        data: [78, 81, 80, 65, 58, 75, 60, 75, 65, 60, 60, 75],
                        borderColor: "transparent",
                        borderWidth: "0",
                        backgroundColor: "rgba(255,255,255,.3)"
                    }]
                },
                options: {
                    maintainAspectRatio: true,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            display: false,
                            categoryPercentage: 1,
                            barPercentage: 0.65
                        }],
                        yAxes: [{
                            display: false
                        }]
                    }
                }
            });
        }



        //
        var ctx = document.getElementById("percent-chart");
        if (ctx) {
            ctx.height = 300;
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        label: "확진자 수",
                        data: [3240, 5173],
                        backgroundColor: [
                            '#00b5e9',
                            '#fa4251'
                        ],
                        hoverBackgroundColor: [
                            '#00b5e9',
                            '#fa4251'
                        ],
                        borderWidth: [
                            0, 0
                        ],
                        hoverBorderColor: [
                            'transparent',
                            'transparent'
                        ]
                    }],
                    labels: [
                        '남성',
                        '여성'
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    cutoutPercentage: 55,
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        titleFontFamily: "Poppins",
                        xPadding: 15,
                        yPadding: 10,
                        caretPadding: 0,
                        bodyFontSize: 16
                    }
                }
            });
        }

    } catch (error) {
        console.log(error);
    }






    try {

        // Recent Report 3
        const bd_brandProduct3 = 'rgba(0,181,233,0.9)';
        const bd_brandService3 = 'rgba(0,173,95,0.9)';
        const brandProduct3 = 'transparent';
        const brandService3 = 'transparent';

        var data5 = [52, 60, 55, 50, 65, 80, 57, 115];
        var data6 = [102, 70, 80, 100, 56, 53, 80, 90];

        var ctx = document.getElementById("recent-rep3-chart");
        if (ctx) {
            ctx.height = 230;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', ''],
                    datasets: [{
                            label: 'My First dataset',
                            backgroundColor: brandService3,
                            borderColor: bd_brandService3,
                            pointHoverBackgroundColor: '#fff',
                            borderWidth: 0,
                            data: data5,
                            pointBackgroundColor: bd_brandService3
                        },
                        {
                            label: 'My Second dataset',
                            backgroundColor: brandProduct3,
                            borderColor: bd_brandProduct3,
                            pointHoverBackgroundColor: '#fff',
                            borderWidth: 0,
                            data: data6,
                            pointBackgroundColor: bd_brandProduct3

                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                drawOnChartArea: true,
                                color: '#f2f2f2'
                            },
                            ticks: {
                                fontFamily: "Poppins",
                                fontSize: 12
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                maxTicksLimit: 5,
                                stepSize: 50,
                                max: 150,
                                fontFamily: "Poppins",
                                fontSize: 12
                            },
                            gridLines: {
                                display: false,
                                color: '#f2f2f2'
                            }
                        }]
                    },
                    elements: {
                        point: {
                            radius: 3,
                            hoverRadius: 4,
                            hoverBorderWidth: 3,
                            backgroundColor: '#333'
                        }
                    }


                }
            });
        }

    } catch (error) {
        console.log(error);
    }



    try {

        // Percent Chart 2
        var ctx = document.getElementById("percent-chart2");
        if (ctx) {
            ctx.height = 209;
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        label: "My First dataset",
                        data: [60, 40],
                        backgroundColor: [
                            '#00b5e9',
                            '#fa4251'
                        ],
                        hoverBackgroundColor: [
                            '#00b5e9',
                            '#fa4251'
                        ],
                        borderWidth: [
                            0, 0
                        ],
                        hoverBorderColor: [
                            'transparent',
                            'transparent'
                        ]
                    }],
                    labels: [
                        'Products',
                        'Services'
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    cutoutPercentage: 87,
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    legend: {
                        display: false,
                        position: 'bottom',
                        labels: {
                            fontSize: 14,
                            fontFamily: "Poppins,sans-serif"
                        }

                    },
                    tooltips: {
                        titleFontFamily: "Poppins",
                        xPadding: 15,
                        yPadding: 10,
                        caretPadding: 0,
                        bodyFontSize: 16,
                    }
                }
            });
        }

    } catch (error) {
        console.log(error);
    }

    try {
        //Sales chart
        var ctx = document.getElementById("sales-chart");
        if (ctx) {
            ctx.height = 150;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
                    type: 'line',
                    defaultFontFamily: 'Poppins',
                    datasets: [{
                        label: "Foods",
                        data: [0, 30, 10, 120, 50, 63, 10],
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(220,53,69,0.75)',
                        borderWidth: 3,
                        pointStyle: 'circle',
                        pointRadius: 5,
                        pointBorderColor: 'transparent',
                        pointBackgroundColor: 'rgba(220,53,69,0.75)',
                    }, {
                        label: "Electronics",
                        data: [0, 50, 40, 80, 40, 79, 120],
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(40,167,69,0.75)',
                        borderWidth: 3,
                        pointStyle: 'circle',
                        pointRadius: 5,
                        pointBorderColor: 'transparent',
                        pointBackgroundColor: 'rgba(40,167,69,0.75)',
                    }]
                },
                options: {
                    responsive: true,
                    tooltips: {
                        mode: 'index',
                        titleFontSize: 12,
                        titleFontColor: '#000',
                        bodyFontColor: '#000',
                        backgroundColor: '#fff',
                        titleFontFamily: 'Poppins',
                        bodyFontFamily: 'Poppins',
                        cornerRadius: 3,
                        intersect: false,
                    },
                    legend: {
                        display: false,
                        labels: {
                            usePointStyle: true,
                            fontFamily: 'Poppins',
                        },
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                                drawBorder: false
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'Month'
                            },
                            ticks: {
                                fontFamily: "Poppins"
                            }
                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                                drawBorder: false
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                                fontFamily: "Poppins"

                            },
                            ticks: {
                                fontFamily: "Poppins"
                            }
                        }]
                    },
                    title: {
                        display: false,
                        text: 'Normal Legend'
                    }
                }
            });
        }


    } catch (error) {
        console.log(error);
    }

    try {

        //Team chart
        var ctx = document.getElementById("team-chart");
        if (ctx) {
            ctx.height = 150;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
                    type: 'line',
                    defaultFontFamily: 'Poppins',
                    datasets: [{
                        data: [0, 7, 3, 5, 2, 10, 7],
                        label: "Expense",
                        backgroundColor: 'rgba(0,103,255,.15)',
                        borderColor: 'rgba(0,103,255,0.5)',
                        borderWidth: 3.5,
                        pointStyle: 'circle',
                        pointRadius: 5,
                        pointBorderColor: 'transparent',
                        pointBackgroundColor: 'rgba(0,103,255,0.5)',
                    }, ]
                },
                options: {
                    responsive: true,
                    tooltips: {
                        mode: 'index',
                        titleFontSize: 12,
                        titleFontColor: '#000',
                        bodyFontColor: '#000',
                        backgroundColor: '#fff',
                        titleFontFamily: 'Poppins',
                        bodyFontFamily: 'Poppins',
                        cornerRadius: 3,
                        intersect: false,
                    },
                    legend: {
                        display: false,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            fontFamily: 'Poppins',
                        },


                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                                drawBorder: false
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'Month'
                            },
                            ticks: {
                                fontFamily: "Poppins"
                            }
                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                                drawBorder: false
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                                fontFamily: "Poppins"
                            },
                            ticks: {
                                fontFamily: "Poppins"
                            }
                        }]
                    },
                    title: {
                        display: false,
                    }
                }
            });
        }


    } catch (error) {
        console.log(error);
    }



    try {

        //radar chart
        var ctx = document.getElementById("radarChart");
        if (ctx) {
            ctx.height = 200;
            var myChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: [
                        ["Eating", "Dinner"],
                        ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"
                    ],
                    defaultFontFamily: 'Poppins',
                    datasets: [{
                            label: "My First dataset",
                            data: [65, 59, 66, 45, 56, 55, 40],
                            borderColor: "rgba(0, 123, 255, 0.6)",
                            borderWidth: "1",
                            backgroundColor: "rgba(0, 123, 255, 0.4)"
                        },
                        {
                            label: "My Second dataset",
                            data: [28, 12, 40, 19, 63, 27, 87],
                            borderColor: "rgba(0, 123, 255, 0.7",
                            borderWidth: "1",
                            backgroundColor: "rgba(0, 123, 255, 0.5)"
                        }
                    ]
                },
                options: {
                    legend: {
                        position: 'top',
                        labels: {
                            fontFamily: 'Poppins'
                        }

                    },
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            fontFamily: "Poppins"
                        }
                    }
                }
            });
        }

    } catch (error) {
        console.log(error)
    }

    try {

        //line chart
        var ctx = document.getElementById("lineChart");
        if (ctx) {
            ctx.height = 150;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    defaultFontFamily: "Poppins",
                    datasets: [{
                            label: "My First dataset",
                            borderColor: "rgba(0,0,0,.09)",
                            borderWidth: "1",
                            backgroundColor: "rgba(0,0,0,.07)",
                            data: [22, 44, 67, 43, 76, 45, 12]
                        },
                        {
                            label: "My Second dataset",
                            borderColor: "rgba(0, 123, 255, 0.9)",
                            borderWidth: "1",
                            backgroundColor: "rgba(0, 123, 255, 0.5)",
                            pointHighlightStroke: "rgba(26,179,148,1)",
                            data: [16, 32, 18, 26, 42, 33, 44]
                        }
                    ]
                },
                options: {
                    legend: {
                        position: 'top',
                        labels: {
                            fontFamily: 'Poppins'
                        }

                    },
                    responsive: true,
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontFamily: "Poppins"

                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontFamily: "Poppins"
                            }
                        }]
                    }

                }
            });
        }


    } catch (error) {
        console.log(error);
    }





    try {

        //pie chart
        var ctx = document.getElementById("pieChart");
        if (ctx) {
            ctx.height = 200;
            var myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    datasets: [{
                        data: [45, 25, 20, 10],
                        backgroundColor: [
                            "rgba(0, 123, 255,0.9)",
                            "rgba(0, 123, 255,0.7)",
                            "rgba(0, 123, 255,0.5)",
                            "rgba(0,0,0,0.07)"
                        ],
                        hoverBackgroundColor: [
                            "rgba(0, 123, 255,0.9)",
                            "rgba(0, 123, 255,0.7)",
                            "rgba(0, 123, 255,0.5)",
                            "rgba(0,0,0,0.07)"
                        ]

                    }],
                    labels: [
                        "Green",
                        "Green",
                        "Green"
                    ]
                },
                options: {
                    legend: {
                        position: 'top',
                        labels: {
                            fontFamily: 'Poppins'
                        }

                    },
                    responsive: true
                }
            });
        }


    } catch (error) {
        console.log(error);
    }

    try {

        // polar chart
        var ctx = document.getElementById("polarChart");
        if (ctx) {
            ctx.height = 200;
            var myChart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    datasets: [{
                        data: [15, 18, 9, 6, 19],
                        backgroundColor: [
                            "rgba(0, 123, 255,0.9)",
                            "rgba(0, 123, 255,0.8)",
                            "rgba(0, 123, 255,0.7)",
                            "rgba(0,0,0,0.2)",
                            "rgba(0, 123, 255,0.5)"
                        ]

                    }],
                    labels: [
                        "Green",
                        "Green",
                        "Green",
                        "Green"
                    ]
                },
                options: {
                    legend: {
                        position: 'top',
                        labels: {
                            fontFamily: 'Poppins'
                        }

                    },
                    responsive: true
                }
            });
        }

    } catch (error) {
        console.log(error);
    }



})(jQuery);



(function($) {
    // USE STRICT
    "use strict";
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 900,
        outDuration: 900,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'page-loader',
        loadingInner: '<div class="page-loader__spin"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'html',
        transition: function(url) {
            window.location.href = url;
        }
    });


})(jQuery);
(function($) {
    // USE STRICT
    "use strict";

    // Map
    try {

        var vmap = $('#vmap');
        if (vmap[0]) {
            vmap.vectorMap({
                map: 'world_en',
                backgroundColor: null,
                color: '#ffffff',
                hoverOpacity: 0.7,
                selectedColor: '#1de9b6',
                enableZoom: true,
                showTooltip: true,
                values: sample_data,
                scaleColors: ['#1de9b6', '#03a9f5'],
                normalizeFunction: 'polynomial'
            });
        }

    } catch (error) {
        console.log(error);
    }

    // Europe Map
    try {

        var vmap1 = $('#vmap1');
        if (vmap1[0]) {
            vmap1.vectorMap({
                map: 'europe_en',
                color: '#007BFF',
                borderColor: '#fff',
                backgroundColor: '#fff',
                enableZoom: true,
                showTooltip: true
            });
        }

    } catch (error) {
        console.log(error);
    }

    // USA Map
    try {

        var vmap2 = $('#vmap2');

        if (vmap2[0]) {
            vmap2.vectorMap({
                map: 'usa_en',
                color: '#007BFF',
                borderColor: '#fff',
                backgroundColor: '#fff',
                enableZoom: true,
                showTooltip: true,
                selectedColor: null,
                hoverColor: null,
                colors: {
                    mo: '#001BFF',
                    fl: '#001BFF',
                    or: '#001BFF'
                },
                onRegionClick: function(event, code, region) {
                    event.preventDefault();
                }
            });
        }

    } catch (error) {
        console.log(error);
    }

    // Germany Map
    try {

        var vmap3 = $('#vmap3');
        if (vmap3[0]) {
            vmap3.vectorMap({
                map: 'germany_en',
                color: '#007BFF',
                borderColor: '#fff',
                backgroundColor: '#fff',
                onRegionClick: function(element, code, region) {
                    var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();

                    alert(message);
                }
            });
        }

    } catch (error) {
        console.log(error);
    }

    // France Map
    try {

        var vmap4 = $('#vmap4');
        if (vmap4[0]) {
            vmap4.vectorMap({
                map: 'france_fr',
                color: '#007BFF',
                borderColor: '#fff',
                backgroundColor: '#fff',
                enableZoom: true,
                showTooltip: true
            });
        }

    } catch (error) {
        console.log(error);
    }

    // Russia Map
    try {
        var vmap5 = $('#vmap5');
        if (vmap5[0]) {
            vmap5.vectorMap({
                map: 'russia_en',
                color: '#007BFF',
                borderColor: '#fff',
                backgroundColor: '#fff',
                hoverOpacity: 0.7,
                selectedColor: '#999999',
                enableZoom: true,
                showTooltip: true,
                scaleColors: ['#C8EEFF', '#006491'],
                normalizeFunction: 'polynomial'
            });
        }


    } catch (error) {
        console.log(error);
    }

    // Brazil Map
    try {

        var vmap6 = $('#vmap6');
        if (vmap6[0]) {
            vmap6.vectorMap({
                map: 'brazil_br',
                color: '#007BFF',
                borderColor: '#fff',
                backgroundColor: '#fff',
                onRegionClick: function(element, code, region) {
                    var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
                    alert(message);
                }
            });
        }

    } catch (error) {
        console.log(error);
    }
})(jQuery);
(function($) {
    // Use Strict
    "use strict";
    try {
        var progressbarSimple = $('.js-progressbar-simple');
        progressbarSimple.each(function() {
            var that = $(this);
            var executed = false;
            $(window).on('load', function() {

                that.waypoint(function() {
                    if (!executed) {
                        executed = true;
                        /*progress bar*/
                        that.progressbar({
                            update: function(current_percentage, $this) {
                                $this.find('.js-value').html(current_percentage + '%');
                            }
                        });
                    }
                }, {
                    offset: 'bottom-in-view'
                });

            });
        });
    } catch (err) {
        console.log(err);
    }
})(jQuery);
(function($) {
    // USE STRICT
    "use strict";

    // Scroll Bar
    try {
        var jscr1 = $('.js-scrollbar1');
        if (jscr1[0]) {
            const ps1 = new PerfectScrollbar('.js-scrollbar1');
        }

        var jscr2 = $('.js-scrollbar2');
        if (jscr2[0]) {
            const ps2 = new PerfectScrollbar('.js-scrollbar2');

        }

    } catch (error) {
        console.log(error);
    }

})(jQuery);
(function($) {
    // USE STRICT
    "use strict";

    // Select 2
    try {

        $(".js-select2").each(function() {
            $(this).select2({
                minimumResultsForSearch: 20,
                dropdownParent: $(this).next('.dropDownSelect2')
            });
        });

    } catch (error) {
        console.log(error);
    }


})(jQuery);
(function($) {
    // USE STRICT
    "use strict";

    // Dropdown 
    try {
        var menu = $('.js-item-menu');
        var sub_menu_is_showed = -1;

        for (var i = 0; i < menu.length; i++) {
            $(menu[i]).on('click', function(e) {
                e.preventDefault();
                $('.js-right-sidebar').removeClass("show-sidebar");
                if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
                    $(this).toggleClass('show-dropdown');
                    sub_menu_is_showed = -1;
                } else {
                    for (var i = 0; i < menu.length; i++) {
                        $(menu[i]).removeClass("show-dropdown");
                    }
                    $(this).toggleClass('show-dropdown');
                    sub_menu_is_showed = jQuery.inArray(this, menu);
                }
            });
        }
        $(".js-item-menu, .js-dropdown").click(function(event) {
            event.stopPropagation();
        });

        $("body,html").on("click", function() {
            for (var i = 0; i < menu.length; i++) {
                menu[i].classList.remove("show-dropdown");
            }
            sub_menu_is_showed = -1;
        });

    } catch (error) {
        console.log(error);
    }

    var wW = $(window).width();
    // Right Sidebar
    var right_sidebar = $('.js-right-sidebar');
    var sidebar_btn = $('.js-sidebar-btn');

    sidebar_btn.on('click', function(e) {
        e.preventDefault();
        for (var i = 0; i < menu.length; i++) {
            menu[i].classList.remove("show-dropdown");
        }
        sub_menu_is_showed = -1;
        right_sidebar.toggleClass("show-sidebar");
    });

    $(".js-right-sidebar, .js-sidebar-btn").click(function(event) {
        event.stopPropagation();
    });

    $("body,html").on("click", function() {
        right_sidebar.removeClass("show-sidebar");

    });


    // Sublist Sidebar
    try {
        var arrow = $('.js-arrow');
        arrow.each(function() {
            var that = $(this);
            that.on('click', function(e) {
                e.preventDefault();
                that.find(".arrow").toggleClass("up");
                that.toggleClass("open");
                that.parent().find('.js-sub-list').slideToggle("250");
            });
        });

    } catch (error) {
        console.log(error);
    }


    try {
        // Hamburger Menu
        $('.hamburger').on('click', function() {
            $(this).toggleClass('is-active');
            $('.navbar-mobile').slideToggle('500');
        });
        $('.navbar-mobile__list li.has-dropdown > a').on('click', function() {
            var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
            $(this).toggleClass('active');
            $(dropdown).slideToggle('500');
            return false;
        });
    } catch (error) {
        console.log(error);
    }
})(jQuery);
(function($) {
    // USE STRICT
    "use strict";

    // Load more
    try {
        var list_load = $('.js-list-load');
        if (list_load[0]) {
            list_load.each(function() {
                var that = $(this);
                that.find('.js-load-item').hide();
                var load_btn = that.find('.js-load-btn');
                load_btn.on('click', function(e) {
                    $(this).text("Loading...").delay(1500).queue(function(next) {
                        $(this).hide();
                        that.find(".js-load-item").fadeToggle("slow", 'swing');
                    });
                    e.preventDefault();
                });
            })

        }
    } catch (error) {
        console.log(error);
    }

})(jQuery);
(function($) {
    // USE STRICT
    "use strict";

    try {

        $('[data-toggle="tooltip"]').tooltip();

    } catch (error) {
        console.log(error);
    }

    // Chatbox
    try {
        var inbox_wrap = $('.js-inbox');
        var message = $('.au-message__item');
        message.each(function() {
            var that = $(this);

            that.on('click', function() {
                $(this).parent().parent().parent().toggleClass('show-chat-box');
            });
        });


    } catch (error) {
        console.log(error);
    }

})(jQuery);

$(document).ready(function() {
    $('.ripple-effect').rkmd_rippleEffect();
});

(function($) {
    $.fn.rkmd_rippleEffect = function() {
        var btn, self, ripple, size, rippleX, rippleY, eWidth, eHeight;

        btn = $(this).not('[disabled], .disabled');

        btn.on('mousedown', function(e) {
            self = $(this);

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            if (self.find('.ripple').length === 0) {
                self.prepend('<span class="ripple"></span>');
            }
            ripple = self.find('.ripple');
            ripple.removeClass('animated');

            eWidth = self.outerWidth();
            eHeight = self.outerHeight();
            size = Math.max(eWidth, eHeight);
            ripple.css({ 'width': size, 'height': size });

            rippleX = parseInt(e.pageX - self.offset().left) - (size / 2);
            rippleY = parseInt(e.pageY - self.offset().top) - (size / 2);

            ripple.css({ 'top': rippleY + 'px', 'left': rippleX + 'px' }).addClass('animated');

            setTimeout(function() {
                ripple.remove();
            }, 800);

        });
    };
}(jQuery));

function progressbar_case() {
    const progress = document.querySelector('.progress-done');

    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;

    /*counter code*/
    /*adapted from answer on: https://stackoverflow.com/questions/50245161/simple-javascript-counter-without-using-jquery-or-other-frameworks */
    const final = parseInt(progress.getAttribute('data-done')) / 10;
    const duration = 1000;
    let start;

    const step = ts => {
        if (!start) { start = ts; }
        // get the time passed as a fraction of total duration
        let prog = (ts - start) / duration;
        progress.textContent = progress.getAttribute('data-done') / 10 + "%";
        if (prog < 1) { // if not done, request another frame
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step)

}

function progressbar_cure() {
    const progress2 = document.querySelector('.progress-done2');

    progress2.style.width = progress2.getAttribute('data-done') + '%';
    progress2.style.opacity = 1;

    /*counter code*/
    /*adapted from answer on: https://stackoverflow.com/questions/50245161/simple-javascript-counter-without-using-jquery-or-other-frameworks */
    const final = parseInt(progress2.getAttribute('data-done'));
    const duration = 1000;
    let start;

    const step = ts => {
        if (!start) { start = ts; }
        // get the time passed as a fraction of total duration
        let prog = (ts - start) / duration;
        progress2.textContent = progress2.getAttribute('data-done') + "%";
        if (prog < 1) { // if not done, request another frame
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step)

}


function progressbar_death() {
    const progress3 = document.querySelector('.progress-done3');

    progress3.style.width = progress3.getAttribute('data-done') + '%';
    progress3.style.opacity = 1;

    /*counter code*/
    /*adapted from answer on: https://stackoverflow.com/questions/50245161/simple-javascript-counter-without-using-jquery-or-other-frameworks */
    const final = parseInt(progress3.getAttribute('data-done')) / 10;
    const duration = 1000;
    let start;

    const step = ts => {
        if (!start) { start = ts; }
        // get the time passed as a fraction of total duration
        let prog = (ts - start) / duration;
        progress3.textContent = parseInt(progress3.getAttribute('data-done')) / 10 + "%";
        if (prog < 1) { // if not done, request another frame
            requestAnimationFrame(step);
        }
    }
    requestAnimationFrame(step)

}
