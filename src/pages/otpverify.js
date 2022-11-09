
import React from "react";
import {useRef, useEffect} from 'react';
import InputBox from "../components/inputbox";
import Button from "../components/Buttons/button";
import Carousel from "../components/carousel/carousel";
import { useNavigate } from "react-router-dom";
const OTPVERIFY = () => {
  const navigate = useNavigate(); 
  // const ref = useRef(null);
  // const document = ref.current;
  // document.addEventListener("DOMContentLoaded", function(event) {
  
    function OTPInput() {
  const inputs = document.querySelectorAll('#otp > *[id]');
  for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function(event) { if (event.key==="Backspace" ) { inputs[i].value='' ; if (i !==0) inputs[i - 1].focus(); } else { if (i===inputs.length - 1 && inputs[i].value !=='' ) { return true; } else if (event.keyCode> 47 && event.keyCode < 58) { inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode> 64 && event.keyCode < 91) { inputs[i].value=String.fromCharCode(event.keyCode); if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); } } OTPInput();
  
      
  // });
//   function OTPInput() {
//     const inputs = document.querySelectorAll('#otp > *[id]');
//     for (let i = 0; i < inputs.length; i++) { inputs[i].addEventListener('keydown', function(event) { if (event.key==="Backspace" ) { inputs[i].value='' ; if (i !==0) inputs[i - 1].focus(); } else { if (i===inputs.length - 1 && inputs[i].value !=='' ) { return true; } else if (event.keyCode> 47 && event.keyCode < 58) { inputs[i].value=event.key; if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } else if (event.keyCode> 64 && event.keyCode < 91) { inputs[i].value=String.fromCharCode(event.keyCode); if (i !==inputs.length - 1) inputs[i + 1].focus(); event.preventDefault(); } } }); } } OTPInput();
    
        
    // };


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

      <div className="d-grid gap-2 col-6 mx-auto ">
      <img src="images/img_31568121.png" className="img-thumbnail img-fluid border-0" alt="31568121"/>
        
      


             <div className="card  text-center border-0"> 
             <h3>Enter verification code <br/> </h3>
              <div> <span>A-6 Digit confirmation code has been sent to </span> <small>"robinsharma1911@gmail.com"</small> </div> 
              <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2 text-decoration-none ms-3"> 
              <input className="m-2 text-center form-control rounded " style={{background:"#E9E9EB"}} type="text" id="first" maxlength="1" /> 
              <input className="m-2 text-center form-control rounded" style={{background:"#E9E9EB"}} type="text" id="second" maxlength="1" /> 
              <input className="m-2 text-center form-control rounded" style={{background:"#E9E9EB"}} type="text" id="third" maxlength="1" /> 
              <input className="m-2 text-center form-control rounded" style={{background:"#E9E9EB"}} type="text" id="fourth" maxlength="1" /> 
              <input className="m-2 text-center form-control rounded" style={{background:"#E9E9EB"}} type="text" id="fifth" maxlength="1" />
               <input className="m-2 text-center form-control rounded" style={{background:"#E9E9EB"}} type="text" id="sixth" maxlength="1" /> 
               </div>  </div>
                <div className="card-2"> <div className="content d-flex justify-content-center align-items-center"> <span> Didn't receive code? </span> <a href="#" className="text-decoration-none ms-3">Resend</a> </div> 
                </div> </div>

                
</div>

        </div>
        </div>
     
   



      </>
    );
  };
  
  export default OTPVERIFY;