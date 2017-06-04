import './main.css';
import React         from 'react';
import ReactDOM      from 'react-dom';
import { Provider }  from 'react-redux';

// cooper s - cooper's homemade charts....
import Dashboard         from './components/dashboard.jsx';

//import Dashboard         from './components/DashboardApp';

const mountingPoint = document.createElement('div');

mountingPoint.className = 'react-app';

document.body.appendChild(mountingPoint);

const myDashboard = Dashboard.DashboardApp;

ReactDOM.render(<myDashboardApp />, mountingPoint )


