import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import selectedExpensesTotal from '../selectors/expenses-total'


const ExpenseTotal = ({ expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1? 'expense' : 'expenses';
  const formatedTotal = numeral(expensesTotal / 100).format('$0,0.00')

  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totaling {formatedTotal}</h1>
    </div>
  )
}


const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  console.log(selectedExpensesTotal(visibleExpenses));
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectedExpensesTotal(visibleExpenses)
  }
}


export default connect(mapStateToProps)(ExpenseTotal)
