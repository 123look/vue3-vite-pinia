const pieOption = {
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 350,
                    name: 'Vue'
                },
                {
                    value: 250,
                    name: 'React'
                },
                {
                    value: 300,
                    name: 'Angular'
                }
            ]
        }
    ]
}

const RoseOption = {
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 100,
                    name: 'Vue'
                },
                {
                    value: 200,
                    name: 'React'
                },
                {
                    value: 300,
                    name: 'angular'
                }
            ],
            roseType: 'area'
        }
    ]
};

const circlesOption = {
    title: {
        text: '圆环图',
        left: 'center',
        top: 'center'
    },
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 335,
                    name: 'Vue'
                },
                {
                    value: 234,
                    name: 'Angular'
                },
                {
                    value: 1548,
                    name: 'React'
                }
            ],
            radius: ['40%', '70%']
        }
    ]
}

const barOption = {
    xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28, 25]
        }
    ]
}

const stackingOption = {
    xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
    },
    yAxis: {},
    series: [
        {
            data: [10, 22, 28, 43, 49],
            type: 'bar',
            stack: 'x'
        },
        {
            data: [5, 4, 3, 5, 10],
            type: 'bar',
            stack: 'x'
        }
    ]
}
let data = [];
for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
}
const dynamicSortOption = {
    xAxis: {
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 2 // only the largest 3 bars will be displayed
    },
    series: [
        {
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data: data,
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        }
    ],
    legend: {
        show: true
    },
    animationDuration: 3000,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
}
const update = (option: any, dom: any) => {
    var data = option.series[0].data;
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
            data[i] += Math.round(Math.random() * 2000);
        } else {
            data[i] += Math.round(Math.random() * 200);
        }
    }
    dom.setOption(option);
}

var stepData = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
var help = [];
var positive = [];
var negative = [];
for (var i = 0, sum = 0; i < stepData.length; ++i) {
    if (stepData[i] >= 0) {
        positive.push(stepData[i]);
        negative.push('-');
    } else {
        positive.push('-');
        negative.push(-stepData[i]);
    }

    if (i === 0) {
        help.push(0);
    } else {
        sum += stepData[i - 1];
        if (stepData[i] < 0) {
            help.push(sum + stepData[i]);
        } else {
            help.push(sum);
        }
    }
}
const stepOption = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: { show: false },
        data: (function () {
            var list = [];
            for (var i = 1; i <= 11; i++) {
                list.push('Oct/' + i);
            }
            return list;
        })()
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            type: 'bar',
            stack: 'all',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: help
        },
        {
            name: 'positive',
            type: 'bar',
            stack: 'all',
            data: positive
        },
        {
            name: 'negative',
            type: 'bar',
            stack: 'all',
            data: negative,
            itemStyle: {
                color: '#f33'
            }
        }
    ]
}
export {
    pieOption,
    circlesOption,
    RoseOption,
    barOption,
    stackingOption,
    dynamicSortOption,
    stepOption,
    update
}