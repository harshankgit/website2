import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    number: "",
    password: "",
    message: "",
  });
  const EventChange = (event) => {
    const { value, name } = event.target;
    setdata((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const Submit = () => {
    alert(
      `your name is ${data.fullname}, your number is ${data.number},  your password is ${data.password} , and message is ${data.message}`
      
    );
    setdata("")
  };
  return (
    <React.Fragment>
      <h1>this is contact page</h1>
      <div className="container1">
        <form action="" onSubmit={Submit}>
          <div className="form">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="fullname"
              id=""
              //   value={data.fullname}
              onChange={EventChange}
            />
            <label htmlFor="name">Number:</label>
            <input type="number" name="number" id="" onChange={EventChange} />
            <label htmlFor="name">Password:</label>
            <input
              type="password"
              name="password"
              id=""
              onChange={EventChange}
            />
            <label htmlFor="name">Message:</label>
            <input type="text" name="message" id="" onChange={EventChange} />
            <button>submit</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default Contact;
