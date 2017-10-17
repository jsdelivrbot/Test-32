//window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 8000;

//import React, { Component } from 'react';
//GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;


//var urlToFetch = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//var ReactDOM = require('react-dom');

import axios from 'axios';

import CamperList from './camper_list.js';
import CamperListItem from './camper_list_item.js';

export default class FetchComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			requestFailed: false,
			recentCampers: [],
			allTimeCampers: [],
			currentDisplay: 'recentCampers'
		}
	}
	
  componentDidMount(){
	  
    axios.all([this.fetchRecentCampers(), this.fetchTopCampers()])
      .then(axios.spread((recentCampers, allTimeCampers) => {
			console.log(recentCampers.data);
			
			this.setState({
            recentCampers: recentCampers.data,
            allTimeCampers: allTimeCampers.data
          });  
      }));
  }
  
    fetchRecentCampers(){
      return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
    }
    
    fetchTopCampers(){
      return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
    }
	
	changeDisplay(list){
		this.setState({ list });
	}

    render() {

		console.log(this.state);
	
      return(
	  
        <div>
            <h2>  </h2>
            <button onClick={() => this.changeDisplay('recentCampers')} className="btn btn-primary"> Recent Campers </button>
            <button onClick={() => this.changeDisplay('allTimeCampers')} className="btn btn-primary"> All Time Campers </button>
			
			<div>
			  <CamperList campers={this.state.recentCampers} > </CamperList>
			</div>
        </div>
      );
    }
}






ReactDOM.render(
  React.createElement(FetchComp, null, null),
  document.getElementById('root')
);
