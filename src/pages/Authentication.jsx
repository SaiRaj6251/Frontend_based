import React, { useState } from "react";
import "../CSS/Authentication.css";
// import { useDispatch } from "react-redux";
// import {
//   LoginFunc,
//   SignUpFunc,
// } from "../../Redux/Func/Authentication/Authenticate";
// import axios from "axios";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import auth3 from "../assets/auth1.svg";
import auth2 from "../assets/auth2.svg";
import auth1 from "../assets/auth3.svg";
import Navbar from "./../components/Common/Navbar";
// import theme from "../../Theme/theme";
import logo from "../assets/logo.png";

const Authentication = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [showOptSec, setShowOptSec] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [getOTPInputs, setOTPInputs] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    panNumber: "",
  });

  const [loginformData, LoginSetFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnack(false);
    setShowErrorSnack(false);
  };

  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    LoginSetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    setShowSuccessSnack(true);
    setSnackMsg("Signup successful");
    setTimeout(() => {
      document.querySelector(".toggle").click();
    }, 2000);
  };

  const handleSignInSubmit = (e)=> {
    e.preventDefault()
    setShowSuccessSnack(true);
    setSnackMsg("Signin successful");
    setTimeout(() => {
      navigate("/load")
    }, 2000);
  }

  //   const dispatch = useDispatch();

  //   const handleSubmitSignup = async (e) => {
  //     e.preventDefault();
  //     setIsLoading(true);
  //     await axios
  //       .post("https://api.finurl.in/api/v1/auth/signup", formData)
  //       .then((res) => {
  //         document.querySelector("form").reset();
  //         console.log(res.data);
  //         if (res.data.message === "User created") {
  //           setIsLoading(false);
  //           setShowSuccessSnack(true);
  //           setSnackMsg("Signup successful");
  //           console.log(res.data.message);

  //           setTimeout(() => {
  //             document.querySelector(".toggle").click();
  //           }, 2000);
  //         } else {
  //           setIsLoading(false);
  //           setShowErrorSnack(true);
  //           setSnackMsg(res.data);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setShowErrorSnack(true);
  //         setSnackMsg("Sign up failed, please try again...");
  //       });
  //   };

  //   const handleSubmitSignIn = async (e) => {
  //     e.preventDefault();
  //     setIsLoading(true);
  //     try {
  //       await axios
  //         .post("https://api.finurl.in/api/v1/auth/login", loginformData)
  //         .then((res) => {
  //           if ((res.data.msg = "OTP sent to the user")) {
  //             setIsLoading(false);
  //             setShowOptSec(true);
  //             setShowSuccessSnack(true);
  //             setSnackMsg("OTP mailed successfully");
  //           } else {
  //             showErrorSnack(true);
  //             setIsLoading(false);
  //             setSnackMsg("Invalid Credentials, please try again...");
  //           }
  //         });
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //       setShowErrorSnack(true);
  //       setSnackMsg("Invalid Credentials, please try again...");
  //     }
  //   };

  // OTP func
  const handleOtp = (e) => {
    setOTPInputs(Number(e.target.value));
  };

  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  //   const verifyOtp = async () => {
  //     console.log(getOTPInputs);
  //     setIsLoading(true);
  //     try {
  //       await axios
  //         .post("https://api.finurl.in/api/v1/auth/verifyOtp", {
  //           email: loginformData.email,
  //           otp: getOTPInputs,
  //         })
  //         .then((res) => {
  //           console.log(res.data);
  //           setTimeout(() => {
  //             if ((res.data.msg = "User Logged In Successfully!")) {
  //               setIsLoading(false);
  //               setShowSuccessSnack(true);
  //               setSnackMsg("Login Successfull!");
  //               dispatch(
  //                 LoginFunc({ user: res.data.user, token: res.data.token })
  //               );
  //               setTimeout(() => {
  //                 navigate("/");
  //               }, 3000);
  //             } else {
  //               setIsLoading(false);
  //               setShowErrorSnack(true);
  //               setSnackMsg("Login Failed!");
  //             }
  //           }, 3000);
  //         });
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  return (
    <>
      {/* <Navbar /> */}
      <main className={!isSignUpMode ? "sign-up-mode" : ""}>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              {!isSignUpMode ? (
                <>
                  <form
                    action="index.html"
                    autoComplete="off"
                    className="sign-up-form"
                    // onSubmit={handleSubmitSignIn}
                  >
                    <div className="logo">
                      <img src={logo} alt="cybernexa" />
                      <Typography variant="h6">CYBER NEXA</Typography>
                    </div>

                    <div className="heading">
                      <Typography
                        // color={theme.palette.primary.main}
                        variant="h6"
                      >
                        Welcome
                      </Typography>
                      <Typography mb={5} fontSize={"small"} variant="body2">
                        Not registered yet?{" "}
                        <a
                          href="#"
                          className="toggle"
                          onClick={() => setIsSignUpMode(!isSignUpMode)}
                        >
                          Sign Up
                        </a>
                      </Typography>
                    </div>

                    <div className="actual-form">
                      <div className="input-wrap">
                        <input
                          placeholder="Email"
                          onChange={handleSigninChange}
                          type="email"
                          name="email"
                          className={`input-field ${
                            activeInput === 0 ? "active" : ""
                          }`}
                          autoComplete="off"
                          required
                        />
                        {/* <label>Name</label> */}
                      </div>

                      <div className="input-wrap">
                        <input
                          placeholder="Password"
                          onChange={handleSigninChange}
                          type="password"
                          name="password"
                          className={`input-field ${
                            activeInput === 1 ? "active" : ""
                          }`}
                          autoComplete="off"
                          required
                        />
                        {/* <label>Password</label> */}
                      </div>

                      {showOptSec ? (
                        <>
                          <div className="input-wrap">
                            <input
                              placeholder="OTP"
                              onChange={handleOtp}
                              type="number"
                              minLength="6"
                              name="otp"
                              className={`input-field ${
                                activeInput === 1 ? "active" : ""
                              }`}
                              autoComplete="off"
                              required
                            />
                            {/* <label>Password</label> */}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      {!showOptSec ? (
                        <>
                          <Box display={"flex"} gap={"30px"}>
                            <Button
                              type="button"
                              onClick={handleSignInSubmit}
                              className="sign-btn"
                              sx={{
                                backgroundColor: "#070087",
                                color: "white",
                                marginBottom: "10px",
                              }}
                            >
                              Sign In
                            </Button>
                            {isLoading ? <CircularProgress size={30} /> : ""}
                          </Box>
                        </>
                      ) : (
                        ""
                      )}

                      {showOptSec ? (
                        <>
                          <Box display={"flex"} gap={"30px"}>
                            <Button
                              onClick={verifyOtp}
                              sx={{
                                // background: theme.palette.primary.main,
                                color: "#fff",
                                marginBottom: "10px",
                                textTransform: "capitalize",
                              }}
                            >
                              Verify OTP
                            </Button>
                            {isLoading ? (
                              <CircularProgress
                                size={25}
                                sx={{
                                  width: "60%",
                                  margin: "auto",
                                }}
                              />
                            ) : (
                              ""
                            )}
                          </Box>
                        </>
                      ) : (
                        <></>
                      )}
                      {!showOptSec ? (
                        <p className="text">
                          Forgot your password or you login details?
                          <a href="#"> Get help</a> signing in
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <form
                    action="index.html"
                    autoComplete="off"
                    className="sign-in-form"
                    // onSubmit={handleSubmitSignup}
                  >
                    <div className="logo">
                      <img src={logo} alt="easyclass" />
                      <Typography variant="h6">CYBER NEXA</Typography>
                    </div>

                    <div className="heading">
                      <Typography variant="body2" fontSize={"small"}>
                        Get Started
                      </Typography>
                      <Typography mb={2} variant="body2" fontSize={"small"}>
                        Already have an account?{" "}
                        <a
                          onClick={() => setIsSignUpMode(!isSignUpMode)}
                          className="toggle"
                        >
                          Sign in
                        </a>
                      </Typography>
                    </div>

                    <div className="actual-form">
                      <div className="input-wrap">
                        <input
                          placeholder="Full Name"
                          onChange={handleChange}
                          type="text"
                          name="name"
                          minLength="4"
                          className="input-field"
                          autoComplete="off"
                          required
                        />
                        {/* <label>Name</label> */}
                      </div>

                      <div className="input-wrap">
                        <input
                          placeholder="Email"
                          onChange={handleChange}
                          type="email"
                          className="input-field"
                          autoComplete="off"
                          required
                          name="email"
                        />
                        {/* <label>Email</label> */}
                      </div>
                      {/* <div className="input-wrap">
                        <input
                          placeholder="PAN No"
                          onChange={handleChange}
                          type="text"
                          className="input-field"
                          autoComplete="off"
                          required
                          name="panNumber"
                        />
                        {/* <label>PAN No</label> */}
                      {/* </div> */}

                      <div className="input-wrap">
                        <input
                          placeholder="Password"
                          onChange={handleChange}
                          type="text"
                          name="phoneNumber"
                          minLength="10"
                          className="input-field"
                          autoComplete="off"
                          required
                        />
                        {/* <label>Mobile No</label> */}
                      </div>
                      {!showSuccessSnack && !showErrorSnack ? (
                        <>
                          <Box display={"flex"} gap={"30px"}>
                            <Button
                              onClick={handleSignupSubmit}
                              type="button"
                              value="Sign Up"
                              className="sign-btn"
                              sx={{
                                background: "#070087",
                                color: "white",
                                marginBottom: "10px",
                              }}
                            >
                              Sign Up
                            </Button>
                            {isLoading ? (
                              <CircularProgress
                                sx={{
                                  width: "60%",
                                  margin: "auto",
                                  marginTop: "10px",
                                }}
                              />
                            ) : (
                              ""
                            )}
                          </Box>
                        </>
                      ) : showSuccessSnack ? (
                        <Typography
                          variant="body1"
                          mb={3}
                          fontWeight={600}
                          color={"green"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          Signup Successful
                        </Typography>
                      ) : (
                        <Typography
                          variant="body1"
                          mb={3}
                          fontWeight={600}
                          color={"crimson"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          Signup Failed
                        </Typography>
                      )}

                      {/* {!showSigupError && ?(<>
                  <input type="submit" value="Sign Up" className="sign-btn" />
                   </>) : (
                     <Typography variant="body1">Signup Failed</Typography>
                   )} */}
                      <p className="text">
                        By signing up, I agree to the
                        <a href="#"> Terms of Services</a> and
                        <a href="#"> Privacy Policy</a>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
            <Snackbar
              open={showSuccessSnack || showErrorSnack}
              autoHideDuration={3100}
              onClose={() => handleClose()}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                onClose={() => handleClose()}
                severity={"info"}
                sx={{ width: "100%" }}
              >
                {snackMsg}
              </Alert>
            </Snackbar>

            <div
              //   style={{ background: theme.palette.primary.main }}
              className="carousel"
            >
              <div className="images-wrapper">
                <img
                  src={auth1}
                  className={`image img-1 ${activeSlide === 1 ? "show" : ""}`}
                  alt=""
                />
                <img
                  src={auth2}
                  className={`image img-2 ${activeSlide === 2 ? "show" : ""}`}
                  alt=""
                />
                <img
                  src={auth3}
                  className={`image img-3 ${activeSlide === 3 ? "show" : ""}`}
                  alt=""
                />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div style={{ color: "black" }} className="text-group">
                    {activeSlide === 1 && (
                      <>
                        <Typography color={"black"} variant="h6">
                          Manage your cyber profiles at ease
                        </Typography>
                      </>
                    )}
                    {activeSlide === 2 && (
                      <>
                        <Typography color={"#fff"} variant="h6">
                          Loans at best rates possible{" "}
                        </Typography>
                      </>
                    )}
                    {activeSlide === 3 && (
                      <>
                        <Typography color={"#fff"} variant="h6">
                          Track your progress in no time
                        </Typography>
                      </>
                    )}
                  </div>
                </div>

                <div className="bullets">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <span
                      key={index + 1}
                      className={activeSlide === index + 1 ? "active" : ""}
                      onClick={() => handleBulletClick(index + 1)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Authentication;
