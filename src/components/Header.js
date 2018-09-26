import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'

const Header = ({ startLogout }) => (
  <header  style={{margin:20}}>
    <h1>Expensify! </h1>
    <NavLink to="/dashboard" activeClassName="is-active" exact>Dashboard</NavLink>
    &nbsp;-&nbsp;
    <NavLink to="/create" activeClassName="is-active" exact>Create Expense</NavLink>
    &nbsp;-&nbsp;
    <NavLink to="/help" activeClassName="is-active" exact>Help</NavLink>
    &nbsp;-&nbsp;
   <button onClick={startLogout}>Logout</button>
  </header>
);


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);
