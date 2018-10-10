import React from 'react';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses'
import { Link } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'

const ExpenseItem = ({
  dispatch,
  id,
  description,
  note,
  amount,
  createdAt
}) => (
  <div>
    <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="item-list__title">{description}</h3>
      <span className="item-list__subtitle">{moment(createdAt).format("dddd, MMM Do YYYY")}</span>
    </div>

    <div>
      <h3 className="item-list__data">{numeral(amount / 100).format('$0,0.00')}</h3>
    </div>
    </Link>
    <div>
      <button className="button button--secondary" onClick={() => {
        dispatch(startRemoveExpense({ id }));
      }}>Remove</button>
    </div>
  </div>
)


export default connect()(ExpenseItem);
