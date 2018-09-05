import React from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';

import selectedItems from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    {props.expenses.map((expense) => {
      return <ExpenseItem key={expense.id} {...expense} />
    })}
  </div>
)


const mapStateToProps = (state) => {
  return {
    expenses: selectedItems(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);
