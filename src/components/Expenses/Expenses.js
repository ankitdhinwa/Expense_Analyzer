import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const changeFilterHandler = (yearSelected) => {
    setFilteredYear(yearSelected);
  };
  
  const filterByYear = props.items.filter((expenses)=>{
    return expenses.date.getFullYear().toString() === filteredYear;
  })

  
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpenseList items={filterByYear}/>
      {/* {filterByYear.length === 0 ? <p>No Expenses Found!!</p> : filterByYear.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))} */}
    </Card>
  );
}

export default Expenses;
