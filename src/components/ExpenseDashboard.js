import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList'

const ExpenseDashboard = () => (
  <div style={{margin:20}}>
    This is the Dashboard page.
    <br />
    <br />
    <ExpenseListFilters />


    <ExpenseList />
  </div>
);



export default ExpenseDashboard;
