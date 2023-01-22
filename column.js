Highcharts.chart('columncontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Cherries', 'Oranges', 'Strawberries', 'Grapes', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Hector',
        data: [8, 8, -3, 7, 4]
    }, {
        name: 'Ellie',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});