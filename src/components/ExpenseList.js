import React from 'react';
import ExpenseItem from './ExpenseItem';
import { connect } from 'react-redux';

import selectedItems from '../selectors/expenses'

const ExpenseList = (props) => (
  <div className="content-container">
    <div>
      <div className="list-header">
        <div className="show-mobile">Expenses</div>
        <div className="show-desktop">Expense</div>
        <div className="show-desktop">Amount</div>
      </div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
          props.expenses.map((expense) => {
          return <ExpenseItem key={expense.id} {...expense} />
          })
        )
      }
    </div>
  </div>
)


const mapStateToProps = (state) => {
  return {
    expenses: selectedItems(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);
