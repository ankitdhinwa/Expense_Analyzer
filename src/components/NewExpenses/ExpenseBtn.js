import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const ExpenseBtn = (props) => {
  const [showComponent, setShowComponent] = useState(false);
  const [addNewStateTitle, setAddNewStateTitle] = useState('Add New State');


  const handleClick = () => {
    if(showComponent===false){
        setAddNewStateTitle('Minimize');
        setShowComponent(true);
    }
    else{
        setAddNewStateTitle('Add New State');
        setShowComponent(false);
    }
    
  };

  const userAddedExpenseHandler = (Data) => {
    props.onDataExpense(Data);
  };

  return (
    <div>
      <button onClick={handleClick}>{addNewStateTitle}</button>
      {showComponent && <ExpenseForm onExpense={userAddedExpenseHandler} />}
    </div>
  );
};

export default ExpenseBtn;
