import React from "react";


const InputBox = (props) => {
  // console.log('asdf');
  // console.log(this.props);
  // console.log("jkl");
    return (
        <>

 
    
    <input type="text" className="form-control " style={{background:"#E9E9EB"}} id="text1"  placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
   


      </>
    );
  };
  
  export default InputBox;