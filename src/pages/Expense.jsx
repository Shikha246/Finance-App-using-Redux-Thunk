import { useSelector, useDispatch } from "react-redux";
import {fetchExpenses} from "../actions";
import { useEffect } from "react";
const Expense = () =>{
    const expenses = useSelector((state) => state.expenses);
    const dispatch = useDispatch();
    console.log(expenses);

    const totalExpenses = expenses.reduce((acc,curr) => curr.amount + acc , 0);

    
    useEffect(() => {
        dispatch(fetchExpenses());
    },[dispatch]);
return(
    <div>
        <h1>Expense Page</h1>
        <ul>
            {expenses.map((salary,index) => (
                <li key={index}>
                    {salary.description} : ${salary.amount}
                </li>
            ))}
        </ul>
        <h2>Expense Total:$ {totalExpenses}</h2>
        
    </div>
)

}
export default Expense;