import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  //});

  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput({...userInput,enteredTitle: event.target.value})-->won't work
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredAmount: event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredDate(event.target.value);
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredDate: event.target.value}
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      //Date entered should be passed in format of date. So, it can matched datatype to the items in the FAKE_EXPENSES list
      date: new Date(enteredDate),
    };
    console.log(userExpense);
    props.onExpense(userExpense);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2018-01-01"
            max="2025-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
