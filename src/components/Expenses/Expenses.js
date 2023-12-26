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
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {/* Accessing ExpenseItems dynamically rather by indexing  */}
      {props.items.map((expenses) => (
        <ExpenseItem
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
