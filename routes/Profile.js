import Prof from "../styles/Prof.css"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import soham from "../pics/soham.jpg"

function Profile(){
    const navigate= useNavigate()

   const handlesubmission=(event)=>{
     event.preventDefault();
    const con = event.target.elements.em.value;
    if (con==""){
        alert("Fill the required fields")
    }
    else{
        //navigate("/profile-two", { state: data });
        console.log(con)
    navigate("/submit",{state:{con}})}

   }
    return(
        
        <>
        <header>Profile</header>
        <hr></hr>
        <section id="info">
        <h2><strong>Personal details</strong></h2><br></br><br></br>
        <img src={soham}/><br></br><br></br>
        <b>Name</b>: <i>Soham A. Phalke</i><br></br>
        <b>Phone no.</b>: 9372966910<br></br>
        <b>E-mail</b>:2021.soham.phalke@ves.ac.in<br></br>
        <b>Education</b>: <em>BE</em><br></br>
        <b>College</b>: <small>VESIT</small><br></br>
       
       
        </section>
        <hr></hr>
        <section id="tech">
        <h2><strong>Skills</strong></h2>
        <ol>
            <li>Python</li>
            <li><abbr title="HyperText markup language">HTML</abbr></li>
            <li><abbr title="Structured query language">SQL</abbr></li>
        
        </ol>
        </section>
        <hr></hr>
        <h4>Contact me</h4>
        <footer>
            <form onSubmit={handlesubmission} >
                <input type="email" name="em"placeholder="Enter E-mail" pattern="[A-Z a-z 0-9]+@+[a-z]+.com"/>
                <button type="submit" >Submit</button>
                    
            </form>
        </footer>

        </>
      
        
    )
}

export default Profile