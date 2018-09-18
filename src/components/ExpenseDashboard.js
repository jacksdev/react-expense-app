import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';
import ExpenseTotal from './ExpenseTotal'

const ExpenseDashboard = () => (
  <div style={{margin:20}}>
    This is the Dashboard page.
    <br />
    <ExpenseListFilters />
    <br />
    <ExpenseTotal />
    <ExpenseList />
  </div>
);



export default ExpenseDashboard;
