
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses'
import { sortByDate } from './actions/filters'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'


const store = configureStore();

//
// store.dispatch(addExpense({ description: 'Gas bill', amount: 4500, createdAt: 12000 }));
// store.dispatch(addExpense({ description: 'Water bill', amount: 2600, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent bill', amount: 111600, createdAt: 5000 }));



const state = store.getState();
const filteredExpenses = getVisibleExpenses(state.expenses, state.filters);


store.dispatch(sortByDate())


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render( jsx , document.getElementById('app'));
