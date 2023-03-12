import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {

   const [enteredTitle, setEnteredTitle] = useState('')
   const [enteredAmount, setEnteredAmount] = useState('')
   const [enteredDate, setEnteredDate] = useState('')

   const titleChangerHandler = (e) => {
      setEnteredTitle(e.target.value)
   }
   const amountChangerHandler = (e) => {
      setEnteredAmount(e.target.value)
   }
   const dateChangerHandler = (e) => {
      setEnteredDate(e.target.value)
   }
   const submitHandler = (e) => {
      e.preventDefault();
      const expenseData = {
         title: enteredTitle,
         amount: enteredAmount,
         date: new Date(enteredDate)
      }
      props.onSaveExpenseData(expenseData)
      setEnteredTitle('')
      setEnteredAmount('')
      setEnteredDate('')
   }


   return <form onSubmit={submitHandler}>
      <div className="new_expense__controls">
         <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangerHandler} />
         </div>
      </div>
      <div className="new_expense__controls">
         <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangerHandler} />
         </div>
      </div>
      <div className="new_expense__controls">
         <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min='2019-01-01' max='2024-01-01' value={enteredDate} onChange={dateChangerHandler} />
         </div>
      </div>
      <div className="new_expense__actions">
         <button type="submit">Add Expense</button>
      </div>
   </form>
}

export default ExpenseForm;