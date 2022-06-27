import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

import "./login.css";
import AppContext from "../../AppContext";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const Login = () => {

    const { loginActive, setLoginActive } = React.useContext(AppContext);
    
    const { register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
      defaultValues: {
        email: "test123@gmail.com",
        password: "12345"
      },
      mode: "onChange"
    })

  return (
    <div
      className={loginActive ? "login-w active" : "login-w"}
      onClick={() => setLoginActive(true)}
    >
      <Paper className="login-w__content">
        <Typography className="h1-form" variant="h5">
          Увійти в акаунт
        </Typography>
        <form 
        // onSubmit={handleSubmit(onSubmit)} 
        className="formAd login-form">
          <TextField
            className="field"
            label="E-Mail"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            fullWidth
            {...register("email", { required: "Вкажіть пошту" })}
          />
          <TextField
            className="field"
            label="Пароль"
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            fullWidth
            {...register("password", { required: "Вкажіть пароль" })}
          />
          <Button
            type="submit"
            className="submit-log"
            onClick={() => setLoginActive(false)}
            size="large"
            variant="contained"
            fullWidth
          >
            Увійти
          </Button>
        </form>
      </Paper>
    </div>
  );
};
export default Login;
