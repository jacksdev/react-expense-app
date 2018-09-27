
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage'
import ExpenseDashboard from '../components/ExpenseDashboard'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'



export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={ExpenseDashboard} exact />
        <PrivateRoute path="/create" component={AddExpensePage} exact />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/help" component={HelpPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter;
