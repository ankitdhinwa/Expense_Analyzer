import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const clickHandler= ()=>{
    console.log("Clicked!!");
  };
  return (
    <Card className="expense-item">
        <ExpenseDate edate={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}₹</div>
        <button onClick={clickHandler}>Click Me</button>
        {/* clickHandler function is called as clickHandler only not as clickHandler() as it is now executed only when event occurs.When clickhandler() is used then it act as a JS and executed when Card is started executing.*/}
      </div>
    </Card>
  );
}

export default ExpenseItem;
