import Expenses from "./components/Expenses";
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
    <div className='App'>
      <h2>Let's get started!!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
