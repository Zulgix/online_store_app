import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../components/Login.css";
import commonClasses from "./UI/classes";
import MainButton from "./UI/MainButton";

const Login = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const classes = commonClasses();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formValues);
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <Grid item container xs={12} className={classes.login_container}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5">Login Form</Typography>
        <Grid item xs={12}>
          <Grid item>
            <Typography variant="h5">Username</Typography>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </Grid>
          <p>{formErrors.username}</p>
          <Grid item>
            <Typography variant="h5">Email</Typography>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </Grid>
          <p>{formErrors.username}</p>
          <Grid item>
            <Typography variant="h5">Password</Typography>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </Grid>
          <p>{formErrors.username}</p>
          <MainButton>Submit</MainButton>
        </Grid>
      </form>
    </Grid>
  );
};
export default Login;
