import { useState } from "react";

export const useForm = (initalState) => {
  const [values, setValues] = useState(initalState);
  const [errors, setErrors] = useState("");

  const handleSubmit = () => {
    console.log(values);
  };
  //

  const validateUser = (name) => {
    if (!name) {
      // console.log("username is required");
      return "username is required";
    } else if (!/^[A-Z][a-z0-9_-]{3,15}$/.test(name)) {
      // console.log("username is invalid");
      return "username is invalid";
    } else {
      //console.log("username is correct");
      return "username is correct";
    }
  };


  const validateMobile = (number) => {
    if (!number) {
      return "number is required";
    }
    else if (!/^\d{10}$/.test(number)) {
      return "mobile number invalid"
    }
    else {
      return "mobile number is correct"
    }
  }

  const validateField = (name,value) => {
    switch (name) {
      case "username":
        return validateUser(value);
      case "mobile":
        return validateMobile(value);
    }
  }

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    const { name, value } = e.target;
    let error = validateField(name,value);

    setValues({ 
      ...values,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [name]: error,
    })
  };

  console.log(errors)

  return [values, handleSubmit, handleChange,errors];
};
