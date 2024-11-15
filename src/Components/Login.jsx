import React from "react";
import style from "./Styles/Login.module.css";
import loginImg from "../assets/Images/loignimage2.jpg";

const Login = () => {
  return (
    <div className={` container ${style.loginContainer}`}>
      <div className="row justify-content-center mt-4 text-uppercase">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-5">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4  mb-4  black">Welcome </h1>
                    </div>
                    <form
                      className={`user ${style.user}`}
                      method="POST"
                      action="http://18.130.60.173/login"
                      noValidate="novalidate"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="qBnqkAmZYV8ZebF0iqo4lPOTYGXz4pXDJYUcAgfV"
                        autoComplete="off"
                      />{" "}
                      <div className={`form-group ${style.formGroup}`}>
                        <label htmlFor="" className="text-black black">
                          Email
                        </label>
                        <input
                          required=""
                          type="email"
                          className="text form-control "
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          name="email"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className={`form-group ${style.formGroup}`}>
                        <label htmlFor="" className="text-black black">
                          password
                        </label>
                        <input
                          required=""
                          type="password"
                          className="text form-control "
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                        />
                      </div>
                      <div className={`form-group `}>
                        <div className="form-check">
                          <input
                            className={`form-check-input ${style.customCheckbox}`}
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            id={`${style.remeberLabel}`}
                            htmlFor="flexCheckDefault"

                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className={`btn btn-user btn-block ${style.indigoButton}`}
                        
                      >
                        Login
                      </button>
                      <hr />
                    </form>
                    {/* <!-- <div className="text-center">
                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                            </div> --> */}
                    <div className="text-center">
                      <a
                        className="small"
                        href="/register"
                        style={{ color: "#4E73DF" }}
                      >
                        Create an Account!
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small text-dark" href="/forgot-password">
                        Forgot Password
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`col-lg-6 d-none d-lg-block  px-10 mt-0 ${style.ImgBox}`}
                >
                  <h5
                    className="mt-3  text-center uppercase"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      fontStyle: "italic",
                    }}
                  >
                    Specialty MGA Management System{" "}
                  </h5>
                  <img
                    width="200px"
                    style={{ marginLeft: "140px" }}
                    className=" rounded-2 mt-0  img-thumbnail"
                    src="https://149448277.v2.pressablecdn.com/wp-content/uploads/2022/10/specialty-mga-uk.png"
                    alt=""
                  />
                  <img width="500" src={loginImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
