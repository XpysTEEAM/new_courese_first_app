import './ExpenseItem.css'
import { useState } from 'react'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
   const [title, setTitle] = useState(props.title)
   const clickHandler = () => {
      setTitle(props.date.toString())
   }
   return (
      <Card className="expense-item">
         <ExpenseDate date={props.date} />
         <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount}$</div>
            <button onClick={clickHandler}>Update</button>
         </div>
      </Card>
   );
}

export default ExpenseItem;