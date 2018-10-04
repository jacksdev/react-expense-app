import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral'
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses'
import selectedExpensesTotal from '../selectors/expenses-total'


const ExpenseTotal = ({ expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1? 'expense' : 'expenses';
  const formatedTotal = numeral(expensesTotal / 100).format('$0,0.00')

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formatedTotal}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">+ Add expense</Link>
        </div>
      </div>
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
