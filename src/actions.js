export const addEntry = (entry) => async (dispatch) => {
    try{
        console.log("Sending entry payload:", entry);
        const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/add-income", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(entry),
        });
        const data = await response.json()
        // 2. If the server returns a bad status (like 400), log the backend's message
        if (!response.ok) {
            console.error("Backend Validation Error Details:", data);
            return; // Stop execution
        }
        if(data.success === true){
            console.log(data);
            dispatch({type:"ADD_ENTRY_SUCCESS", payload:data.data})
        }
    }catch(error){
        console.error("Error Adding Entry", error);
    }
}


export const addExpense = (entry) => async (dispatch) => {
    try{
        console.log("Sending entry payload:", entry);
        const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/add-expense", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(entry),
        });
        const data = await response.json()
        // 2. If the server returns a bad status (like 400), log the backend's message
        if (!response.ok) {
            console.error("Backend Validation Error Details:", data);
            return; // Stop execution
        }
        if(data.success === true){
            console.log(data);
            dispatch({type:"ADD_ENTRY_SUCCESS", payload:data.data})
        }
    }catch(error){
        console.error("Error Adding Entry", error);
    }
}

export const fetchIncome = () => async (dispatch) =>{
    try{
        const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/income");
        const data = await response.json()
        if(data){
             dispatch({type:"FETCH_INCOME_SUCCESS", payload:data})
        }
    }catch(error){
        console.error("Error fetching income",error);
    }
}

export const fetchExpenses = () => async (dispatch) =>{
    try{
        const response = await fetch("https://finance-app-backend-Student-neoG.replit.app/expenses");
        const data = await response.json()
        if(data){
             dispatch({type:"FETCH_EXPENSES_SUCCESS", payload:data})
        }
    }catch(error){
        console.error("Error fetching expenses",error);
    }
}