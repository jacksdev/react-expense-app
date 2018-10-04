import React from 'react';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';
import ExpenseTotal from './ExpenseTotal'

const ExpenseDashboard = () => (
  <div>
    <ExpenseTotal />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);



export default ExpenseDashboard;
