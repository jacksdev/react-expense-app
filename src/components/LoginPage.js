import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

const LoginPage = ({ startLogin }) => (
  <div style={{margin:20}}>
    <button onClick={startLogin}>Log-In</button>
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
