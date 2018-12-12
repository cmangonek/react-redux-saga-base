import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as landingActions from "../actions/landingActions";
import Landing from "../components/Landing";


class LandingContainer extends Component {
	render(){
		return <Landing {...this.props} />
	}
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => 
  bindActionCreators({ 
  	...landingActions,
  }, dispatch);


export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(LandingContainer);