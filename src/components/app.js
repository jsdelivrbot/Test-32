import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import CamperList from './camper_list.js';

export default class FetchComp extends Component {
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

		changeDisplay(currentDisplay){
			this.setState({ currentDisplay });
		}

    render() {
      return(
        <div>
	        <h2>{`Displaying the ${this.state.currentDisplay}`}</h2>
	        <button
						onClick={() => this.changeDisplay('recentCampers')}
						className="btn btn-primary"
					>
						Recent Campers
					</button>
	        <button
						onClick={() => this.changeDisplay('allTimeCampers')}
						className="btn btn-primary"
					>
						All Time Campers
					</button>
			  	<CamperList campers={this.state[this.state.currentDisplay]} />
        </div>
      );
    }
}
