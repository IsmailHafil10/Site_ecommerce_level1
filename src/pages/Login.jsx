import React, { useRef,useEffect } from "react";
import { authLogin } from "../store/features/User/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const submit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    dispatch(authLogin({ username, password }));

   
  };

  useEffect(()=>{

     if (token) {
      navigate("/shop");
    }
  },[token])
  return (
    <>
      <div className="row my-5">
        <div className="vol-md-6 mx.auto text-center">
          <h1>Login</h1>
          <em>Use the username and password </em>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-4 mx-auto bg-light p-4">
          <form onSubmit={submit}>
            <div className="form-group my-3">
              <label htmlFor="username">Username</label>
              <input
                ref={usernameRef}
                type="text"
                name=""
                id="username"
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="password">Password</label>
              <input
                ref={passwordRef}
                type="password"
                name=""
                id="password"
                className="form-control"
              />
            </div>
            <div className="d-grid my-2">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
