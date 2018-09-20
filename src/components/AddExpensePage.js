import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
  <div style={{margin:20}}>
    This is the AddExpensePage page.

    <br />
    <ExpenseForm onSubmit={(expense) => {
      props.dispatch(startAddExpense(expense))
      props.history.push('/')
    }} />
  </div>
);

export default connect()(AddExpensePage);
