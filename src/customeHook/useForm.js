import { useState } from "react";

export const useForm = (initalState) => {
  const [values, setValues] = useState(initalState);

    const handleSubmit = () => {
         console.log(values);
    };

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    handleSubmit
  ];
};
