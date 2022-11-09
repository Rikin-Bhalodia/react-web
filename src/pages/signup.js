
import React from "react";
import InputBox from "../components/inputbox";
import Button from "../components/Buttons/button";
import Carousel from "../components/carousel/carousel";
import { useNavigate } from "react-router-dom";
const SIGNUP = () => {
  const navigate = useNavigate(); 
  function handleNavigate() {
    navigate("/otpverify");
  }


    return (
        <>
        
        
      <div className="container-fluid m-0 p-0 ">
      <div className="row ">
      <Carousel/>
    <div className="col">
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="d-grid gap-2 col-8 mx-auto ">

      <h1>Hi Welcome</h1>
      <h7>create a new account</h7>
      <br></br>
      <label htmlFor="text1" className="form-label text-start">Name</label>
        <InputBox placeholder="username"/>
        <label htmlFor="text1" className="form-label text-start">Email address</label>
        <InputBox placeholder="example@gmail.com"/>
        <label htmlFor="text1" className="form-label text-start">Passwrod</label>
        <InputBox  placeholder="password"/>
        <br></br>
        <p className="mx-auto">Already have an account?<a href="/signin" className="link-info">Signn</a> here </p> 
        
        
        <Button onClick={handleNavigate}/>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom"></div>
  

        By continuing, you agree to our Terms and Conditions and Privacy Policy
<br></br>


        
        </div>
        </div>
        </div>
   


      </div>
      </>
    );
  };
  
  export default SIGNUP;