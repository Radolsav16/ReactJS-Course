import { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    football: "",
    basketball: "",
    fav_language:""
  });

  const onChangeHandler = (e) => {

  
    
    
    if (e.target.type !== "checkbox") {
      setFormData((oldData) => ({
        ...oldData,
        [e.target.name]: e.target.value,
      }));
    } else {
      setFormData((oldData) => ({
        ...oldData,
        [e.target.name]: e.target.checked,
      }));
    }
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <form>
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={onChangeHandler}
        />
        <label htmlFor="email"></label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={onChangeHandler}
        />

        <label htmlFor="football">Football</label>

        <input
          type="checkbox"
          name="football"
          id="football"
          onChange={onChangeHandler}
        />

        <label htmlFor="basketball">Basketball</label>

        <input
          type="checkbox"
          name="basketball"
          id="basketball"
          onChange={onChangeHandler}
        />

        <input type="radio" id="html" name="fav_language" value={'HTML'} onChange={onChangeHandler}/>
        <label htmlFor="html">HTML</label>
        <input type="radio" id="css" name="fav_language" value={'CSS'} onChange={onChangeHandler} />
        <label htmlFor="css">CSS</label>

        <input type="submit" placeholder="Submit" />
      </form>
    </>
  );
}
