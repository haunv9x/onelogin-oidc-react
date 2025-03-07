import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader";

import * as oidcApi from "../api/oidcApi";
import { generateStateAndNonce } from "../actions/tokenActions";

import "../css/LoginPage.css";

const LoginPage = ({ state, nonce, generateParams }) => {
  console.log(state, nonce, generateParams ,'vstate, nonce, generateParams ')
  if (state === null || nonce === null) {
    generateParams();
  } else {
    console.log('state, nonce, generateParams: ', state, nonce);
    oidcApi.beginAuth({ state, nonce });
  }

  return (
    <Loader />
  );
};

const mapStateToProps = state => ({
  state: state.token.state,
  nonce: state.token.nonce
});

const mapDispatchToProps = dispatch => ({
  generateParams: () => dispatch(generateStateAndNonce())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
