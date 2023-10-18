import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

function Submit(){
    const navigate = useNavigate()
    const location = useLocation();
    const goback=()=>{
        navigate("/")
    }
        
    return(
        <>
       
        
        Thank you for contacting
        <br></br>
        {location.state.con}
        <br></br>
        <button onClick={goback}>Go back</button>
        </>
    )
}

export default Submit