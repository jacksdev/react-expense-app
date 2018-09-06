import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'

const ExpenseItem = ({ dispatch, id, description, note, amount, createdAt}) => (
  <div>
    <h3><Link to={`/edit/${id}`} >{description}</Link></h3>
    <p>
      {description}
      -
      {moment(createdAt).format("dddd, MMM Do YYYY")}
      -
      <b>{numeral(amount / 100).format('$0,0.00')}</b>
    </p>

    <p>
      {note}
    </p>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>
)


export default connect()(ExpenseItem);
