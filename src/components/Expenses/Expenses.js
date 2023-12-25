import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";


function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2023');
  const changeFilterHandler = (yearSelected)=>{
    setFilteredYear(yearSelected);
  }
  return (
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[4].title}
            amount={props.items[4].amount}
            date={props.items[4].date}
          ></ExpenseItem>
        </Card>
      );
}

export default Expenses;