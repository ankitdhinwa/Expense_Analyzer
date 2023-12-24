import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "E1",
      title: "Automobile Pvt. Ltd.",
      amount: "2,81,600",
      date: new Date(2023, 11, 25),
    },
    {
      id: "E2",
      title: "PaperWorks Pvt. Ltd.",
      amount: "5,42,700",
      date: new Date(2023, 10, 5),
    },
    {
      id: "E3",
      title: "Fabric Pvt. Ltd.",
      amount: "9,71,500",
      date: new Date(2023, 7, 2),
    },
    {
      id: "E4",
      title: "Cement Pvt. Ltd.",
      amount: "1,60,500",
      date: new Date(2023, 2, 28),
    },
    {
      id: "E5",
      title: "Construction Pvt. Ltd.",
      amount: "8,28,100",
      date: new Date(2023, 9, 5),
    },
  ];
  return (
    <div className="App">
      <h1>Let's get started!!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
