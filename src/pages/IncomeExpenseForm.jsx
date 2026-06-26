import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addEntry } from "../features/financeSlice";

function IncomeExpenseForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [entryType, setEntryType] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!description || !amount) return alert("Please fill out all fields.");

//     dispatch(addEntry({
//       id: Date.now().toString(),
//       description,
//       amount: parseFloat(amount),
//       entryType
//     }));

    // Reset fields
//     setDescription("");
//     setAmount("");
//   };

  return (
    <div>
      <h1>New Entry Page</h1>
      {/* onSubmit={handleSubmit} */}
      <form >
        <div>
          <label>Description:</label>
          <br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Amount:</label>
          <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Entry Type:</label>
          <br />
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
            {/* <option value="Savings">Savings</option> */}
          </select>
        </div>
        <br />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}

export default IncomeExpenseForm;