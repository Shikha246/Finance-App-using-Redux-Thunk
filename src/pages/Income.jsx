import { useSelector, useDispatch } from "react-redux";
import {fetchIncome} from "../actions";
import { useEffect } from "react";
const Income = () =>{
    const income = useSelector((state) => state.income);
    const dispatch = useDispatch();
    console.log(income);

    const totalIncome = income.reduce((acc,curr) => curr.amount + acc , 0);


    useEffect(() => {
        dispatch(fetchIncome());
    },[dispatch]);
return(
    <div>
        <h1>Income Page</h1>
        <ul>
            {income.map((salary,index) => (
                <li key={index}>
                    {salary.description} : ${salary.amount}
                </li>
            ))}
        </ul>
        <h2>Income Total:$ {totalIncome}</h2>
        
    </div>
)

}
export default Income;