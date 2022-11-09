import React from "react";
const Button = (props)=> {
    return (
        <>


  <button className="btn col-8 mx-auto p-1 rounded" style={{background:"#0D9FB1", color:"white"}} type="submit" onClick={props.onClick}>SignUp</button>



      </>
    );
  };
  
  export default Button;