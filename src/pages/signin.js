
import React from "react";
import InputBox from "../components/inputbox";
import Button from "../components/Buttons/button";
import Carousel from "../components/carousel/carousel";
import { useState } from "react";
const SIGNIN = () => {
  // const [message, setMessage] = useState("");
  const [pass, setPass] = useState("password1");
  const [email, setEmail] = useState("");
  const [useros, setUseros] = useState("Android");
  const [userip, setUserip] = useState("1.0.0.1");
  const [sessiontoken, setSessiontoken] = useState("1");
  const [deviceid, setDeviceid] = useState("225");
  const [key, setKey] = useState("passwordverified");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://luneblaze.com/new/Luneblaze-API/api/app/login.json", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: pass,
          user_os: useros,
          user_ip: userip,
          session_token: sessiontoken,
          deviceid: deviceid,
          key: key,

          // mobileNumber: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setPass("");
        setEmail("");
        console.log(resJson);
        // setMessage("User created successfully");
      } else {
        // setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
   
  };

    return (
        <>
        
        
      <div className="container-fluid p-0 ">
      <div className="row ">
      <Carousel/>
    <div className="col">
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>

      <div className="d-grid gap-2 col-8 mx-auto">
      <h1> Welcome Back!</h1>
      <h7>signin to continue</h7>
      <br></br>
      <form onSubmit ={handleSubmit}>
        <label htmlFor="text1" className="form-label text-start">Email address</label>
        <InputBox placeholder="example@gmail.com" value={email}  onChange= {(e) => setEmail(e.target.value)}  />
        <label htmlFor="text1" className="form-label text-start">Passwrod</label>
        <InputBox  placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <br></br>
        <p className="mx-auto">Already have an account?<a href="/" className="link-info">Sigup</a> here </p> 
        
        <Button  />
        </form>
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

  // password: pass,
  // email: email,
  // user_os: "Android",
  // user_ip: "1.0.0.1",
  // session_token: '1',
  // deviceid: '225',
  // key: 'passwordverified',
  
  export default SIGNIN;