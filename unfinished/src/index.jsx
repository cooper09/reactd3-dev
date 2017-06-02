import './main.css';
import React         from 'react';
import ReactDOM      from 'react-dom';
import { Provider }  from 'react-redux';
// cooper s - cooper's homemade charts....
import Chart         from './components/chart.jsx';
//import PieChart      from './components/pie-chart.jsx';

//import PieChart from 'react-simple-pie-chart';
//import PieChart       from './components/simple-pie.jsx'

var PieChart = require('react-d3-basic').PieChart;

const mountingPoint = document.createElement('div');
mountingPoint.className = 'react-app';
document.body.appendChild(mountingPoint);
 
ReactDOM.render(<Chart></Chart>, mountingPoint )

/*
var slices = [
    { color: '#468966', value: 10, label: 'test' },
    { color: '#FFF0A5', value: 20 },
    { color: '#FFB03B', value: 30 },
    { color: '#B64926', value: 40 },
    { color: '#8E2800', value: 50 },
];

var generalChartData = require('dsv?delimiter=,!./pie-test.csv');

  var width = 700,
    height = 400,
    value = function(d) {
      return "111"; //+d.population;
    },
    name = function(d) {
      return "13"; //d.age;
    },
    chartSeries = [
      {
        "field": "<5",
        "name": "less than 5"
      },
      {
        "field": "5-13",
        "name": "5 to 13"
      },
      {
        "field": "14-17",
        "name": "14 to 17"
      },
      {
        "field": "18-24",
        "name": "18 to 24"
      },
      {
        "field": "25-44",
        "name": "25 to 44"
      },
      {
        "field": "45-64",
        "name": "45 to 64"
      }
    ],
    innerRadius = 10;

ReactDOM.render(<PieChart>
    data= {generalChartData}
    width= {width}
    height= {height}
    chartSeries= {chartSeries}
    value = {value}
    name = {name}
    innerRadius = {innerRadius}
</PieChart>, mountingPoint ); */

