//import { useState } from "react";
import { useForm } from "../customeHook/useForm";

export default function Form() {
  const [
    values,
    //handleValues,
    handleSubmit,
    handleChange,
    errors,
  ] = useForm({
    username: "tharindu",
    nic: "123325",
    email: "tharin@gmail.com",
    mobile: "5623425",
    address: "no,panadura,colombo",
  });

  console.log(errors);
  // const [username, setUsername] = useState("");
  // const [nic, setNic] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [address, setAddress] = useState("");

  //console.log(handleChange);
  //console.log(handleSubmit)

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
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <label>Name</label>
        <input
          type="text"
          name="username"
          placeholder="name"
          onChange={handleChange}
        />
        {errors.username?.length > 0 && <p>{errors.username}</p>}
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <label>Nic</label>
        <input
          name="nic"
          type="text"
          placeholder="Nic"
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <label>Phone Number</label>
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          onChange={handleChange}
        />
        {errors.mobile?.length > 0 && <p>{errors.mobile}</p>}
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <label>Address</label>
        <input
          type="text"
          placeholder="Address"
          name="address"
          onChange={handleChange}
        />
      </div>
      <div style={{ marginTop: "15px", padding: "10px" }}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
