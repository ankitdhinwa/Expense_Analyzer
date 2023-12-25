import ExpenseForm from "./ExpenseForm";
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
      <ExpenseForm onUserAddedExpense={userAddedExpenseHandler} />
    </div>
  );
};

export default NewExpense;
