import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expense App</h1>
      <p>
        Mangae your expenses quickly and easily with this app.
      </p>
      <button onClick={startLogin}>Log-In</button>
    </div>

  </div>
)


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
