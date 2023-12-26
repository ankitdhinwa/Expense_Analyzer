import ExpenseBtn from "./ExpenseBtn";
import "./NewExpense.css";

const NewExpense = (props) => {
  const userAddedExpenseHandler = (userExpenseData) =>{
    const ExpenseData = {
      ...userExpenseData,
      id: Math.random().toString()
    }
    //console.log(ExpenseData + ' from NewExpense file');
    props.onDataInNewExpense(ExpenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseBtn onDataExpense={userAddedExpenseHandler}/>
      {/* <ExpenseForm onUserAddedExpense={userAddedExpenseHandler} /> */}
    </div>
  );
};

export default NewExpense;
