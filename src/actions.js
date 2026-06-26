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
        if(data.success === true){
            console.log(data);
            dispatch({type:"ADD_ENTRY_SUCCESS", payload:data})
        }
    }catch(error){
        console.error("Error Adding Entry", error);
    }
}