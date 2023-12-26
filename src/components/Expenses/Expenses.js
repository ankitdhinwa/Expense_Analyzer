import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

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
      {/* Accessing ExpenseItems dynamically rather by indexing  */}
      {/* To uniquely identify each added ExpenseItem */}
      {filterByYear.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
