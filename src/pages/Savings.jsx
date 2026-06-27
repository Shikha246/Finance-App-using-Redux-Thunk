import { useSelector, useDispatch } from "react-redux";
import {fetchExpenses, fetchIncome} from "../actions";
import { useEffect } from "react";
const Savings = () =>{
    const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses);
    const income = useSelector((state) => state.income);
    
    console.log(expenses);

    const totalExpenses = expenses.reduce((acc,curr) => curr.amount + acc , 0);
    const totalIncome = income.reduce((acc,curr) => curr.amount + acc , 0);
    const totalSavings = totalIncome - totalExpenses;
    useEffect(() => {
        dispatch(fetchExpenses());
    },[]);

    useEffect(() => {
        dispatch(fetchIncome());
    },[]);
return(
    <div>
        <h1>Savings Page</h1>
        
        <h2>Savings Total:$ {totalSavings}</h2>
        
    </div>
)

}
export default Savings;