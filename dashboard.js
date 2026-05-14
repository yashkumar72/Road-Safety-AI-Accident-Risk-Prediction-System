const ctx = document.getElementById('riskChart');

new Chart(ctx, {

type: 'pie',

data: {

labels: ['Low Risk', 'Medium Risk', 'High Risk'],

datasets: [{

label: 'Risk Distribution',

data: [40, 35, 25],

backgroundColor: [
'#3b82f6',
'#f97316',
'#ef4444'
]

}]

},

options: {

responsive:true,

plugins:{
legend:{
position:'bottom'
}
}

}

});