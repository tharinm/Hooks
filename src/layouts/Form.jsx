//import { useState } from "react";
import { useForm } from "../customeHook/useForm";

export default function Form() {
  const [{ username, nic, email, mobile, address }, handleValues,handleSubmit] = useForm({
    username:'tharindu',
    nic:'123325',
    email:'tharin@gmail.com',
    mobile:'5623425',
    address:'no,panadura,colombo',
  });

 // const [username, setUsername] = useState("");
  // const [nic, setNic] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [address, setAddress] = useState("");

  
  
  
  

  

  //console.log(username);
  // console.log(value);
  // console.log(handleValues)

  return (
    <div
      className="form"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "15px",
        marginTop: "20px",
        fontSize: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <label>Name</label>
        <input
          type="text"
          name="username"
          placeholder="name"
          onChange={handleValues}
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <label>Nic</label>
        <input
          name="nic"
          type="text"
          placeholder="Nic"
          onChange={ handleValues}
         
    
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={ handleValues}
          
          
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <label>Phone Number</label>
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          onChange={ handleValues}
         
         
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <label>Address</label>
        <input
          type="text"
          placeholder="Address"
          name="address"
          onChange={ handleValues}
   
   
        />
      </div>
      <div style={{ marginTop: "15px", padding: "10px" }}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
